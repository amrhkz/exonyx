"use client";
import Sidebar_L from "../components/Sidebar_L/sidebar_L";
import Sidebar_R from "../components/Sidebar_R/sidebar_r";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "./Wallet.css";

const Wallet = () => {
  function ListMode(){
    document.querySelector(".list-changer")?.classList.add("active");
    document.querySelector(".card-changer")?.classList.remove("active");
  }
  function CardMode(){
    document.querySelector(".card-changer")?.classList.add("active");
    document.querySelector(".list-changer")?.classList.remove("active");
  }
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="wallet">
          <div className="title">
            <div className="right">
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
                  d="M17 7V6a2 2 0 0 0-2-2H5.5A2.5 2.5 0 0 0 3 6.5v12A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V9a2 2 0 0 0-2-2H3m14 7h-2"
                />
              </svg>
            </div>
            <div className="left">
              <span>دارایی ها </span>
              <span>دارایی کل (موجودی تومانی + معادل تومانی موجودی ارزی) </span>
            </div>
          </div>
          <div className="balance">
            <div className="right">
              <div className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  data-name="Layer 3"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M24 24H0V0h24Z" />
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
              </div>
              <div className="left">
                <span>ارزش کل دارایی ارزی شما به تومان : </span>
                <span>0.000 تومان </span>
              </div>
            </div>
            <div className="left">
              <div className="right">
                <div className="right">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      className="mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M5 12h14m-9-5-5 5m5 5-5-5"
                      />
                      <path fill="none" d="M0 0h24v24H0Z" />
                    </svg>
                  </div>
                  <div className="left">
                    <span>0</span>
                    <span>واریز</span>
                  </div>
                </div>
                <div className="left">
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      className="mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M5 12h14m-9-5-5 5m5 5-5-5"
                      />
                      <path fill="none" d="M0 0h24v24H0Z" />
                    </svg>
                  </div>
                  <div className="left">
                    <span>0</span>
                    <span>واریز</span>
                  </div>
                </div>
              </div>
              <div className="left">
                <button>واریز</button>
                <button>برداشت</button>
              </div>
            </div>
          </div>
          <div className="wallet-list">
            <div className="top">
              <div className="right">
                <h2>لیست کیف پول شما</h2>
              </div>
              <div className="left">
                <button className="list-changer active" onClick={ListMode}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#9767e1"
                  >
                    <path
                      d="M2 8h2v2H2z"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      d="M7 10h24a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path
                      d="M2 14h2v2H2z"
                      className="clr-i-outline clr-i-outline-path-3"
                    />
                    <path
                      d="M31 14H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2Z"
                      className="clr-i-outline clr-i-outline-path-4"
                    />
                    <path
                      d="M2 20h2v2H2z"
                      className="clr-i-outline clr-i-outline-path-5"
                    />
                    <path
                      d="M31 20H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2Z"
                      className="clr-i-outline clr-i-outline-path-6"
                    />
                    <path
                      d="M2 26h2v2H2z"
                      className="clr-i-outline clr-i-outline-path-7"
                    />
                    <path
                      d="M31 26H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2Z"
                      className="clr-i-outline clr-i-outline-path-8"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </button>
                <button className="card-changer" onClick={CardMode}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#ead9fd"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19 13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3ZM8 13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3Zm11 2h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM8 15H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM8 2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3Zm11 0a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3ZM8 4H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm11 0h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bottom">
              <div className="top">
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
                      <th></th>
                      <th>ارز</th>
                      <th>قیمت جهانی</th>
                      <th>تغییرات 24 ساعت</th>
                      <th>موجودی شما</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wallet;
