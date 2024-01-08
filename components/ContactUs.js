import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "@/styles/ContactUs.module.css";

// Image
import Contact from "public/images/amazonbookpublishing/contactImage.png";
import Image from "next/image";

const ContactUs = () => {
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
              <form action="javascript:;">
                <div className="name">
                  <label>Full Name*</label>
                  <input type="text" placeholder="Type Full Name " />
                </div>
                <div className="name">
                  <label>Phone *</label>
                  <input type="number" placeholder="(000) 000-0000" />
                </div>
                <div className="name">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Type Email " />
                </div>
                <div className="name">
                  <label>Message *</label>
                  <textarea rows={4} placeholder="Type Full Name " />
                </div>
                <button>Let’s Discuss</button>
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
