import React from "react";
import "./createTicket.css";
function CreateTicket() {
  return (
    <div className="container p-5">
      <div className="row ticket-links ">
        <h2 className="text-muted fs-4 mb-5 ">
          To create a ticket, select a relevant topic
        </h2>

        <div className="col">
          {" "}
          <h3 className="fs-4">
          <i class="fa-solid fa-plus fs-5"></i> Account Opening
          </h3>
          <a href="/">Resident individual </a>
          <br />
          <a href="/">Minor </a>
          <br />
          <a href="/">Non Resident Indian (NRI) </a>
          <br />
          <a href="/">Company, Partnership, HUF and LLP </a>
          <br />
          <a href="/">Glossary </a>
        </div>
        <div className="col">
          <h3 className="fs-4">
            {" "}
            <i class="fa-regular fa-user fs-5"></i> Your Zerodha Account
          </h3>
          <a href="/">Your Profile</a>
          <br />
          <a href="/">Account modification </a>
          <br />
          <a href="/">
            Client Master Report (CMR) and Depository 
          </a>
          <br/>
          <a href="/">
            Participant (DP)
          </a>
          <br />
          <a href="/">Nomination</a>
          <br />
          <a href="/">Transfer and conversion of securities </a>
        </div>
        <div className="col">
          <h3 className="fs-4">
            {" "}
            <i class="fa-solid fa-chart-simple fs-5"></i> Kite
          </h3>
          <a href="/">IPO</a>
          <br />
          <a href="/">Trading FAQs</a>
          <br />
          <a href="/">Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href="/">Charts and orders</a>
          <br />
          <a href="/">Alerts and Nudges </a>
          <br />
          <a href="/">General</a>
        </div>
      </div>
      <div className="row ticket-links mt-5">
        <div className="col">
          {" "}
          <h3 className="fs-4">
          <i class="fa-regular fa-credit-card fs-5"></i> Funds
          </h3>
          <a href="/">Add money</a>
          <br />
          <a href="/">Withdraw money </a>
          <br />
          <a href="/">Add bank accounts</a>
          <br />
          <a href="/">eMandates</a>
        </div>
        <div className="col">
          <h3 className="fs-4">
            {" "}
            <i class="fa-solid fa-magnifying-glass fs-5" ></i> Console
          </h3>
          <a href="/">Portfolio</a>
          <br />
          <a href="/">Corporate actions</a>
          <br />
          <a href="/">Funds statement</a>
          <br />
          <a href="/">Reports</a>
          <br />
          <a href="/">Profile</a>
          <br />
          <a href="/">Segments</a>
        </div>
        <div className="col">
          <h3 className="fs-4">
            {" "}
            <i class="fa-solid fa-coins fs-5"></i> Coin
          </h3>
          <a href="/">Understanding mutual funds and Coin</a>
          <br />
          <a href="/">Coin app</a>
          <br />
          <a href="/">Coin web</a>
          <br />
          <a href="/">Transactions and reports</a>
          <br />
          <a href="/">National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
