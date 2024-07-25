import React from 'react'
import styles from '@/styles/Requestafreequote.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from "react";
// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Router from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Requestafreequote = () => {

  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Submit');
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
  }

  useEffect(() => {
    getIPData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      pageUrl: currentRoute,
      phone: e.target.phone.value, 
    }

    const JSONdata = JSON.stringify(data);
    setScore('Sending Data');

    try {
      const response = await fetch('/api/quote/route', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSONdata
      });

      if (response.status === 200) {
        console.log('Response succeeded', response);
      }

      const currentdate = new Date().toLocaleString();
      const headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json"
      }

      const bodyContent = JSON.stringify({
        "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
        "Brand": "BOOK-WRITING-EXPERT",
        "Page": currentRoute,
        "Date": currentdate,
        "Time": currentdate,
        "JSON": JSONdata
      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      const hubspotHeaders = new Headers();
      hubspotHeaders.append("Content-Type", "application/json");

      const hubspotBody = JSON.stringify({
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": e.target.email.value
          },
          {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": e.target.name.value
          },
          {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": e.target.phone.value
          }, 
        ],
        "context": {
          "ipAddress": ip.IPv4,
          "pageUri": currentRoute,
          "pageName": currentRoute
        },
        "legalConsentOptions": {
          "consent": {
            "consentToProcess": true,
            "text": "I agree to allow Example Company to store and process my personal data.",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text": "I agree to receive marketing communications from Example Company."
              }
            ]
          }
        }
      });

      await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", {
        method: "POST",
        headers: hubspotHeaders,
        body: hubspotBody,
        redirect: "follow"
      }).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error(error));

      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  return (
    <>
      <div className={styles.freequote} id='footercontact'>
        <Container>
          <h2 className="fw700 font50 color-blue font-f t-center mb-3 pt-5 mt-5">Request A Free Quote</h2>
          <form className={styles.formalign} onSubmit={handleSubmit}>
            <Row>
              <Col md={4}> <input type="text" className={styles.formfree} required name="name" placeholder='Name' /></Col>

              <Col md={4}>  <input type="email" className={styles.formfree} required name="email" placeholder='Email' /></Col>

              <Col md={4}>   <input type="tel" minLength="10" maxLength="13" className={styles.formfree} required name="phone" placeholder='Phone' pattern="[0-9]*" /> </Col>
            </Row>
            <button className={styles.freebtn} type="submit"> {score} </button>
          </form>
          <Row className={styles.leftemail}>
            <Col md={4}>    <h3 className="fw700 font48 colorexpertgrey font-f t-left">Email Us</h3></Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For project inquiries only: </h4>
                <p className={styles.bookemail}><MdEmail size={16} />

                  <Link className={`${styles.emailhref} hover`} href="mailto:support@bookwritingexperts.com">  support@bookwritingexperts.com </Link> </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For other inquiries only: </h4>
                <p className={styles.bookemail}><BsFillTelephoneFill size={12} />

                  <Link className={`${styles.emailhref} hover`} href="tel:(855) 500 0057"> (855) 500 0057 </Link> </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Requestafreequote