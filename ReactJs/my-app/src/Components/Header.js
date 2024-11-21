import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link " to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/content">
                    Content
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/product">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/class1">
                    Class1
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/class2">
                    Class2
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/class3">
                    Class3
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/class4">
                    Class4
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/propsdrilling">
                    PropsDrillingAndContextApi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}
export default Header;