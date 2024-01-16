import React from "react";
import styles from "@/styles/Banner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import Axios from "axios";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";

// images
import banslider1 from "../public/images/bannerimages/banslider1.png";
import banslider3 from "../public/images/bannerimages/banslider3.png";
import banslider4 from "../public/images/bannerimages/banslider4.png";
import Star from "../public/images/amazonbookpublishing/star.png";
import { useRouter } from "next/router";

const ServiceBanner = (props) => {
  const bannerlogo = [
    { banlogo: banslider1 },
    { banlogo: banslider3 },
    { banlogo: banslider4 },
    { banlogo: banslider1 },
    { banlogo: banslider3 },
    { banlogo: banslider4 },
  ];

  var bannerslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 0,
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form start

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

  const [score, setScore] = useState("Get A Free Quote");

  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      services: e.target.services.value,
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
      <div
        className={`${styles[props.bannershome]} ${
          styles[props.servicesBanner]
        }`}
      >
        <Container>
          <Row>
            <Col lg={8} md={12} className={styles[props.alignclass]}>
              <div
                className={`${styles.homebannertext} ${styles.serviceBanner}`}
              >
                <p
                  className={`font18 fw500 color-white mb-2 ${styles.subText}`}
                >
                  {props.subtext}
                </p>
                {props.title ? props.title : ""}

                {props.text ? (
                  <p
                    className={`${styles.newPara}  font20 color-white font-f mt-2`}
                  >
                    {props.text}
                  </p>
                ) : (
                  ""
                )}
                {props.discuss ? (
                  <div className={`${styles[props.homebancan]} mt-4`}>
                    <Link
                      className={styles.servicenumer}
                      href="tel:(855) 500 0057"
                    >
                      {" "}
                      {props.homebannernum}
                    </Link>

                    {props.processs ? (
                      <Link
                        onClick={handleShow}
                        className={` ${styles.homenumer} ${styles.new1} `}
                        href="javascript:$zopim.livechat.window.show();"
                      >
                        {" "}
                        <BsFillPlayFill size={25} /> {props.processs}{" "}
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {props.discuss ? (
                  <div className={`${styles.reviews} `}>
                    <p className="font16 fw600 color-white mb-0">
                      Rated 9.2 Out Of 10
                    </p>
                    <div className="reviews d-flex align-items-center gap-2">
                      <Image src={Star} width={22} height={22} />
                      <Image src={Star} width={22} height={22} />
                      <Image src={Star} width={22} height={22} />
                      <Image src={Star} width={22} height={22} />
                      <Image src={Star} width={22} height={22} />
                    </div>
                    <p className="font16 fw600 color-white mb-0">
                      Based On 3,278 Satisfied Customers.
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {props.thankyou ? (
                  <div className="mt-5 mb-5">
                    <Link className={styles.thankyoubtn} href="/">
                      {" "}
                      Back To The Home Page
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {props.homebanlogos ? (
                  <div className="row">
                    <div className="col-12 col-lg-12">
                      <div className={`${styles.homebannerlogo} mt-3`}>
                        <Image
                          loading="lazy"
                          className={`${styles.homelogoimgnone} ${styles.homeBaneLogo} img-fluid mt-3 mb-3`}
                          src={props.homebanlogos}
                          alt="Book Writing Experts"
                        ></Image>
                        <Image
                          loading="lazy"
                          className={`${styles.homeBaneLogo} img-fluid mt-3`}
                          src={props.homebanlogos2}
                          alt="Book Writing Experts"
                        ></Image>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
            <Col lg={4} md={12}>
              <form
                action="javascript:;"
                className={styles.serviceBanner}
                onSubmit={handleSubmit}
              >
                <h3 className="text-center text-white fw600 font30 mb-3">
                  Request A Free Quote
                </h3>
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  name="name"
                />
                <input
                  type="tel"
                  name="phone"
                  minLength="10"
                  maxLength="13"
                  pattern="[0-9]*"
                  placeholder="Phone *"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  required
                />
                <input placeholder="Details" name="message" required />
                <select name="services">
                  <option>Services</option>
                  <option>Book Publishing</option>
                  <option>Book Promotion</option>
                  <option>Book Writing</option>
                  <option>Book Editing</option>
                  <option>Business Plan Writing Services</option>
                  <option>Ghostwriting Services</option>
                  <option>Web Content Writing Services</option>
                  <option>Proofreading Services</option>
                  <option>Book Marketing</option>
                  <option>Digital Marketing</option>
                  <option>Book Trailer Services</option>
                  <option>Ebook Writing Services</option>
                  <option>Book Formatting Services</option>
                  <option>Illustration</option>
                  <option>Audio Book Production</option>
                </select>
                <button
                  type="submit"
                  className={`font18 fw600 color-white mb-2 ${styles.serviceBtn}`}
                >
                  {/* Get A Free Quote */}
                  {score}
                </button>
              </form>
            </Col>
          </Row>
        </Container>

        <Modal
          className="modopp"
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          animation={false}
        >
          <span onClick={handleClose} className={styles.crossclose}>
            x
          </span>
          <Modal.Body className="modalprocess">
            <video
              controls
              className={`${styles.bgVideo1}`}
              autoPlay
              muted
              loop
              src="/images/process-combine.mp4"
              type="video/mp4"
            ></video>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ServiceBanner;
