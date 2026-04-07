First letter of a component-name must be capital.
Diffing algo. and Reconcilation
Only one component(function) is allowed a default export
wrap named export components in { }, ofc import that component in { } too

Lifecycle methods:
- class components use life cycle method to perform multiple tasks.
- life cycle method has no such unnecessary boilerplate code as the application is getting complex and hard
  to manage.
    *Lifecycle methods: Mounting, Updating, Unmounting*
-  so that's why we shifted to functional components 

normal variable behaves like const in jsx
we cannot re-render normal variable in jsx
inside onclick or any event, just write the fuction name, no need of () for function call

props-passing problem: parent to child 2 must be done via parent to child 1 to child 2 in order. This is props-drilling.

## Hooks
- Hooks are functions (pre-defined).
- Hooks allow us to use state and other features without writing a class.
- Two rules to use Hooks:
  - Only call Hooks at the top level:
  <p> Do not call a hook inside loops, conditionals or related functions. Only use at top level of React component before return.
  - only call functions from react functions, not js normal functions. You can call hooks from react functional component.

- We cannot re-render or update values declared in normal js variables.