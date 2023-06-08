import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import HeaderComp from "../Components/HeaderComp";

const services = () => {
  return (
    <Fragment>
      <HeaderComp />
      <div className=" industry ">
        <div className="industry-sub py-5">
          <div className="container mt-4 mb-5">
            <h1 className="text-left font-weight-bold  text-success">
              Services
            </h1>
            <div className="d-flex ">
              <hr className="hr-sub align-self-center text-success " />
              <p>
                <i className="text-success font-weight-bold ">
                  The services we render
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container mt-5 service-page">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3 bg-danger"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active border my-2 mx-2 text-dark "
              id="v-pills-home-tab medicalwaste"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Medical waste disposal
            </button>
            <button
              className="nav-link  border my-2 mx-2 text-dark "
              id="v-pills-fulfilment-tab  "
              data-bs-toggle="pill"
              data-bs-target="#v-pills-fulfilment"
              type="button"
              role="tab"
              aria-controls="v-pills-fulfilment"
              aria-selected="true"
            >
              Warehouse Fulfilment
            </button>
            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-profile-tab chemicalwaste"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Chemical waste disposal
            </button>
            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Pharmacetuical waste disposal
            </button>
            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-supplies-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-supplies"
              type="button"
              role="tab"
              aria-controls="v-pills-supplies"
              aria-selected="false"
            >
              waste supplies
            </button>

            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-audit-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-audit"
              type="button"
              role="tab"
              aria-controls="v-pills-audit"
              aria-selected="false"
            >
              waste audit
            </button>

            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-wealth-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-wealth"
              type="button"
              role="tab"
              aria-controls="v-pills-wealth"
              aria-selected="false"
            >
              Waste to Wealth Programs
            </button>

            <button
              className="nav-link border my-2 mx-2 text-dark"
              id="v-pills-training-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-training"
              type="button"
              role="tab"
              aria-controls="v-pills-training"
              aria-selected="false"
            >
              Training
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="container">
                <div
                // className="row"
                >
                  <div
                  //  className="col-md-6"
                  >
                    <div
                    // className="service-leftdiv"
                    >
                      <img
                        src="/Hospital building-bro.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  <div
                  // className="col-md-5"
                  >
                    <div className="mt-5 text-justify">
                      <h3>Medical Waste disposal</h3>
                      <p className="p-services">
                        Our medical waste disposal services are designed to help
                        healthcare facilities and other organizations safely
                        manage and dispose of medical waste. We offer
                        comprehensive solutions for sharps disposal, infectious
                        waste management, and pharmaceutical waste disposal, all
                        of which are designed to minimize the impact of medical
                        waste on the environment.{" "}
                      </p>{" "}
                      <p>
                        {" "}
                        Our team of waste management experts is highly trained
                        and equipped to handle all types of medical waste
                        streams. We work closely with our clients to develop
                        customized waste management plans that meet their unique
                        needs and requirements, ensuring compliance with all
                        applicable regulations.
                      </p>{" "}
                      <p>
                        {" "}
                        In addition to our medical waste disposal services, we
                        also offer a range of complementary solutions, including
                        on-site training and compliance support. Our goal is to
                        help our clients reduce the risks associated with
                        medical waste, while also improving their overall
                        sustainability and environmental performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="tab-pane fade "
              id="v-pills-fulfilment"
              role="tabpanel"
              aria-labelledby="v-pills-fulfilment-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Hospital building-bro.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="mt-5">
                      <h3>Warehouse fulfilment </h3>
                      <p>
                        At our waste management company, we understand that
                        acquiring the right equipment for your waste management
                        needs can be a challenge. That is why we are proud to
                        offer our Warehouse Fulfilment Services, which allows
                        our clients to order a variety of waste management
                        equipment directly from our partners, who are leading
                        suppliers in the industry..{" "}
                      </p>{" "}
                      <p>
                        {" "}
                        Our Warehouse Fulfilment Services provides a seamless
                        and convenient ordering process for clients who need
                        waste management equipment, including recycling bins,
                        trash compactors, balers, and more. We work with trusted
                        suppliers who provide high-quality, durable equipment
                        that is built to last and can help improve waste
                        management efficiency.
                      </p>{" "}
                      <p>
                        {" "}
                        In addition to equipment orders, we also offer
                        value-added services such as installation, maintenance,
                        and repair to ensure that your waste management
                        equipment is operating at peak performance. Our team of
                        waste management experts is available to answer any
                        questions you may have and provide guidance on selecting
                        the right equipment for your specific needs.
                      </p>
                      <p>
                        By partnering with us for your waste management
                        equipment needs, you will benefit from our extensive
                        knowledge of the waste management industry and our
                        commitment to sustainability. We work tirelessly to
                        ensure that our clients have access to the best waste
                        management equipment and services, and our Warehouse
                        Fulfilment Services is just one example of our
                        dedication to providing comprehensive waste management
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Alien science-amico.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-"></div> */}
                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3>Chemical Waste disposal</h3>

                      <p>
                        {" "}
                        We provide safe and compliant chemical waste disposal
                        services for a wide range of industries. Our team is
                        equipped to handle hazardous and non-hazardous chemical
                        waste streams, including laboratory chemicals,
                        industrial solvents, and more. Our solutions include
                        on-site collection, transportation, and disposal of
                        chemical waste.{" "}
                      </p>
                      <p>
                        We understand the unique challenges associated with
                        chemical waste disposal and work closely with our
                        clients to develop safe and effective solutions that
                        meet their specific needs. Our team has the expertise to
                        handle even the most complex chemical waste streams,
                        ensuring compliance with all applicable regulations and
                        minimizing the environmental impact of chemical waste.{" "}
                      </p>
                      <p>
                        In addition to our chemical waste disposal services, we
                        also offer a range of complementary solutions, including
                        laboratory packing and labeling services, on-site waste
                        audits, and emergency spill response. Our goal is to
                        provide comprehensive waste management solutions that
                        help our clients improve their environmental performance
                        and minimize their regulatory risk.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Pharmacist-bro.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>

                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3>Pharmacetuical Waste disposal</h3>

                      <p>
                        Our pharmaceutical waste disposal services help
                        healthcare facilities and other organizations safely
                        dispose of unused or expired medications. Our team is
                        trained to handle all types of pharmaceutical waste,
                        including controlled substances, and we offer both
                        on-site and off-site disposal options.
                      </p>
                      <p>
                        We understand the importance of proper pharmaceutical
                        waste disposal and work closely with our clients to
                        ensure compliance with all applicable regulations,
                        including DEA and EPA regulations. Our team will work
                        with you to develop a customized waste management plan
                        that meets your specific needs, providing expert
                        guidance and support every step of the way.
                      </p>
                      <p>
                        In addition to our pharmaceutical waste disposal
                        services, we also offer a range of complementary
                        solutions, including on-site training and compliance
                        support. Our goal is to provide comprehensive waste
                        management solutions that help our clients minimize
                        their regulatory risk and improve their overall
                        sustainability and environmental performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-supplies"
              role="tabpanel"
              aria-labelledby="v-pills-supplies-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Alien science-amico.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-"></div> */}
                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3> waste supplies</h3>

                      <p>
                        We offer a wide range of waste supplies to help
                        organizations manage their waste streams more
                        effectively. Our products include waste containers,
                        recycling bins, and other waste management equipment, as
                        well as supplies like gloves, masks, and other personal
                        protective equipment.
                      </p>
                      <p>
                        We understand that effective waste management requires
                        the right tools and equipment, and we work closely with
                        our clients to provide the products they need to manage
                        their waste streams more effectively. Our waste supplies
                        are designed to meet the highest standards of quality
                        and durability, ensuring long-lasting performance and
                        reliable waste management.
                      </p>
                      <p>
                        In addition to our waste supplies, we also offer a range
                        of complementary services, including waste audits and
                        on-site training, to help organizations optimize their
                        waste management practices and improve their
                        environmental performance. Our goal is to provide
                        comprehensive waste management solutions that help our
                        clients reduce waste, increase recycling rates, and
                        minimize their environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-audit"
              role="tabpanel"
              aria-labelledby="v-pills-audit-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Alien science-amico.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-"></div> */}
                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3> waste audit</h3>

                      <p>
                        Our waste audit services help organizations identify
                        opportunities to reduce waste, increase recycling rates,
                        and improve sustainability. Our team will conduct a
                        comprehensive audit of your waste streams, analyzing
                        data on waste generation, disposal, and recycling to
                        develop a customized waste reduction plan.
                      </p>
                      <p>
                        We understand that every organization is unique, and our
                        waste audit services are designed to provide a
                        customized analysis of your waste streams and recycling
                        programs. Our team will work with you to identify
                        opportunities to reduce waste generation, optimize
                        recycling and composting programs, and improve overall
                        environmental performance.
                      </p>
                      <p>
                        Our waste audit services can help organizations achieve
                        a range of benefits, including cost savings, improved
                        environmental compliance, and enhanced sustainability.
                        By working with our team to optimize waste management
                        practices, organizations can reduce waste disposal
                        costs, improve recycling rates, and reduce their
                        environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-wealth"
              role="tabpanel"
              aria-labelledby="v-pills-wealth-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Alien science-amico.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-"></div> */}
                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3> waste to wealth programme</h3>

                      <p>
                        Our waste to wealth program helps organizations turn
                        waste into a valuable resource. We work with our clients
                        to identify opportunities to recycle and repurpose waste
                        streams, creating new revenue streams and reducing waste
                        disposal costs.
                      </p>
                      <p>
                        Our team will conduct a comprehensive waste audit to
                        identify opportunities for waste reduction and
                        recycling, developing a customized waste to wealth plan
                        that meets the unique needs of your organization. We can
                        help you identify potential markets for recycled
                        materials, establish partnerships with waste haulers and
                        recyclers, and implement new waste reduction and
                        recycling programs.
                      </p>
                      <p>
                        Our waste to wealth program can help organizations
                        achieve a range of benefits, including increased
                        revenue, improved environmental performance, and
                        enhanced sustainability. By working with our team to
                        identify and implement waste reduction and recycling
                        strategies, organizations can turn waste into a valuable
                        resource, while also reducing their environmental
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-training"
              role="tabpanel"
              aria-labelledby="v-pills-training-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-leftdiv">
                      <img
                        src="/Alien science-amico.png"
                        alt=""
                        className="service-leftdiv-image"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-"></div> */}
                  <div className="col-md-5 ">
                    <div className="mt-5 ">
                      <h3> Training</h3>

                      <p>
                        We offer a range of waste management training services
                        to help organizations improve their waste management
                        practices and compliance. Our training programs are
                        designed to educate employees on proper waste handling,
                        disposal, and recycling practices, ensuring compliance
                        with all applicable regulations and minimizing
                        environmental impact.
                      </p>
                      <p>
                        {" "}
                        Our team of waste management experts has years of
                        experience in developing and delivering waste management
                        training programs for a wide range of industries. We can
                        provide on-site or online training programs tailored to
                        the unique needs of your organization, covering topics
                        such as waste segregation, hazardous waste handling, and
                        recycling best practices.
                      </p>
                      <p>
                        We believe that effective waste management is critical
                        to creating a sustainable future, and we are committed
                        to helping organizations achieve their waste reduction
                        and sustainability goals. Whether you need assistance
                        with waste disposal, recycling, or waste reduction
                        strategies, our team of waste management experts is here
                        to help.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div></div>

      <section id="request">
        <div className="container mt-5 bg-light py-5 px-5">
          <div>
            <h3 className="text-dark req-text">Waste mangement at its peak</h3>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              {" "}
              <h5 className="text-dark req-text  mt-3">
                Request a quote or if in need immediate help, contact us at
                <a href="tel:+2348068681342" className="phone req-text">
                  {" "}
                  +2348068681342
                </a>
              </h5>
            </div>

            <a href="#" className="btn btn-success">
              Request Quote
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default services;
