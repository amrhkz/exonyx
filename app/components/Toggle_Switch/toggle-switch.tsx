"use client";
import React from "react";

import "./toggle-switch.css";

const ToggleSwitch = () => {
  function toggleSwitch() {
    document.querySelector(".switch")?.classList.toggle("active");
    document.querySelector(".switch-span")?.classList.toggle("active");
  }
  return (
    <>
      <div className="switch" onClick={toggleSwitch}>
        <span className="switch-span"></span>
      </div>
    </>
  );
};

export default ToggleSwitch;
