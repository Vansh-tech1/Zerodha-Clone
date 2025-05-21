import React from "react";

function OpenAccount() {
  return (
    <div className="text-center p-4 container">
      <div>
        <h2 className="mt-5 mb-4 ">Open a Zerodha account</h2>
        <p className="text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn px-3 btn-primary fs-5 mb-5 mt-1"
          style={{
            margin: "auto",
            borderRadius: "5px",
            backgroundColor: "#387ed1",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
