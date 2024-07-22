import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Testimonials.module.css";
import { AutoPlaySlider } from "..";
import Image from "next/image";
import starImg from "/public/images/bookmarketinglp/star.png"
import googleReview from "/public/images/bookmarketinglp/google-review-new.png"
import trustpilot from "/public/images/bookmarketinglp/trustpilot.png"
import nicon from "/public/images/bookmarketinglp/Nicon.png"

const dataTestimonial=[
    {
        title:"Antonio L. Rivers",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: trustpilot,
    },
    {
        title:"Robert R. King",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: googleReview,
    },
    {
        title:"Carol T. McKeehan",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: nicon,
    },
    {
        title:"Antonio L. Rivers",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: trustpilot,
    },
    {
        title:"Robert R. King",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: googleReview,
    },
    {
        title:"Carol T. McKeehan",
        position:"Book Marketing",
        desc:"Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.Our seasoned marketing professionals expertly employ advanced, effective",
        imgIcon: nicon,
    },
]

export default function Testimonials({
  title = "Our Client Testimonials",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to <br class='d-lg-block d-none'> boost your literal presence. Our seasoned marketing professionals",
}) {
  return (
    <section>
      <div className={style.__testimonials}>
        <Container>
          <Row>
            <Col md={10} lg={10} xl={10} className="mx-auto">
              <h3 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-center" dangerouslySetInnerHTML={{__html: desc}} />
            </Col>
          </Row>

          <Row>
            <AutoPlaySlider arrows={true} options={{align: "center"}} wrapperClasses="__testiCard" direction="forward">
              {dataTestimonial?.map((e, i) => (
                <Col key={i} xs={12} sm={12} md={6} lg={4} xl={4} className={`mx-auto px-3`}>
                  <div className={`d-flex flex-column gap-lg-3 gap-3 overflow-hidden ${style.slider}`}>
                    <div className={`d-flex align-items-center justify-content-between ${style.borderLine}`}>
                        <div className="d-flex flex-column">
                            <Image src={starImg} alt="Testimonial Book Marketing" className="" width={100} height={20} quality={100}/>
                            <h3 className="mt-2 mb-0" dangerouslySetInnerHTML={{__html: e.title}}/>
                            <span dangerouslySetInnerHTML={{__html: e.position}}/>
                        </div>
                        <Image src={e.imgIcon} alt="Review" width={90} height={50} quality={100}/>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: e.desc}}/>
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
