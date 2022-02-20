/*! For license information please see 14221fa8.4c676abb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(95),r(94)),c={id:"create",title:"create"},u={unversionedId:"api/create",id:"api/create",isDocsHomePage:!1,title:"create",description:"`",source:"@site/../docs/api/create.md",slug:"/api/create",permalink:"/docs/api/create",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/api/create.md",version:"current",lastUpdatedAt:1645354649,sidebar:"docs",previous:{title:"Quick Tutorial",permalink:"/docs/quick-tutorial"},next:{title:"subscribe",permalink:"/docs/api/subscribe"}},i=[{value:"Deriving state from other atoms",id:"deriving-state-from-other-atoms",children:[]},{value:"Deriving state from other sources (Advanced)",id:"deriving-state-from-other-sources-advanced",children:[]},{value:"Grabbing refs",id:"grabbing-refs",children:[{value:"Enhanced atoms (Advanced)",id:"enhanced-atoms-advanced",children:[]}]}],l={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"import { create } from 'xoid'")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create")," is used to create atoms. Atoms are standalone setter/getter objects that hold state. ",Object(a.b)("inlineCode",{parentName:"p"},"create")," function is used to create them."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { create } from 'xoid'\n\nconst atom = create(3)\natom() // 3 (get the value)\natom(5) // void (set the value to 5)\natom(state => state + 1) // void (also set the value)\natom() // 6\n")),Object(a.b)("p",null,"Atoms can have actions, and with ",Object(a.b)("inlineCode",{parentName:"p"},"use")," function they can be used."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { create, use } from 'xoid'\n\nconst numberAtom = create(5, (atom) => ({\n  increment: () => atom(s => s + 1),\n  decrement: () => atom(s => s - 1)\n}))\n\nuse(numberAtom).increment()\n")),Object(a.b)("h2",{id:"deriving-state-from-other-atoms"},"Deriving state from other atoms"),Object(a.b)("p",null,"By providing a function as the first argument, a derived atom can be created."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { alpha, beta } from './some-file'\n\nconst sum = create((get) => get(alpha) + get(beta));\n")),Object(a.b)("h2",{id:"deriving-state-from-other-sources-advanced"},"Deriving state from other sources (Advanced)"),Object(a.b)("p",null,"With an additional feature of ",Object(a.b)("inlineCode",{parentName:"p"},"get")," function above, you can derive the atom's state from non-atoms. This can be a Redux store, an RxJS observable, or anything that implements getState & subscribe pair. Here is an atom that derives its state from a redux store."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import store from './reduxStore'\n\nconst derivedAtom = create(\n  (get) => get(store.getState, store.subscribe)\n)\n")),Object(a.b)("h2",{id:"grabbing-refs"},"Grabbing refs"),Object(a.b)("p",null,"With no arguments used, ",Object(a.b)("inlineCode",{parentName:"p"},"create")," function can be used to grab refs."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const $ref = create<HTMLElement>() // Atom<HTMLElement | undefined>\n\n$ref(document.body)\n")),Object(a.b)("h3",{id:"enhanced-atoms-advanced"},"Enhanced atoms (Advanced)"),Object(a.b)("p",null,'An enhanced atom is an atom with different "setter" behavior. Optional third argument of ',Object(a.b)("inlineCode",{parentName:"p"},"create")," is called an ",Object(a.b)("em",{parentName:"p"},"enhancer"),". It's used for returning a function to be used instead of the default setter function. Most people using ",Object(a.b)("strong",{parentName:"p"},"xoid")," will not need to write enhancers. "),Object(a.b)("p",null,'Following is a simple "logger middleware" created with ',Object(a.b)("strong",{parentName:"p"},"xoid"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import store from './reduxStore'\n\nconst enhancedAtom = create(\n  5,\n  null,\n  (defaultSetter) => \n    (state) => {\n      console.log('state before:', atom())\n      defaultSetter(state)\n      console.log('state after:', atom())\n    }\n)\n")))}s.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(b,u(u({ref:t},l),{},{components:r})):o.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";e.exports=r(96)},96:function(e,t,r){"use strict";var n=r(97),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g,N=[];function $(e,t,r,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function R(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return r(n,e,""===t?"."+D(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+D(o=e[i],i);u+=R(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=R(o=o.value,l=t+D(o,i++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function T(e,t,r){return null==e?0:R(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(_,"$&/")+"/"),T(e,I,t=$(t,a,n,o)),A(t)}var q={current:null};function L(){var e=q.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,M,t=$(null,null,t,r)),A(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=l,t.PureComponent=w,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},97:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(i[s]=r[s]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}}}]);