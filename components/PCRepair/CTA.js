import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="repair-cta-area bg-0f054b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cta-repair-content">
              <h3>Поможем быстро восстановить работу!</h3>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cta-repair-img">
              <img src="/images/man-and-women.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="circle-box">
        <img src="/images/circle.png" alt="image" />
      </div>
      <div className="cta-shape">
        <img src="/images/cta-shape.png" alt="image" />
      </div>
    </div>
  );
};

export default CTA;
