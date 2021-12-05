import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Services = () => {
  return (
    <div className="repair-services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>Наш сервис</h2>
          <div className="bar"></div>
          <p>Занимаемся вашими делами 24/7</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg6">
              <div className="icon">
                <i className="flaticon-hard-disk"></i>
              </div>

              <h3>Восстановление данных</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg2">
              <div className="icon">
                <i className="flaticon-idea"></i>
              </div>

              <h3>Сервера</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg4">
              <div className="icon">
                <i className="flaticon-update-arrows"></i>
              </div>

              <h3>Сетевое оборудование</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg3">
              <div className="icon">
                <i className="flaticon-layout"></i>
              </div>

              <h3>Програмное обеспечение</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg5">
              <div className="icon">
                <i className="flaticon-smartphone"></i>
              </div>

              <h3>Смартфоны</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-repair-services bg1">
              <div className="icon">
                <i className="flaticon-monitor"></i>
              </div>

              <h3>Ноутбуки</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
