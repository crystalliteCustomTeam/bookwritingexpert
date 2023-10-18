import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import Router from 'next/router'
import { useRouter } from 'next/router';

const Freequote = (props) => {


  const [score, setScore] = useState('Submit');


  const router = useRouter();
  const currentRoute = router.pathname;


  const handleSubmit = async (e) => {

    e.preventDefault()


    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      pageUrl:currentRoute,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');



    fetch('api/email/route', {
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
      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    }

  }


  return (
    <>

      <div className={styles[props.formsaspire]}>
        <h4 className="t-center font30 fw500 colortextgrey font-f">Get A Free Quote</h4>

        <form className={styles.formalign} onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="name" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email"   placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="number" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={styles.freebtn} type="submit">{score} </button>
        </form>


        {props.show ?

          <div className='mt-4'>
            <Link className={styles.freediscuss} href="#">LET'S DISCUSS</Link>
            <Link className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</Link>
          </div>


          : ''}



      </div>


    </>
  )
}

export default Freequote