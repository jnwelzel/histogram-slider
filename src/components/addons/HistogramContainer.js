import React from "react";

const DEFAULT_HEIGHT = 64;

const HistogramContainer = ({
  currentValue,
  range,
  min = 1,
  max = 42,
  height = DEFAULT_HEIGHT,
}) => {
  const width = 100 / range.length;

  return (
    <svg
      style={{
        maxHeight: height,
        backgroundColor: "#f4f3f3",
        width: "100%",
        display: "block",
      }}
    >
      {range.map((item, index) => {
        const barHeight = (100 * item.count) / max || 0;
        const yAxisOffset = (barHeight / 100) * height;

        return (
          <rect
            key={item.price}
            title={item.price}
            fill="#732DD9"
            width={`${width}%`}
            height={`${barHeight}%`}
            y={height - yAxisOffset}
            x={`${width * index}%`}
          />
        );
      })}
    </svg>
  );
};

export default HistogramContainer;
