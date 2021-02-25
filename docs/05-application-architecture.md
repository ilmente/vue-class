---
marp: true
paginate: true
theme: default
---

# Application architecture

How state management and routing should combine and interact in a scalable application.

---

# Summary

- Layers
    - Data
    - Connection
    - Presentation
- Data flow

---

# Data layer

- first abstraction layer between raw data an application
- `clients` are used for CRUD operation *on* raw data *by* the application
- data types are defined (*or generated*) here, where *data access* is managed

---

# Connection layer

- abstraction layer that *connects* raw data (in our case) and UI
- *controls* how the data is exposed to presentation and how is *mutated*
- *controls* how, when and where presentation elements are visible

### In other words...
- store &rarr; data state
- router &rarr; navigation state

---

# Presentation layer

- sits in between the user and the application
- application interface &rarr; UI
    - made of elements and components
    - containers?
- it does not *mutate* the state; it only re*present* it, listen for interactions and react to them according to the *actions* defined by application

### In other words...
- it's *shaped by* store and router

---

# Data flow

- data flows in both directions
    - 🗄 data &rarr; ⚙️ connection &rarr; 🖼 presentation &rarr; 👩‍🦰 *user*
    - 👩‍🦰 *user* &rarr; 🖼 presentation &rarr; ⚙️ connection &rarr; 🗄 data
- **data never skip/jump a layer** 😡

---

## So...

- how do we retrieve the data?
- how do store and router coexist in the same application?

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

![bg left](/assets/docs/qea.jpg)

# Q&A

**Pro tip**: ask stuff...
