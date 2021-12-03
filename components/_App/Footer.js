import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/it-startup">
                  <a>
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Компания</h3>
              <ul className="list">
                <li>
                  <Link href="/hosting">
                    <a>Хостинг</a>
                  </Link>
                </li>
                <li>
                  <Link href="/it-startup">
                    <a>Разработка</a>
                  </Link>
                </li>
                <li>
                  <Link href="/machine-learning">
                    <a>Телефония</a>
                  </Link>
                </li>
                <li>
                  <Link href="/bigdata-analytics">
                    <a>Аудит</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Поддержка</h3>
              <ul className="list">
                <li>
                  <Link href="/contacts">
                    <a>Контакты</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Контакты</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.Mail />
                  <a href="mailto:admin@za-it.ru">admin@za-it.ru</a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  <a href="tel:+7 903 295-02-34">+7 903 295-02-34</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>Copyright &copy; {currentYear} ИП Белоусов</p>
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
