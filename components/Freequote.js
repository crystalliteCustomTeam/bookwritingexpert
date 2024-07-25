import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import Router from 'next/router'
import { useRouter } from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';

const Freequote = (props) => {


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

      <div className={styles[props.formsaspire]}>
        <h4 className="t-center font30 fw500 colortextgrey font-f">Get A Free Quote</h4>

        <form className={styles.formalign} onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="name" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email"   placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="tel"  minLength="10" maxLength="13" pattern="[0-9]*" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={styles.freebtn} type="submit">{score} </button>
        </form>


        {props.show ?

          <div className='mt-4'>
            <Link className={styles.freediscuss} href="javascript:$zopim.livechat.window.show();">LET'S DISCUSS</Link>
            <Link className={styles.freehomenumer} href="tel:(855) 500 0057">(855) 500 0057</Link>
          </div>


          : ''}



      </div>


    </>
  )
}

export default Freequote