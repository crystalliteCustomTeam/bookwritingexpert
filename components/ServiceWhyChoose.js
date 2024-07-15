import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/ServiceChoose.module.css";
import YellowBtn from "./YellowBtn";
import WhiteBtn from "./WhiteBtn";
import Image from "next/image";

// Images
import Choose from "../public/images/amazonbookpublishing/chooseImage.png";

const ServiceWhyChoose = () => {
  const btnShadow = true;

  const BtnContent = "(855) 500 0057";

  return (
    <>
      <section className={styles.chooseSec}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className={styles.content}>
                <h2 className="font55 fw700 text-white mb-3">
                  Why Choose Our Amazon Publishing Services?
                </h2>
                <p className="font22 fw200 text-white">
                  Your work is over after creating a masterpiece. Let us take
                  the lead from here. Our Amazon publishing services include the
                  three crucial areas of the publishing process: Production,
                  Marketing, and Distribution. As the best publishers, our
                  experience lies in publishing many books by professional
                  writers. And our publishing experts have upgraded many authors
                  to published book authors universally. It’s time for you to
                  get famous!
                </p>
                <div className="d-flex align-items-center gap-4 mt-5">
                  <WhiteBtn btnShadow={btnShadow} />
                  <YellowBtn btnShadow={btnShadow} />
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className={styles.chooseImage}>
                <Image
                  src={Choose}
                  alt="chooseImage"
                  width={681}
                  height={849}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceWhyChoose;
