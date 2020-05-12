import React from "react";
import Histogram from "./Histogram";

const DEFAULT_HEIGHT = 64;

const HistogramContainer = ({
  currentValue,
  range = [],
  min,
  max,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    <div style={{ maxHeight: height, backgroundColor: "#ddd" }}>
      {range.map((i) => (
        <Histogram key={i.price} value={i.price} />
      ))}
    </div>
  );
};

export default HistogramContainer;
