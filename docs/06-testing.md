---
marp: true
paginate: true
theme: default
---

# Testing

Jest integration and usage.

---

# Summary

- Why?
- Levels
- *DD approaches
- Jest
- Cypress

---

# Why?

- save your life (and your poject), *especially when you're in a hurry*
- check the code to make sure it works
- help avoiding
    - code regressions
    - side effects
    - API breaks or unexpected *semver* changes 
- simplify (sometimes *drammatically*) QA job (and reduce its time)
- allow a *safer* CI

---

## Seriously...

...tests save your life (and your poject), *especially when you're in a hurry*.

**Don't skip/ignore them or underestimate their value.**

---

# * test

\* unit, integration, end-to-end, snapshot, functional, acceptance, smoke, sanity, white/black box, regression, performance, load, volume, stress, security, installation, penetration, migration, etc.

---

# Levels

- unit
- integration
- end-to-end

---

## Unit tests

Test individual units like functions or classes by supplying input and making sure the output is as expected.

> The purpose is to validate that each unit of the software performs as designed.
[Software Testing Fundamentals](https://softwaretestingfundamentals.com)

---

## Integration tests

Test processes across several units to achieve their goals, including their side effects.

>  The purpose of this level of testing is to expose faults in the interaction between integrated units.
[Software Testing Fundamentals](https://softwaretestingfundamentals.com)

---

## End-to-end tests

Test how scenarios function on the product itself, by controlling the browser or the website. These tests usually ignore the internal structure of the application entirety and look at them from the eyes of the user like on a black box.

>  The purpose of this test is to evaluate the system’s compliance with the business requirements and assess whether it is acceptable for delivery.
[Software Testing Fundamentals](https://softwaretestingfundamentals.com)

---

## What about functional tests?

> Testing **type** where the system is tested against the functional requirements/ specifications. This is in contrast to non-functional testing which focuses on other software attributes like usability, performance, security and compliance.
[Software Testing Fundamentals](https://softwaretestingfundamentals.com)

---

## What about snapshot tests?

> Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
[Jest](https://jestjs.io)

---

# *DD approaches

- TDD &rarr; Test Driven Development
    - first write the test, then develop "against" it
    - test defines the requirements
- BDD &rarr; Behaviour Driven Development
    - generated from acceptance criteria using tools like [cucumber.io](https://cucumber.io)

---

# Jest (*&amp; Cypress*)

### Jest [[docs]](https://jestjs.io)
- unit
- integration

### Cypress [[docs]](https://https://www.cypress.io)
- integration
- end-to-end

---

![bg left](/assets/docs/code.jpg)

# Code time

**Pro tip**: take notes here...

---

![bg left](/assets/docs/qea.jpg)

# Q&A

**Pro tip**: ask stuff...
