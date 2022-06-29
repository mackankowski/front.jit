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