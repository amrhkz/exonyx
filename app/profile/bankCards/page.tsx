"use client";
import React from "react";
import Link from "next/link";

import "./bankCards.css";
import Sidebar_R from "@/app/components/Sidebar_R/sidebar_r";
import Navbar from "@/app/components/Navbar/navbar";
import Sidebar_L from "@/app/components/Sidebar_L/sidebar_L";
import Footer from "@/app/components/Footer/footer";

const BankCards = () => {
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="bank-card">
          <div className="title">
            <div className="right">
              <div className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 19H8a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM6 12h15"
                  />
                  <path
                    fill="none"
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 16H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1m-6 8H9"
                  />
                  <path fill="none" d="M0 0h24v24H0Z" />
                </svg>
              </div>
              <div className="left">
                <span>کارت های بانکی </span>
                <span>ثبت و مدیرت کارت های بانکی شما </span>
              </div>
            </div>
          </div>
          <div className="bank-error disable">
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 1 3 5v6c0 7.83 6.439 11.486 9 12 2.561-.514 9-4.17 9-12V5l-9-4zm1 17h-2v-2h2v2zm0-4h-2V6h2v8z"
                  style={{
                    stroke: "none",
                    strokeWidth: "1",
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: "0",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: "4",
                    fill: "#ec942c",
                    fillRule: "nonzero",
                    opacity: "1",
                  }}
                  transform="matrix(.91 0 0 .91 1.08 1.08)"
                />
              </svg>
            </div>
            <div className="left">
              <span>عدم دسترسی </span>
              <span>
                لطفاً جهت اضافه کردن کارت بانکی، ابتدا از
                <span>
                  <a href="">اینجا</a>
                </span>{" "}
                احراز هویت خود را تکمیل نمائید.
              </span>
            </div>
          </div>
          <div className="card-list">
            <a href="#" className="card-item add-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#9767e1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M17 21a5 5 0 1 1 .001-10.001A5 5 0 0 1 17 21M2 6.85h19" />
                  <path d="M21 13V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8m5-2v4m2-2h-4" />
                </g>
                <path fill="none" d="M0 0h24v24H0Z" />
              </svg>
              <p>افزودن کارت جدید</p>
              <p>کلیه کارت های عضو شتاب</p>
            </a>
            <div className="card-item">
              <div className="top">
                <div className="right">
                  <img src="/img/melat-bank-logo.svg" alt="" />
                  <span>بانک ملت</span>
                </div>
                <div className="left">تایید شده</div>
              </div>
              <div className="row">IR790120020000008501187481</div>
              <div className="row">6104337578333252</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BankCards;
