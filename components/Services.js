import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Service.module.css";
import Slider from "react-slick";
import WhiteBtn from "./WhiteBtn";
import BlackBtn from "./BlackBtn";
import YellowBtn from "./YellowBtn";
import Image from "next/image";

// Images
import Service1 from "public/images/amazonbookpublishing/service1.png";
import Service2 from "public/images/amazonbookpublishing/service2.png";
import Arrow1 from "public/images/amazonbookpublishing/left-arrow.png";
import Arrow2 from "public/images/amazonbookpublishing/right-arrow.png";

const Services = () => {
  const btnShadow = true;

  const BtnContent = "(302) 883-8877";

  var partnersslider = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.08,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={`${styles.services} service`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <h2 className="font50 fw700 text-black text-center mb-4">
                Our Amazon Publishing Services
              </h2>
              <p className="text-center f20 fw400 mb-5 pb-3">
                Join us on a streamlined journey from manuscript to masterpiece.
                Our process includes refining narratives, crafting compelling
                visuals,
                <br className="d-lg-block d-none" /> meticulous book
                preparation, and handling distribution, marketing, and copyright
                tasks. Discover the elegance of our efficient book{" "}
                <br className="d-lg-block d-none" /> publishing process,
                designed to make your literary vision a global reality.
              </p>
            </Col>
            <Col lg={12}>
              <Slider {...partnersslider} className=" mt-5">
                <div className="mx-md-5">
                  <div className={`${styles.sliderCard} mx-4 h-100`}>
                    <Image
                      src={Service1}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <h5 className="font20 fw700">
                      Prime-Quality and Expertise
                    </h5>
                    <p className="font16 fw200">
                      Our Amazon Publishing Services are backed by a team of
                      experienced professionals who have in-depth knowledge and
                      expertise in the publishing industry. We are committed to
                      delivering high-quality content that meets industry
                      standards and exceeds your expectations. With our
                      services, you can trust that your books will be handled
                      with care and precision.
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-5">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-md-5">
                  <div className={`${styles.sliderCard} mx-4 h-100`}>
                    <Image
                      src={Service2}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <h5 className="font20 fw700">
                      Prime-Quality and Expertise
                    </h5>
                    <p className="font16 fw200">
                      Our Amazon Publishing Services are backed by a team of
                      experienced professionals who have in-depth knowledge and
                      expertise in the publishing industry. We are committed to
                      delivering high-quality content that meets industry
                      standards and exceeds your expectations. With our
                      services, you can trust that your books will be handled
                      with care and precision.
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-5">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-md-5">
                  <div className={`${styles.sliderCard} mx-4 h-100`}>
                    <Image
                      src={Service1}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <h5 className="font20 fw700">
                      Prime-Quality and Expertise
                    </h5>
                    <p className="font16 fw200">
                      Our Amazon Publishing Services are backed by a team of
                      experienced professionals who have in-depth knowledge and
                      expertise in the publishing industry. We are committed to
                      delivering high-quality content that meets industry
                      standards and exceeds your expectations. With our
                      services, you can trust that your books will be handled
                      with care and precision.
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-5">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-md-5">
                  <div className={`${styles.sliderCard} mx-4 h-100`}>
                    <Image
                      src={Service2}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <h5 className="font20 fw700">
                      Prime-Quality and Expertise
                    </h5>
                    <p className="font16 fw200">
                      Our Amazon Publishing Services are backed by a team of
                      experienced professionals who have in-depth knowledge and
                      expertise in the publishing industry. We are committed to
                      delivering high-quality content that meets industry
                      standards and exceeds your expectations. With our
                      services, you can trust that your books will be handled
                      with care and precision.
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-5">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-md-5">
                  <div className={`${styles.sliderCard} mx-4 h-100`}>
                    <Image
                      src={Service1}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <h5 className="font20 fw700">
                      Prime-Quality and Expertise
                    </h5>
                    <p className="font16 fw200">
                      Our Amazon Publishing Services are backed by a team of
                      experienced professionals who have in-depth knowledge and
                      expertise in the publishing industry. We are committed to
                      delivering high-quality content that meets industry
                      standards and exceeds your expectations. With our
                      services, you can trust that your books will be handled
                      with care and precision.
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-5">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
              </Slider>
              <div className={styles.btn}>
                <Image
                  src={Arrow1}
                  alt="arrowOne"
                  width={50}
                  height={50}
                  className={styles.arrow1}
                />
                <Image
                  src={Arrow2}
                  alt="arrowOne"
                  width={50}
                  height={50}
                  className={styles.arrow2}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
