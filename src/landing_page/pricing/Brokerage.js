import React from "react";

function Brokerage() {
  return (
    <div className="container text-center">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8">
          <a href="." style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-4">Brokerage Calculator</h3>
          </a>
          <ul style={{textAlign:"left", lineHeight:"2.5",color:"#666"}}>
            <li>
              Call & Trade and RMS auto squareoff : Additional charges of ₹50 GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies contract notes,if required, shall be charged ₹20
              per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="." style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
