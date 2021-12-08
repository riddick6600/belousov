import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import { PHONE } from "@constants";

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
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Phone />
              </div>
              <h3></h3>
              <p>
                <Link href={`tel:${PHONE}`}>
                  <a>{PHONE}</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
