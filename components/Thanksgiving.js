import React from 'react'
import styles from '@/styles/Thanksgiving.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Router from 'next/router'
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo5 from '../public/images/getstarted/sub.png'
import textimage from '../public/images/getstarted/textimage.png'
import Axios from "axios";
import { useEffect } from 'react';

const Thanksgiving = () => {



  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://ipwho.is/');
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
      phone: e.target.phone.value,
      pageUrl: currentRoute,
      giving: 'Thanks Giving'
    }

    const JSONdata = JSON.stringify(data);


    setScore('Sending Data');



    fetch('api/thanks/route', {
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




        <Container className='offpost'>
          <Row className={styles.notes}>

            <Col lg={5}>

              <div className={styles.post}>
                <span className='togpost'>
                  <Image alt="Book Writing Experts" src={textimage} className='img-fluid w-50 d-block m-auto' />
                </span>


                <form onSubmit={handleSubmit} className={styles.giving}>

                  <input type="text" className={styles.formfree} required name="name" placeholder="Enter Your Name" />
                  <input type="email" className={styles.formfree} required name="email" placeholder="Enter Your Email" />
                  <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" className={styles.formfree} required name="phone" placeholder="Enter Your Number" />
                  <button className={styles.freebtn} type="submit"> {score}</button>

                  <p className='black font18 fw700 font-f mt-3'>Publish Your Book for Only <span className='colorthanks fw800 font25'>$399</span> </p>
                </form>
              </div>

            </Col>

            <Col lg={7}>

              <div className='p-5'>
                <Image src={logo5} className='img-fluid' />
              </div>
            </Col>






          </Row>
        </Container>



















      </div>


    </>
  )
}

export default Thanksgiving