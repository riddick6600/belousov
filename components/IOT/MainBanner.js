import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="iot-main-banner">
      <div className="container">
        <div className="iot-banner-content">
          <span>SIP телефония</span>
          <h1>Телефония для профессионалов</h1>
          <p>
            Настроим АТС, SIP
            <br />
            Создадим скрипты, ботов
          </p>

          <Link href="/contact">
            <a className="btn btn-primary">Перезвоните мне</a>
          </Link>
        </div>

        <div className="iot-banner-image">
          <img
            src="/images/iot-banner-image/iot-main-img1.png"
            className="animate__animated animate__fadeInUp animate__delay-0.8s"
            alt="image"
          />

          <img
            src="/images/iot-banner-image/iot-shape1.png"
            className="animate__animated animate__zoomIn"
            alt="image"
          />
        </div>

        <div className="animate-border">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
