---
marp: true
paginate: true
theme: default
---

# Vue Presentation Layer, part 2: deep dive

Reprising some of the basic concepts introduced in lesson 1, we dive deeper in their advance usage, digging into the behavioural part of Vue and adding Typescript to the picture.

---

# Summary

- Classes & decorators
- A quick note on scoped styles
- Inheritance and composition

---

# Classes & decorators
- (`vue-class-component`) => [[docs here]](https://class-component.vuejs.org)
- (`vue-property-decorator`) => [[docs here]](https://github.com/kaorun343/vue-property-decorator)

---

# `@Decorators`

>  *...are functions called on classes, class elements, or other JavaScript syntax forms during definition.* 
[TC39 decorators proposal](https://github.com/tc39/proposal-decorators)

#
- still a proposal
- experimental in TS, **although widely adopted**
- used in vue with **class components + TS**
- transpiled into *ESx* code at build time

---

# `vue-class-component`
> Vue Class Component is a library that lets you make your Vue components in class-style syntax. [...] You can utilize some ECMAScript language features such as [...] decorators.
[class-component.vuejs.org](https://class-component.vuejs.org/)

#
It provides: 
- `createDecorator` function for custom decorators

---

# `vue-property-decorator`

- `vue-class-component` on steroids (it's build on top of it)
- add decorators for `@Prop`, `@Watch`, `@Emit` and more
- some advanced decorator needs time to be mastered (i.e. `@ModelSync`)

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# A quick note on scoped styles

- (BEM) => [[methodology]](https://en.bem.info/methodology/key-concepts/) + [[css implementation]](https://en.bem.info/methodology/css/)
- (Sass/SCSS) => [[docs here]](https://sass-lang.com)
- (`vue-loader` scoped styles) => [[docs here]](https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles)

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# `vue-class-component` *again*
> Vue Class Component is a library that lets you make your Vue components in class-style syntax. [...] You can utilize some ECMAScript language features such **as class inheritance** and decorators.
[class-component.vuejs.org](https://class-component.vuejs.org/)

#
It also provides:
- `mixins` helper for inheritance 

---

# Inheritance

- extend 😕
    - affect behaviour and might lead to chain of refactory
    - not really fully implemented in vue (`super` is missing)
- mixins 🤔
    - if abused, might hide the behaviour details and expose to side effects

#
⚠️ In both approaches, lifecycle hook methods are executed  on parent **and** children. No way to extend/overwrite them. *Be aware and use with caution*.

---

# Composition

- high order components 🙂
    - a good way to manipulate `props`, `attrs`, etc. 
    - vue makes their implementation a bit harder compared to react 
- composition 😎
    - does not solve all the problems, but enforces atomocity
    - api? [[docs]](https://v3.vuejs.org/guide/composition-api-introduction.html) + [[vue3 implementation]](https://v3.vuejs.org/api/composition-api.html)

---

# Any other way to reuse code?

- `import` helpers functions (logic encapsulation) 😉
    - use them directly in the components
    - expose them as methods
- use `@Provide` and `@Inject` to *explicitly* provide/access functionalities 🤓

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

![bg left](/assets/docs/qea.jpg)

# Q&A

**Pro tip**: ask stuff...
