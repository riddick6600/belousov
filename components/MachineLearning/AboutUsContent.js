import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <div className="about-area pt-0 ptb-80">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ml-about-img">
              <img src="/images/about4.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ml-about-content">
              {/* <span className="sub-title">ПО и оборудование</span> */}
              <h2>ПО и оборудование</h2>
              <div className="bar"></div>
              <p>
                Инсталляция серверного и пользовательского программного
                обеспечения и оборудования
              </p>
              <p>Установка ОС Windows, Linux</p>
              <p>Сборка компьютеров</p>
              <p>Подготовка и ремонт периферийной техники</p>
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
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default AboutUsContent;
