"use client";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Sidebar_R from "./components/Sidebar_R/sidebar_r";
import Navbar from "./components/Navbar/navbar";
import Sidebar_L from "./components/Sidebar_L/sidebar_L";
import Footer from "./components/Footer/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <>
          <Sidebar_R />
          <Navbar />
          <Sidebar_L />
          <div className="notifbar">
            <div className="notifbar-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="#ff6370"
                className="svg-icon"
                viewBox="0 0 1024 1024"
              >
                <path d="M510.519 90.652c-231.878 0-419.934 188.029-419.934 419.935 0 231.922 188.028 419.935 419.934 419.935 231.938 0 419.935-187.969 419.935-419.935 0-231.878-187.997-419.935-419.935-419.935zM682.67 627.126c7.176 7.12 11.571 16.93 11.571 27.814 0 21.765-17.606 39.369-39.368 39.369-10.809 0-20.711-4.394-27.801-11.558l-116.554-116.48-116.466 116.523c-7.148 7.148-16.988 11.543-27.884 11.543-21.706 0-39.34-17.59-39.34-39.368 0-10.884 4.395-20.679 11.512-27.784l116.526-116.599-116.498-116.497c-7.117-7.146-11.512-16.988-11.512-27.857 0-21.734 17.633-39.368 39.368-39.368 10.84 0 20.68 4.395 27.829 11.513l116.466 116.526 116.526-116.495a39.33 39.33 0 0 1 27.829-11.514c21.703 0 39.368 17.605 39.368 39.37 0 10.882-4.421 20.724-11.571 27.841L566.205 510.571l116.466 116.554zm0 0z" />
              </svg>
              <span>اطلاعیه عمومی؛</span>
              <p>
                کاربر گرامی، پیام‌هایی که در شبکه‌های اجتماعی به منظور تبدیل
                ریال به ارز دیجیتال از سوی شخص حقیقی یا حقوقی منتشر می‌شوند،
                قطعا کلاهبرداری هستند. لذا هرگونه اقدام کاربران در این زمینه به
                منزله‌ی پول‌شویی تلقی می‌شود. بنابراین مسئولیت کیفری وهمچنین
                جبران خسارت مال باختگان برعهده شخص است.
              </p>
            </div>
            <div className="notifbar-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="#ff6370"
                className="svg-icon"
                viewBox="0 0 1024 1024"
              >
                <path d="M510.519 90.652c-231.878 0-419.934 188.029-419.934 419.935 0 231.922 188.028 419.935 419.934 419.935 231.938 0 419.935-187.969 419.935-419.935 0-231.878-187.997-419.935-419.935-419.935zM682.67 627.126c7.176 7.12 11.571 16.93 11.571 27.814 0 21.765-17.606 39.369-39.368 39.369-10.809 0-20.711-4.394-27.801-11.558l-116.554-116.48-116.466 116.523c-7.148 7.148-16.988 11.543-27.884 11.543-21.706 0-39.34-17.59-39.34-39.368 0-10.884 4.395-20.679 11.512-27.784l116.526-116.599-116.498-116.497c-7.117-7.146-11.512-16.988-11.512-27.857 0-21.734 17.633-39.368 39.368-39.368 10.84 0 20.68 4.395 27.829 11.513l116.466 116.526 116.526-116.495a39.33 39.33 0 0 1 27.829-11.514c21.703 0 39.368 17.605 39.368 39.37 0 10.882-4.421 20.724-11.571 27.841L566.205 510.571l116.466 116.554zm0 0z" />
              </svg>
              <span>اطلاعیه عمومی؛</span>
              <p>
                کاربر عزیز برای استفاده از تمامی امکانات پنل کاربری، لطفا نسبت
                به احراز هویت خود اقدام نمایید
              </p>
            </div>
          </div>
          <div className="section">
            <h2>کیف پول</h2>
            <div className="wallet-content">
              <div className="r-wallet-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  className="m-auto"
                  data-name="Layer 3"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="7.5"
                    cy="17"
                    r="1.5"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <rect
                    width="11"
                    height="8"
                    x="2"
                    y="13"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    rx="2"
                  />
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 9.5v-3A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5V10m18 4.5v3a2.5 2.5 0 0 1-2.5 2.5H16"
                  />
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 9.5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a2.5 2.5 0 0 1-2.5-2.5v0A2.5 2.5 0 0 1 19 9.5Z"
                  />
                </svg>
                <span>
                  <p>کیف پول تومانی (تومان)</p>
                  <p>
                    موجودی: <span>0 تومان</span>
                  </p>
                </span>
              </div>
              <div className="l-wallet-content">
                <button>برداشت</button>
                <button>واریز</button>
              </div>
              <div className="tdot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="23"
                  height="23"
                  fill="#e8edf2"
                  viewBox="0 0 210 210"
                >
                  <path d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zm80 0c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zm80 0c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="card">
              <div className="top">
                <div className="right">
                  <img src="/img/usdt.svg" alt="" />
                </div>
                <div className="left">
                  <div className="top">
                    <span>تتر - USDT </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      width="23"
                      height="23"
                      fill="#e8edf2"
                      viewBox="0 0 210 210"
                    >
                      <path d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zm80 0c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zm80 0c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
                    </svg>
                  </div>
                  <div className="bottom">
                    <span>موجودی: </span>
                    <span>
                      <span>0 USDT </span>
                      <span>≅ 0 تومان </span>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <button>خرید</button>
                <button>فروش</button>
                <button>واریز</button>
                <button>برداشت</button>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="title-section">
              <h2>رمزارز</h2>
              <div className="searchfield">
                <input type="search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
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
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="section">
            <div className="title-section">
              <h2>ارز های الکترونیک</h2>
            </div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper-2"
            >
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/pmVoucher.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/pmVoucher.svg" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <div className="top">
                    <div className="right">
                      <img src="/img/uVoucher.png" alt="" />
                    </div>
                    <div className="left">
                      <div className="top">
                        <span>تتر</span>
                        <span>1.00$</span>
                      </div>
                      <div className="bottom">
                        <span>USDT</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="right">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="left">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <g
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#9767e1"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14M10 7l-5 5M10 17l-5-5"></path>
                          </g>
                          <path fill="none" d="M0 0h24v24H0Z"></path>
                        </svg>
                      </div>
                      <div className="left">
                        <span>خرید</span>
                        <span>59,721</span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="section">
            <div className="ticket">
              <div className="title-section">
                <h2>تیکت های من</h2>
                <button>ارسال تیکت جدید</button>
              </div>
              <table>
                <thead>
                  <th>#</th>
                  <th>موضوع</th>
                  <th>واحد پشتیبانی</th>
                  <th>وضعیت</th>
                  <th>تاریخ ایجاد</th>
                  <th>آخرین بروزرسانی</th>
                  <th>عملیات</th>
                </thead>
                <tbody></tbody>
              </table>
              <span>دیتا موجود نیست </span>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
