import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import Axios from "axios";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Signup = (props) => {


  // const [ip, setIP] = useState('');
  // //creating function to load ip address from the API
  // const getIPData = async () => {
  //   const res = await Axios.get('https://ipwho.is/');
  //   setIP(res.data);
  // }
  // useEffect(() => {
  //   getIPData()
  // }, [])

  // const [score, setScore] = useState('Best time to jump on a quick call:');


  // const router = useRouter();
  // const currentRoute = router.pathname;

  // const handleSubmit = async (e) => {

  //   e.preventDefault()


  //   const data = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     phone: e.target.phone.value,
  //     pageUrl:currentRoute,
  //   }

  //   const JSONdata = JSON.stringify(data)

  //   setScore('Sending Data');



  //   fetch('api/quote/route', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSONdata
  //   }).then((res) => {
  //     console.log(`Response received ${res}`)
  //     if (res.status === 200) {
  //       console.log(`Response Successed ${res}`)
  //     }
  //   })


  //   var currentdate = new Date().toLocaleString() + ''
  //   let headersList = {
  //       "Accept": "*/*",
  //       "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //       "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
  //       "Content-Type": "application/json"
  //      }

  //      let bodyContent = JSON.stringify({
  //       "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
  //       "Brand": "BOOK-WRITING-EXPERT",
  //       "Page": `${currentRoute}`,
  //       "Date": currentdate,
  //       "Time": currentdate,
  //       "JSON": JSONdata,
  //     });

  //    await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", { 
  //        method: "POST",
  //        body: bodyContent,
  //        headers: headersList
  //      });

  //   const { pathname } = Router
  //   if (pathname == pathname) {
  //     window.location.href = 'https://www.bookwritingexperts.com/thank-you';
  //   }

  // }



  const [ip, setIP] = useState('');
  // Function to load IP address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://ipwho.is/');
    setIP(res.data);
  };
  useEffect(() => {
    getIPData();
  }, []);

  const [score, setScore] = useState('Best time to jump on a quick call:');

  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      pageUrl: currentRoute,
    };

    const JSONdata = JSON.stringify(data);
    setScore('Sending Data');

    // Sending data to your API
    await fetch('api/quote/route', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }).then((res) => {
      console.log(`Response received ${res}`);
      if (res.status === 200) {
        console.log(`Response succeeded ${res}`);
      }
    });

    const currentdate = new Date().toLocaleString();
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
      "Brand": "BOOK-WRITING-EXPERT",
      "Page": currentRoute,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,
    });

    await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    // HubSpot API submission
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const hubspotBody = JSON.stringify({
      "fields": [
        {
          "objectTypeId": "0-1",
          "name": "email",
          "value": e.target.email.value,
        },
        {
          "objectTypeId": "0-1",
          "name": "firstname",
          "value": e.target.name.value,
        },
        {
          "objectTypeId": "0-1",
          "name": "phone",
          "value": e.target.phone.value,
        },
      ],
      "context": {
        "ipAddress": ip.IPv4,
        "pageUri": currentRoute,
        "pageName": currentRoute,
      },
      "legalConsentOptions": {
        "consent": {
          "consentToProcess": true,
          "text": "I agree to allow Example Company to store and process my personal data.",
          "communications": [
            {
              "value": true,
              "subscriptionTypeId": 999,
              "text": "I agree to receive marketing communications from Example Company.",
            }
          ],
        },
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: hubspotBody,
      redirect: "follow",
    };

    await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    // Redirect after submission
    window.location.href = 'https://www.bookwritingexperts.com/thank-you';
  };

  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" placeholder="Email Address:" />
        <input type="tel" className={styles.nametext} required name="phone" minLength="10" maxLength="13" pattern="[0-9]*" placeholder="Phone Number:" />
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup