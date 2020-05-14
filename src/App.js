import React, { useState } from "react";
import RangeFilter from "./components/RangeFilter.js/RangeFilter";
import "./App.css";

const HISTOGRAM_DATA = {
  priceHistogram: [
    { price: 888, count: 2 },
    { price: 898, count: 3 },
    { price: 908, count: 4 },
    { price: 918, count: 2 },
    { price: 932, count: 8 },
    { price: 964, count: 4 },
    { price: 988, count: 5 },
    { price: 998, count: 15 },
    { price: 1098, count: 35 },
    { price: 1198, count: 25 },
    { price: 1200, count: 42 },
    { price: 1300, count: 22 },
    { price: 1350, count: 18 },
    { price: 1420, count: 15 },
    { price: 1480, count: 11 },
    { price: 1530, count: 12 },
    { price: 1690, count: 19 },
    { price: 1710, count: 11 },
    { price: 2210, count: 9 },
    { price: 2499, count: 6 },
    { price: 2888, count: 1 },
  ],
  priceMin: 888,
  priceMax: 2888,
  countMax: 42,
};

const App = () => {
  const [showHistogram, setShowHistogram] = useState(true);

  const toggleShowHistogram = () => {
    setShowHistogram(!showHistogram);
  };

  return (
    <div className="App">
      <h1>Rheostat</h1>
      <p style={{ marginBottom: 30 }}>
        <a
          href="https://github.com/airbnb/rheostat"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </p>
      <RangeFilter
        minValue={HISTOGRAM_DATA.priceMin}
        maxValue={HISTOGRAM_DATA.priceMax}
        maxCount={HISTOGRAM_DATA.countMax}
        values={[HISTOGRAM_DATA.priceMin, HISTOGRAM_DATA.priceMax]}
        showHistogram={showHistogram}
        histogramRange={HISTOGRAM_DATA.priceHistogram}
      />
      <div style={{ borderTop: "1px solid #ddd", marginTop: "30px" }}>
        <p>
          <input
            onChange={toggleShowHistogram}
            checked={showHistogram}
            id="showHistogram"
            name="showHistogram"
            type="checkbox"
          />
          <label htmlFor="showHistogram">Show histogram</label>
        </p>
      </div>
    </div>
  );
};

export default App;
