import React from 'react'
import styles from '@/styles/Getstarted.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Router from 'next/router'
import { useRouter } from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';

const Getstarted = (props) => {


  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://ipwho.is/');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])


  const [score, setScore] = useState('SUBMIT');


  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {

    e.preventDefault()

    


    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      services: e.target.services.value,
      message: e.target.message.value,
      pageUrl:currentRoute,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');



    fetch('api/popup/route', {
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
        "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
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

      <div className={styles.getstart}>
        <h4 className="t-center font30 fw700 colortextgrey font-f">Let’s Get Started</h4>


        <p className="textcolor font-f mb-4 font15 t-center mt-3">Call us on: <Link className='textdocationnone colorexpertgrey hover fw600' href="tel:(855) 500 0057">(855) 500 0057</Link> or use the form below to start a conversation and show you how we can help!</p>

        <form className={styles.formalign} onSubmit={handleSubmit}>

          <Row className='start mt-3 gy-3'>
            <Col md={6}>
              <input type="text" className={styles.formfree} required name="name" placeholder="Enter Your Name" />
            </Col>
            <Col md={6}>
              <input type="email" className={styles.formfree} required name="email"   placeholder="Enter Your Email" />
            </Col>



            <Col md={6}>
              <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" className={styles.formfree} required name="phone" placeholder="Phone Number" />
            </Col>
            <Col md={6}>
              {/* <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" /> */}
              <select name="services" className={`${styles.formfree} ${styles.formdrop}`}>
                <option value="">Please select Service(s)</option>
                {/* <option value="Ghost Writing">Ghost Writing</option> */}
                <option value="Editing">Editing</option>
                <option value="Publishing">Publishing</option>
                <option value="Proofreading">Proofreading</option>
                <option value="Blog Writing">Blog Writing</option>
                <option value="Website Content Writing">Website Content Writing</option>
                <option value="Book Promotion">Book Promotion</option>
                <option value="Book Writing">Book Writing</option>

              </select>
            </Col>

            <Col md={12}>
              <textarea className={styles.formfree} required name="message" rows="3" placeholder="Enter your Message"></textarea>
            </Col>

          </Row>











          <button className={styles.freebtn} type="submit"> {score} </button>
        </form>






      </div>


    </>
  )
}

export default Getstarted