import React from "react";
import Rheostat from "rheostat";
import Handle from "./Handle";
import Background from "./Background";
import ProgressBar from "./ProgressBar";

const WunderSlider = ({ ...passProps }) => {
  return (
    <Rheostat
      {...passProps}
      handle={Handle}
      background={Background}
      progressBar={ProgressBar}
    />
  );
};

export default WunderSlider;
