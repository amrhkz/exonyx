"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import "./Login.css";
const Login = () => {
  function darkMode() {
    document.querySelector("body")?.classList.toggle("dark");
  }
  return (
    <>
      <div className="sign-page">
        <div className="right">
          <div className="top">
            <div className="dark-switch" onClick={darkMode}>
              <svg
                className="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="48 48 416 416"
              >
                <path
                  fill="#9767e1"
                  stroke="#9767e1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M256 144c-61.75 0-112 50.25-112 112 0 61.749 50.25 112 112 112s112-50.251 112-112c0-61.75-50.25-112-112-112zm0-32c8.833 0 16-7.146 16-16V64c0-8.833-7.167-16-16-16-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16zm0 288c-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16 8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16zm124.417-245.833 22.625-22.625c6.25-6.25 6.25-16.375 0-22.625-6.251-6.25-16.375-6.25-22.625 0l-22.625 22.625c-6.251 6.25-6.251 16.375 0 22.625 6.25 6.249 16.374 6.249 22.625 0zM131.541 357.854l-22.623 22.625c-6.252 6.25-6.252 16.377 0 22.625 6.249 6.25 16.373 6.25 22.623 0l22.625-22.625c6.251-6.291 6.251-16.375 0-22.625-6.249-6.25-16.374-6.292-22.625 0zM112 256c0-8.833-7.167-16-16-16H64c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16zm336-16h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16 0-8.833-7.167-16-16-16zm-316.479-85.833c6.249 6.25 16.375 6.25 22.625 0 6.249-6.25 6.249-16.375 0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zm248.938 203.645c-6.293-6.25-16.376-6.25-22.625 0-6.25 6.248-6.293 16.375 0 22.625l22.625 22.625c6.249 6.248 16.374 6.248 22.625 0 6.249-6.25 6.249-16.377 0-22.625l-22.625-22.625z"
                />
              </svg>
              <svg
                className="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#9767e1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.704 15.014a8.003 8.003 0 0 1-15.408-3.032c0-4.186 3.215-7.616 7.31-7.968-2.039 2.806-1.801 6.751.729 9.281a7.17 7.17 0 0 0 7.369 1.719Z"
                />
                <path fill="none" d="M0 0h24v24H0Z" />
              </svg>
            </div>
          </div>
          <div className="bottom">
            <div className="logo-row">
              <img src="/img/logo.png" alt="" />
              <span>ورود / ثبت نام</span>
            </div>
            <form action="">
              <label>شماره تلفن همراه</label>
              <div className="input-field">
                <input
                  className="phone-input"
                  type="text"
                  placeholder="09123456789"
                  dir="ltr"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M16 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.999 17.25a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M10.75 6h2.5"
                    />
                  </g>
                </svg>
              </div>
              <button type="submit">
                ورود
              </button>
            </form>
            <p>
              شما با ورود و یا ثبت نام در اکس اونیکس،
              <a href="">قوانین و مقررات</a> را مطالعه کرده و پذیرفته اید
            </p>
            <a href="#">رمز خود را فراموش کرده اید ؟</a>
          </div>
        </div>
        <div className="left">
          <div className="top">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="ml-1.5 md:ml-2.5"
                data-name="Layer 3"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.3 15.918H8.564M16 21H8a5 5 0 0 1-5-5v-4.8a5 5 0 0 1 1.877-3.904l4-3.2a5 5 0 0 1 6.247 0l4 3.2A5 5 0 0 1 21 11.2V16a5 5 0 0 1-5 5Z"
                />
              </svg>
              <span>صفحه اصلی</span>
            </Link>
          </div>
          <div className="bottom">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 1000 }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/img/EnterOTP-amico.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/Resetpassword-amico.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/Signup-amico.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
