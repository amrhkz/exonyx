"use client";
import Sidebar_R from "@/app/components/Sidebar_R/sidebar_r";
import "./Digital.css";
import Sidebar_L from "@/app/components/Sidebar_L/sidebar_L";
import Navbar from "@/app/components/Navbar/navbar";
import Footer from "@/app/components/Footer/footer";

export default function Digital() {
  function buyMenu() {
    document.querySelector(".buy-menu")?.classList.add("close");
    document.querySelector(".buy-menu-toggle")?.classList.add("active");
    document.querySelector(".sell-menu")?.classList.remove("close");
    document.querySelector(".sell-menu-toggle")?.classList.remove("active");
  }
  function sellMenu() {
    document.querySelector(".sell-menu")?.classList.add("close");
    document.querySelector(".sell-menu-toggle")?.classList.add("active");
    document.querySelector(".buy-menu")?.classList.remove("close");
    document.querySelector(".buy-menu-toggle")?.classList.remove("active");
  }
  return (
    <>
      <Sidebar_R/>
      <Navbar/>
      <Sidebar_L/>
      <div className="section">
        <div className="buy-sell">
          <div className="top">
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
              <span>خرید</span>
              <span>خرید و فروش ارز الکترونیک</span>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <div className="right">
              <div className="top">
                <ul>
                  <li>
                    <button
                      className="buy-menu-toggle active"
                      onClick={buyMenu}
                    >
                      خرید
                    </button>
                  </li>
                  <li>
                    <button className="sell-menu-toggle" onClick={sellMenu}>
                      فروش
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <div className="buy-menu close">
                  <div className="select-toggle">
                    <div className="right">
                      <img src="/img/usdt.svg" alt="" />
                      <span>تتر - usdt</span>
                    </div>
                    <div className="left">
                      <span>59,962 تومان</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m8 10 4 4 4-4"
                        />
                        <path fill="none" d="M0 0h24v24H0Z" />
                      </svg>
                    </div>
                    <div className="select-menu">
                      <div className="title-row">
                        <h2>انتخاب ارز</h2>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none">
                              <path d="M0 0h24v24H0Z" />
                              <path
                                stroke="#9767e1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m8 8 8 8m0-8-8 8"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="search-row">
                        <input type="search" placeholder="جستجو" />
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
                      <div className="coin-list">
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                        <div className="coin-item">
                          <div className="right">
                            <img src="/img/usdt.svg" alt="" />
                            <span>تتر - USDT</span>
                          </div>
                          <div className="left">
                            <span>59,855 تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>مقدار ارز</h2>
                  <div className="swap-coin">
                    <div className="top">
                      <img src="/img/usdt.svg" />
                      <input type="text" />
                      <span>USDT</span>
                    </div>
                    <div className="bottom">
                      <img src="/img/irt.svg" />
                      <input type="text" />
                      <span>تومان</span>
                    </div>
                  </div>
                  <h2>شناسه حساب</h2>
                  <div className="account-id">
                    <input type="text" placeholder="مثال : U123456789" />
                  </div>
                  <h2>نحوه پرداخت</h2>
                  {/* <div className="payment">
                  <input type="radio" checked />
                  <div>
                    <span>کیف پول 0 تومان </span>
                    <span
                      >با شارژ کیف پول میتوانید پرداخت های خود را بدون رفتن به
                      درگاه بانکی پرداخت کنید.
                    </span>
                  </div>
                </div> */}
                  <hr />
                  <button>خرید</button>
                </div>
                <div className="sell-menu">
                  <div className="select-toggle">
                    <div className="right">
                      <img src="/img/usdt.svg" />
                      <span>تتر - usdt</span>
                    </div>
                    <div className="left">
                      <span>59,962 تومان</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m8 10 4 4 4-4"
                        />
                        <path fill="none" d="M0 0h24v24H0Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="select-menu"></div>
                  <h2>شناسه حساب</h2>
                  <div className="account-id">
                    <input type="text" placeholder="مثال : U123456789" />
                  </div>
                  <h2>شناسه حساب</h2>
                  <div className="account-id">
                    <input type="text" placeholder="مثال : U123456789" />
                  </div>
                  <h2>نحوه پرداخت</h2>
                  <div className="payment">
                    <input type="radio" checked />
                    <div>
                      <span>واریز به کیف پول تومانی</span>
                      <span>
                        خرید و فروش فقط از طریق کیف پول تومانی شما انجام میشود.
                        برای افزایش موجودی به بخش دارایی رجوع کنید.
                      </span>
                    </div>
                  </div>
                  <hr />
                  <button>فروش</button>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="item">
                <div>
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
                        fill: "#a3adbf",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                    />
                  </svg>
                </div>
                <div>
                  <p>نکات و هشدارها</p>
                  <p>
                    جهت خرید ارز الکترونیک ( پرفکت مانی و ووچر پرفکت مانی) پیش
                    از هر چیزی می بایست نسبت به تایید هویت خود در پنل کاربری
                    اقدام نمایید؛ لازم به ذکر است که محدودیت خرید روزانه این ارز
                    طبق سطح بندی کاربر تعیین خواهد شد. کدهای ووچرز به صورت
                    سیستمی صادر می شوند بنابراین احتمال خطا در آنها وجود ندارد
                    اما اگر به هر دلیلی هنگام وارد کردن کد با خطا روبرو شدید، از
                    صحت اطلاعات وارد شده اطمینان حاصل نمایید تا مشکل برطرف شود.
                  </p>
                </div>
              </div>
              <div className="item">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                  >
                    <path
                      transform="matrix(.91 0 0 .91 1.08 1.08)"
                      d="M12 1 3 5v6c0 7.83 6.439 11.486 9 12 2.561-.514 9-4.17 9-12V5l-9-4zm1 17h-2v-2h2v2zm0-4h-2V6h2v8z"
                      style={{
                        stroke: "none",
                        strokeWidth: "1",
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: "0",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: "4",
                        fill: "rgb(255, 70, 95)",
                        fillRule: "nonzero",
                        opacity: "1",
                      }}
                    ></path>
                  </svg>
                </div>
                <div>
                  <p>توجه</p>
                  <p>حداقل میزان خرید ارز الکترونیک 1 دلار میباشد.</p>
                  <p>
                    اگر نمیدونید شناسه حساب پرفکت مانی چی هستش از وارد کردن
                    اعداد شانسی پرهیز کنید و از قسمت ووچر پرفکت مانی اقدام
                    بفرمایید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
