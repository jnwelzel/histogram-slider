import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  currentMinValue: PropTypes.number.isRequired,
  currentMaxValue: PropTypes.number.isRequired,
  range: PropTypes.array.isRequired,
  maxCount: PropTypes.number.isRequired,
  height: PropTypes.number,
};

const DEFAULT_HEIGHT = 64;

const HistogramContainer = ({
  currentMinValue,
  currentMaxValue,
  range,
  maxCount,
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
        const barHeight = (100 * item.count) / maxCount || 0;
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

HistogramContainer.propTypes = propTypes;

export default HistogramContainer;
