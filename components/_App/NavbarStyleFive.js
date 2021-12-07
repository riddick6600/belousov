import React, { useState } from "react";
import Link from "@utils/ActiveLink";
import * as Icon from "react-feather";

const NavbarStyleFive = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom navbar-style-three">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/hosting" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Хостинг
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Разработка
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/machine-learning" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Телефония
                    </a>
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link href="/bigdata-analytics" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Аудит
                    </a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Контакты
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarStyleFive;
