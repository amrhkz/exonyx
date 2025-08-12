"use client";
import React from "react";
import Link from "next/link";

import "./KYC.css";
import Sidebar_R from "../components/Sidebar_R/sidebar_r";
import Sidebar_L from "../components/Sidebar_L/sidebar_L";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
const KYC = () => {
  function step1() {
    document.querySelector(".step-1")?.classList.add("active");
    document.querySelector(".step-1-menu")?.classList.add("active");
    document.querySelector(".line-1")?.classList.remove("active");
    document.querySelector(".step-2")?.classList.remove("active");
    document.querySelector(".line-2")?.classList.remove("active");
    document.querySelector(".step-2-menu")?.classList.remove("active");
    document.querySelector(".step-3")?.classList.remove("active");
    document.querySelector(".line-3")?.classList.remove("active");
    document.querySelector(".step-3-menu")?.classList.remove("active");
    document.querySelector(".step-4")?.classList.remove("active");
    document.querySelector(".line-4")?.classList.remove("active");
    document.querySelector(".step-4-menu")?.classList.remove("active");
    document.querySelector(".step-5")?.classList.remove("active");
    document.querySelector(".line-5")?.classList.remove("active");
    document.querySelector(".step-5-menu")?.classList.remove("active");
    document.querySelector(".step-6")?.classList.remove("active");
    document.querySelector(".step-6-menu")?.classList.remove("active");
  }
  function step2() {
    document.querySelector(".step-2")?.classList.add("active");
    document.querySelector(".line-1")?.classList.add("active");
    document.querySelector(".step-2-menu")?.classList.add("active");
    document.querySelector(".step-1-menu")?.classList.remove("active");
  }
  function step3() {
    document.querySelector(".step-3")?.classList.add("active");
    document.querySelector(".line-2")?.classList.add("active");
    document.querySelector(".step-3-menu")?.classList.add("active");
    document.querySelector(".step-2-menu")?.classList.remove("active");
  }
  function step4() {
    document.querySelector(".step-4")?.classList.add("active");
    document.querySelector(".line-3")?.classList.add("active");
    document.querySelector(".step-4-menu")?.classList.add("active");
    document.querySelector(".step-3-menu")?.classList.remove("active");
  }
  function step5() {
    document.querySelector(".step-5")?.classList.add("active");
    document.querySelector(".line-4")?.classList.add("active");
    document.querySelector(".step-5-menu")?.classList.add("active");
    document.querySelector(".step-4-menu")?.classList.remove("active");
  }
  function step6() {
    document.querySelector(".step-6")?.classList.add("active");
    document.querySelector(".line-5")?.classList.add("active");
    document.querySelector(".step-6-menu")?.classList.add("active");
    document.querySelector(".step-2-menu")?.classList.remove("active");
  }
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="kyc">
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
                <span>سطوح کاربری و احراز هویت </span>
                <span>
                  در این قسمت میتوانید احراز هویت خود را تکمیل نمایید و برای
                  ارتقاء سطح کاربری خود فقط باید اطلاعات آن سطح را تکمیل نمایید.
                </span>
              </div>
            </div>
          </div>
          <div className="kyc-levels">
            <div className="top">
              <div className="step step-1 active" onClick={step1}>
                <div className="step-lamp">1</div>
              </div>
              <div className="line line-1"></div>
              <div className="step step-2" onClick={step2}>
                <div>2</div>
              </div>
              <div className="line line-2"></div>
              <div className="step step-3" onClick={step3}>
                <div>3</div>
              </div>
              <div className="line line-3"></div>
              <div className="step step-4" onClick={step4}>
                <div>4</div>
              </div>
              <div className="line line-4"></div>
              <div className="step step-5" onClick={step5}>
                <div>5</div>
              </div>
              <div className="line line-5"></div>
              <div className="step step-6" onClick={step6}>
                <div>6</div>
              </div>
            </div>
            <div className="bottom">
              <div className="step-menu step-1-menu active">
                <div className="right">
                  <div className="top">
                    <div className="step-notif">
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
                        <span>اطلاعات وارد شده درحال بررسی است </span>
                      </div>
                    </div>
                    <div className="step-notif disable">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
                              fill: "#ea5c5c",
                              fillRule: "nonzero",
                              opacity: "1",
                            }}
                            transform="matrix(.91 0 0 .91 1.08 1.08)"
                          />
                        </svg>
                      </div>
                      <div className="left">
                        <span>اطلاعات خود را به درستی وارد کنید</span>
                        <span></span>
                      </div>
                    </div>
                    <div className="step-notif disable">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
                              fill: "#ea5c5c",
                              fillRule: "nonzero",
                              opacity: "1",
                            }}
                            transform="matrix(.91 0 0 .91 1.08 1.08)"
                          />
                        </svg>
                      </div>
                      <div className="left">
                        <span>اطلاعات شما تایید شده است </span>
                        <span></span>
                      </div>
                    </div>
                    <div className="step-notif disable">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
                              fill: "#ea5c5c",
                              fillRule: "nonzero",
                              opacity: "1",
                            }}
                            transform="matrix(.91 0 0 .91 1.08 1.08)"
                          />
                        </svg>
                      </div>
                      <div className="left">
                        <span>شما هيچ كارت بانكی هنوز ثبت نكرده ايد . </span>
                        <span>برای ثبت كارت بانكی اينجاكليک كنيد . </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <form>
                      <div className="item item-1">
                        <label htmlFor="">نام</label>
                        <input type="text" />
                      </div>
                      <div className="item item-2">
                        <label htmlFor="">نام خانوادگی </label>
                        <input type="text" />
                      </div>
                      <div className="item item-3">
                        <label htmlFor="">کد ملی </label>
                        <input type="text" />
                      </div>
                      <div className="item item-4">
                        <label>نام پدر </label>
                        <input type="text" />
                      </div>
                      <div className="item item-5">
                        <label htmlFor="day">تاریخ تولد </label>
                        <div className="select-menu">
                          <select id="day" name="day"></select>
                          <select id="month" name="month"></select>
                          <select id="year" name="year"></select>
                        </div>
                      </div>
                      <hr className="hor-line" />
                      <div className="form-submit">
                        <button>ثبت اطلاعات</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="left">
                  <div className="level">
                    <span>امکانات و محدودیت های سطح1 </span>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار برداشت رمز ارز روزانه : ممنوع
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار خرید ارز الکترونیک روزانه : ممنوع
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار برداشت ریال روزانه : 50 میلیون تومان
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر تعداد تراکنش رمز ارز روزانه : نامحدود
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-menu step-2-menu">
                <div className="right">
                  <div className="top">
                    <div className="step-notif">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
                              fill: "#ea5c5c",
                              fillRule: "nonzero",
                              opacity: "1",
                            }}
                            transform="matrix(.91 0 0 .91 1.08 1.08)"
                          />
                        </svg>
                      </div>
                      <div className="left">
                        <span>شما هيچ كارت بانكی هنوز ثبت نكرده ايد . </span>
                        <span>برای ثبت كارت بانكی اينجاكليک كنيد . </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <form className="contract-form">
                      <h2>متن قرارداد:</h2>
                      <div className="contract">
                        <p>
                          احراز هویت جهت خرید ارزهای الکترونیک از سایت
                          Exonyx.org
                        </p>
                        <p>نام و نام خانوادگی : امیرحسین کریم زاده</p>
                        <p>شماره موبایل : 09027210832</p>
                        <p>
                          اینجانب امیرحسین کریم زاده تمامی قوانین سامانه اکس
                          اونیکس را خوانده و می پذیرم همچنین از خدمات برای انجام
                          هیچگونه فعالیت خلاف قوانین جمهوری اسلامی ایران برای
                          مثال ( قمار و شرطبندی ، پولشویی و کلاهبردای ) استفاده
                          نخواهم کرد. حساب کاربری و حساب بانکی اینجانب در اختیار
                          خودم بوده و هیچ شخص ثالثی به آن دسترسی ندارد. درصورت
                          انجام موارد غیرقانونی تمامی عواقب آن به عهده اینجانب
                          می باشد.
                        </p>
                      </div>
                      <h2>نکات</h2>
                      <p>
                        - منظور از سلفی این است که چهره شما نیز مشخص باشد به
                        همراه قرارداد و کارت شناسایی
                      </p>
                      <p>
                        - حتما با دوربین پشت گوشی عکسبرداری کنید تا متون در عکس،
                        برعکس نیوفتند
                      </p>
                      <p>
                        - تصویر خوانا و واضح باشد. توصیه میشود در عکسبرداری از
                        یک شخص دیگر کمک بخواهید و ایشان از شما عکس بگیرد.
                      </p>
                      <div className="photo-upload">
                        <div className="right">
                          <img src="/img/photo_upload.png" alt="" />
                        </div>
                        <div className="left">
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
                              <path d="m19.337 9.072.741-.741h0a3.146 3.146 0 0 0-.122-4.566h0a3.268 3.268 0 0 0-4.453.242l-.615.616m-2.225 2.225-.741.741h0a3.146 3.146 0 0 0 .122 4.566h0a3.267 3.267 0 0 0 4.453-.243l.615-.615" />
                              <path d="M21 12v5a4 4 0 0 1-4 4H7h0a4 4 0 0 1-4-4s0 0 0 0V7h0a4 4 0 0 1 4-4h5m5.85 3.11-3.7 3.7" />
                            </g>
                            <path fill="none" d="M0 0h24v24H0Z" />
                          </svg>
                          <input type="file" id="actual-btn" hidden />
                          <label htmlFor="actual-btn">
                            آپلود تصویر جهت بارگزاری کلیک کنید
                          </label>
                        </div>
                      </div>
                      <hr />
                      <button>ثبت اطلاعات</button>
                    </form>
                  </div>
                </div>
                <div className="left">
                  <div className="level">
                    <span>امکانات و محدودیت های سطح2 </span>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار برداشت رمز ارز روزانه : ممنوع
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار خرید ارز الکترونیک روزانه : 7 میلیون تومان
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر مقدار برداشت ریال روزانه : 100 میلیون تومان
                      </div>
                    </div>
                    <div className="item">
                      <div className="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              stroke="#9767e1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              d="M20 7 10 17l-5-5"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="left">
                        حداکثر تعداد تراکنش رمز ارز روزانه : نامحدود
                      </div>
                    </div>
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

export default KYC;
