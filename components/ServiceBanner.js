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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form start
  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Get A Free Quote');
  const router = useRouter();
  const currentRoute = router.pathname;

  // Function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get('https://ipwho.is/');
      setIP(res.data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  useEffect(() => {
    getIPData();
  }, []);

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
    setScore('Sending Data');

    try {
      const res = await fetch('/api/email/route', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      });

      console.log(`Response received ${res}`);
      if (res.status === 200) {
        console.log(`Response succeeded ${res}`);
      }

      const currentdate = new Date().toLocaleString();
      const headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: 'Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer',
        'Content-Type': 'application/json',
      };

      const bodyContent = JSON.stringify({
        IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
        Brand: 'BOOK-WRITING-EXPERT',
        Page: currentRoute,
        Date: currentdate,
        Time: currentdate,
        JSON: JSONdata,
      });

      await fetch('https://sheetdb.io/api/v1/1ownp6p7a9xpi', {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const hubspotBody = JSON.stringify({
        fields: [
          {
            objectTypeId: '0-1',
            name: 'email',
            value: e.target.email.value,
          },
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: e.target.name.value,
          },
          {
            objectTypeId: '0-1',
            name: 'phone',
            value: e.target.phone.value,
          },
          {
            objectTypeId: '0-1',
            name: 'message',
            value: e.target.message.value,
          },
          {
            objectTypeId: '0-1',
            name: 'services',
            value: e.target.services.value,
          },
        ],
        context: {
          ipAddress: ip.IPv4,
          pageUri: currentRoute,
          pageName: currentRoute,
        },
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: 'I agree to allow Example Company to store and process my personal data.',
            communications: [
              {
                value: true,
                subscriptionTypeId: 999,
                text: 'I agree to receive marketing communications from Example Company.',
              },
            ],
          },
        },
      });

      await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f',
        {
          method: 'POST',
          headers: myHeaders,
          body: hubspotBody,
          redirect: 'follow',
        }
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
      <div
        className={`${styles[props.bannershome]} ${styles[props.servicesBanner]
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
