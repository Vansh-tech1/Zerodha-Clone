import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mx-5 mt-5">
        <div className="col-1"></div>
        <div className="col-4 px-4 mt-5 pt-4 pt-5">
          <div className="pt-5">
            <h1 className="mb-4 mt-5">{productName}</h1>
            <p style={{ lineHeight: "1.92rem", wordSpacing: "0.1rem" }}>
              {productDescription}
            </p>

            <div className="p-0">
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more {"  "}
                <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-7 mt-5">
          <img src={imageURL} alt="img" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
