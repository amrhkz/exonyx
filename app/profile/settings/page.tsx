"use client";
import React from "react";
import Link from "next/link";

import "./settings.css";
import Sidebar_R from "@/app/components/Sidebar_R/sidebar_r";
import Navbar from "@/app/components/Navbar/navbar";
import Sidebar_L from "@/app/components/Sidebar_L/sidebar_L";
import Footer from "@/app/components/Footer/footer";
import DarkMode from "@/app/components/Dark_Mode/dark-mode";
import ToggleSwitch from "@/app/components/Toggle_Switch/toggle-switch";

const Settings = () => {
  function passwordMenu() {
    document.querySelector(".password-menu")?.classList.add("active");
    document.querySelector(".password")?.classList.add("active");
    document.querySelector(".twofa-menu")?.classList.remove("active");
    document.querySelector(".twofa")?.classList.remove("active");
    document.querySelector(".settings-menu")?.classList.remove("active");
    document.querySelector(".settings")?.classList.remove("active");
  }
  function twoFaMenu() {
    document.querySelector(".twofa-menu")?.classList.add("active");
    document.querySelector(".twofa")?.classList.add("active");
    document.querySelector(".settings-menu")?.classList.remove("active");
    document.querySelector(".settings")?.classList.remove("active");
    document.querySelector(".password-menu")?.classList.remove("active");
    document.querySelector(".password")?.classList.remove("active");
  }
  function settingsMenu() {
    document.querySelector(".settings-menu")?.classList.add("active");
    document.querySelector(".settings")?.classList.add("active");
    document.querySelector(".password-menu")?.classList.remove("active");
    document.querySelector(".password")?.classList.remove("active");
    document.querySelector(".twofa-menu")?.classList.remove("active");
    document.querySelector(".twofa")?.classList.remove("active");
  }
  function googleMenu() {
    document.querySelector(".google-btn")?.classList.add("active");
    document.querySelector(".google-menu")?.classList.add("active");
    document.querySelector(".sms-btn")?.classList.remove("active");
    document.querySelector(".sms-menu")?.classList.remove("active");
  }
  function smsMenu() {
    document.querySelector(".sms-btn")?.classList.add("active");
    document.querySelector(".sms-menu")?.classList.add("active");
    document.querySelector(".google-btn")?.classList.remove("active");
    document.querySelector(".google-menu")?.classList.remove("active");
  }
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="add-new-card">
          <div className="title">
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M0 0h24v24H0Z" />
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m10 16 4-4-4-4"
                  />
                </g>
              </svg>
            </div>
            <div className="left">
              <span>تنظیمات حساب کاربری </span>
              <span>ویرایش و تنظیمات حساب کاربری </span>
            </div>
          </div>
          <div className="setting-nav">
            <div className="top">
              <div className="password st-nav active" onClick={passwordMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M17 21H7h0a2 2 0 0 1-2-2s0 0 0 0v-7h0a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7h0a2 2 0 0 1-2 2s0 0 0 0ZM8 10V7v0h0a4 4 0 0 1 4-4v0h0a4 4 0 0 1 4 4v3" />
                    <path d="M10.316 15.431h0a.069.069 0 1 0 .069.069h0a.069.069 0 0 0-.069-.069s0 0 0 0m3.299.069v0a.069.069 0 1 0 .069-.069h0a.069.069 0 0 0-.069.069s0 0 0 0" />
                  </g>
                  <path fill="none" d="M0 0h24v24H0Z" />
                </svg>
                <span>رمز عبور</span>
              </div>
              <div className="twofa st-nav" onClick={twoFaMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0Z" />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M6 6h4v4H6Zm0 8h4v4H6Zm12-4h-4V6h4Zm-1.965 5.965a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m-2-2a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m0 4a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m4 0a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07M21.5 7.978V4.5a2 2 0 0 0-2-2h-3.478m-8.044 0H4.5a2 2 0 0 0-2 2v3.478m0 8.044V19.5a2 2 0 0 0 2 2h3.478m8.044 0H19.5a2 2 0 0 0 2-2v-3.478m-3.465-2.057a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07"
                    />
                  </g>
                </svg>
                <span>ورود دو مرحله ای</span>
              </div>
              <div className="settings st-nav" onClick={settingsMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M6 18.584a8.62 8.62 0 0 1 6.023-2.463c2.308 0 4.408.919 5.977 2.416A8.62 8.62 0 0 1 11.977 21C9.669 21 7.569 20.081 6 18.584Zm-2.025-2.559A8.93 8.93 0 0 1 3 12c0-4.974 4.026-9 9-9s9 4.026 9 9c0 1.45-.363 2.81-.977 4.023" />
                    <path d="M14.121 7.879A3 3 0 1 1 9.88 12.12a3 3 0 0 1 4.24-4.24" />
                  </g>
                  <path fill="none" d="M0 0h24v24H0Z" />
                </svg>
                <span>تنظیمات</span>
              </div>
            </div>
            <hr />
          </div>

          <div className="content">
            <div className="password-menu active">
              <div className="right">
                <h2>تغییر رمز عبور</h2>
                <div className="row-1">
                  <label htmlFor="">رمز عبور فعلی </label>
                  <input type="text" />
                </div>
                <div className="row-2">
                  <div className="row-item">
                    <label htmlFor="">رمز عبور جدید </label>
                    <input type="text" />
                  </div>
                  <div className="row-item">
                    <label htmlFor="">تکرار رمز عبور جدید </label>
                    <input type="text" />
                  </div>
                </div>
                <hr />
                <button>ثبت تغییرات</button>
              </div>
              <div className="left">
                <div className="row">
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
                  <p>
                    در صورت لزوم میتوانید از طریق این صفحه کلمه عبور خود را
                    تغییر دهید.
                  </p>
                </div>
                <div className="row">
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
                        fill: "#9767e1",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                    />
                  </svg>
                  <p>
                    سعی کنید کلمه عبور پیچیده ای انتخاب کنید و با سایر حساب های
                    شما در سایت های دیگر یکسان نباشد.
                  </p>
                </div>
                <div className="row">
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
                        fill: "#b5b5b5",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                    />
                  </svg>
                  <p>
                    به منظور افزایش سطح ایمنی حساب کاربری خود می توانید احراز
                    هویت دو مرحله ای را نیز فعال کنید.
                  </p>
                </div>
              </div>
            </div>
            <div className="twofa-menu">
              <div className="right">
                <p>روش ورود دو مرحله ای خود را انتخاب کنید؛</p>
                <div className="two-step-nav">
                  <div className="right google-btn active" onClick={googleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18">
                      <g fill="none">
                        <use href="#a"></use>
                        <use href="#a"></use>
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15.2 8.16A5 5 0 1 0 17 12h-4.375"
                        ></path>
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M7.5 3h9.004A4.496 4.496 0 0 1 21 7.496v9.009A4.496 4.496 0 0 1 16.504 21H7.496A4.496 4.496 0 0 1 3 16.504V7.5A4.5 4.5 0 0 1 7.5 3Z"
                        ></path>
                      </g>
                    </svg>
                    <span>گوگل</span>
                  </div>
                  <div className="left sms-btn" onClick={smsMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10.54 3.5h3.496A6.964 6.964 0 0 1 21 10.464v.072a6.964 6.964 0 0 1-6.964 6.964h-1.023a.013.013 0 0 0-.013.013v2.262a.724.724 0 0 1-1.073.634l-5.02-2.76A7.54 7.54 0 0 1 3 11.04v0a7.54 7.54 0 0 1 7.54-7.54ZM9 9.5h6m-6 3h2.4"
                      />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                    <span>پیامک</span>
                  </div>
                </div>
                <form className="google-menu active">
                  <p>جهت فعال سازی این قابلیت، مراحل زیر را دنبال کنید:</p>
                  <p>
                    1. آخرین نسخه Google Authenticator را از گوگل پلی یا اپل
                    استور دریافت نمایید.
                  </p>
                  <p>
                    2. پس از نصب و اجرای برنامه Google Authenticator از طریق یکی
                    از روش های زیر، کلید را به برنامه اضافه نمایید. - Scan a
                    barcode (اسکن بارکد): این گزینه را انتخاب کرده و بارکد زیر
                    را اسکن نمایید.
                  </p>
                  <div>
                    <div className="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                      >
                        <path fill="#fefefe" d="M0 0h200v200H0z" />
                        <path
                          fill-rule="evenodd"
                          d="M48.984 16.328v4.082h8.164v-4.082Zm12.246 0v8.164h-8.164v12.246h4.082v8.164h4.082v4.082h4.082v4.082h-8.164v-4.082h-4.082V40.82h-4.082v8.164h4.082v8.164h-4.082v-4.082h-4.082v-4.082H40.82v4.082h4.082v4.082H20.41v4.082h4.082v8.164h4.082v-4.082h4.082v8.164h-8.164v4.082h8.164v-4.082h4.082v4.082h8.164v-4.082h4.082v4.082h4.082v-4.082h-4.082v-4.082h4.082v-4.082h4.082V61.23h-4.082v-4.082h8.164v8.164h4.082v4.082h4.082v4.082H61.23v-4.082h-4.082v4.082h4.082v4.082h-4.082v4.082h8.164v-4.082h4.082v4.082h4.082v4.082h-4.082v4.082h8.164v4.082h-4.082v4.082h-4.082v-4.082H61.23v-4.082h4.082v-4.082H61.23v4.082h-4.082v-4.082h-4.082v4.082H40.82v-4.082h4.082V81.64H40.82v4.082h-4.082V81.64H20.41v-4.082h-4.082v16.328h4.082v4.082h-4.082v8.164h8.164v-8.164h4.082v-4.082h8.164v4.082h-4.082v8.164h-4.082v4.082h-4.082v4.082H20.41v8.164h-4.082v4.082h4.082v-4.082h4.082v4.082h8.164v8.164h-8.164v4.082H20.41v-8.164h-4.082v20.41h16.328v-8.164h4.082v8.164h12.246v4.082h4.082v4.082h4.082v-8.164h8.164v-8.164h4.082v4.082h4.082v-4.082h-4.082v-4.082h-4.082v-4.082h4.082v-4.082h-4.082v-4.082H48.984v4.082H40.82v-4.082h4.082v-4.082h4.082v-4.082h4.082v4.082h4.082v-4.082h-4.082v-8.164h4.082v4.082h4.082v8.164h8.164v4.082h4.082v-8.164h4.082v4.082h4.082v4.082h4.082v-4.082H81.64v-8.164h4.082v-4.082h4.082v-4.082h4.082v-4.082h4.082v4.082h4.082v-4.082h4.082v8.164h16.328v4.082h-4.082v8.164h4.082v8.164h4.082v4.082h-4.082v8.164h4.082v8.164h-4.082v-4.082h-8.164v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-4.082h-4.082v4.082h-4.082v-8.164h4.082v-4.082h-8.164v12.246h4.082v4.082h-4.082v4.082h4.082v4.082h-8.164v4.082h-4.082v4.082h-4.082v4.082h4.082v4.082h4.082v4.082h4.082v4.082h4.082v4.082h4.082v-4.082h4.082v4.082h4.082v-8.164h4.082v-4.082h8.164v8.164h-8.164v4.082h12.246v-8.164h4.082v4.082h4.082v4.082h4.082v-4.082h-4.082v-4.082h4.082v-4.082h-8.164v-4.082h16.328v4.082h8.164v4.082h-12.246v4.082h4.082v4.082h8.164v-4.082h4.082v4.082h12.246v-4.082h4.082v-4.082h4.082v-4.082h-4.082v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-4.082h-4.082v-8.164h12.246v-4.082h-4.082v-4.082h4.082v-12.246h-4.082v12.246h-4.082v-4.082h-4.082v-4.082h-4.082v4.082h-4.082v-4.082h-4.082v-4.082h16.328v-4.082h4.082v-8.164h-4.082v-12.246h8.164V93.886h-4.082v8.164h-8.164v-4.082h4.082v-4.082H163.28v4.082h-4.082v-8.164h4.082V81.64h4.082v8.164h4.082v-4.082h4.082v4.082h4.082v-4.082h-4.082V81.64h-8.164v-4.082h-8.164v-4.082h4.082v-4.082h-4.082v-4.082h8.164v4.082h4.082v8.164h4.082v-4.082h8.164v-8.164h-4.082v4.082h-4.082v-4.082h-4.082v-8.164h4.082v-4.082h-8.164v8.164h-4.082v-8.164h-4.082v-4.082h-4.082v4.082h-4.082v-4.082h-4.082v-4.082h4.082V40.82h-4.082v-4.082h4.082V24.492h-4.082v12.246h-4.082v4.082h-4.082v4.082h-4.082V40.82h-4.082v-4.082h8.164v-4.082h4.082v-8.164h-4.082v8.164H122.46v-4.082h4.082V20.41h-4.082v-4.082h-8.164v8.164h-4.082v4.082h-4.082V16.328H89.804v4.082h-4.082v8.164h20.41v4.082h-8.164v12.246h-4.082V40.82h-4.082v-4.082h4.082v-4.082h-8.164v8.164H81.64v4.082h4.082v8.164H81.64v-4.082h-4.082V40.82h-4.082v-4.082h8.164v-4.082h-8.164v4.082h-4.082v-8.164h-4.082v8.164h4.082v4.082h-4.082v4.082H61.23v-8.164h-4.082v-8.164h4.082v-4.082h8.164v-8.164Zm73.476 0v4.082h-4.082v8.164h4.082V20.41h16.328v-4.082ZM77.558 20.41v8.164h4.082V20.41Zm12.246 0v4.082h8.164V20.41Zm28.574 0v4.082h-4.082v4.082h-4.082v4.082h-4.082v8.164h-4.082v8.164h-4.082v8.164h-4.082v-4.082h-8.164v4.082H81.64v-4.082h-4.082v4.082h4.082v4.082h-4.082v4.082h8.164v-8.164h8.164v4.082h-4.082v4.082h8.164v-8.164h8.164v4.082h-4.082v4.082h4.082V61.23h4.082v4.082h4.082v4.082H97.968v4.082h-4.082v-4.082h-8.164v8.164H81.64v-8.164h-8.164v4.082h-4.082v4.082h4.082v-4.082h4.082v4.082h4.082v4.082h-4.082v8.164h4.082v4.082h-4.082v4.082h4.082v4.082h-4.082v4.082h-4.082v-4.082h-4.082v-4.082H61.23v-4.082h-4.082v-4.082h-4.082v4.082h-4.082v4.082H61.23v8.164h-4.082v4.082h4.082v-4.082h4.082v4.082h4.082v8.164h4.082v-8.164h4.082v4.082h4.082v-4.082h-4.082v-4.082h4.082v-4.082h4.082v4.082h4.082v-4.082h4.082v-4.082h4.082v-4.082h8.164v8.164h4.082v4.082h12.246v-4.082h4.082v4.082h8.164v4.082h-4.082v8.164h-4.082v8.164h8.164v4.082h4.082v4.082h4.082v4.082h-8.164v4.082h4.082v4.082h-4.082v16.328h-4.082v4.082h4.082v-4.082h4.082v-4.082h8.164v-8.164h-4.082v4.082h-4.082v-8.164h16.328v-12.246h4.082v-8.164h8.164v4.082h4.082v-4.082h-4.082v-4.082h4.082v-4.082h-16.328v-4.082h8.164v-4.082h4.082v4.082h4.082v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-4.082h-4.082v4.082h-4.082v-4.082h-8.164v-4.082h-8.164v-4.082h4.082v-8.164h-4.082v8.164h-4.082v-8.164h-8.164v-4.082h24.492v4.082h-4.082v8.164h4.082v4.082h4.082v-4.082h-4.082v-8.164h4.082v-4.082h-4.082V81.64h4.082v-4.082H142.87v-4.082h4.082v-4.082h4.082v4.082h4.082v-4.082h-4.082v-4.082h-4.082v4.082h-12.246v-4.082h-4.082v20.41h-4.082v4.082h-4.082V81.64h4.082v-8.164h-8.164v-4.082h8.164V61.23h-16.328v-4.082h12.246v-4.082h4.082v-8.164h4.082v4.082h4.082v-4.082h-4.082V40.82h-4.082v-4.082h-4.082v-4.082h-4.082v-8.164h4.082V20.41Zm-4.082 12.246v4.082h-4.082v4.082h-4.082v16.328h4.082v-8.164h12.246v-4.082h4.082V40.82h-4.082v-4.082h-4.082v-4.082Zm0 4.082v4.082h-4.082v4.082h4.082V40.82h4.082v4.082h4.082V40.82h-4.082v-4.082ZM69.394 40.82v4.082h-4.082v4.082h4.082v4.082h-4.082v12.246h8.164V48.984h-4.082v-4.082h4.082V40.82Zm16.328 0v4.082h4.082V40.82Zm57.148 0v4.082h4.082V40.82ZM16.328 48.984v4.082h8.164v-4.082Zm12.246 0v4.082h8.164v-4.082Zm110.214 0v4.082h-4.082v8.164h4.082v4.082h4.082V61.23h4.082v-4.082h4.082v4.082h4.082v4.082h4.082V53.066h-4.082v4.082h-4.082v-4.082h-8.164v-4.082Zm40.82 0v4.082h4.082v-4.082ZM44.902 57.148v4.082H40.82v4.082h4.082v4.082H40.82v4.082h4.082v-4.082h4.082v-4.082h-4.082V61.23h4.082v-4.082Zm93.886 0v4.082h4.082v-4.082Zm40.82 0v4.082h4.082v-4.082ZM32.656 61.23v4.082h4.082V61.23Zm77.558 12.246v4.082h-4.082v4.082h-8.164v-4.082H85.722v4.082h4.082v8.164h4.082v4.082H81.64v4.082h12.246v-4.082h4.082v-4.082h8.164v-4.082h8.164v4.082h-4.082v8.164h4.082v4.082h8.164v-8.164h-4.082v4.082h-4.082v-8.164h4.082v-4.082h-4.082V81.64h4.082v-4.082h-4.082v-4.082Zm24.492 0v8.164h8.164v-4.082h-4.082v-4.082Zm-8.164 16.328v12.246h12.246v4.082h4.082v8.164h-8.164v4.082h8.164v8.164h-4.082v-4.082h-4.082v4.082h4.082v4.082h8.164v-4.082h4.082v4.082h4.082v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-12.246h4.082v-4.082h-4.082v4.082h-4.082v-8.164h-4.082v-4.082h-4.082v-4.082h-8.164v-8.164ZM40.82 93.886v4.082h-4.082v12.246h-8.164v4.082h-4.082v8.164h8.164v4.082h4.082v-4.082h-4.082v-8.164h4.082v-4.082h4.082v4.082h8.164v-4.082h4.082v-8.164h-4.082v8.164H40.82v-4.082h4.082v-4.082H40.82v-4.082h4.082v-4.082Zm122.46 4.082v4.082h4.082v-4.082Zm-97.968 4.082v4.082h4.082v4.082h4.082v-4.082h-4.082v-4.082Zm24.492 12.246v12.246h4.082v-4.082h8.164v4.082h8.164v8.164h4.082v-4.082h4.082v-4.082h-4.082v-12.246h-4.082v8.164h-8.164v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-4.082Zm89.804 0v4.082h4.082v-4.082ZM40.82 118.378v4.082h4.082v-4.082Zm-4.082 12.246v4.082h4.082v4.082h4.082v4.082H40.82v4.082h4.082v-4.082h8.164v-8.164h4.082v12.246h4.082v-4.082h4.082v-4.082H61.23v-8.164H48.984v8.164h-4.082v-4.082H40.82v-4.082Zm36.738 0v8.164h4.082v-4.082h4.082v-4.082Zm12.246 0v8.164H81.64v4.082h-4.082v4.082h8.164v4.082h-8.164v4.082h12.246v-8.164h-4.082v-4.082h4.082v-8.164h4.082v-4.082Zm40.82 4.082v8.164h4.082v-8.164Zm20.41 0v8.164h4.082v-8.164Zm20.41 8.164v4.082h4.082v-4.082Zm-118.378 4.082v4.082h4.082v-4.082Zm57.148 0v8.164h-4.082v4.082h4.082v-4.082h4.082v-4.082h4.082v-4.082Zm-36.738 4.082v4.082H61.23v4.082h8.164v8.164h-4.082v-4.082H48.984v8.164h8.164v4.082h-8.164v8.164h4.082v-4.082h4.082v4.082h8.164v-4.082h4.082v-4.082h-4.082v4.082h-8.164v-4.082h4.082v-8.164h4.082v4.082h8.164v4.082h8.164v4.082h-4.082v4.082h4.082v-4.082h4.082v4.082h8.164v-4.082h-8.164v-4.082H81.64v-4.082h-4.082v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-16.328Zm48.984 0v4.082h-4.082v4.082h-4.082v4.082h-4.082v4.082h-4.082v-4.082h-4.082v-4.082h-4.082v4.082h-4.082v4.082h4.082v-4.082h4.082v4.082h4.082v4.082h4.082v4.082h4.082v-4.082h4.082v-4.082h8.164v-8.164h4.082v-4.082h4.082v-4.082h-4.082v4.082h-4.082v-4.082Zm32.656 0v12.246h12.246v-12.246Zm-32.656 4.082v4.082h-4.082v4.082h-4.082v4.082h4.082v-4.082h4.082v-4.082h4.082v-4.082Zm36.738 0v4.082h4.082v-4.082Zm12.246 8.164v8.164h4.082v-8.164Zm-8.164 4.082v4.082h4.082v-4.082Zm4.082 8.164v4.082h8.164v-4.082ZM16.328 16.328v28.574h28.574V16.328Zm4.082 4.082v20.41h20.41V20.41Zm4.082 4.082v12.246h12.246V24.492Zm130.624-8.164v28.574h28.574V16.328Zm4.082 4.082v20.41h20.41V20.41Zm4.082 4.082v12.246h12.246V24.492ZM16.328 155.116v28.574h28.574v-28.574Zm4.082 4.082v20.41h20.41v-20.41Zm4.082 4.082v12.246h12.246V163.28Z"
                        />
                      </svg>
                    </div>
                    <div className="left">
                      <p>Enter a provided key (با استفاده از کلید)</p>
                      <p>
                        این گزینه را انتخاب کرده و کد زیر را به دقت وارد نمایید.
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <hr />
                  <button>فعالسازی</button>
                </form>
                <form className="sms-menu">
                  <p>کد تایید</p>
                  <div className="request-code">
                    <div className="right">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                    <div className="left">
                      <button>درخواست رمز</button>
                    </div>
                  </div>
                  <hr />
                  <button>فعالسازی</button>
                </form>
              </div>
              <div className="left">
                <div className="row">
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
                  <p>
                    در صورت لزوم میتوانید از طریق این صفحه کلمه عبور خود را
                    تغییر دهید.
                  </p>
                </div>
                <div className="row">
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
                        fill: "#9767e1",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                    />
                  </svg>
                  <p>
                    سعی کنید کلمه عبور پیچیده ای انتخاب کنید و با سایر حساب های
                    شما در سایت های دیگر یکسان نباشد.
                  </p>
                </div>
                <div className="row">
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
                        fill: "#b5b5b5",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                    />
                  </svg>
                  <p>
                    به منظور افزایش سطح ایمنی حساب کاربری خود می توانید احراز
                    هویت دو مرحله ای را نیز فعال کنید.
                  </p>
                </div>
              </div>
            </div>
            <div className="settings-menu">
              <div className="item">
                <h5>مدیریت معامله</h5>
                <div className="row">
                  <div className="right">پرسش اطمینان از خرید</div>
                  <div className="left">
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="row">
                  <div className="right">پرسش اطمینان از فروش</div>
                  <div className="left">
                    <ToggleSwitch />
                  </div>
                </div>
              </div>
              <div className="item">
                <h5>انتخاب تم</h5>
                <div className="row">
                  <div className="right">نوع تم سایت (دارک یا لایت)</div>
                  <div className="left">
                    <DarkMode />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
