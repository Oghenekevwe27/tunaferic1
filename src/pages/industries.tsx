import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import HeaderComp from "../Components/HeaderComp";

const industries = () => {
  return (
    <Fragment>
      <HeaderComp />
      <div className=" industry ">
        <div className="industry-sub py-5">
          <div className="container mt-4 mb-5">
            <h1 className="text-left font-weight-bold  text-success">
              Industries
            </h1>
            <div className="d-flex ">
              <hr className="hr-sub align-self-center text-success " />
              <p>
                <i className="text-success font-weight-bold ">
                  The Industries we serve
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container late mt-4">
        <div id="healthcare">
          <div className="row">
            <div className="col-md-6 order-lg-1 ">
              <div className="left-div">
                <h2>Healthcare</h2>
                <p>
                  We offer safe and effective waste management solutions for
                  healthcare facilities, including medical waste disposal,
                  sharps management, and pharmaceutical waste management. Our
                  expert team ensures compliance with all regulations while
                  minimizing the impact of medical waste on the environment.
                </p>
              </div>
            </div>
            <div className="col-md-1 order-lg-2"></div>
            <div className="col-md-5 order-lg-3 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="construction">
          <div className="row">
            <div className="col-md-6 order-lg-3  ">
              <div className="left-div">
                <h2>Construction</h2>
                <p>
                  Our waste management solutions for the construction industry
                  help reduce waste, increase recycling rates, and improve site
                  safety. We offer comprehensive waste collection and disposal
                  services, including hazardous waste management and landfill
                  diversion strategies.
                </p>
              </div>
            </div>
            <div className="col-md-1 order-lg-2 "></div>
            <div className="col-md-5 order-lg-1 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="manufacturing">
          <div className="row">
            <div className="col-md-6  ">
              <div className="left-div">
                <h2>Manufacturing</h2>
                <p>
                  We provide waste management services that support the
                  sustainable operations of manufacturing facilities. Our
                  solutions include the safe and efficient handling of
                  industrial waste, as well as recycling and recovery programs
                  for materials like metal, paper, and plastics.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="oilandgas">
          <div className="row">
            <div className="col-md-6 order-lg-3  ">
              <div className="left-div">
                <h2> Oil and Gas</h2>
                <p>
                  We offer specialized waste management services to the oil and
                  gas industry, including the safe and responsible disposal of
                  drilling fluids, production wastes, and other hazardous
                  materials. Our team is trained to manage these complex waste
                  streams and ensure compliance with all applicable regulations.
                </p>
              </div>
            </div>
            <div className="col-md-1 order-lg-2 "></div>
            <div className="col-md-5 order-lg-1 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="agriculture">
          <div className="row">
            <div className="col-md-6 order-lg-1 ">
              <div className="left-div">
                <h2>Agriculture</h2>
                <p>
                  We understand the unique waste management challenges faced by
                  the agriculture industry. Our services include the safe and
                  efficient disposal of organic waste, animal byproducts, and
                  other agricultural waste streams, helping to reduce the
                  environmental impact of farming operations.
                </p>
              </div>
            </div>
            <div className="col-md-1 order-lg-2"></div>
            <div className="col-md-5 order-lg-3 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="financial">
          <div className="row">
            <div className="col-md-6 order-lg-3  ">
              <div className="left-div">
                <h2>Financial</h2>
                <p>
                  Our waste management solutions for the financial industry help
                  reduce waste and improve sustainability while maintaining the
                  highest standards of security and confidentiality. We offer
                  secure document destruction services, as well as electronic
                  waste disposal and recycling programs.
                </p>
              </div>
            </div>
            <div className="col-md-1 order-lg-2 "></div>
            <div className="col-md-5 order-lg-1 ">
              <div className="right-div">
                <img
                  src="/Medical care-pana.png"
                  alt=""
                  className="right-div-image"
                  // className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default industries;
