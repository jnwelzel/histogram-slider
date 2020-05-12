import React, { useState } from "react";
import WunderSlider from "../WunderSlider/WunderSlider";

const RangeFilter = ({ min, max, showHistogram, histogramRange }) => {
  const [minHandle, setMinHandle] = useState(min);
  const [maxHandle, setMaxHandle] = useState(max);

  const onChangeSlider = (event) => {
    const { values } = event;
    setMinHandle(values[0]);
    setMaxHandle(values[1]);
  };

  return (
    <div>
      <WunderSlider
        min={min}
        max={max}
        values={[minHandle, maxHandle]}
        showHistogram={showHistogram}
        onChange={onChangeSlider}
        histogramRange={histogramRange}
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

export default RangeFilter;
