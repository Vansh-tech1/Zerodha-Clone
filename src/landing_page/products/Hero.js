import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5 py-5">
      <div>
        <h1 className="mb-3" style={{ fontSize: "44px", color: "#424242" }}>
          Zerodha Products
        </h1>
        <p
          className=" mb-3"
          style={{ color: "#424242", fontSize: "20px" }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings {"  "}
            <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
