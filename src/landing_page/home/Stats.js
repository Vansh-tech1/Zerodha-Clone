import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p">
      <div className="row ">
        <div
          className="col-6 mt-5 p-5"
          style={{ color: "#424242", paddingRight: "2rem" }}
        >
          <h1 className="mb-5" style={{color: "#424242" }}>
            Trust With Cofidence
          </h1>
          <h4 className="mb-4">Customer-first always</h4>
          <p style={{ fontSize: "16px" }} className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4 className="mb-4">No spam or gimmicks</h4>
          <p style={{ fontSize: "16px" }} className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4 className="mb-4">The Zerodha universe</h4>
          <p style={{ fontSize: "16px" }} className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mb-4">Do better with money</h4>
          <p style={{ fontSize: "16px"}} className="text-muted">
            With initiatives like <a href="/">Nudge</a> and{" "}
            <a href="/">Kill Switch</a>, we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 mt-5 p-5 ">
          <img
            src="media/images/ecosystem.png"
            alt="ecosys"
            style={{ width: "85%", marginLeft: "4rem" }}
          />
          <div style={{ textAlign: "center" }}>
            <a href="/" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
              Explore our products <i class="fa fa-arrow-right" style={{color:"#387ed1"}} ></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
              Try Kite demo  <i class="fa fa-arrow-right" style={{color:"#387ed1"}} ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
