"use client";

import "./sidebar_r.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideToggle from "../Side_Toggle/side-toggle";

const Sidebar_R = () => {
  function dropside() {
    document.querySelector(".dropside-menu")?.classList.toggle("active");
  }
  function dropside_2() {
    document.querySelector(".dropside-menu-2")?.classList.toggle("active");
  }
  const pathname = usePathname();
  return (
    <div className="sidebar close">
      <div className="sidebar-content">
        <header>
          <div className="image-text">
            <div className="image">
              <img src="/img/logo.png" alt="logo" />
            </div>
            <div className="text header-text">
              <div className="name">اکس اونیکس</div>
            </div>
          </div>
          <SideToggle />
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link ">
                <Link href={"/"} className={pathname == "/" ? "active" : ""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <g
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4Z" />
                        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18Z" />
                        <path d="M17.73 10.26h0c.49 1.58.29 3.3-.55 4.73M16 8l-2.59 2.59M6.8 15h0c-1.67-2.85-.72-6.52 2.13-8.19a5.974 5.974 0 0 1 4.78-.56" />
                      </g>
                    </g>
                  </svg>
                  <div className="text nav-text">داشبورد</div>
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  href={"/order/crypto"}
                  className={pathname == "/order/crypto" ? "active" : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#9767e1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M4.687 11.437 3 9.75l-1.687 1.687m17.999 1.125L21 14.25l1.688-1.688" />
                      <path d="M21 14.25V12a9 9 0 0 0-9-9 8.979 8.979 0 0 0-7.02 3.375M3 9.75V12a9 9 0 0 0 9 9 8.979 8.979 0 0 0 7.02-3.375" />
                      <path d="M13.534 15h-2.527A1.007 1.007 0 0 1 10 13.992v-1.946h3.534c.809 0 1.466.656 1.466 1.466v.022c0 .81-.656 1.466-1.466 1.466Z" />
                      <path d="M13.179 12.046H10v-2.023C10 9.458 10.458 9 11.023 9h2.156c.822 0 1.488.666 1.488 1.488v.069a1.487 1.487 0 0 1-1.488 1.489ZM11 9H9m2.01 6H9" />
                    </g>
                  </svg>
                  <div className="text nav-text">رمزارز</div>
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  href={"/order/digital"}
                  className={pathname == "/order/digital" ? "active" : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "transparent", fillOpacity: "1" }}>
                      <path
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6.22 5.11A8.938 8.938 0 0 1 12 3a9 9 0 0 1 9 9c0 1.447-.35 2.81-.957 4.021l-2.681-1.34"
                        style={{ fill: "transparent", fillOpacity: "1" }}
                      />
                      <path
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.78 18.89A8.938 8.938 0 0 1 12 21a9 9 0 0 1-9-9c0-1.447.35-2.81.957-4.021l2.681 1.34M12 7v1.25M12 17v-1.25"
                      />
                      <path
                        stroke="#9767e1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M14.487 10a1.87 1.87 0 0 0-1.862-1.75h-1.37a1.755 1.755 0 0 0-.427 3.458l2.343.588a1.755 1.755 0 0 1-.427 3.458h-1.37A1.87 1.87 0 0 1 9.511 14"
                      />
                    </g>
                  </svg>
                  <div className="text nav-text">پرفکت مانی</div>
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  href={"/wallet"}
                  className={pathname == "/wallet" ? "active" : ""}
                >
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
                  <div className="text nav-text">دارایی ها</div>
                </Link>
              </li>
              <li className="nav-link">
                <div
                  className={`drop-toggle ${
                    pathname == "/transaction/rial-wallet" ? "active" : ""
                  } ${
                    pathname == "/transaction/cryptocurrencies" ? "active" : ""
                  }
                  ${
                    pathname == "/transaction/digital-currencies"
                      ? "active"
                      : ""
                  }`}
                  onClick={dropside}
                >
                  <div className="top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M18 8h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1"
                        />
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M5.083 15.417h10.833a2.083 2.083 0 0 0 2.083-2.083v-6.25A2.082 2.082 0 0 0 15.917 5H5.083C3.933 5 3 5.933 3 7.083v6.25c0 1.151.933 2.084 2.083 2.084ZM14.5 8h.5m-9 4.5h.5"
                        />
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11.657 9.103a1.563 1.563 0 1 1-2.211 2.21 1.563 1.563 0 0 1 2.211-2.21"
                        />
                      </g>
                    </svg>
                    <div className="text nav-text">تراکنش ها</div>
                  </div>
                  <div className="dropside-menu">
                    <div className="right">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="left">
                      <ul>
                        <li>
                          <Link href={"/transaction/rial-wallet"}>
                            کیف پول تومانی
                          </Link>
                        </li>
                        <li>
                          <Link href={"/transaction/cryptocurrencies"}>
                            رمزارزها
                          </Link>
                        </li>
                        <li>
                          <Link href={"/transaction/digital-currencies"}>
                            ارزهای الکترونیک
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-link">
                <Link
                  href={"/tickets"}
                  className={pathname == "/tickets" ? "active" : ""}
                >
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
                      d="M18.5 18.564V20.5a.5.5 0 0 1-.854.354l-2.288-2.289M18 9.5h.504A2.496 2.496 0 0 1 21 11.996v4.072a2.496 2.496 0 0 1-2.496 2.496h0m-3.142 0h-2.866A2.496 2.496 0 0 1 10 16.068V15m-1.294-3-2.352 2.353a.5.5 0 0 1-.854-.354V12h-.004A2.496 2.496 0 0 1 3 9.504V5.496A2.496 2.496 0 0 1 5.496 3h7.008A2.496 2.496 0 0 1 15 5.496v4.008A2.496 2.496 0 0 1 12.504 12ZM7 6h3M7 9h1m7 6h2"
                    />
                  </svg>
                  <div className="text nav-text">پشتیبانی</div>
                </Link>
              </li>
              <li className="nav-link">
                <div
                  className={`drop-toggle ${
                    pathname == "/profile/bankCards" ? "active" : ""
                  } ${pathname == "/kyc" ? "active" : ""}
                  ${pathname == "/profile/settings" ? "active" : ""}`}
                  onClick={dropside_2}
                >
                  <div className="top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M16 16h0a2.105 2.105 0 0 0-.528-.769v0h0a2.108 2.108 0 0 0-1.434-.564H9.963h0a2.11 2.11 0 0 0-1.435.564v0h0c-.23.214-.411.477-.528.769"
                        />
                        <circle
                          cx="12"
                          cy="10.25"
                          r="2.25"
                          stroke="#9767e1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </svg>
                    <div className="text nav-text">حساب کاربری</div>
                  </div>
                  <div className="dropside-menu-2">
                    <div className="right">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="left">
                      <ul>
                        <li>
                          <Link href={"/profile/bankCards"}>
                            کارت های بانکی
                          </Link>
                        </li>
                        <li>
                          <Link href={"/kyc"}>سطوح کاربری</Link>
                        </li>
                        <li>
                          <Link href={"/profile/settings"}>تنظیمات</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-link">
                <Link href={"/login"}>
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
                      <path d="M6 15v3h0a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6v0a3 3 0 0 0-3-3H9h0a3 3 0 0 0-3 3s0 0 0 0v3" />
                      <path d="m12 15 3-3-3-3m-9 3h12" />
                    </g>
                    <path fill="none" d="M0 0h24v24H0Z" />
                  </svg>
                  <div className="text nav-text">خروج از حساب کاربری</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_R;
