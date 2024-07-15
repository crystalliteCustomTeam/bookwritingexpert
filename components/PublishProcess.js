import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PublishProcess.module.css";
import Image from "next/image";

// Images
import Publish1 from "../public/images/amazonbookpublishing/publish1.png";
import Publish2 from "../public/images/amazonbookpublishing/publish2.png";
import Publish3 from "../public/images/amazonbookpublishing/publish3.png";
import Publish4 from "../public/images/amazonbookpublishing/publish4.png";
import Publish5 from "../public/images/amazonbookpublishing/publish5.png";
import Slider from "react-slick";

const PublishProcess = () => {
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
      <section className={`${styles.PublishProcess}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className=" mb-3 mb-sm-5">
                <h2 className="font50 fw700 text-white text-center">
                  Our Book Publishing Process
                </h2>
                <p className="text-center text-white font18 fw400">
                  We meticulously guide authors through a seamless publishing
                  journey, from manuscript refinement and contract{" "}
                  <br className="d-lg-block d-none" />
                  negotiation to expert editing, captivating design, and
                  strategic promotion for a successful book launch.
                </p>
              </div>
            </Col>
          </Row>
          <div className=" d-lg-block d-none">
            <Row className="gap-5 gap-lg-0">
              <Col>
                <div className="number mb-3">
                  <h4 className="font60 fw700 text-white">01</h4>
                </div>
                <div className={styles.content}>
                  <h5 className="text-white fw600 font25">Preparation</h5>
                  <p className="text-white font15 linehs fw400">
                    We have a team of highly skilled publishing agents who
                    understand the intricacies of various platforms.
                  </p>
                </div>
                <Image
                  src={Publish1}
                  alt="Publish1"
                  width={70}
                  height={70}
                  className="mt-3"
                />
              </Col>
              <Col>
                <div className="number mb-3">
                  <h4 className="font60 fw700 text-white">02</h4>
                </div>
                <div className={styles.content}>
                  <h5 className="text-white fw600 font25">Submission</h5>
                  <p className="text-white font15 linehs fw400">
                    Remember to include the necessary instructions along with
                    your initial draft when submitting the project.
                  </p>
                </div>
                <Image
                  src={Publish2}
                  alt="Publish1"
                  width={70}
                  height={70}
                  className="mt-3"
                />
              </Col>
              <Col>
                <div className="number mb-3">
                  <h4 className="font60 fw700 text-white">03</h4>
                </div>
                <div className={styles.content}>
                  <h5 className="text-white fw600 font25">Delegation</h5>
                  <p className="text-white font15 linehs fw400">
                    We will appoint an experienced book publishing agent to your
                    project based on your requirements.
                  </p>
                </div>
                <Image
                  src={Publish3}
                  alt="Publish1"
                  width={70}
                  height={70}
                  className="mt-3"
                />
              </Col>
              <Col>
                <div className="number mb-3">
                  <h4 className="font60 fw700 text-white">04</h4>
                </div>
                <div className={styles.content}>
                  <h5 className="text-white fw600 font25">Production</h5>
                  <p className="text-white font15 linehs fw400">
                    Remember to include the necessary instructions along with
                    your initial draft when submitting the project.
                  </p>
                </div>
                <Image
                  src={Publish4}
                  alt="Publish1"
                  width={70}
                  height={70}
                  className="mt-3"
                />
              </Col>
              <Col>
                <div className="number mb-3">
                  <h4 className="font60 fw700 text-white">05</h4>
                </div>
                <div className={styles.content}>
                  <h5 className="text-white fw600 font25">Promotion</h5>
                  <p className="text-white font15 linehs fw400">
                    Each consumer is vital to us, and each project is special.
                    We have a special focus on contact with customers
                  </p>
                </div>
                <Image
                  src={Publish5}
                  alt="Publish1"
                  width={70}
                  height={70}
                  className="mt-3"
                />
              </Col>
            </Row>
          </div>
          <Slider {...partnersslider} className="d-lg-none d-block">
            <div className="ms-4">
              <div className="number mb-3">
                <h4 className="font60 fw700 text-white">01</h4>
              </div>
              <div className={styles.content}>
                <h5 className="text-white fw600 font25">Preparation</h5>
                <p className="text-white font15 linehs fw400">
                  We have a team of highly skilled publishing agents who
                  understand the intricacies of various platforms.
                </p>
              </div>
              <Image
                src={Publish1}
                alt="Publish1"
                width={70}
                height={70}
                className="mt-3"
              />
            </div>
            <div className="ms-4">
              <div className="number mb-3">
                <h4 className="font60 fw700 text-white">02</h4>
              </div>
              <div className={styles.content}>
                <h5 className="text-white fw600 font25">Submission</h5>
                <p className="text-white font15 linehs fw400">
                  Remember to include the necessary instructions along with your
                  initial draft when submitting the project.
                </p>
              </div>
              <Image
                src={Publish2}
                alt="Publish1"
                width={70}
                height={70}
                className="mt-3"
              />
            </div>
            <div className="ms-4">
              <div className="number mb-3">
                <h4 className="font60 fw700 text-white">03</h4>
              </div>
              <div className={styles.content}>
                <h5 className="text-white fw600 font25">Delegation</h5>
                <p className="text-white font15 linehs fw400">
                  We will appoint an experienced book publishing agent to your
                  project based on your requirements.
                </p>
              </div>
              <Image
                src={Publish3}
                alt="Publish1"
                width={70}
                height={70}
                className="mt-3"
              />
            </div>
            <div className="ms-4">
              <div className="number mb-3">
                <h4 className="font60 fw700 text-white">04</h4>
              </div>
              <div className={styles.content}>
                <h5 className="text-white fw600 font25">Production</h5>
                <p className="text-white font15 linehs fw400">
                  Remember to include the necessary instructions along with your
                  initial draft when submitting the project.
                </p>
              </div>
              <Image
                src={Publish4}
                alt="Publish1"
                width={70}
                height={70}
                className="mt-3"
              />
            </div>
            <div className="ms-4">
              <div className="number mb-3">
                <h4 className="font60 fw700 text-white">05</h4>
              </div>
              <div className={styles.content}>
                <h5 className="text-white fw600 font25">Promotion</h5>
                <p className="text-white font15 linehs fw400">
                  Each consumer is vital to us, and each project is special. We
                  have a special focus on contact with customers
                </p>
              </div>
              <Image
                src={Publish5}
                alt="Publish1"
                width={70}
                height={70}
                className="mt-3"
              />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default PublishProcess;
