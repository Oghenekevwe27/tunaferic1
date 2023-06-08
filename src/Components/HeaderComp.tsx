import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
// import Header from "next/headers"

const HeaderComp = () => {
  return (
    <Fragment>
      <header className=" mt-1 d-flex justify-content-between container">
        {/* <nav className="d-flex justify-content-between container"> */}
        <div>
          <Image src="/logo.svg" alt="tunafricLogo" width={100} height={100} />
        </div>
        <div>
          <div className="d-flex flex-column justify-content-between  ">
            <div>
              {/* <div className="d-flex justify-content-between ">
                <button
                  type="button"
                  className="btn btn-success btn-outline-success  me-5 text-primary"
                >
                  Sign Up
                </button>

                <button type="button" className="btn btn-outline-primary">
                  Log in
                </button>
              </div> */}
            </div>
            <div className="mt-3 ">
              {/* <p className="mt-3">Request a Quote</p> */}
              <a className=" home text-success" href="#">
                <b> Request a Quote</b>
              </a>
            </div>
            <div>
              <a className="phone" href="tel:+23468681342">
                Call: 08068681342
              </a>
            </div>
          </div>
        </div>
        {/* </nav> */}
      </header>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container-fluid">
            <div className="container ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse bar "
                id="navbarSupportedContent"
              >
                <div>
                  <Link href="/" className="phone bar home">
                    HOME
                  </Link>
                </div>
                <li className="nav-item dropdown list-unstyled nav-li ">
                  <Link
                    className="nav-link  "
                    href="/services"
                    // id="navbarDropdown"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    SERVICES
                  </Link>
                  {/* <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/services/#medicalwaste"
                      >
                        Medical waste disposal
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/services/#v-pills-profile-tab "
                      >
                        Chemical waste disposal
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Pharmaceutical waste disposal
                      </Link>
                    </li>{" "}
                    <li>
                      <Link className="dropdown-item" href="#">
                        Waste supplies
                      </Link>
                    </li>{" "}
                    <li>
                      <Link className="dropdown-item" href="#">
                        Waste Audit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Waste to Wealth Programs
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Training
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item dropdown list-unstyled nav-li">
                  <Link
                    className="nav-link "
                    href="/industries"
                    // id="navbarDropdown"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    INDUSTRIES
                  </Link>
                  {/* <ul
                    className="dropdown-menu ul"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#healthcare"
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#construction"
                      >
                        Construction
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#manufacturing"
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#oilandgas"
                      >
                        Oil and gas
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#agriculture"
                      >
                        Agriculture
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/industries/#financial"
                      >
                        Financial
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item dropdown list-unstyled">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    WAREHOUSE
                  </a>
                  <ul
                    className="dropdown-menu ul"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Waste Collection Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cash Back
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown list-unstyled">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CUSTOMERS
                  </a>
                  <ul
                    className="dropdown-menu ul"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Request for manifest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown list-unstyled">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABOUT US
                  </a>
                  <ul
                    className="dropdown-menu ul"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Affilation
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item dropdown list-unstyled">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ACCOUNTS
                  </a>
                  <ul
                    className="dropdown-menu ul"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </Fragment>
  );
};

export default HeaderComp;
