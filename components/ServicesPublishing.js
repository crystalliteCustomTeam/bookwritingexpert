import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YellowBtn from "./YellowBtn";
import WhiteBtn from "./WhiteBtn";
import ServiceSlider from "./ServiceSlider";
import styles from "@/styles/ServicePublishing.module.css";
import Image from "next/image";

// image
import RightArrow from "public/images/amazonbookpublishing/right-arrow.png";
import LeftArrow from "public/images/amazonbookpublishing/left-arrow.png";
import RightImage from "public/images/amazonbookpublishing/publishRight.png";

const ServicesPublishing = (props) => {
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
              <h2 className="font50 fw700 color-blue ">
                Sleeping With The Beast
              </h2>
              <h5 className="font25 fw700">By Susan Papalia</h5>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                tincidunt lorem, eget iaculis ligula. Donec bibendum, elit vel
                fringilla sagittis,
              </p>
              <hr />
              <div className="d-flex align-items-center gap-3 mt-4">
                <YellowBtn />
                <WhiteBtn />
              </div>
              <div className={styles.sliderMain}>
                <div className={`mt-5 ${styles.slider}`}>
                  <ServiceSlider />
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
                  src={RightImage}
                  alt="Right-Image"
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
