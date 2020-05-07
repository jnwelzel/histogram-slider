import React, { useState } from "react";
import WunderSlider from "../WunderSlider/WunderSlider";

const RangeFilter = ({ min, max }) => {
  const [minHandle, setMinHandle] = useState(0);
  const [maxHandle, setMaxHandle] = useState(100);

  const onChangeSlider = (event) => {
    const { values } = event;
    setMinHandle(values[0]);
    setMaxHandle(values[1]);
  };

  return (
    <div>
      RangeFilter.js
      <WunderSlider
        min={min}
        max={max}
        values={[minHandle, maxHandle]}
        showHistogram
        onChange={onChangeSlider}
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
