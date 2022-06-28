function ExpensiveTree({referenceProps = {}}) {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  }

  // export default memo(ExpensiveTree, arePropsEqualDebug(ExpensiveTree.name))

  export default ExpensiveTree
