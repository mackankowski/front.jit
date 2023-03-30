# Why is mutability such a pain in JavaScript?

## Intro

The origin presentation title was "Why is immutability such a pain..." but in fact, there's nothing wrong with immutability and the only its oposite is cause of developers' struggle. In today's speach I would like to aware before unexpected, errors-causing data mutation and to show the ways how to avoid it and make your code less error prone.

## Motivation

Life and work cames with problems, and what is our domain, as the engineers, we're come with solutions. During couple year of work, once per time, changing data by accident just happens in  and its debugging is always a some cost. In todays' presentation I would like to show some real-life examples of the pitfulls and the approches, how to live with this JS mechanism in the correct synergy.

### Real-life examples

- Reference vs value equality: https://codesandbox.io/s/js-reference-vs-value-equality-zb2rdt?file=/src/index.js 

- Object mutation: https://codesandbox.io/s/js-object-mutation-vcv37l?file=/src/index.js

- Object mutation (from function): https://codesandbox.io/s/js-object-mutation-from-function-k2uyen?file=/src/index.js 

- Date object mutation:
https://codesandbox.io/s/js-date-mutation-mhkflp?file=/src/index.js 

## Pros and cons of immutability

Performance impact: immutable data seems to be slower in fact (i.e. it do unnecessary data copy of all elements and not reusing them later), but the e.g. DOM rendering (caused by the state changes) or database quering is much worst in the comparision. We can see the real impact of data mutation in the "reactive" frameworks like React.js or Vue.js - which relay on state changes and automatic DOM rendering., so be Also, "Vanilla" JS it's not any exclusion here if we don't like to change inner state unexpectedly.

## How to handle the immutable data in JS?

- `Object.freeze()` (run-time)
- Typescript's `readonly` (compile-time only)
- `immer.js`, `immutable.js`
- React.js: `useDeepCompare`, `shouldComponentUpdate`

### Clone methods

There are two ways to clone an object in Javascript:

- **Shallow copy**: the only first level of the object is copied. Deeper levels are referenced.
- **Deep copy**: all levels of the object are copied.

Shallow copies are a lot faster than deep copies.

#### Shallow clone methods

- `Object.assign()` / spread operator (`...`)

#### Deep clone methods

The experienced developers should know what operation (on which data structures) cases manipulation and which don't, but also the "seniors" could meet some traps in the daily basis. There are couple solution to use immutabily data (using its values instead of references) and I would like to present them (with their props & cons):

- `JSON.strignify()`, `JSON.parse()`
- `window.structuredClone()`
- Lodash (`_.clonedeep`) / Ramda
