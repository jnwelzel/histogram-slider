import HistogramContainer from "../addons/HistogramContainer";
import "./rheostat.css";
import React from "react";
import Rheostat from "rheostat";
import Handle from "./Handle";
import Background from "./Background";
import ProgressBar from "./ProgressBar";

const WunderSlider = ({ showHistogram, onChange, ...passProps }) => {
  return (
    <div>
      {showHistogram && <HistogramContainer />}
      <Rheostat
        {...passProps}
        handle={Handle}
        background={Background}
        progressBar={ProgressBar}
        onChange={onChange}
      />
    </div>
  );
};

export default WunderSlider;
