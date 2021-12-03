import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <div className="contact-info-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3></h3>
              <p>
                <a href="mailto:admin@za-it.ru">admin@za-it.ru</a>
              </p>
              <p>
                <a href="mailto:support@za-it.ru">support@za-it.ru</a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Phone />
              </div>
              <h3></h3>
              <p>
                <a href="tel:+7 903 295-02-34">+7 903 295-02-34</a>
              </p>
              <p>
                <a href="tel:+7 999 823-12-00">+7 999 823-12-00</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
