"use client";
import React from "react";

import "./side-toggle.css";

const SideToggle = () => {
  function sideBar() {
    document.querySelector(".sidebar")?.classList.toggle("close");
  }
  return (
    <>
      <div className="dark-switch" onClick={sideBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="var(--text-color)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5.5 12h13m-13 4h13m-13-8h13"
          />
        </svg>
      </div>
    </>
  );
};

export default SideToggle;
