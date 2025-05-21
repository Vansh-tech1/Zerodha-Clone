import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-4 container">
      <div>
        <h2 className="mt-5 mb-4 ">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the Page you are looking for does not exist.
        </p>
        <Link to="/"><button
          className="btn px-3 btn-primary fs-5 mb-5 mt-1"
          style={{
            margin: "auto",
            borderRadius: "5px",
            backgroundColor: "#387ed1",
          }}
        >
          Back Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
