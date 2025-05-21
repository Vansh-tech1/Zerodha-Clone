import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div style={{ backgroundColor: "#387ed1", height: "25rem" }}>
      <div className="container">
        <div className="row hero-head align-items-end">
          <div className="col mt-5">
            {" "}
            <a href="/" id="hero-head-link">
              Support Portal
            </a>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col mt-5 ">
            <a href="/" id="hero-head-link-right">
              Track tickets
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col p-2">
            <h4>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input placeholder="Eg: how do i activate F&O , why is my order getting rejected ... "id="hero-input"/>
            <div className="head-links-main mt-3">
            <a href="/" >Track account opening</a>
            <a href="/" > Track segment activation</a>
            <a href="/" > Intraday margins</a>
            <br/>
            <br/>
            <a href="/"  > Kite user manual</a>
            </div>
            
          </div>
          <div className="col fs-4 p-3">
            <p>Featured</p>
            <ol className="featured-links">
                <li><a href="/">Change in expiry day of NSE derivative contracts<br/> from April 04, 2025 [Withheld]</a></li>
                <li> <a href="/">Trading holiday on account of Dr. Baba Saheb<br/> Ambedkar Jayanti on April 14, 2025</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
