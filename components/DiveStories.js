import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "@/styles/DiveStories.module.css";

// Images
import Book1 from "public/images/amazonbookpublishing/dive1.png";
import Book2 from "public/images/amazonbookpublishing/dive2.png";
import Book3 from "public/images/amazonbookpublishing/dive3.png";
import Book4 from "public/images/amazonbookpublishing/dive4.png";
import Book5 from "public/images/amazonbookpublishing/dive5.png";
import Book6 from "public/images/amazonbookpublishing/dive6.png";
import Book7 from "public/images/amazonbookpublishing/dive7.png";
import Book8 from "public/images/amazonbookpublishing/dive8.png";
import Image from "next/image";
import Slider from "react-slick";

const DiveStories = () => {
  var partnersslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="pt-3 pt-sm-5 mt-2 mt-lg-0 pt-lg-3 pb-3 pb-sm-5 mb-sm-3">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="font50 fw700 text-black text-center mb-2">
                We are proud of our Published Project
              </h2>
              <h6 className="text-center font25 fw600">
                Biographies, Autobiographies, Memoirs, Business Books, and
                Beyond!
              </h6>
              <p className="text-center f20 fw400 mb-sm-5">
                Explore Examples of Our Custom Creations Below.
              </p>
            </Col>
          </Row>
          <div className="d-md-block d-none">
            <Row>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book1}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book2}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book3}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book4}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-md-block d-none">
            <Row>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book5}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book6}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book7}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6} lg={3} className="px-0">
                <div className={styles.books}>
                  <Image
                    quality={75}
                    alt="Book1"
                    src={Book8}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Slider {...partnersslider} className="d-md-none d-block">
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book5}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book6}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book7}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book8}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book1}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book2}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book3}
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div className={styles.books}>
                <Image
                  quality={75}
                  alt="Book1"
                  src={Book4}
                  className="img-fluid"
                />
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default DiveStories;
