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
      />
    </div>
  );
};

WunderSlider.propTypes = propTypes;

export default WunderSlider;
