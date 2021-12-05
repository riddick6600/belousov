import React from "react";
import Footer from "@components/_App/Footer";

const Custom404 = () => {
  return (
    <div className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <div className="notfound-404">
                <h1>404</h1>
              </div>
              <h3>Страница не найдена</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Custom404;
