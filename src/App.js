import React from "react";
import "./styles.css";

export default function App() {
  const reactComp = React.createElement("div", {
    children: "created by React.createElement"
  });
  const childrenInline = React.createElement(
    "div",
    null,
    "with inline ",
    "elements"
  );
  const Mycomp = (props) => <div>{props.text}</div>;
  return (
    <div className="App">
      <h1>React creating component options</h1>
      {reactComp}
      {childrenInline}
      <Mycomp text="jsx as html tag"></Mycomp>
      {Mycomp({ text: "jsx as a props text" })}
    </div>
  );
}
