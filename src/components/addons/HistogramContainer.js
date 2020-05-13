import React from "react";

const DEFAULT_HEIGHT = 64;

const HistogramContainer = ({
  currentMinValue,
  currentMaxValue,
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
        const barColor =
          item.price > currentMinValue && item.price < currentMaxValue
            ? "#732DD9"
            : "#b5bec5";

        return (
          <rect
            key={item.price}
            title={item.price}
            fill={barColor}
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
