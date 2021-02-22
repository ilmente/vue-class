---
marp: true
paginate: true
theme: default
---

# Routing

From hash state to Vue Router integration and usage.

---

# Summary

- Routing with hashes
- Routing with `vue-router`

---

# Routing

- what is *a router*?
- what is *routing*?

---

## Router
> A device (or software - module for us) able to forward information according to a specific location.
[Me]()

## Routing
> The process of recognition of a location and the subsequesnt capability of sending specific information to it.
[Again, me]()

---

# Routing with hashes

- hash is `#`
- final part of a *url* or *path*
- anything *after* the hash is ignored by the server
- hash can be used as *state*

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

# Routing with `vue-router`

- (`vue-router`) => [[docs]](https://router.vuejs.org/)

---

- **dynamic routes**
routed with dynamic parameters as part of the path
- **nested routes** 
subroutes, subcomponents
- **passing props to route components**
a way of decoupling the router from the components
- **transitions**
css magic
- **scroll behavior**
scrolling up the page with ease

--- 

- **lazy loading routes**
webpack as it's best
- **navigation guards**
basically hooks for the roting lifecycle
- **route meta fields**
custom data optionally added to the route
- **HTML5 hystory mode**
no `#` hash in the url anymore

---

## Navigation guards

> - global guards (on the instance)
>   - these are called each time the URL changes
>   - guards: `beforeEach`, `beforeResolve`, `afterEach`
> - route guards (on route definitions)
>   - these are only called when the associated ROUTE is matched
>   - guards: `beforeEnter`
> - route Component guards
>   - these are only called when a ROUTE COMPONENT is used/unused
>   - guards: `beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`
>
>[itnext.io](https://itnext.io/yes-this-is-how-vue-router-guards-work-when-to-use-them-ed7e34946211)

---

### Lifecycle [from `/` to `/contact`]
>- `beforeRouteLeave` — called on the `/` route component
>- `beforeEach` — called globally when a new navigation starts
>- `beforeEnter` — called when `/contact` route matches
>- `beforeRouteEnter` — called when `/contact` route component matches
>- `beforeResolve` — called globally when route component guards are done- 
>- `afterEach` — called globally when everything is resolved
>
>[itnext.io](https://itnext.io/yes-this-is-how-vue-router-guards-work-when-to-use-them-ed7e34946211)

--- 

### Lifecycle [from `/page/1` to `/page/2`]:
>- `beforeEach` — called globally when a new navigation starts
>- `beforeRouteUpdate` — called on the route component when it’s reused
>- `beforeResolve` — called globally when route component guards are done
>- `afterEach` — called globally when everything is resolved
>
>[itnext.io](https://itnext.io/yes-this-is-how-vue-router-guards-work-when-to-use-them-ed7e34946211)

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

![bg left](/assets/docs/qea.jpg)

# Q&A

**Pro tip**: ask stuff...
