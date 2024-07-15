import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styles from "@/styles/Ourportfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import bookpublishing1 from "/public/images/ourportfolio/bookpublishing/1.svg";
import bookpublishing2 from "/public/images/ourportfolio/bookpublishing/2.svg";
import bookpublishing3 from "/public/images/ourportfolio/bookpublishing/3.svg";
import bookpublishing4 from "/public/images/ourportfolio/bookpublishing/4.svg";

import bookmarketing1 from "/public/images/ourportfolio/bookmarketing/1.svg";
import bookmarketing2 from "/public/images/ourportfolio/bookmarketing/2.svg";
import bookmarketing3 from "/public/images/ourportfolio/bookmarketing/3.svg";
import bookmarketing4 from "/public/images/ourportfolio/bookmarketing/4.svg";

import bookwriting1 from "/public/images/ourportfolio/bookwriting/1.svg";
import bookwriting2 from "/public/images/ourportfolio/bookwriting/2.svg";
import bookwriting3 from "/public/images/ourportfolio/bookwriting/3.svg";
import bookwriting4 from "/public/images/ourportfolio/bookwriting/4.svg";

import bookediting1 from "/public/images/ourportfolio/bookediting/1.svg";
import bookediting2 from "/public/images/ourportfolio/bookediting/2.svg";
import bookediting3 from "/public/images/ourportfolio/bookediting/3.svg";
import bookediting4 from "/public/images/ourportfolio/bookediting/4.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from "react";
import {useState} from "react";

const ourportfolio = () => {
  var bookrecordingprojects = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var bookrecordingprojects2 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var bookrecordingprojects3 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var bookrecordingprojects4 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isSliderActive, setIsSliderActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsSliderActive(true);
      } else {
        setIsSliderActive(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={styles.ourportfolio}>
        <div className={styles.banner}>
          <div className={styles.heading}>
            <h1 className="color-black font70 t-center linhight mb-4">
              Our <br></br> Portfolio
            </h1>
            <Link className={styles.free} href="javascript:$zopim.livechat.window.show();">
              {" "}
              FREE AUTHOR CONSULTATION CALL{" "}
            </Link>
          </div>
        </div>

        <Container className={styles.rate1}>
          <Row className={`${styles.provide} gy-2`}>
            <Col md={6}>
              <h2 className="color-black font40 font-f">
                We Provide Stunning <br></br>{" "}
                <Link href="/portfoliobookpublishing" className="fw600 color-blue textdocationnone hover">
                  {" "}
                  Book Publishing{" "}
                </Link>
              </h2>
            </Col>
            <Col md={6}>
              <Link className={styles.more} href="/portfoliobookpublishing">
                See More
              </Link>
            </Col>
          </Row>
          {isSliderActive ? (
            <Slider {...bookrecordingprojects} className="mb-5 mt-5 pb-3">
              <Image src={bookpublishing1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing4} className="img-fluid" alt="Book Writing Experts"></Image>
            </Slider>
          ) : (
            <div className={styles.position}>
              <Image src={bookpublishing1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookpublishing4} className="img-fluid" alt="Book Writing Experts"></Image>
            </div>
          )}
        </Container>

        <Container className={styles.rate}>
          <Row className={`${styles.provide} gy-2`}>
            <Col md={6}>
              <h2 className="color-black font40 font-f">
                We Provide Stunning <br></br>{" "}
                <Link href="/portfoliobookwriting" className="fw600 color-blue textdocationnone hover">
                  {" "}
                  Book Writing{" "}
                </Link>
              </h2>
            </Col>
            <Col md={6}>
              <Link className={styles.more} href="/portfoliobookwriting">
                See More
              </Link>
            </Col>
          </Row>

          {isSliderActive ? (
            <Slider {...bookrecordingprojects2} className="mb-5 mt-5 pb-3">
              <Image src={bookwriting1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting4} className="img-fluid" alt="Book Writing Experts"></Image>
            </Slider>
          ) : (
            <div className={styles.position}>
              <Image src={bookwriting1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookwriting4} className="img-fluid" alt="Book Writing Experts"></Image>
            </div>
          )}
        </Container>

        <Container className={styles.rate}>
          <Row className={`${styles.provide} gy-2`}>
            <Col md={6}>
              <h2 className="color-black font40 font-f">
                We Provide Stunning <br></br>
                <Link href="/portfoliobookediting" className="fw600 color-blue textdocationnone hover">
                  {" "}
                  Book Editing{" "}
                </Link>
              </h2>
            </Col>
            <Col md={6}>
              <Link className={styles.more} href="/portfoliobookediting">
                See More
              </Link>
            </Col>
          </Row>

          {isSliderActive ? (
            <Slider {...bookrecordingprojects3} className="mb-5 mt-5 pb-3">
              <Image src={bookediting1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting4} className="img-fluid" alt="Book Writing Experts"></Image>
            </Slider>
          ) : (
            <div className={styles.position}>
              <Image src={bookediting1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookediting4} className="img-fluid" alt="Book Writing Experts"></Image>
            </div>
          )}
        </Container>

        <Container className={styles.rate}>
          <Row className={`${styles.provide} gy-2`}>
            <Col md={6}>
              <h2 className="color-black font40 font-f">
                We Provide Stunning <br></br>{" "}
                <Link href="/portfoliobookmarketing" className="fw600 color-blue textdocationnone hover">
                  Book Marketing{" "}
                </Link>
              </h2>
            </Col>
            <Col md={6}>
              <Link className={styles.more} href="/portfoliobookmarketing">
                See More
              </Link>
            </Col>
          </Row>

          {isSliderActive ? (
            <Slider {...bookrecordingprojects4} className="mb-5 mt-5 pb-3">
              <Image src={bookmarketing1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing4} className="img-fluid" alt="Book Writing Experts"></Image>
            </Slider>
          ) : (
            <div className={styles.position}>
              <Image src={bookmarketing1} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing2} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing3} className="img-fluid" alt="Book Writing Experts"></Image>
              <Image src={bookmarketing4} className="img-fluid" alt="Book Writing Experts"></Image>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ourportfolio;
