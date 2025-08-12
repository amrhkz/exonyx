"use client";
import "./sidebar_L.css";

const Sidebar_L = () => {
    function leftSidebarToggle() {
        document.querySelector(".left-sidebar")?.classList.toggle("close");
      }
  return (
    <div className="left-sidebar">
      <div className="close-toggle" onClick={leftSidebarToggle}>
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
      <div className="menu-content">
        <div className="profile-info">
          <div className="profile-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#9767e1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.482"
              >
                <path d="M5 20v0a4.447 4.447 0 0 1 4.447-4.447h5.106A4.447 4.447 0 0 1 19 20v0" />
                <path
                  stroke-width="1.5"
                  d="M15.005 5.245a4.25 4.25 0 1 1-6.01 6.01 4.25 4.25 0 0 1 6.01-6.01"
                />
              </g>
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </div>
          <p>09027210832</p>
          <span>احراز هویت نشده</span>
        </div>
        <ul>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M0 0h24v24H0V0Z" />
                  <path
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M18.954 21H5.046a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h13.908a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2Z"
                  />
                  <path
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m4.5 9a2.383 2.383 0 0 0-.594-.866v0a2.367 2.367 0 0 0-1.614-.634H9.708c-.6 0-1.174.227-1.614.634v0c-.26.241-.463.537-.594.866M4.782 6V5a2 2 0 0 1 2-2h10.435a2 2 0 0 1 2 2v1"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p>اطلاعات هویتی</p>
              <p>مشخصات و مدارک مورد نیاز احراز هویت</p>
              <button>تکمیل احراز هویت</button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="mr-auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m14 8-4 4 4 4"
              />
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </li>
          <hr />
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M0 0h24v24H0Z" />
                  <path
                    stroke="#9767e1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15.643 9v8M20 17V9m-6 11h8v-1l-1-2h-9m-2.368 4H3.474h0A.474.474 0 0 1 3 20.526s0 0 0 0v-.384h0a1.989 1.989 0 0 1 1.984-1.984h3.137a1.989 1.989 0 0 1 1.984 1.984v.384h0a.474.474 0 0 1-.473.474Zm-3.079-5.211h0a1.895 1.895 0 1 1 .007 0ZM4 9h18V5.928L13 2 4 5.928V9z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p>اطلاعات هویتی</p>
              <p>مشخصات و مدارک مورد نیاز احراز هویت</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="mr-auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m14 8-4 4 4 4"
              />
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </li>
          <hr />
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                data-name="Layer 3"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#9767e1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.582 9.353A8.843 8.843 0 0 1 21 12a9 9 0 1 1-9-9 8.843 8.843 0 0 1 2.647.418M21 4.274l-1.988 1.988-1.275-1.275"
                />
                <path
                  fill="none"
                  stroke="#9767e1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.5 10.18v1.273a5.625 5.625 0 0 0 3.65 5.266l.652.245a.563.563 0 0 0 .396 0l.652-.245a5.625 5.625 0 0 0 3.65-5.266V10.18a1.125 1.125 0 0 0-.79-1.074L12.337 8.05a1.125 1.125 0 0 0-.672 0L8.29 9.106a1.125 1.125 0 0 0-.79 1.074Z"
                />
                <path fill="none" d="M0 0h24v24H0Z" />
              </svg>
            </div>
            <div>
              <p>اطلاعات هویتی</p>
              <p>مشخصات و مدارک مورد نیاز احراز هویت</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="mr-auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m14 8-4 4 4 4"
              />
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </li>
          <hr />
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#3c3f48"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M6 15v3h0a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6v0a3 3 0 0 0-3-3H9h0a3 3 0 0 0-3 3s0 0 0 0v3" />
                  <path d="m12 15 3-3-3-3m-9 3h12" />
                </g>
                <path fill="none" d="M0 0h24v24H0Z" />
              </svg>
            </div>
            <div>
              <p>اطلاعات هویتی</p>
              <p>مشخصات و مدارک مورد نیاز احراز هویت</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="mr-auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m14 8-4 4 4 4"
              />
              <path fill="none" d="M0 0h24v24H0Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar_L;
