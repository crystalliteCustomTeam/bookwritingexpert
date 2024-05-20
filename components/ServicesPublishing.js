import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import YellowBtn from "./YellowBtn";
import WhiteBtn from "./WhiteBtn";
import Slider from "react-slick";
import styles from "@/styles/ServicePublishing.module.css";
import Image from "next/image";

import RightArrow from "../public/images/amazonbookpublishing/right-arrow.png";
import LeftArrow from "../public/images/amazonbookpublishing/left-arrow.png";
import Book1 from "../public/images/amazonbookpublishing/publishRight1.png";
import Book3 from "../public/images/amazonbookpublishing/publishRight3.png";
import Book4 from "../public/images/amazonbookpublishing/publishRight4.png";
import Book5 from "../public/images/amazonbookpublishing/publishRight5.png";

const ServicesPublishing = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const contentData = [
    {
      title: "Sleeping With The Beast",
      author: "By Susan Papalia",
      description:
        "Discover the Blueprint for Lasting Connections: Empowering Women to Navigate Relationships with Insight, Influence, and Intention",
    },
    {
      title: "A badge well worn",
      author: "By James Mitchell",
      description:
        "A compilation of unheard and unaccounted tales of survival and determination mustered to enlighten the masses.",
    },
    {
      title: "Blissful Misery",
      author: "By Francine Weinstein",
      description:
        "Natalie, a forty-five year old wife and mother, is on her way to rehab. She is terrified, confused and unable to comprehend how a good girl like her could end up so messed up.",
    },
    {
      title: "The Plasma Cell Report",
      author: "By Joel Geiderman",
      description:
        "We present the narrative of this report to the President of the United States, the United States Congress, and the American people for their consideration.",
    },
    {
      title: "A badge well worn",
      author: "By James Mitchell",
      description:
        "A compilation of unheard and unaccounted tales of survival and determination mustered to enlighten the masses.",
    },
    {
      title: "Blissful Misery",
      author: "By Francine Weinstein",
      description:
        "Natalie, a forty-five year old wife and mother, is on her way to rehab. She is terrified, confused and unable to comprehend how a good girl like her could end up so messed up.",
    },
  ];

  var partnersslider = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partnerImages = [Book1, Book3, Book4, Book5, Book3];

  return (
    <>
      <section className={styles.servicePublish}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="mb-lg-5 pb-2 pb-lg-4 pb-2">
                <h2 className="font50 fw700 text-center">{props.title}</h2>
                <p className="font20 text-center">{props.desc}</p>
              </div>
            </Col>
            <Col lg={6}>
              {contentData[activeSlide] && (
                <>
                  <h2 className="font50 fw700 color-blue ">
                    {contentData[activeSlide].title}
                  </h2>
                  <h5 className="font25 fw700">
                    {contentData[activeSlide].author}
                  </h5>
                  <p className="mb-4">{contentData[activeSlide].description}</p>
                  <hr />
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <YellowBtn />
                    <WhiteBtn />
                  </div>
                </>
              )}
              <div className={styles.sliderMain}>
                <div className={`mt-5 ${styles.slider}`}>
                  <Slider {...partnersslider} className="serviceSlider">
                    {partnerImages.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          alt={`Service-book-${index}`}
                          width={150}
                          height={150}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div
                  className={`d-flex align-items-center gap-3 ${styles.Arrows}`}
                >
                  <Image
                    src={LeftArrow}
                    alt="Right-Arrow"
                    width={50}
                    height={50}
                  />
                  <Image
                    src={RightArrow}
                    alt="Right-Arrow"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className={styles.rightImage}>
                <Image
                  src={partnerImages[activeSlide]}
                  alt={`Right-Image-${activeSlide}`}
                  width={620}
                  height={902}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesPublishing;
