import React from "react";
import { Fragment } from "react";
import Script from "next/script";
const Footer = () => {
  return (
    <Fragment>
      <footer className="container-fluid bg-dark py-5 px-5  ">
        <div className="container mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-light ">
                <h4>Lagos</h4>
                <hr className="my-6 " />
                <p>
                  {" "}
                  10, Ariola Street, Agbede-meeting, Agric Bus stop, Ikorodu,
                  Lagos
                </p>
              </div>
              {/* <div className="col-md-4 text-light"></div> */}
              <div className="col-md-6 text-light">
                <h4>Port Harcourt</h4>
                <hr className="my-6 " />

                <p>
                  Minikwu, Plaza, Agip Gate, Mile-4, Rumueme, Port
                  Harcourt Rivers State.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <hr className="text-light f-hr" />
        </div>
        <div className="container text-light sub-footer">
          <div>
            <p>(c) 2023 tunafric waste company</p>
            {/* <p>
              Copyright &copy;{" "}
              <Script  id="show-banner">{document.write(new Date().getFullYear())}</Script> Your
              Name All Rights Reserved
            </p> */}
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
