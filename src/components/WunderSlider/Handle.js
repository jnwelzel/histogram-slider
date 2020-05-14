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
        cursor: "pointer",
        marginLeft: -13,
        height: 20,
        width: 20,
        zIndex: 3,
        top: -8,
      }}
    />
  );
};

export default Handle;
