import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CTA from "../../CTA/CTA";
import style from "../FeaturedContact/FeaturedContact.module.css";
export default function FeaturedContact() {
  return (
    <section>
      <div className={`${style.featured}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xl={6}>
              <h2>How We Market Your Book?</h2>
              <p>
                Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,
                effective techniques to boost your Consistency. Cost-effectiveness. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.
                Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness.
              </p>
              <div className={style.w45}>
              <CTA
                text="Book An Appointment"
                link="javascript:$zopim.livechat.window.show();"
                bg="bgOrangeRoundednone"
                color="text-white"
                border="border-primary-100 text-white hover:!bg-primary-100 hover:border-transparent hover:text-white"
                classes="mb-5"
              />
              </div>
              

              <div className={`${style.featuredgrid}`}>
                <ul className="d-flex flex-md-row flex-column gap-md-3 gap-1 align-items-center justify-content-evenly mb-0 ps-0">
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>10</span>
                    <p className="mb-0">Years Of<br/> Experience</p>
                  </li>
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>474</span>
                    <p className="mb-0">Published <br/> Last 12 Months</p>
                  </li>{" "}
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>39</span>
                    <p className="mb-0">Published <br/>Last Months</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} xl={6}>
            <div className={`${style.formsection}`}>
                <div className="text-center mb-5">
                <h3>Request A Free Quote</h3>
                <span className="">Cost-effectiveness. Consumer-centric—the <br className="d-xl-block d-none d-md-block"/> crudity of book marketing, delivered!</span>
                </div>
                <form action="" method="post">
                    <div className="d-flex gap-3 mb-3">
                        <input type="text" name="name" placeholder="Full Name*" id=""  className="form-control"/>
                        <input type="email" name="email" placeholder="Email*" id=""  className="form-control"/>
                    </div>  
                    <div className="d-flex gap-3 mb-3">
                        <input type="number" name="phone" placeholder="Phone*" id=""  className="form-control"/>
                    </div>
                    <div className="d-flex gap-3 mb-3">
                        <textarea rows="5" type="massage" name="massage" placeholder="Massage" id=""  className="form-control"/>
                    </div> 
                   <button type="submit" className={`btn ${style.formbtn} w-100`}>Submit</button>
                </form>
            </div>
                
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
