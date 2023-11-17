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
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])


  const [score, setScore] = useState('Submit');


  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {

    e.preventDefault();

 


    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      pageUrl:currentRoute,
      phone: e.target.phone.value,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');



    fetch('api/quote/route', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`)
      if (res.status === 200) {
        console.log(`Response Successed ${res}`)
      }
    })

    var currentdate = new Date().toLocaleString() + ''
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
        "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
        "Brand": "BOOK-WRITING-EXPERT",
        "Page": `${currentRoute}`,
        "Date": currentdate,
        "Time": currentdate,
        "JSON": JSONdata,
       
      });
       
     await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });

    const { pathname } = Router
    if (pathname == pathname) {
      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
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

              <Col md={4}>  <input type="email" className={styles.formfree} required name="email" placeholder='Email'   /></Col>

              <Col md={4}>   <input type="tel" minLength="10" maxLength="13" className={styles.formfree} required name="phone" placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> </Col>
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