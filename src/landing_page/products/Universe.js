import React from "react";

function Universe() {
  return (
    <div className="container text-center p-5">
      <div className="mb-5 text-center mt-5 pt-5">
        <p style={{ fontSize: "22px", color: "#424242" }}>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="text-center mt-5 pt-1 mb-5 ">
        <h2 className="p-4" style={{ fontSize: "32px", color: "#424242" }}>
          The Zerodha Universe
        </h2>
        <p style={{ fontSize: "18px", color: "#424242" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row pt-4 p-4">
        <div className="col text-center">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "50%" }}
            alt="img"
          />
          <p
            style={{ fontSize: "13px", color: "#9b9b9b" }}
            className="mx-5 p-2"
          >
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
          <img
            src="media\images\streakLogo.png"
            style={{ width: "50%" }}
            alt="img"
            className="mt-2"
          />
          <p
            style={{ fontSize: "12px", color: "#9b9b9b" }}
            className="mx-5 p-2"
          >
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "65%" }}
            alt="img"
          />
          <p
            style={{ fontSize: "12px", color: "#9b9b9b" }}
            className="mx-5 p-2"
          >
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
          <img
            src="media\images\smallcaseLogo.png"
            style={{ width: "60%" }}
            className="mt-3"
            alt="img"
          />
          <p
            style={{ fontSize: "12px", color: "#9b9b9b" }}
            className="mx-5 p-2 mt-1"
          >
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col text-center pt-1">
          <img
            src="media\images\tijoriLogo.png"
            style={{ width: "35%" }}
            alt="img"
          />
          <p
            style={{ fontSize: "12px", color: "#9b9b9b" }}
            className="mx-5 p-2"
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
          <img
            src="media\images\dittoLogo.png"
            style={{ width: "40%" }}
            className="mt-4"
            alt="img"
          />
          <p
            style={{ fontSize: "12px", color: "#9b9b9b" }}
            className="mx-4 p-2 mt-1"
          >
            Personalized advice on life <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
      </div>
      <div></div>
      <button
        className="p-2 btn  btn-primary fs-5 mb-5 mt-4"
        style={{
          width: "16%",
          margin: "auto",
          borderRadius: "5px",
          backgroundColor: "#387ed1",
        }}
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
