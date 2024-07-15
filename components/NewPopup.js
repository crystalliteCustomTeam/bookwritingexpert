// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Newpopup.module.css";
import styles2 from "@/styles/Popupbottom.module.css";
import Link from "next/link";
import Image from "next/image";

// Importing image components
import BellIcon from "../public/images/popup/bell-icon.png";
import Speaker from "../public/images/popup/mic-icon.png";
import Router from "next/router";

// Main component definition
const NewPopup = () => {
  // State variables for managing pop-up visibility
  const [topPopup, setTopPopup] = useState(false);
  const [bottomPopup, setBottomPopup] = useState(false);

  // useEffect to set topPopup to true when the component mounts
  useEffect(() => {
    setTopPopup(true);
  }, []);

  const [score, setScore] = useState("CLAIM NOW!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    const JSONdata = JSON.stringify(data);

    setScore("Sending Data");

    await fetch("api/quote/route", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }).then((res) => {
      console.log(`Response received ${res}`);
      if (res.status === 200) {
        console.log(`Response Successed ${res}`);
        setScore("CLAIM NOW!");
      }
    });

    const { pathname } = Router;
    if (pathname == pathname) {
      Router.push("/thank-you");
    }
  };

  return (
    <>
      {/* Top Popup Section */}
      {topPopup && (
        <section className={` ${styles.popupbg} d-lg-block d-none`}>
          <Container>
            <div className={styles.Popup}>
              <Image src={Speaker} className={styles.speakerIcon} />
              <span
                className={styles.closeBtn}
                onClick={() => {
                  setTopPopup(false);
                  setBottomPopup(true);
                }}
              >
                X
              </span>
              <Row>
                <Col lg={12}>
                  <h2 className="text-white font60 fw700 font-f text-center">
                    black friday <br />
                    <span className="color-blue"> DEAL</span>
                  </h2>

                  <span className={styles.line}></span>

                  <p className="text-white fw600 font-f text-center">
                    Get Your Book Published For{" "}
                    <span className="color-blue">$399 </span> <br />
                    Avail this Special Offer!
                  </p>
                </Col>
                <Col lg={12}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={4}>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="Name"
                        />
                      </Col>
                      <Col lg={4} className="p-0">
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="Email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />
                      </Col>
                      <Col lg={4}>
                        <input
                          type="tel"
                          maxLength="15"
                          minLength="7"
                          required
                          name="phone"
                          placeholder="Phone"
                        />
                      </Col>
                      <Col lg={12}>
                        <button
                          type="submit"
                          className={`font-f fw500 ${styles.popupBtn}`}
                        >
                          <span>
                            <Image
                              src={BellIcon}
                              alt="Bell-icon"
                              className="me-5"
                            />
                          </span>
                          {score}
                        </button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      )}

      {/* Bottom Popup Section */}
      {!topPopup && (
        <section className={`${styles2.popUpBottom} d-md-block d-none`}>
          <Container>
            <div className="d-flex align-items-start justify-content-between">
              <div className="content">
                <p className="text-white fw600 font18 font-f linh">
                  Enjoy Up to 50% Off on <br />
                  our Exclusive seo packages
                </p>
              </div>

              <div className="btn">
                <button
                  onClick={() => {
                    setTopPopup(true);
                    setBottomPopup(false);
                  }}
                >
                  Get the offer Now
                </button>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default NewPopup;
