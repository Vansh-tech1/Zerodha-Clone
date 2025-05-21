import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff"}}
    >
      <div className="container " >

        <Link to="/"><img src="media/images/logo.svg" alt="logo" style={{ width: "23%" }} /></Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
          <div className="mx-4"><i class="fa-solid fa-bars text-muted"></i></div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
