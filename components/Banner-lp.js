import React from 'react'
import styles from '@/styles/Bannerlp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bannerlogos from '../public/images/newlp/bannerlogos.png' 
import { useRouter } from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";
const Banner = () => {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Send Message");
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
      <div className={styles.banner}>

        <Container>
          <Row>
            <Col md={8} className={styles.newtown}>
              <h1 className='color-white font-f fw700'>Get Your Book Heard</h1>
              <h2 className='color-white font-f fw500'>Publish Your Audio Book on Amazon</h2>
              <p>Create your audio book with our professional voice actors and authors. Let your voice be heard. Put your words on the pages of an audiobook, get it published on Amazon, and you will be able to reach millions of listeners.</p>


              <div className={styles.bookshowform}>
                <h3 className='color-white font-f fw700'>Request A Free Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.publish}>
                    <div>
                      <input type="text" required class="" name="name" placeholder="Full Name*" />
                    </div>
                    <div>
                      <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" class="" required name="phone" placeholder="Phone*" />
                    </div>
                  </div>
                  <div className={styles.publish}>
                    <div>
                      <input type="email" class="" required name="email" placeholder="Email*" />
                    </div>
                    <div>
                      <input type="text" class="" required name="message" placeholder="Details" />
                    </div>
                  </div>
                  <input type="submit" disabled={isdisabled} value={score} />
                </form>
              </div>
              <div className={styles.folpo}>
                <Image src={bannerlogos} className="img-fluid" alt="Book Writing Experts" quality={95} />
              </div>


            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Banner