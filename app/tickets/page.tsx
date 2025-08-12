"use client";
import React from "react";
import Link from "next/link";

import "./Tickets.css";
import Sidebar_R from "../components/Sidebar_R/sidebar_r";
import Sidebar_L from "../components/Sidebar_L/sidebar_L";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
const Tickets = () => {
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="ticket">
          <div className="title">
            <div className="right">
              <div className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  data-name="Layer 3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M18.5 18.564V20.5a.5.5 0 0 1-.854.354l-2.288-2.289M18 9.5h.504A2.496 2.496 0 0 1 21 11.996v4.072a2.496 2.496 0 0 1-2.496 2.496h0m-3.142 0h-2.866A2.496 2.496 0 0 1 10 16.068V15m-1.294-3-2.352 2.353a.5.5 0 0 1-.854-.354V12h-.004A2.496 2.496 0 0 1 3 9.504V5.496A2.496 2.496 0 0 1 5.496 3h7.008A2.496 2.496 0 0 1 15 5.496v4.008A2.496 2.496 0 0 1 12.504 12ZM7 6h3M7 9h1m7 6h2"
                  />
                  <path fill="none" d="M24 24H0V0h24Z" />
                </svg>
              </div>
              <div className="left">
                <span>تیکت ها </span>
                <span>لیست تیکت های ارسال شده را مشاهده میکنید </span>
              </div>
            </div>
            <div className="left">
              <button>ارسال تیکت جدید</button>
            </div>
          </div>
          <div className="ticket-list">
            <div className="bottom">
              <div className="top">
                <div className="right">
                  <h2>تیکت های من</h2>
                </div>
                <div className="search-field">
                  <input
                    type="search"
                    placeholder="عبارت مورد نظر خود را بنویسید .."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M0 0h24v24H0Z" />
                      <path
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15.714 6.838a6.276 6.276 0 1 1-8.876 8.876 6.276 6.276 0 0 1 8.876-8.876M19 19l-3.29-3.29"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="bottom">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>موضوع</th>
                      <th>واحد پشتیبانی</th>
                      <th>وضعیت</th>
                      <th>تاریخ ایجاد</th>
                      <th>آخرین بروزرسانی</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <span>دیتا موجود نیست</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Tickets;
