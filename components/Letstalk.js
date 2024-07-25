import React from 'react'
import styles from '@/styles/Letstalk.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bannerlogos from '../public/images/newlp/callcenter.png'

import fb from '../public/images/newlp/fb.png'
import xx from '../public/images/newlp/xx.png'
import insta from '../public/images/newlp/insta.png'
import you from '../public/images/newlp/you.png'
import link from '../public/images/newlp/link.png'
import email from '../public/images/newlp/email.png'
import tel from '../public/images/newlp/tel.png'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";


const Letstalk = () => {
  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Send Message');
  const router = useRouter();
  const currentRoute = router.pathname;

  // Function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get('https://ipwho.is/');
      setIP(res.data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
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
      pageUrl: currentRoute,
    };

    const JSONdata = JSON.stringify(data);
    setScore('Sending Data');

    try {
      const emailResponse = await fetch('/api/email/route', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      });

      if (emailResponse.status === 200) {
        console.log('Email sent successfully');
      }

      const currentdate = new Date().toLocaleString();
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
        "Brand": "BOOK-WRITING-EXPERT",
        "Page": currentRoute,
        "Date": currentdate,
        "Time": currentdate,
        "JSON": JSONdata,
      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      const pagenewurl = currentRoute;

      const hubspotHeaders = new Headers();
      hubspotHeaders.append("Content-Type", "application/json");

      const hubspotBody = JSON.stringify({
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": e.target.email.value,
          },
          {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": e.target.name.value,
          },
          {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": e.target.phone.value,
          },
          {
            "objectTypeId": "0-1",
            "name": "message",
            "value": e.target.message.value,
          },
        ],
        "context": {
          "ipAddress": ip.IPv4,
          "pageUri": pagenewurl,
          "pageName": pagenewurl,
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

      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className={styles.banner}>

        <Container>
          <Row className='g-3'>
            <Col md={6} className={styles.newtown}>
              <div className={styles.newlongtsk}>
                <h2 className='font-f fw700'>Let's Talk</h2>
                <p className='font-f'>For Inquiries, Collaboration Opportunities, Or Any Assistance, Don't Hesitate To Contact Us. Our Dedicated Team Is Ready To Engage And Support Your Needs, Ensuring A Seamless And Productive Partnership.</p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.publish}>
                    <div>
                      <input type="text" class="" required name="firstname" placeholder="Full Name*" />
                    </div>
                    <div>
                      <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" class="" required name="phone" placeholder="Phone Number*" />
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
                  <input type="submit" class="" name="name" value={score} />
                </form>
              </div>
            </Col>
            <Col md={6} className={styles.newtown2}>


              <div className={styles.social}>
                <Image src={bannerlogos} className='img-fluid' alt="Book Writing Experts" />

                <div className={styles.gosto}>
                  <h3>Social Links</h3>

                  <ul>
                    <li> <Link href="https://www.facebook.com/bookwritingexperts">  <Image alt="Book Writing Experts" src={fb} className='img-fluid' /> </Link> </li>
                    <li> <Link href="https://twitter.com/bookwritingexp">  <Image alt="Book Writing Experts" src={xx} className='img-fluid' /> </Link> </li>
                    <li> <Link href="https://www.instagram.com/bookwritingexp/">  <Image alt="Book Writing Experts" src={insta} className='img-fluid' /> </Link> </li>
                    <li> <Link href="https://www.linkedin.com/company/bookwritingexp">  <Image alt="Book Writing Experts" src={you} className='img-fluid' /> </Link> </li>
                    <li> <Link href="https://www.youtube.com/channel/UCMwHkNiJzrMd6MlPOBFMmLA">  <Image alt="Book Writing Experts" src={link} className='img-fluid' /> </Link> </li>
                  </ul>
                </div>
              </div>



            </Col>

            <Col lg={12}>

              <div className={styles.down}>
                <div className={styles.flow}>
                  <h3>Email Us</h3>
                </div>
                <div className={styles.flow1}>
                  <h4>For Project Inquiries Only:</h4>

                  <div className={styles.major}>
                    <Link href="mailto:Support@Bookwritingexperts.Com">  <Image src={email} className='img-fluid' /> Support@Bookwritingexperts.Com</Link>
                  </div>

                </div>
                <div className={styles.flow2}>
                  <h4>For Other Inquiries Only:</h4>

                  <div className={styles.major}>
                    <Link href="tel:8555000057">  <Image src={tel} className='img-fluid' /> (855) 500 0057</Link>
                  </div>
                </div>



              </div>

            </Col>


          </Row>


        </Container>


      </div>
    </>
  )
}

export default Letstalk