import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container px-5">
       
      <div className="row mx-5 mt-3">
        <div className="col-7 mt-5 " style={{marginLeft:"5rem"}} >
          <img src={imageURL} alt="img" style={{width:"80%"}}/>
        </div>
        
        <div className="col-4 px-4 mt-5 pt-4">
          <h1 className="mb-4">{productName}</h1>
          <p style={{lineHeight:"1.92rem", wordSpacing:"0.1rem"}}>{productDescription}</p>
          <div className="row mb-4 px-2">
            <div className="col p-0" >
              <a
                href={tryDemo}
                style={{ textDecoration: "none",paddingLeft:"4px"}}
              >
                Try Demo {"  "}
                <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
              </a>
            </div>
            <div className="col p-0">
              <a
                href={learnMore}
                style={{ textDecoration: "none",}}
              >
                Learn more {"  "}
                <i class="fa fa-arrow-right" style={{ color: "#387ed1" }}></i>
              </a>
            </div>
          </div>

          <a href={googlePLay} style={{marginRight:"2.3rem"}}>
            <img src="media\images\googlePlayBadge.svg" alt="googleplay" />
          </a>
          <a href={appStore}>
            <img src="media\images\appstoreBadge.svg" alt="googleplay" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
