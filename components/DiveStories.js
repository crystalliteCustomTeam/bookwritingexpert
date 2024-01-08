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
import YellowBtn from "./YellowBtn";

const DiveStories = () => {
  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  return (
    <>
      <section className="pt-5 mt-2 mt-lg-0 pt-lg-3 pb-5 mb-sm-3">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="font50 fw700 text-black text-center mb-2">
                Dive into a World of Stories
              </h2>
              <h6 className="text-center font25 fw600">
                Biographies, Autobiographies, Memoirs, Business Books, and
                Beyond!
              </h6>
              <p className="text-center f20 fw400 mb-5">
                Explore Examples of Our Custom Creations Below.
              </p>
            </Col>
            <Col xl={12} className="mb-5">
              <div className={styles.analpost}>
                <div
                  className={`${
                    activeTab1 == "tab1" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab1")}
                  href="#"
                >
                  Jan
                </div>
                <div
                  className={`${
                    activeTab1 == "tab2" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab2")}
                  href="#"
                >
                  Feb
                </div>
                <div
                  className={`${
                    activeTab1 == "tab3" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab3")}
                  href="#"
                >
                  Mar
                </div>
                <div
                  className={`${
                    activeTab1 == "tab4" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab4")}
                  href="#"
                >
                  Apr
                </div>
                <div
                  className={`${
                    activeTab1 == "tab5" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab5")}
                  href="#"
                >
                  May
                </div>
                <div
                  className={`${
                    activeTab1 == "tab6" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab6")}
                  href="#"
                >
                  Jun
                </div>
                <div
                  className={`${
                    activeTab1 == "tab7" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab7")}
                  href="#"
                >
                  Jul
                </div>
                <div
                  className={`${
                    activeTab1 == "tab8" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab8")}
                  href="#"
                >
                  Aug
                </div>
                <div
                  className={`${
                    activeTab1 == "tab9" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab9")}
                  href="#"
                >
                  Sep
                </div>
                <div
                  className={`${
                    activeTab1 == "tab10" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab10")}
                  href="#"
                >
                  Oct
                </div>
                <div
                  className={`${
                    activeTab1 == "tab11" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab11")}
                  href="#"
                >
                  Nov
                </div>
                <div
                  className={`${
                    activeTab1 == "tab12" ? styles.active : ""
                  } font18 fw500 py-1 px-4`}
                  onClick={() => fun1("tab12")}
                  href="#"
                >
                  Dec
                </div>
              </div>
            </Col>
            <Col xl={12}>
              {activeTab1 == "tab1" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab2" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab3" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab4" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab5" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab6" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab7" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab8" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab9" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab10" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab11" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book4}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}

              {activeTab1 == "tab12" && (
                <div className={styles.newyork}>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book5}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book6}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book7}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book8}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book1}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book2}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
                        <Image
                          quality={75}
                          alt="Book1"
                          src={Book3}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col md={6} lg={3} className="px-0">
                      <div>
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
              )}
            </Col>
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-center pt-4">
                <YellowBtn />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DiveStories;
