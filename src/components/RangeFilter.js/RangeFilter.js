import React, { useState } from "react";
import PropTypes from "prop-types";
import WunderSlider from "../WunderSlider/WunderSlider";

const propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  showHistogram: PropTypes.bool,
  histogramRange: PropTypes.array,
};

const RangeFilter = ({
  minValue,
  maxValue,
  maxCount,
  showHistogram,
  histogramRange,
}) => {
  const [minHandle, setMinHandle] = useState(minValue);
  const [maxHandle, setMaxHandle] = useState(maxValue);

  const onChangeSlider = (event) => {
    const { values } = event;
    setMinHandle(values[0]);
    setMaxHandle(values[1]);
  };

  return (
    <div>
      <WunderSlider
        maxCount={maxCount}
        minValue={minValue}
        maxValue={maxValue}
        values={[minHandle, maxHandle]}
        showHistogram={showHistogram}
        onChange={onChangeSlider}
        histogramRange={histogramRange}
        currentMinValue={minHandle}
        currentMaxValue={maxHandle}
      />
      <div style={{ marginTop: 30 }}>
        <input
          type="number"
          name="min"
          onChange={(e) => setMinHandle(Number(e.target.value))}
          value={minHandle}
        />
        -
        <input
          type="number"
          name="max"
          onChange={(e) => setMaxHandle(Number(e.target.value))}
          value={maxHandle}
        />
      </div>
    </div>
  );
};

RangeFilter.propTypes = propTypes;

export default RangeFilter;
