import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="iot-main-banner">
      <div className="container">
        <div className="iot-banner-content">
          <h1>Безопасность и видеонаблюдение</h1>
          <p>
            Установим СКУД, обеспечим работу датчиков контроля. Обеспечим
            контроль подозрительного поведения.
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
