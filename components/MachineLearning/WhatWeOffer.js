import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const WhatWeOffer = () => {
  return (
    <div className="solutions-area ptb-80">
      <div className="container">
        <div className="section-title">
          {/* <span className="sub-title">Что мы предлагаем</span> */}
          <h2>Наши решения</h2>
          <div className="bar"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-solutions-box">
              <div className="icon">
                <img src="/images/icon4.png" alt="image" />
              </div>
              <h3>ПО и оборудование</h3>
              <p>Подберем, установим ПО и подготовим оборудование</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-solutions-box">
              <div className="icon">
                <img src="/images/icon5.png" alt="image" />
              </div>
              <h3>Сети и автоматизация</h3>
              <p>
                Развернем и настроим серверы, Wi-Fi, ЛВС, видеоконференцсвязь.
                Устраним рутину развертывания рабочих мест
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-solutions-box">
              <div className="icon">
                <img src="/images/icon6.png" alt="image" />
              </div>
              <h3>Безопасность и видеонаблюдение</h3>
              <p>Установим СКУД, обеспечим работу датчиков</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-solutions-box">
              <div className="icon">
                <img src="/images/icon7.png" alt="image" />
              </div>
              <h3>Круглосуточная поддержка</h3>
              <p>Любая ИТ-поддержка 24/7 онлайн и с выездом</p>
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

export default WhatWeOffer;
