import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Axios from "axios";
import Router from "next/router";
import Styles from "@/styles/Quote.module.css";

// Images
import QuoteBook from "../public/images/amazonbookpublishing/quoteimage.png";
import { useRouter } from "next/router";

const RequestQuote = () => {

  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get(
      "https://ipwho.is/"
    );
    setIP(res.data);
  };
  useEffect(() => {
    getIPData();
  }, []);

  const [score, setScore] = useState("Get A Quote");

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
      <section className={Styles.Quote}>
        <Container>
          <Row>
            <Col lg={6} className="px-lg-0">
              <div className="text-center">
                <Image
                  src={QuoteBook}
                  alt="Quote-Book"
                  width={555}
                  height={477}
                  className="mx-auto"
                />
              </div>
            </Col>
            <Col lg={6} className="px-lg-0">
              <form action="javascript:;" onSubmit={handleSubmit}>
                <h4 className="font50 fw700 mb-4">Request A Free Quote</h4>
                <Row>
                  <Col lg={6} className="px-2">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className={Styles.secInput}
                      required
                      name="name"
                    />
                  </Col>
                  <Col lg={6} className="px-2">
                    <input
                      type="tel"
                      name="phone"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      placeholder="Phone *"
                      className={Styles.secInput}
                      required
                    />
                  </Col>
                  <Col lg={6} className="px-2">
                    <input
                      placeholder="Email *"
                      className={Styles.secInput}
                      required
                      name="email"
                    />
                  </Col>
                  <Col lg={6} className="px-2">
                    <input
                      placeholder="Details"
                      className={Styles.secInput}
                      required
                      name="message"
                    />
                  </Col>
                  <button className={`${Styles.formBtn}`} type="submit">
                    {score}
                  </button>
                </Row>
                <hr className={`mt-5 `} />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RequestQuote;
