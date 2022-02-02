export const META = Symbol()
export const RECORD = Symbol()
export const USEABLE = Symbol()

// secrets
const atom = Symbol()
export type IsAtom = { [atom]: true }
type $A = any

// globals
export type Atom<T> = {
  [atom]: true
  (): T
  (state: Exclude<T, Function>): void
  (fn: (state: T) => T): void
}
export type Init<T> = T | ((get: GetState) => T)
export type Listener<T> = (value: T, prevValue: T) => unknown | (() => unknown)
export type StateOf<T extends Atom<any>> = T extends Atom<infer P> ? P : never
export type OnCleanup = (fn: () => void) => void
export type GetState = {
  <T>(atom: Atom<T>): T
  <T, U>(atom: Atom<T>, selector: (state: T) => U): U
  <T, U extends keyof T>(atom: Atom<T>, selector: U): T[U]
}

export const createTarget = (get: Function, set: Function) => {
  return function (x?: unknown) {
    if (arguments.length === 0) return get()
    const nextValue = typeof x === 'function' ? x(get()) : x
    if (get() === nextValue) return
    set(nextValue)
  }
}

export const createNotifier = () => {
  const listeners = new Set<(value?: unknown) => void>()
  const notify = (value?: unknown) => listeners.forEach((listener) => listener(value))
  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  return { listeners, notify, subscribe }
}

export const createCleanup = () => {
  const fns = new Set<Function>()
  const onCleanup = (fn: Function) => void fns.add(fn)
  const cleanupAll = () => {
    fns.forEach((fn) => fn())
    fns.clear()
  }
  return { onCleanup, cleanupAll }
}

export const parseSelector = <T, U>(
  selector: keyof T | ((state: T) => U)
): { isPluck: boolean; fn: Function } => {
  const isPluck =
    typeof selector === 'string' || typeof selector === 'number' || typeof selector === 'symbol'
  const fn = isPluck ? (s: T) => s[selector] : (selector as (state: T) => U)
  return { isPluck, fn }
}

export function createReadable<T>(atom: Atom<T>): Atom<T>
export function createReadable<T, U>(atom: Atom<T>, selector?: keyof T | ((state: T) => U)): Atom<U>
export function createReadable<T, U>(
  atom: Atom<T>,
  selector?: keyof T | ((state: T) => U)
): Atom<U> | Atom<T> {
  if (!selector) return atom
  const { fn } = parseSelector(selector)
  const ans = () => fn(atom())
  ;(ans as $A)[META] = (atom as $A)[META]
  return ans as any
}

export const createGetState =
  (updateState: Listener<unknown>, onCleanup: OnCleanup): GetState =>
  // @ts-ignore
  <T, U>(atom: Atom<T>, selector: keyof T | ((state: T) => U)): any => {
    const readable = createReadable(atom, selector)
    onCleanup(subscribe(readable, updateState))
    return readable()
  }

export const createSelector = (atom: Atom<any>, init: Function) => {
  const { onCleanup, cleanupAll } = createCleanup()
  const updateState = () => {
    cleanupAll()
    const result = init(getter)
    atom(result)
  }
  const getter = createGetState(updateState, onCleanup)
  updateState()
}

export const createSubscribe =
  (effect: boolean) =>
  <T extends Atom<any>>(atom: T, fn: Listener<StateOf<T>>): (() => void) => {
    // cleanup + runCleanup
    let cleanup: unknown
    const runCleanup = () => {
      if (cleanup && typeof cleanup === 'function') cleanup()
      cleanup = undefined
    }
    // Listener
    let prevValue = atom()
    const listener = () => {
      const nextValue = atom()
      if (nextValue !== prevValue) {
        runCleanup()
        cleanup = fn(nextValue, prevValue)
        prevValue = nextValue
      }
    }
    // If it's an effect, also collect the cleanup value at the first run
    if (effect) cleanup = fn(prevValue, prevValue)
    // Actually subscribe internally
    const unsub = (atom as any)[META].notifier.subscribe(listener)
    // Return unsub
    return () => {
      runCleanup()
      unsub()
    }
  }

/**
 * Subscribes to an atom.
 * @see [xoid.dev/docs/api/subscribe](https://xoid.dev/docs/api/subscribe)
 */
export const subscribe = createSubscribe(false)

/**
 * Subscribes to an atom. Same to `subscribe`, except it runs the callback immediately.
 * @see [xoid.dev/docs/api/effect](https://xoid.dev/docs/api/effect)
 */
export const effect = createSubscribe(true)
