import HistogramContainer from "../addons/HistogramContainer";
import "./rheostat.css";
import React from "react";
import Rheostat from "rheostat";
import Handle from "./Handle";
import Background from "./Background";
import ProgressBar from "./ProgressBar";

const WunderSlider = ({
  showHistogram,
  onChange,
  histogramRange,
  ...passProps
}) => {
  return (
    <div>
      {showHistogram && <HistogramContainer range={histogramRange} />}
      <Rheostat
        {...passProps}
        handle={Handle}
        background={Background}
        progressBar={ProgressBar}
        onValuesUpdated={onChange}
      />
    </div>
  );
};

export default WunderSlider;
