---
id: use
title: use
---

`import { use } from 'xoid'`

`use` function does one of two things: 
- Grab "usables" of an atom
- Use a subtree of an atom as a sub-atom

When used without the second argument, it grabs the "usables" of an atom. Usables are defined by the second argument of `create` function.

```js
import { create, use } from 'xoid'

const numberAtom = create(5, (atom) => ({
  increment: () => atom(s => s + 1),
  decrement: () => atom(s => s - 1)
}))

use(numberAtom).increment()
```

:::info Tip
For an enhanced debugging experience, `@xoid/devtools` package can be used.
:::

Using with a second argument means "selector" mode. This will select a subtree of the atom. The selected node will be a subscribable getter/setter object like any other atom. **xoid** is based on immutable updates, so if you "surgically" set state of a subtree atom, changes will propagate to the root.

```js
import { create, use } from 'xoid'

const atom = create({ deeply: { nested: { alpha: 5 } } })
const previousState = atom()

// select `.deeply.nested.alpha`
const alpha = use(atom, s => s.deeply.nested.alpha)
alpha(s => s + 1)

// root state is replaced with new immutable state
assert(atom() !== previousState) // ✅
assert(atom().deeply.nested.alpha === 6) // ✅
```

Second argument also can be a string, number, or a symbol for "plucking" values.

```js
const $alpha = use(atom, 'alpha')
// same as
const $alpha = use(atom, s => s.alpha)
```