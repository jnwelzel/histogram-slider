import PropTypes from "prop-types";
import HistogramContainer from "../addons/HistogramContainer";
import "./rheostat.css";
import React from "react";
import Rheostat from "rheostat";
import Handle from "./Handle";
import Background from "./Background";
import ProgressBar from "./ProgressBar";

const propTypes = {
  showHistogram: PropTypes.bool,
  onChange: PropTypes.func,
  histogramRange: PropTypes.array,
  currentMinValue: PropTypes.number,
  currentMaxValue: PropTypes.number,
  maxCount: PropTypes.number,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  values: PropTypes.array.isRequired,
};

const WunderSlider = ({
  showHistogram,
  onChange,
  histogramRange,
  currentMinValue,
  currentMaxValue,
  maxCount,
  minValue,
  maxValue,
  values,
}) => {
  const sliderAlgorithm = {
    getPosition(value, min, max) {
      return ((value - min) / (max - min)) * 100;
    },
    getValue(pos, min, max) {
      const decimal = pos / 100;

      if (pos === 0) {
        return min;
      }

      if (pos === 100) {
        return max;
      }

      if (showHistogram) {
        const barWidth = 100 / histogramRange.length;
        const rangeIndex = Math.floor(pos / barWidth);
        const leftStart = rangeIndex * barWidth;
        const positionInBar = (pos - leftStart) / barWidth; // slider position inside current bar (0-100%)
        const lastIndex = histogramRange.length - 1;
        const priceDifference =
          rangeIndex < lastIndex
            ? histogramRange[rangeIndex + 1].price -
              histogramRange[rangeIndex].price
            : max - histogramRange[lastIndex - 1].price;

        console.log(">>>>>>>>>>>", positionInBar);
        return Math.round((max - min) * decimal + min);
      }

      return Math.round((max - min) * decimal + min);
    },
  };
  return (
    <div>
      {showHistogram && (
        <HistogramContainer
          range={histogramRange}
          currentMinValue={currentMinValue}
          currentMaxValue={currentMaxValue}
          maxCount={maxCount}
        />
      )}
      <Rheostat
        values={values}
        min={minValue}
        max={maxValue}
        handle={Handle}
        background={Background}
        progressBar={ProgressBar}
        onValuesUpdated={onChange}
        algorithm={sliderAlgorithm}
      />
    </div>
  );
};

WunderSlider.propTypes = propTypes;

export default WunderSlider;
