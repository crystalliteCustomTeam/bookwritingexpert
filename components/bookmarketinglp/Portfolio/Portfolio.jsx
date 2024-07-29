import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Portfolio.module.css";
import AutoPlaySlider from "../AutoPlaySlider";
import Image from "next/image";

// Media
import Portfolio1 from "/public/images/bookmarketinglp/portfolio/p1.png"
import Portfolio2 from "/public/images/bookmarketinglp/portfolio/p2.png"
import Portfolio3 from "/public/images/bookmarketinglp/portfolio/p3.png"
import Portfolio4 from "/public/images/bookmarketinglp/portfolio/p4.png"
import Portfolio5 from "/public/images/bookmarketinglp/portfolio/p5.png"
import Portfolio6 from "/public/images/bookmarketinglp/portfolio/p6.png"
import Portfolio7 from "/public/images/bookmarketinglp/portfolio/p7.png"
import Portfolio8 from "/public/images/bookmarketinglp/portfolio/p8.png"
import Portfolio9 from "/public/images/bookmarketinglp/portfolio/p9.png"
import Portfolio10 from "/public/images/bookmarketinglp/portfolio/p10.png"
import Portfolio11 from "/public/images/bookmarketinglp/portfolio/p11.png"
import Portfolio12 from "/public/images/bookmarketinglp/portfolio/p12.png"
import Portfolio13 from "/public/images/bookmarketinglp/portfolio/p13.png"
import Portfolio14 from "/public/images/bookmarketinglp/portfolio/p14.png"
import Portfolio15 from "/public/images/bookmarketinglp/portfolio/p15.png"
import Portfolio16 from "/public/images/bookmarketinglp/portfolio/p16.png"
import Portfolio17 from "/public/images/bookmarketinglp/portfolio/p17.png"
import Portfolio18 from "/public/images/bookmarketinglp/portfolio/p18.png"




export default function Portfolio() {
  return (
    <section>
      <div className={style.portfolio}>
        <Container>
          <Row>
            <Col md={10} lg={8} xl={8} className="mx-auto text-center">
              <h3>Our Genre Portfolio</h3>
              <p>
              We love all genres! Our book marketing experts help authors with personalized  <br className="d-lg-block d-none" /> book marketing plans to target the right readers, ignite excitement, and boost visibility.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <AutoPlaySlider arrows={true} options={{align: "start"}} wrapperClasses="mt-3" direction="forward">
              {[Portfolio1,Portfolio2,Portfolio3,Portfolio4,Portfolio5,Portfolio6,Portfolio7,Portfolio8,Portfolio9,Portfolio10,Portfolio11,Portfolio12,Portfolio13,Portfolio14,Portfolio15,Portfolio16,Portfolio17,Portfolio18].map((imgPortfolio, i) => (
                <Col key={i} xs={6} sm={4} md={3} lg={3} xl={3} className="ps-lg-3 ps-2">
                  <div className="d-flex align-items-center">
                    <div className={`${style.sliderClass}`}>
                      <Image src={imgPortfolio} alt="Book Marketing" className="img-fluid" width={480} height={300} />
                    </div>
                  </div>
                </Col>
              ))}
            </AutoPlaySlider>
          </Row>
        </Container>
      </div>
    </section>
  );
}
