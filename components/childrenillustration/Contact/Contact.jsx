"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import style from '../Contact/contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../../../public/images/childrenillustration/contact-img.png'
import CTA from '../../CTA/CTA'
import Axios from "axios";
import Router, { useRouter } from 'next/router'

const Contact = ({ title, desc }) => {
  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Submit Details');
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
    <section>
      <div className={`${style.contact}`}>
        <Container>
          <Row>
            <Col lg={6} md={12} className='px-4'>
              <h3 className='fw700 font_50' dangerouslySetInnerHTML={{ __html: title }} />
              <p className='' dangerouslySetInnerHTML={{ __html: desc }} />
              <form method='post' className='bg-white py-3' onSubmit={handleSubmit}>
                <div className='d-flex flex-column gap-3 align-self-start justify-content-start'>
                  <div>
                    <label className='form-label'>Full Name *</label>
                    <input type="text" className='form-control' name="name" id="" placeholder='Type Full Name ' required />
                  </div>
                  <div>
                    <label className='form-label'>Phone *</label>
                    <input type="number" className='form-control' name="phone" id="" placeholder='(000) 000-0000 ' required />
                  </div>
                  <div>
                    <label className='form-label'>Email Address *</label>
                    <input type="email" className='form-control' name="email" id="" placeholder='Type Email Address' required />
                  </div>

                  <div>
                    <label className='form-label'>Message *</label>
                    <textarea className="form-control" id="" name='message' rows="5" placeholder='Message'></textarea>
                  </div>

                  <div className='d-flex flex-lg-row flex-column align-items-lg-start align-items-center gap-4 mt-3 mb-3'>
                    <CTA
                      text={score}
                      bg="bgGray"
                      classes={`${style.submitDetails} formbgGray py-2`}
                      btn={true}
                    />
                    <CTA
                      text="(302) 883-8877"
                      bg="bgOrange"
                      classes='py-2'
                      link="tel:302-883-8877"
                    />
                  </div>
                </div>

              </form>
            </Col>
            <Col md={6} className='d-lg-flex align-items-center justify-content-center flex-column d-none'>
              <Image src={contactImg} alt="Contact Us" className='img-fluid m-auto' />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Contact
