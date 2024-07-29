import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CTA from "../../CTA/CTA";
import style from "../FeaturedContact/FeaturedContact.module.css";
import bgImg1 from "/public/images/bookmarketinglp/featuredContact.png"

import Image from "next/image";
export default function FeaturedContact({
  title = "Book Marketing Agency for Success!",
  desc = "Have you published your book but aren’t seeing the sales you hoped for? No worries! it’s not too late to achieve your goals! If you’re serious about impacting, our expert book marketers will help! Schedule a call to discuss your goals and create a book marketing plan to connect your book with eager readers. Let's make it happen!",
  cta = true,
  cta2 = false,
  list= true,
  bgImg= bgImg1,
  classes="",
  formclasses=""
}) {
  return (
    <section>
      <div className={`${style.featured} ${classes}`}>
        <Image src={bgImg.src} alt="Featured Book Marketing" className={`${style.bgClasses} img-fluid`} width={1000} height={1000}/>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xl={6}>
              <h2 dangerouslySetInnerHTML={{__html: title}} />
              <p dangerouslySetInnerHTML={{__html: desc}} />
              {cta && (
                <div className={style.w45}>
                  <CTA
                    text="Book An Appointment"
                    link="javascript:$zopim.livechat.window.show();"
                    bg="bgOrangeRoundednone"
                    color="text-white"
                    border="text-white"
                    classes="mb-5"
                  />
                </div>
              )}
              {cta2 && (
                <div className="d-flex flex-sm-row flex-column gap-3 justify-content-sm-start justify-content-center mt-4">
                  <CTA text="(855) 500 0057" classes="!text-black" color="text-black" handle="" bg="bgWhite" link="tel:855-500-0057" />
                  <CTA
                    text="Get A Quote"
                    link="javascript:$zopim.livechat.window.show();"
                    bg="bgOrangeRoundednone"
                    color="text-white"
                    border="text-white"
                  />
                </div>
              )}

              {list && <div className={`${style.featuredgrid}`}>
                <ul className="d-flex flex-sm-row flex-column gap-md-3 gap-1 align-items-center justify-content-evenly mb-0 ps-0">
                  <li className="d-flex align-items-md-center align-items-center  gap-lg-2 gap-3">
                    <span>10</span>
                    <p className="mb-0">
                      Years Of
                      <br className=""/> Experience
                    </p>
                  </li>
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>474</span>
                    <p className="mb-0">
                      Published <br className=""/> Last 12 Months
                    </p>
                  </li>{" "}
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>39</span>
                    <p className="mb-0">
                      Published <br className=""/>
                      Last Months
                    </p>
                  </li>
                </ul>
              </div>}
            </Col>
            <Col lg={6} xl={6} className="mt-lg-0 mt-5">
              <div className={`${style.formsection} ${formclasses}`}>
                <div className="text-center mb-5 ">
                  <h3>Get Your Free Quote</h3>
                  <span className="">
                  Discuss Your Story & Get a  <br className="d-md-block d-lg-none"/> Personalized Book Marketing Plan.
                  </span>
                </div>
                <form action="" method="post">
                  <div className="d-flex flex-md-row flex-column gap-3 mb-3">
                    <input type="text" name="name" placeholder="Full Name*" id="" className="form-control" />
                    <input type="email" name="email" placeholder="Email*" id="" className="form-control" />
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <input type="number" name="phone" placeholder="Phone*" id="" className="form-control" />
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <textarea rows="5" type="massage" name="massage" placeholder="Massage" id="" className="form-control" />
                  </div>
                  <button type="submit" className={`btn ${style.formbtn} w-100`}>
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
