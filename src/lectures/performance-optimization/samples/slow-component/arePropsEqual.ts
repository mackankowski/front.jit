// source: https://gist.github.com/mackankowski/53843a02399f4dbac5b972624c24dc6b

/* eslint-disable no-console */

// goal: debug props changes (performance analysis)
// alternative for https://github.com/welldone-software/why-did-you-render
// usage: memo(someComponent, arePropsEqualDebug(someComponent.name)
// read more: https://reactjs.org/docs/react-api.html#reactmemo
// tip: use console.count() for getting a number of renders

export const arePropsEqual =
  (componentName: string) => (prev: any, next: any) => {
    let arePropsEqual = true;
    Object.keys(prev).forEach((key: any) => {
      if (prev[key] !== next[key]) {
        arePropsEqual = false
        console.group(`%c ${componentName}`, 'color: royalblue');
        console.group(
          `%c ${key} %c props aren't equal!`,
          'color: skyblue',
          'color: gold',
        );
        console.info(`previous:`, prev[key]);
        console.info(`next:`, next[key]);
        console.groupEnd();
        console.groupEnd();
      }
    });
    return arePropsEqual;
  };
