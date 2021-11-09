import React from "react";
import ReactDom from "react-dom";

function Counter(props: { count: number }) {
  return <button>click {props.count}</button>;
}

function App() {
  return (
    <div>
      hello world
      <Counter count={4} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
