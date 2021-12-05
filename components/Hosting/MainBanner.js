import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="hosting-main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hosting-banner-content">
                  <h1>
                    Лучший хостинг <br /> для ваших приложений
                  </h1>
                  <ul>
                    <li>Подбор домена</li>
                    <li>Бесплатный SSL сертификат</li>
                    <li>Поддержка 24/7</li>
                    <li>SLA 99.666 %</li>
                  </ul>

                  <p>TODO УКАЗАТЬ ЦЕНЫ</p>

                  <Link href="/contact">
                    <a className="btn btn-primary">Перезвоните мне</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="hosting-banner-image">
                  <img
                    src="/images/hosting-banner-image/hosting-shape1.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape2.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape3.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape4.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape5.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape6.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape7.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape8.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-shape9.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/hosting-banner-image/hosting-static-main.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.7s"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default MainBanner;
