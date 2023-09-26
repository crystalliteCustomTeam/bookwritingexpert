import React from 'react'
import styles from '@/styles/Getstarted.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Router from 'next/router'
import { useRouter } from 'next/router';


const Getstarted = (props) => {


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

    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }



  return (
    <>

      <div className={styles.getstart}>
        <h4 className="t-center font30 fw700 colortextgrey font-f">Let’s Get Started</h4>


        <p className="textcolor font-f mb-4 font15 t-center mt-3">Call us on: <Link className='textdocationnone colorexpertgrey hover fw600' href="tel:(213) 289 3888">(213) 289 3888</Link> or use the form below to start a conversation and show you how we can help!</p>

        <form className={styles.formalign} onSubmit={handleSubmit}>

          <Row className='start mt-3 gy-3'>
            <Col md={6}>
              <input type="text" className={styles.formfree} required name="name" placeholder="Enter Your Name" />
            </Col>
            <Col md={6}>
              <input type="email" className={styles.formfree} required name="email"   placeholder="Enter Your Email" />
            </Col>



            <Col md={6}>
              <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" />
            </Col>
            <Col md={6}>
              {/* <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" /> */}
              <select name="services" className={`${styles.formfree} ${styles.formdrop}`}>
                <option value="">Please select Service(s)</option>
                <option value="Ghost Writing">Ghost Writing</option>
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