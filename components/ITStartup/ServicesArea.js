import React from "react";
import * as Icon from "react-feather";

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Поддержка</h2>
                <div className="bar"></div>
                <p>Service Desk</p>
                <p>Техподдержка 1С</p>
                <p>Выезды на объект</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src="/images/services-right-image/book-self.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s"
                alt="book-self"
              />

              <img
                src="/images/services-right-image/box.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                data-wow-delay="0.6s"
                alt="box"
              />

              <img
                src="/images/services-right-image/chair.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                alt="chair"
              />

              <img
                src="/images/services-right-image/cloud.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="cloud"
              />

              <img
                src="/images/services-right-image/cup.png"
                className="animate__animated animate__bounceIn animate__delay-0.2s"
                alt="cup"
              />

              <img
                src="/images/services-right-image/flower-top.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s"
                alt="flower"
              />

              <img
                src="/images/services-right-image/head-phone.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="head-phone"
              />

              <img
                src="/images/services-right-image/monitor.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="monitor"
              />

              <img
                src="/images/services-right-image/mug.png"
                className="animate__animated animate__rotateIn animate__delay-0.2s"
                alt="mug"
              />

              <img
                src="/images/services-right-image/table.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="table"
              />

              <img
                src="/images/services-right-image/tissue.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="tissue"
              />

              <img
                src="/images/services-right-image/water-bottle.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="water-bottle"
              />

              <img
                src="/images/services-right-image/wifi.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                data-wow-delay="0.6s"
                alt="wifi"
              />

              <img
                src="/images/services-right-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />

              <img
                src="/images/services-right-image/service-right-main-pic.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
