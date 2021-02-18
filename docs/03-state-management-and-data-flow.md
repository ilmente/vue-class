---
marp: true
paginate: true
theme: default
---

# State management & data flow

From local state management using data, to application state management using Vuex store.

---

# Summary

- Reactive data (again)
- State management
    - Local state
    - The store pattern
    - Vuex store
- Application data flow

---

# Reactive data

![bg fit right](/assets/docs/data.png)

- (reactivity) => [[docs]](https://vuejs.org/v2/guide/reactivity.html)
- (1-way data flow) => [[docs]](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)

---

# State management

- What is *state*?
- What is *state management*?
- What is *state management pattern*?

---

## State
> The behavior of the app at a given moment in time.
[Super declarive!](https://medium.com/super-declarative/understanding-state-management-and-why-you-never-will-dd84b624d0e)

## State management
> How to define, drive, check and debug that behaviour?
[Me]()

--- 

## State management pattern 

![bg fit right:30%](/assets/docs/simple-flow.png)

> It is a self-contained app with the following parts:
> - The **state**, the source of truth that drives our app
> - The **view**, a declarative mapping of the state
> - The **actions**, the possible ways the state could change in reaction to user inputs from the view
>
> [Vuex](https://vuex.vuejs.org/) 

---

# Local state

> It is often overlooked that the source of truth in Vue applications is the raw data object [... *For this reason, you may have a*] piece of state that [*is*] shared by multiple [*components*]. Now whenever [*the data*] is mutated, [*your components*] update their views automatically.
[Vue State Management docs](https://vuejs.org/v2/guide/state-management.html)

---

## However...

> [...] the simplicity quickly breaks down when [...]:
> - multiple views may depend on the same piece of state
> - actions from different views may need to mutate the same piece of state
>
> [Vuex](https://vuex.vuejs.org/) 

## And...

> [*Although we*] have a single source of truth now, [...] debugging would be a nightmare. Any piece of data could be changed by any part of our app at any time, without leaving a trace.
[Vue State Management docs](https://vuejs.org/v2/guide/state-management.html)

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# The store pattern

- (state management) => [[docs]](https://vuejs.org/v2/guide/state-management.htmlhttps://vuejs.org/v2/guide/state-management.html)
- (flux architecture) => [[docs]](https://facebook.github.io/flux/)
- (redux architecture) => [[docs]](https://redux.js.org/)

---

## So...

> [...] why don't we **extract the shared state out of the components, and manage it in a global singleton?** With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!
> By defining and **separating the concepts** involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.
[Vuex](https://vuex.vuejs.org/) 

---

## In a nutshell:

![bg right](/assets/docs/state.png)

- extract the shared state out of the components
- manage the state in a global singleton
- separation of concerns

---

- **store**
    - holds the application data
    - manages the application state
    - receives actions
- **state**
    - defined by data
    - represents the application behaviour at any specific moment in time
    - mutates by responding to an action
- **action**
    - *triggers* a *mutation* in the state
    - defines the application internal API

---

## Also...

> The most important concept is that data flows in one direction.
[Flux concepts docs](https://github.com/facebook/flux/tree/master/examples/flux-concepts)

#
> It’s important to note that you should never replace the original state object in your actions - the components and the store need to share reference to the same object in order for mutations to be observed.
[Vue State Management docs](https://vuejs.org/v2/guide/state-management.html)

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# Vuex store

- (vuex) => [[docs]](https://vuex.vuejs.org/) 

---

## Why?

- deeper connection with vue
    - ie. uses reactive data for the state
    - ie. has getters ("computed props" for the store)
- it scales better for mid to large SPA

#
> Flux libraries are like glasses: you’ll know when you need them.
**Dan Abramov** 

---

## Key concepts

![bg fit right:65%](/assets/docs/vuex.png)

- state
- *getters*
- *mutations*
- actions
- *modules*

---

## State

> Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth." [... *Usually you will*] have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.
[Vuex state docs](https://vuex.vuejs.org/guide/state.html)

#
- state is reactive, like Vue components `data`
    - be aware of reactivity when mutating the state ([read more here](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules))

---

## Getters

> You can think of them as computed properties for stores. Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.
[Vuex getters docs](https://vuex.vuejs.org/guide/getters.html)

---

## Mutations

> The only way to actually change state in a Vuex store is by committing a mutation.
[Vuex mutations docs](https://vuex.vuejs.org/guide/mutations.html)

#
- **use them to mutate the state** 
    - *"the only way to actually change state"* &uarr;
    - be aware of reactivity when mutating the state ([read more here](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules))
- you cannot directly call a mutation: you need to *commit it*
- mutations are only **synchronous**

---

## Actions

> Actions are similar to mutations, the differences being that:
> - instead of mutating the state, actions commit mutations
> - actions can contain arbitrary asynchronous operations
>
> [Vuex actions docs](https://vuex.vuejs.org/guide/actions.html)

#
- must be *dispatched*
- can me sync or async

---

## Modules 

> Due to using a single state tree, all state of our application is contained inside one big object. [...] To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules.
[Vuex modules docs](https://vuex.vuejs.org/guide/modules.html)

# 
- by default modules are registered under the global namespace
- if you want your modules to be more self-contained, you can mark them as namespaced

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# Application data flow

A brief introduction to layered applications

---

## Layers

- data access (aka *persistent*)
    - where your data is stored and managed
- business
    - where your data is restructured, manipulated, computed and/or aggregated
- connection
    - where your data is used to define the application state
- presentation
    - where UI is rendered depending on your data

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

![bg left](/assets/docs/qea.jpg)

# Q&A

**Pro tip**: ask stuff...
