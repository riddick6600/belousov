import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="repair-main-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>ПО и оборудование</h1>
              <p>
                Подберем и установим любое ПО под вашу задачу и подготовим
                оборудование.
              </p>

              <Link href="/contact">
                <a className="btn btn-primary">Перезвоните мне</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <img
                src="/images/repair-banner-image/repair-banner-img.png"
                alt="image"
              />

              <img
                src="/images/repair-banner-image/repair-shape1.png"
                className="animate__animated animate__zoomIn animate__delay-0.6s"
                alt="image"
              />

              <img
                src="/images/repair-banner-image/repair-shape2.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.6s"
                alt="image"
              />

              <img
                src="/images/repair-banner-image/repair-shape-circle.png"
                className="rotateme"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
