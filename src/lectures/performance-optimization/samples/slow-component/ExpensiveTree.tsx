function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  }


  // TODO: component memoization
  // TODO: memoization with parameter (arePropsEqual function)

  export default ExpensiveTree