import React from "react";

const ProgressBar = ({ style, handleRef, ...passProps }) => {
  return (
    <div
      ref={handleRef}
      {...passProps}
      style={{
        ...style,
        backgroundColor: "#732DD9",
        height: 2,
        position: "absolute",
        top: 0,
      }}
    />
  );
};

export default ProgressBar;
