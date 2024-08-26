import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Axios from "axios"; 

import styles from "@/styles/ContactUs.module.css";

// Image
import Contact from "../public/images/amazonbookpublishing/contactImage.png";
import Image from "next/image";

const ContactUs = () => {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Let's Discuss");
  const router = useRouter();
  const currentRoute = router.pathname;
  const [pagenewurl, setPagenewurl] = useState('');
  const [isdisabled, setIsdisabled] = useState(false)

  // Function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get("https://ipwho.is/");
      setIP(res.data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href)
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsdisabled(true);

    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
      lead_data: {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value
      }
    };

    const JSONdata = JSON.stringify(data);
    console.log(data);

    setScore("Sending Data");

    try {
      const emailResponse = await fetch("https://brandsapi.cryscampus.com/api/v1/leads", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (emailResponse.status === 200) {
        console.log("Email sent successfully");
      }

      const currentdate = new Date().toLocaleString();
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        Brand: "BOOK-WRITING-EXPERT",
        Page: currentRoute,
        Date: currentdate,
        Time: currentdate,
        JSON: JSONdata,
      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });


      const hubspotHeaders = new Headers();
      hubspotHeaders.append("Content-Type", "application/json");

      const hubspotBody = JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: e.target.email.value,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: e.target.name.value,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: e.target.phone.value,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: e.target.message.value,
          },
        ],
        context: {
          ipAddress: ip.IPv4,
          pageUri: pagenewurl,
          pageName: pagenewurl,
        },
      });

      const hubspotResponse = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", {
        method: "POST",
        headers: hubspotHeaders,
        body: hubspotBody,
        redirect: "follow",
      });

      const hubspotResult = await hubspotResponse.text();
      console.log(hubspotResult);

      window.location.href = "https://www.bookwritingexperts.com/thank-you";
    } catch (error) {
      console.error("Error submitting data:", error);
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
                  <button className={`${styles.formBtn}`} disabled={isdisabled} type="submit">
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
