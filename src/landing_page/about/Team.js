import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mx-4 mb-5">
        <h2 className="text-center mt-5 mb-5">People</h2>
        <div className="col-5 text-center mt-5 mb-5">
          <img src="media/images/nithinKamath.jpg" alt="ceo" id="ceoImage" />
          <h5 className="text-center mt-3">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-7 mt-5 ceo-Bio">
          <p className="text-muted" >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted">Playing basketball is his zen.</p>

          <p className="text-muted">Connect on <Link to="/">Homepage</Link> / <Link>TradingQnA</Link> / <Link>Twitter</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
