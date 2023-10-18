import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios";

import { useRouter } from 'next/router';

const Signup = (props) => {

  const [score, setScore] = useState('Best time to jump on a quick call:');


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
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email"   placeholder="Email Address:" />
        <input type="number" className={styles.nametext} required name="phone" placeholder="Phone Number:" />
        <textarea required className={styles.textareanew} name="message" cols="40" rows="10" placeholder="Your project brief:"></textarea>
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup