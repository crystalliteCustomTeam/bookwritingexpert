import React, { useEffect } from "react";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CTA from "../../CTA/CTA";
import style from "../FeaturedContact/FeaturedContact.module.css";
import bgImg1 from "/public/images/bookmarketinglp/featuredContact.png"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function FeaturedContact({
  title = "Book Marketing Agency for Success!",
  desc = "Have you published your book but aren’t seeing the sales you hoped for? No worries! it’s not too late to achieve your goals! If you’re serious about impacting, our expert book marketers will help! Schedule a call to discuss your goals and create a book marketing plan to connect your book with eager readers. Let's make it happen!",
  cta = true,
  cta2 = false,
  list = true,
  bgImg = bgImg1,
  classes = "",
  formclasses = ""
}) {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Submit");
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
    <section>
      <div className={`${style.featured} ${classes}`}>
        <Image src={bgImg.src} alt="Featured Book Marketing" className={`${style.bgClasses} img-fluid`} width={1000} height={1000} />
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xl={6}>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p dangerouslySetInnerHTML={{ __html: desc }} />
              {cta && (
                <div className={style.w45}>
                  <CTA
                    text="Book An Appointment"
                    link="javascript:$zopim.livechat.window.show();"
                    bg="bgOrangeRoundednone"
                    color="text-white"
                    border="text-white"
                    classes="mb-5"
                  />
                </div>
              )}
              {cta2 && (
                <div className="d-flex flex-sm-row flex-column gap-3 justify-content-sm-start justify-content-center mt-4">
                  <CTA text="(855) 500 0057" classes="!text-black" color="text-black" handle="" bg="bgWhite" link="tel:855-500-0057" />
                  <CTA
                    text="Get A Quote"
                    link="javascript:$zopim.livechat.window.show();"
                    bg="bgOrangeRoundednone"
                    color="text-white"
                    border="text-white"
                  />
                </div>
              )}

              {list && <div className={`${style.featuredgrid}`}>
                <ul className="d-flex flex-sm-row flex-column gap-md-3 gap-1 align-items-center justify-content-evenly mb-0 ps-0">
                  <li className="d-flex align-items-md-center align-items-center  gap-lg-2 gap-3">
                    <span>10</span>
                    <p className="mb-0">
                      Years Of
                      <br className="" /> Experience
                    </p>
                  </li>
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>474</span>
                    <p className="mb-0">
                      Published <br className="" /> Last 12 Months
                    </p>
                  </li>{" "}
                  <li className="d-flex align-items-center gap-lg-2 gap-3">
                    <span>39</span>
                    <p className="mb-0">
                      Published <br className="" />
                      Last Months
                    </p>
                  </li>
                </ul>
              </div>}
            </Col>
            <Col lg={6} xl={6} className="mt-lg-0 mt-5">
              <div className={`${style.formsection} ${formclasses}`}>
                <div className="text-center mb-5 ">
                  <h3>Get Your Free Quote</h3>
                  <span className="">
                    Discuss Your Story & Get a  <br className="d-md-block d-lg-none" /> Personalized Book Marketing Plan.
                  </span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-md-row flex-column gap-3 mb-3">
                    <input type="text" name="name" placeholder="Full Name*" id="" className="form-control" />
                    <input type="email" name="email" placeholder="Email*" id="" className="form-control" />
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <input type="number" name="phone" placeholder="Phone*" id="" className="form-control" />
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <textarea rows="5" name="message" placeholder="Massage" id="" className="form-control" />
                  </div>
                  <button type="submit" className={`btn ${style.formbtn} w-100`} disabled={isdisabled}>
                    {score}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
