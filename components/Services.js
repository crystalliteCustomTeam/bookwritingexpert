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
import Service3 from "public/images/amazonbookpublishing/service3.png";
import Service4 from "public/images/amazonbookpublishing/service4.png";
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
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "90px",
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false, 
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
              <p className="text-center f20 fw400 mb-sm-5 pb-3">
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
                <div className="mx-lg-5">
                  <div className={`${styles.sliderCard} mx-0 mx-lg-3 mx-xxl-5`}>
                    <Image
                      src={Service1}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <div>
                      <h5 className="font20 fw700">
                        Prime-Quality and Expertise
                      </h5>
                      <p className="font16 fw200 mb-0">
                        Our Amazon Publishing Services are backed by a team of
                        experienced professionals who have in-depth knowledge
                        and expertise in the publishing industry. We are
                        committed to delivering high-quality content that meets
                        industry standards and exceeds your expectations. With
                        our services, you can trust that your books will be
                        handled with care and precision.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-3">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-lg-5">
                  <div className={`${styles.sliderCard} mx-0 mx-lg-3 mx-xxl-5`}>
                    <Image
                      src={Service2}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <div>
                      <h5 className="font20 fw700">
                        Prime-Quality and Expertise
                      </h5>
                      <p className="font16 fw200 mb-0">
                        Our Amazon Publishing Services are backed by a team of
                        experienced professionals who have in-depth knowledge
                        and expertise in the publishing industry. We are
                        committed to delivering high-quality content that meets
                        industry standards and exceeds your expectations. With
                        our services, you can trust that your books will be
                        handled with care and precision.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-3">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-lg-5">
                  <div className={`${styles.sliderCard} mx-0 mx-lg-3 mx-xxl-5`}>
                    <Image
                      src={Service3}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <div>
                      <h5 className="font20 fw700">
                        Streamlined Publishing Process
                      </h5>
                      <p className="font16 fw200 mb-0">
                        We at Book Writing Experts understand the importance of
                        a smooth and efficient book publishing process. With our
                        services, you can expect a streamlined workflow that
                        simplifies the publishing journey. From manuscript
                        formatting and editing to cover design and eBook
                        conversion, we handle every aspect professionally,
                        allowing you to focus on your writing while we take care
                        of the technicalities.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-3">
                      <BlackBtn />
                      <YellowBtn btnShadow={btnShadow} />
                    </div>
                  </div>
                </div>
                <div className="mx-lg-5">
                  <div className={`${styles.sliderCard} mx-0 mx-lg-3 mx-xxl-5`}>
                    <Image
                      src={Service4}
                      alt="service"
                      width={167}
                      height={167}
                    />
                    <div>
                      <h5 className="font20 fw700">
                        Comprehensive Marketing Support
                      </h5>
                      <p className="font16 fw200 mb-0">
                        Our Amazon Publishing Services go beyond just publishing
                        your book. We offer comprehensive marketing support to
                        help you build a strong author platform and promote your
                        work effectively. Our marketing strategies include
                        targeted advertising, social media campaigns, email
                        marketing, and more, tailored to your specific audience
                        and genre. We strive to maximize your book's exposure
                        and generate buzz in the competitive publishing
                        landscape.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-3">
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
