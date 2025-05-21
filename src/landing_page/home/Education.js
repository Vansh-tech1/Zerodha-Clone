import React from "react";

function Education() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-4">
        <div className="col-6">
          <img src="media/images/education.svg" alt="education" />
        </div>

        <div
          className="col-6"
          style={{ color: "#424242", paddingRight: "2rem" }}
        >
          <h2 className="mb-3 mt-4">Free and open market education</h2>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
          Varsity {" "}
            <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
          </a>
    
          <p className="mt-4">
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="/" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
          TradingQ&A {" "}
            <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
