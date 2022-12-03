import { useEffect, useRef } from "preact/hooks";
import * as React from "react";
import Title from "./Title";
import vegaEmbed from "vega-embed";
import { useTheme } from "@mui/material/styles";

export default function Chart() {
  const theme = useTheme();
  const parent = useRef(null);

  useEffect(() => {
    if (!parent.current) return;
    const { offsetWidth, offsetHeight } = parent.current as HTMLElement;

    vegaEmbed("#vis", {
      width: offsetWidth - 30,
      height: offsetHeight - 30,
      padding: 5,

      data: [
        {
          name: "table",
          values: [
            { category: "A", amount: 28 },
            { category: "B", amount: 55 },
            { category: "C", amount: 43 },
            { category: "D", amount: 91 },
            { category: "E", amount: 81 },
            { category: "F", amount: 53 },
            { category: "G", amount: 19 },
            { category: "H", amount: 87 },
          ],
        },
      ],

      signals: [
        {
          name: "tooltip",
          value: {},
          on: [
            { events: "rect:mouseover", update: "datum" },
            { events: "rect:mouseout", update: "{}" },
          ],
        },
      ],

      scales: [
        {
          name: "xscale",
          type: "band",
          domain: { data: "table", field: "category" },
          range: "width",
        },
        {
          name: "yscale",
          domain: { data: "table", field: "amount" },
          nice: true,
          range: "height",
        },
      ],

      axes: [
        { orient: "bottom", scale: "xscale" },
        { orient: "left", scale: "yscale" },
      ],

      marks: [
        {
          type: "rect",
          from: { data: "table" },
          encode: {
            enter: {
              x: { scale: "xscale", field: "category", offset: 1 },
              width: { scale: "xscale", band: 1, offset: -1 },
              y: { scale: "yscale", field: "amount" },
              y2: { scale: "yscale", value: 0 },
            },
            update: {
              fill: { value: theme.palette.primary.main },
            },
            hover: {
              fill: { value: "red" },
            },
          },
        },
        {
          type: "text",
          encode: {
            enter: {
              align: { value: "center" },
              baseline: { value: "bottom" },
              fill: { value: theme.palette.text.primary },
            },
            update: {
              x: { scale: "xscale", signal: "tooltip.category", band: 0.5 },
              y: { scale: "yscale", signal: "tooltip.amount", offset: -2 },
              text: { signal: "tooltip.amount" },
              fillOpacity: [
                { test: "datum === tooltip", value: 0 },
                { value: 1 },
              ],
            },
          },
        },
      ],
    });
  }, [parent, theme]);

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div
        id="vis"
        ref={parent}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </React.Fragment>
  );
}
