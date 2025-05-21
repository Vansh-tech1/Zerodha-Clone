import "./hero.css";
import React from "react";
function Hero() {
  return (
    <div className="container">
        <div className="mt-5 p-5 header-cont text-center ">
          <h1 className="mb-3" style={{ fontSize: "44px", color: "#424242" }}>
            Charges
          </h1>
          <h5 className="fs-4" style={{ color: "#9b9b9b" }}>
            List of all charges and taxes
          </h5>
        </div>
        <div className="row text-center hero-cont p-4">
          <div className="col p-3">
            <img src="media\images\pricingMF.svg" alt="price img" />
            <h2 className="mb-4" style={{color: "#424242" }}>Free equity delivery</h2>
            <p  style={{color: "#666" }}>
              All equity delivery investments (NSE, BSE), <br/> are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col p-3">
            {" "}
            <img src="media\images\intradayTrades.svg" alt="price img" />
            <h2 className="mb-4" style={{color: "#424242" }}>Intraday and F&O trades</h2>
            <p style={{color: "#666" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per <br/> executed order on
              intraday trades across <br/> equity, currency, and commodity trades.
              Flat <br/> ₹20 on all option trades.
            </p>
          </div>
          <div className="col p-3">
            {" "}
            <img src="media\images\pricingMF.svg" alt="price img" />
            <h2 className="mb-4" style={{color: "#424242" }}>Free direct MF</h2>
            <p style={{color: "#666" }}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Hero;
