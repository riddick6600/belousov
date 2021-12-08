import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { NAME, PHONE } from "@constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <div className="single-footer-widget">
              <h3>Поддержка</h3>
              <ul className="list">
                <li>
                  <Link href="/repair">
                    <a>Ремонт</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Digital</h3>
              <ul className="list">
                <li>
                  <Link href="/development">
                    <a>Разработка</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hosting">
                    <a>Хостинг</a>
                  </Link>
                </li>
                <li>
                  <Link href="/phone">
                    <a>Телефония</a>
                  </Link>
                </li>
                <li>
                  <Link href="/design">
                    <a>Дизайн</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Контакты</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/audit">
                    <a>Аудит</a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Контакты</h3>
              <ul className="footer-contact-info">
                <li>
                  <Icon.Mail />
                  <Link href="mailto:admin@za-it.ru">
                    <a>admin@za-it.ru</a>
                  </Link>
                </li>
                <li>
                  <Icon.PhoneCall />
                  <Link href={`tel:${PHONE}`}>
                    <a>{PHONE}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} {NAME}
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/map.png" className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
