"use client";
import SideToggle from "../Side_Toggle/side-toggle";
import "./navbar.css";

const Navbar = () => {
  function darkMode() {
    document.querySelector("body")?.classList.toggle("dark");
  }
  function userLevel() {
    document.querySelector(".user-level-menu")?.classList.toggle("close");
  }
  function appDl() {
    document.querySelector(".app-menu")?.classList.toggle("close");
  }
  function leftSidebarToggle() {
    document.querySelector(".left-sidebar")?.classList.toggle("close");
  }
  function Notification(){
    document.querySelector(".notif-menu")?.classList.toggle("active");
  }
  return (
    <div className="section-n">
      <div className="navbar">
        <div className="right">
          <SideToggle />
          <div className="user-level" onClick={userLevel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
                  fill: "rgb(234,92,92)",
                  fillRule: "nonzero",
                  opacity: "1",
                }}
              ></path>
            </svg>
            <span>سطح کاربری</span>
            <div className="level-count">
              <span>0</span>
            </div>
            <div className="user-level-menu">
              <div className="user-level-item-1">
                <div className="user-level-item-1-1">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="36"
                  >
                    <g fill="none">
                      <path
                        fill="#ea5c5c"
                        stroke="#ea5c5c"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m14.029 4.139 7.659 13.404c.89 1.558-.235 3.497-2.029 3.497H4.341c-1.795 0-2.92-1.939-2.029-3.497L9.971 4.139c.897-1.571 3.161-1.571 4.058 0Z"
                      />
                      <path
                        fill="#fff"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 13.12V9.38M11.999 16.125a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5"
                      />
                    </g>
                  </svg>
                </div>
                <div className="user-level-item-1-2">
                  <div>
                    <span> سطح حساب کاربری شما درحال حاضر صفر است. </span>
                    <span>
                      لطفا مراحل احراز هویت را تا تکمیل سطح یک کاربری ادامه
                      دهید.
                    </span>
                  </div>
                  <button>تکمیل احراز هویت</button>
                </div>
              </div>
              <div className="user-level-item-2">
                <span> سطح حساب کاربری شما: </span>
              </div>
              <div className="row">
                <div className="item">
                  <div className="right">
                    <svg
                      data-name="Layer 3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M10.073 17H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6"
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <path
                        d="m18.06 13.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0ZM6 14h1M17 6h1"
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="12.073"
                        cy="10"
                        r="2"
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <path d="M0 0h24v24H0Z" fill="none" />
                    </svg>
                  </div>
                  <div className="left">
                    <p>برداشت روزانه رمز ارز</p>
                    <p>ممنوعیت برداشت روزانه رمز ارز</p>
                  </div>
                </div>
                <div className="item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0Z" />
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 7h18M8 17H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3M9 11H7m11.06 2.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                    </svg>
                  </div>
                  <div className="left">
                    <p>خرید روزانه ارز الکترونیک</p>
                    <p>ممنوعیت خرید روزانه ارز الکترونیک</p>
                  </div>
                </div>
                <div className="item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 20a9 9 0 1 1 9-9"
                      />
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m13.06 7.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                      <rect
                        width="6"
                        height="4"
                        x="16"
                        y="18"
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        rx="1.25"
                      />
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.25 18v-1.25A1.75 1.75 0 0 1 19 15h0a1.75 1.75 0 0 1 1.75 1.75V18"
                      />
                    </svg>
                  </div>
                  <div className="left">
                    <p>برداشت روزانه تومان</p>
                    <p>ممنوعیت برداشت روزانه تومان</p>
                  </div>
                </div>
                <div className="item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m16 2-2 2 2 2m4-2h-6m7 8a8.948 8.948 0 0 0-.947-4M10 3.23A8.998 8.998 0 0 0 3 12m5 10 2-2-2-2m-4 2h6m-7-8a8.948 8.948 0 0 0 .947 4M14 20.77A8.998 8.998 0 0 0 21 12m-7.94-3.56 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                      <path fill="none" d="M24 24H0V0h24Z" />
                      <path fill="none" d="M24 24H0V0h24Z" />
                    </svg>
                  </div>
                  <div className="left">
                    <p>معامله رمز ارز و ارز الکترونیک</p>
                    <p>محدودیتی وجود ندارد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="toggle-switch" onClick={darkMode}>
            <svg className="sun" width="24" height="24" viewBox="0 0 512 512">
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
          </button>
        </div>
        <div className="left">
          <button className="notification" onClick={Notification}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
            >
              <g
                stroke-linecap="round"
                stroke-width="1.5"
                fill="none"
                stroke-linejoin="round"
              >
                <path d="M17.5 17.359h0a1.9 1.9 0 0 0 1.9-1.894v0h0c0-.533-.213-1.043-.591-1.419l-1.259-1.26V9.043v.001A5.544 5.544 0 0 0 12.001 3.5v0h0a5.544 5.544 0 0 0-5.542 5.543v3.74L5.2 14.043h0a2.006 2.006 0 0 0-.592 1.419v0h0a1.9 1.9 0 0 0 1.9 1.894ZM17.5 17.359v0M10.521 20.5h2.957"></path>
              </g>
              <path fill="none" d="M0 0h24v24H0Z"></path>
            </svg>
            <div className="notif-menu">
              <div className="notif-list">
                <div className="notif-item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 24V0h24v24Z" />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 9H4m2 6H4m0-3H2m3.664-6.364a9 9 0 1 1 0 12.728"
                      />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m13.06 8.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                    </svg>
                  </div>
                  <div className="left">
                    <span>
                      کاربر گرامی سطح کاربری شما به سطح 2 تغییر پیدا کرد
                    </span>
                    <span>سه‌شنبه ۲۹ اسفند ۱۴۰۲ - ۸:۴۹</span>
                  </div>
                </div>
                <hr />
                <div className="notif-item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 24V0h24v24Z" />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 9H4m2 6H4m0-3H2m3.664-6.364a9 9 0 1 1 0 12.728"
                      />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m13.06 8.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                    </svg>
                  </div>
                  <div className="left">
                    <span>
                      کاربر گرامی سطح کاربری شما به سطح 2 تغییر پیدا کرد
                    </span>
                    <span>سه‌شنبه ۲۹ اسفند ۱۴۰۲ - ۸:۴۹</span>
                  </div>
                </div>
                <hr />
                <div className="notif-item">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 24V0h24v24Z" />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 9H4m2 6H4m0-3H2m3.664-6.364a9 9 0 1 1 0 12.728"
                      />
                      <path
                        fill="none"
                        stroke="#25c935"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m13.06 8.44 2.5 2.499a1.5 1.5 0 0 1 0 2.121l-2.499 2.5a1.5 1.5 0 0 1-2.121 0l-2.5-2.499a1.5 1.5 0 0 1 0-2.121l2.499-2.5a1.5 1.5 0 0 1 2.121 0Z"
                      />
                    </svg>
                  </div>
                  <div className="left">
                    <span>
                      کاربر گرامی سطح کاربری شما به سطح 2 تغییر پیدا کرد
                    </span>
                    <span>سه‌شنبه ۲۹ اسفند ۱۴۰۲ - ۸:۴۹</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="notif-btns">
                <div className="btn">مشاهده همه</div>
                <div className="btn">همه‌ خوانده شود</div>
              </div>
            </div>
          </button>
          <button className="app-dl" onClick={appDl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#9767e1"
                stroke="none"
              >
                <path d="M1206 4944 c-189 -46 -346 -205 -391 -396 -22 -96 -22 -3881 0 -3977 46 -193 204 -350 397 -396 95 -22 2602 -22 2697 0 193 46 350 204 396 397 22 95 22 3881 0 3976 -46 193 -203 351 -396 397 -93 22 -2612 21 -2703 -1z m2649 -315 c52 -15 119 -82 134 -134 16 -57 16 -3813 0 -3870 -15 -52 -82 -119 -134 -134 -57 -15 -2533 -15 -2590 0 -52 15 -119 82 -134 134 -15 56 -16 3813 0 3869 14 50 73 113 124 131 34 12 240 14 1300 15 893 0 1272 -3 1300 -11z" />
                <path d="M2175 4466 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 24 -7 160 -10 394 -8 342 3 358 4 384 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -26 20 -41 21 -394 23 -290 2 -373 0 -397 -11z" />
                <path d="M2495 3506 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -281 -11 -810 l0 -781 -197 196 c-163 161 -206 198 -240 209 -117 34 -228 -77 -194 -194 11 -36 63 -93 364 -394 307 -307 357 -353 389 -358 91 -17 85 -22 461 353 368 368 387 391 373 464 -17 89 -96 146 -185 133 -44 -7 -56 -17 -248 -208 l-203 -201 -2 796 c-3 787 -3 797 -24 824 -11 15 -32 37 -46 47 -34 25 -113 32 -153 13z" />
              </g>
            </svg>
            <div className="app-menu">
              <div className="qr-code">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 25 25"
                >
                  <path
                    fill="#FFF"
                    d="M7 0h1v1H7Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1ZM1 1h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm1 0h1v1H8Zm1 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM1 2h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm2 0h1v1H9Zm1 0h1v1h-1Zm4 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm4 0h1v1h-1ZM1 3h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm4 0h1v1h-1ZM1 4h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm5 0h1v1h-1Zm5 0h1v1h-1Zm2 0h1v1h-1Zm4 0h1v1h-1ZM1 5h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm1 0h1v1H8Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM7 6h1v1H7Zm2 0h1v1H9Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1ZM0 7h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm1 0h1v1H7Zm1 0h1v1H8Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM4 8h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm2 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm5 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1ZM0 9h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm2 0h1v1H5Zm1 0h1v1H6Zm1 0h1v1H7Zm1 0h1v1H8Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM0 10h1v1H0Zm3 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm4 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM1 11h1v1H1Zm5 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm1 0h1v1h-1Zm6 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1ZM0 12h1v1H0Zm1 0h1v1H1Zm4 0h1v1H5Zm5 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm5 0h1v1h-1ZM0 13h1v1H0Zm2 0h1v1H2Zm3 0h1v1H5Zm1 0h1v1H6Zm1 0h1v1H7Zm5 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm4 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 14h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm6 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1ZM1 15h1v1H1Zm1 0h1v1H2Zm3 0h1v1H5Zm1 0h1v1H6Zm4 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 16h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm2 0h1v1H5Zm2 0h1v1H7Zm2 0h1v1H9Zm3 0h1v1h-1Zm2 0h1v1h-1ZM0 17h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm1 0h1v1H7Zm2 0h1v1H9Zm2 0h1v1h-1Zm3 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1ZM7 18h1v1H7Zm1 0h1v1H8Zm1 0h1v1H9Zm6 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1ZM1 19h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm1 0h1v1H8Zm3 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1ZM1 20h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm1 0h1v1H8Zm6 0h1v1h-1Zm1 0h1v1h-1Zm7 0h1v1h-1Zm2 0h1v1h-1ZM1 21h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm3 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM1 22h1v1H1Zm4 0h1v1H5Zm2 0h1v1H7Zm3 0h1v1h-1Zm4 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1ZM1 23h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm4 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1ZM7 24h1v1H7Zm2 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Z"
                  />
                  <path d="M0 0h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm4 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 1h1v1H0Zm6 0h1v1H6Zm8 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm6 0h1v1h-1ZM0 2h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM0 3h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm2 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM0 4h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM0 5h1v1H0Zm6 0h1v1H6Zm3 0h1v1H9Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm6 0h1v1h-1ZM0 6h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm2 0h1v1H8Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM9 7h1v1H9Zm2 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 8h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm3 0h1v1H6Zm2 0h1v1H8Zm6 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM1 9h1v1H1Zm3 0h1v1H4Zm5 0h1v1H9Zm4 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm4 0h1v1h-1ZM1 10h1v1H1Zm1 0h1v1H2Zm4 0h1v1H6Zm1 0h1v1H7Zm1 0h1v1H8Zm5 0h1v1h-1Zm3 0h1v1h-1Zm3 0h1v1h-1ZM0 11h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm2 0h1v1H7Zm4 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1ZM2 12h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm1 0h1v1H7Zm1 0h1v1H8Zm1 0h1v1H9Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM1 13h1v1H1Zm2 0h1v1H3Zm1 0h1v1H4Zm4 0h1v1H8Zm1 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1ZM1 14h1v1H1Zm3 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm1 0h1v1H7Zm1 0h1v1H8Zm4 0h1v1h-1Zm4 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1ZM0 15h1v1H0Zm3 0h1v1H3Zm1 0h1v1H4Zm3 0h1v1H7Zm1 0h1v1H8Zm1 0h1v1H9Zm3 0h1v1h-1Zm3 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1ZM4 16h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM8 17h1v1H8Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1ZM0 18h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm4 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 19h1v1H0Zm6 0h1v1H6Zm3 0h1v1H9Zm1 0h1v1h-1Zm2 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm4 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1ZM0 20h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm3 0h1v1H9Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm3 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1ZM0 21h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm3 0h1v1h-1Zm1 0h1v1h-1Zm5 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1ZM0 22h1v1H0Zm2 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm2 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm2 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1Zm1 0h1v1h-1ZM0 23h1v1H0Zm6 0h1v1H6Zm2 0h1v1H8Zm1 0h1v1H9Zm1 0h1v1h-1Zm7 0h1v1h-1Zm1 0h1v1h-1Zm2 0h1v1h-1Zm2 0h1v1h-1ZM0 24h1v1H0Zm1 0h1v1H1Zm1 0h1v1H2Zm1 0h1v1H3Zm1 0h1v1H4Zm1 0h1v1H5Zm1 0h1v1H6Zm2 0h1v1H8Zm4 0h1v1h-1Zm2 0h1v1h-1Zm5 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Zm1 0h1v1h-1Z" />
                </svg>
              </div>
              <img src="/img/bazar-logo.png" alt="" />
              <img src="/img/myket-logo.png" alt="" />
            </div>
          </button>
          <button className="left-sidebar-toggle" onClick={leftSidebarToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
            >
              <g
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#9767e1"
                fill="none"
                stroke-linejoin="round"
              >
                <path d="M5.91 20c1.593-1.548 3.748-2.5 6.113-2.5 2.342 0 4.474.933 6.066 2.452M14.121 9.379A3 3 0 1 1 9.88 13.62 3 3 0 0 1 14.12 9.38" />
                <path d="M3.975 17.025A8.93 8.93 0 0 1 3 13c0-4.974 4.026-9 9-9s9 4.026 9 9c0 1.45-.363 2.81-.977 4.023" />
              </g>
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
