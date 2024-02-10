import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Axios from "axios";
import Router from "next/router";

import styles from "@/styles/ContactUs.module.css";

// Image
import Contact from "public/images/amazonbookpublishing/contactImage.png";
import Image from "next/image";

const ContactUs = () => {

  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get(
      "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    );
    setIP(res.data);
  };
  useEffect(() => {
    getIPData();
  }, []);

  const [score, setScore] = useState("Let’s Discuss");

  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      pageUrl: currentRoute,
    };

    const JSONdata = JSON.stringify(data);

    setScore("Sending Data");

    fetch("api/email/route", {
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
      }
    });

    var currentdate = new Date().toLocaleString() + "";
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      Brand: "BOOK-WRITING-EXPERT",
      Page: `${currentRoute}`,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    });
    await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const { pathname } = Router;
    if (pathname == pathname) {
      window.location.href = "https://www.bookwritingexperts.com/thank-you";
    }
  };

  return (
    <>
      <section className={styles.ContactUs}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 class="font50 fw700 text-black mb-2">Contact Us</h2>
              <p class="f16 fw400 pb-3 mb-0">
                Ready to turn the page on your publishing dreams? Let us write
                your success story together! Choose our book publishing company
                and let your <br /> words come to life. Start your literary
                journey now!
              </p>
            </Col>
            <Col lg={5}>
              {/* <form action="javascript:;" onSubmit={handleSubmit}>
                <label>Full Name*</label>
                <input name="name" type="text" placeholder="Type Full Name " required />
                <label>Phone *</label>
                <input type="tel" name="phone"
                  minLength="10"
                  maxLength="13"
                  pattern="[0-9]*" placeholder="(000) 000-0000" required />
                <label>Email Address *</label>
                <input type="email" name="email" placeholder="Type Email " required />
                <label>Message *</label>
                <textarea rows={4} placeholder="Type Details" name="message" required />
                <button type="submit">{score}</button>
              </form> */}
              <form action="javascript:;" onSubmit={handleSubmit}>
                <h4 className="font50 fw700 mb-4">Request A Free Quote</h4>
                <Row>
                  <Col lg={12} className="px-2">
                    <label>Full Name*</label>
                    <input
                      type="text"
                      placeholder="Type Full Name*"
                      className={styles.secInput}
                      required
                      name="name"
                    />
                  </Col>
                  <Col lg={12} className="px-2">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      placeholder="(000) 000-0000"
                      className={styles.secInput}
                      required
                    />
                  </Col>
                  <Col lg={12} className="px-2">
                    <label>Email Address *
                    </label>
                    <input
                      placeholder="Type Email *"
                      className={styles.secInput}
                      required
                      name="email"
                    />
                  </Col>
                  <Col lg={12} className="px-2">
                    <label>Message *</label>
                    <textarea rows={4} placeholder="Type Details" name="message" required />
                  </Col>
                  <button className={`${styles.formBtn}`} type="submit">
                    {score}
                  </button>
                </Row>
                <hr className={`mt-5 `} />
              </form>
            </Col>
            <Col lg={7}>
              <Image src={Contact} alt="contact" width={700} height={654} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
