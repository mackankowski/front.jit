function ExpensiveTree({props}: any) {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  }


  export default ExpensiveTree

  // TODO: component memoization
  // TODO: memoization with parameter (arePropsEqual function)

