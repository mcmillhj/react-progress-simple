import React from "react";
import ReactDOM from "react-dom";

import Progress from "./progress";

ReactDOM.render(
  <>
    {[...new Array(10)].map((_, idx) => [
      <Progress key={idx} value={idx + 1} max={10} />,
      <div key={idx + "-spacer"} />,
    ])}
    {[...new Array(10)].map((_, idx) => [
      <Progress
        key={idx}
        value={idx + 1}
        max={10}
        segmented
        options={{
          foregroundColor: "royalblue",
          backgroundColor: "lightgray",
        }}
      />,
      <div key={idx + "-spacer"} />,
    ])}
  </>,
  document.getElementById("app")
);
