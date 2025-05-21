import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row p-4" style={{ color: "#424242", paddingRight: "2rem" }}>
        <div className="col-5">
          <h1 className="mb-3 ">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
            See Pricing{" "}
            <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="row text-center">
            <div className="col-6 border p-3 ">
              <h2 >₹ 0</h2>
              <p className="mt-3 text-muted">free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border p-3">
              <h2>₹ 20</h2>
              <p className="mt-3 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
