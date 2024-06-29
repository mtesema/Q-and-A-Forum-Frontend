import React from "react";
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#FAD815",
        }}
      >
        <PropagateLoader color="#FAD815" />
        <p style={{ marginTop: "20px", fontSize: "18px" }}>Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
