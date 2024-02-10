import React from "react";
import styles from "@/styles/Partners.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// images
import partnerslogo1 from "../public/images/amazonbookpublishing/partner1.png";
import partnerslogo2 from "../public/images/amazonbookpublishing/partner2.png";
import partnerslogo3 from "../public/images/amazonbookpublishing/partner3.png";
import partnerslogo4 from "../public/images/amazonbookpublishing/partner4.png";

const partnerdata = [
  { img1: partnerslogo1 },
  { img1: partnerslogo2 },
  { img1: partnerslogo3 },
  { img1: partnerslogo4 },
];

const ServicesPartners = () => {

  var partnersslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  return (
    <>
      <div className={`${styles.partners} part bg-white mt-lg-2 pt-md-5 servicePartner`}>
        <Container>
          <div className="d-md-block d-none">
            <Row>
              <Col md={3}>
                <Image
                  src={partnerslogo1}
                  alt="Reward-One"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </Col>
              <Col md={3}>
                <Image
                  src={partnerslogo2}
                  alt="Reward-One"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </Col>
              <Col md={3}>
                <Image
                  src={partnerslogo3}
                  alt="Reward-One"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </Col>
              <Col md={3}>
                <Image
                  src={partnerslogo4}
                  alt="Reward-One"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </Col>
            </Row>
          </div>
          <Slider {...partnersslider} className="d-md-none d-block">
            {partnerdata.map((item, i) => {
              return (
                <div key={i}>
                  <Image
                    loading="lazy"
                    className="pt-3 img-fluid"
                    width={443}
                    height={583}
                    src={item.img1}
                    alt="Book Writing Experts"
                  ></Image>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default ServicesPartners;
