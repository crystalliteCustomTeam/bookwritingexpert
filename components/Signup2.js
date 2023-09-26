import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios";

const Signup = (props) => {

  const [score, setScore] = useState('Best time to jump on a quick call:');

  const handleSubmit = async (e) => {

    e.preventDefault()


    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
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

    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address:" />
        <input type="number" className={styles.nametext} required name="phone" placeholder="Phone Number:" />
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup