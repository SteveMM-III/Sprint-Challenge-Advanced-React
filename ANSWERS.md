- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components give you access to the component's lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount: runs after the component has been mounted, allowing to runs code that only needs to be run once after the DOM has been rendered.

componentDidUpdate: similar to componentDidMount but runs after every component update.

componentWillUnmount: allows cleanup and removal of code, such as event listeners, before the component is unmounted from the DOM

- [ ] What is the purpose of a custom hook?

Custom hooks allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook repeatedly

- [ ] Why is it important to test our apps?

Testing is important to catch bugs early and save time and development expenses