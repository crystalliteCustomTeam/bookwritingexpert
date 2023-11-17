import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import Axios from "axios";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Signup = (props) => {


  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])

  const [score, setScore] = useState('Best time to jump on a quick call:');


  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {

    e.preventDefault()


    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      pageUrl:currentRoute,
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
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email"   placeholder="Email Address:" />
        <input type="tel" className={styles.nametext} required name="phone" minLength="10" maxLength="13" placeholder="Phone Number:" />
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup