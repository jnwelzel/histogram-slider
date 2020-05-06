import React from "react";

const Handle = ({ style, handleRef, ...passProps }) => {
  return (
    <div
      ref={handleRef}
      {...passProps}
      style={{
        ...style,
        backgroundColor: "#ffffff",
        border: "1.5px solid #B5BEC5",
        borderRadius: "100%",
        cursor: "ew-resize",
        marginLeft: -13,
        height: 24,
        width: 24,
        zIndex: 3,
        top: -10,
      }}
    />
  );
};

export default Handle;
