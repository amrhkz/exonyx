import React from "react";
import "./Rial_Wallet.css";
import Sidebar_R from "@/app/components/Sidebar_R/sidebar_r";
import Navbar from "@/app/components/Navbar/navbar";
import Sidebar_L from "@/app/components/Sidebar_L/sidebar_L";
import Footer from "@/app/components/Footer/footer";
const RialTransaction = () => {
  return (
    <>
      <Sidebar_R />
      <Navbar />
      <Sidebar_L />
      <div className="section">
        <div className="rial-wallet">
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
              <span>کیف پول تومانی </span>
              <span>لیست تراکنش های تومانی مشاهده میکنید </span>
            </div>
          </div>
          <div className="rial-wallet-list">
            <div className="bottom">
              <div className="top">
                <div className="right">
                  <h2>لیست تراکنش های تومانی</h2>
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
                      <th>نوع</th>
                      <th>مبلغ</th>
                      <th>تاریخ و ساعت ثبت</th>
                      <th>شماره تراکنش</th>
                      <th>وضعیت</th>
                      <th>جزییات</th>
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
      <Footer />
    </>
  );
};

export default RialTransaction;
