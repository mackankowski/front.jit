import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./styles.css";
import { CSSProperties } from "react";

type RowProps = {
  index: number;
  style?: CSSProperties
}
const Row = ({ index, style }: RowProps) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const App = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1000}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default App
