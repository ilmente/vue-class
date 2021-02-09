---
marp: true
paginate: true
theme: default
---

# Vue Presentation Layer, part 1: introduction

Introducing Vue and its basic concepts, like one-way data binding, reactive data and templating engine.

---

# Summary

- Introduction
- Data binding
- Styling
- Templating

---

# Data binding

Given an input field binded to a variable...

### 2-way

- **every change** in the variable is reflected in the input
- **every change** in the input is reflected in the variable

### 1-way

- **every change** in the variable is reflected in the input
- **no change** in the input is reflected in the variable

---

## 2-way data binding

- tipical for desktop application
- implemented in Angular 1.x
- absorb the "burden of update"
    - *technical solution*
- if misused might lead to catastrophic results
    - messy data management
    - performance disruption

### ...but

- vue allows 2-way data binding (`v-model` directive), but only in specific contexts

--- 

![bg fit](/assets/docs/2-way.png)

---

## 1-way data binding

- commonly used in web applications
- implemented in React and Vue
- delegates the "burden of update" to the developer
    - *architectural solution*

### Vue...

- implements something called *reactive data*
    - objects or arrays
    - "leave a trace" when changing
    - you can "track" the change and **react to it by performing an action**

--- 

![bg fit](/assets/docs/1-way.png)

---

## 1-way data binding

- Vue implements something called *reactive data*
    - objects or arrays
    - "leave a trace" when changing
    - you can "track" the change and **react to it by performing an action**

--- 

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

### References

- [Reactive data](https://vuejs.org/v2/guide/reactivity.html)
- [One way data flow](https://vuejs.org/v2/guide/components-props.html)

---

# Woh, woh, woh... Hang on dude! 

What the...? What are these things?

---

# SFC (Single File Component) [[docs]](https://vuejs.org/v2/guide/single-file-components.html)

### `<template>`

- contains the "html-ish" code
- always needs 1 html element as single root

### `<style>`

- contains the styles

### `<script>`

- contains javascript (or typescript) behavioural implementation

---

# The `data` property [[docs]](https://vuejs.org/v2/guide/reactivity.html)

- use this function to return reactive variables

---

# The `computed` property [[docs]](https://vuejs.org/v2/guide/computed.html)

- good for display values (or manipulations of them)
- leverage a clever caching system
- avoid massive logic into computed variables

---

# The `method` property [[docs]](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods)

- good for actions, helpers and handlers
- do not have caching

---

# The `props` property [[docs]](https://vuejs.org/v2/guide/components-props.html)

- define initial props you can pass to the component from the outside
in the form of html5 attributes
- you can define type, defaylt value, required contraint and custom validation for each of them

---

![bg fit left](/assets/docs/lifecycle.png)

# Lifecycle methods

- [Vue lifecycle docs](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

---

# Directives 

- conditional rendering: `v-if=`, `v-show=`
- loops: `v-for=`
- data binding: `v-bind= / v-bind:attr= / :bind= / :attr=`, `v-model=` 
- events: `v-on:event= / @event=`

---

# Slots [[docs]](https://vuejs.org/v2/guide/components-slots.html)

- inject content in a component from outside out
- you can have as many slots as you want
    - default slot 
        - definition: `<slot>Default content</slot>`
        - use: `<template></template>`
    - custom slot 
        - definition: `<slot name="custom">Default content</slot>`
        - use: `<template #custom></template>`
- pass data to a slot (scoped)
    - definition: `<slot :bind="var">Default content</slot>`
    - use: `<template #default="{var}">{{var}}</template>`

---

# Q&A
