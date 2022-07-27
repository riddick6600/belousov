import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
              <h3>Сетевая инфраструктура и автоматизация</h3>
              <p>Установка серверного оборудования</p>
              <p>Подключение Wi-Fi и проводного доступа</p>
              <p>Установка и настройка сетевого оборудования и служб</p>
              <p>Автоматизация, мониторинг серверных служб и ролей</p>
            </div>

            <div className="col-lg-6 iot-features-image">
              <img
                src="/images/iot-features-image/iot-feature-image1.png"
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="iot-features-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-image">
              <img
                src="/images/iot-features-image/iot-feature-image2.png"
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="image"
              />
            </div>

            <div className="col-lg-6 iot-features-content">
              <h3>Безопасность и видеонаблюдение</h3>
              <p>Установка СКУД</p>
              <p>Настройка пропускных точек, отладка датчиков контроля</p>
              <p>Установка видеонаблюдения</p>
              <p>Настройка автоматической системы оповещения</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
