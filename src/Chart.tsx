import * as React from "react";
import Title from "./Title";
import vegaEmbed from "vega-embed";

export default function Chart() {
  React.useEffect(() => {
    vegaEmbed("#vis", {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Google's stock price over time.",
      width: "container",
      height: "container",
      data: {
        values: [
          { a: "A", b: 28 },
          { a: "B", b: 55 },
          { a: "C", b: 43 },
          { a: "D", b: 91 },
          { a: "E", b: 81 },
          { a: "F", b: 53 },
          { a: "G", b: 19 },
          { a: "H", b: 87 },
          { a: "I", b: 52 },
        ],
      },
      mark: "line",
      encoding: {
        x: { field: "a", type: "ordinal" },
        y: { field: "b", type: "quantitative" },
      },
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div id="vis" style={{ width: "100%", height: "100%" }}></div>
    </React.Fragment>
  );
}
