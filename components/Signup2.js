import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react"; 
import Axios from "axios";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Signup = (props) => {
  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Submit');
  const router = useRouter();
  const [isdisabled, setIsdisabled] = useState(false)
  const currentRoute = router.pathname;
  const [pagenewurl, setPagenewurl] = useState('')

  // Function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get('https://ipwho.is/');
      setIP(res.data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  }

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href)
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsdisabled(true);
    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
      lead_data: {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: ''
      }
    };

    const JSONdata = JSON.stringify(data); 
    
    setScore('Sending Data');

    try {
      const response = await fetch('https://brandsapi.cryscampus.com/api/v1/leads', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSONdata
      });

      if (response.status === 200) {
        console.log('Response succeeded', response);
      }

      const currentdate = new Date().toLocaleString();
      const headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json"
      }

      const bodyContent = JSON.stringify({
        "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
        "Brand": "BOOK-WRITING-EXPERT",
        "Page": currentRoute,
        "Date": currentdate,
        "Time": currentdate,
        "JSON": JSONdata
      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      const hubspotHeaders = new Headers();
      hubspotHeaders.append("Content-Type", "application/json");

      const hubspotBody = JSON.stringify({
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": e.target.email.value
          },
          {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": e.target.name.value
          },
          {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": e.target.phone.value
          },
        ],
        "context": {
          "ipAddress": ip.IPv4,
          "pageUri": pagenewurl,
          "pageName": pagenewurl
        },
        "legalConsentOptions": {
          "consent": {
            "consentToProcess": true,
            "text": "I agree to allow Example Company to store and process my personal data.",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text": "I agree to receive marketing communications from Example Company."
              }
            ]
          }
        }
      });

      await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", {
        method: "POST",
        headers: hubspotHeaders,
        body: hubspotBody,
        redirect: "follow"
      }).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error(error));

      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" placeholder="Email Address:" />
        <input type="tel" className={styles.nametext} required name="phone" minLength="10" maxLength="13" pattern="[0-9]*" placeholder="Phone Number:" />
        <button className={styles.freebtn} type="submit" disabled={isdisabled}>{score} </button>
      </form>
    </div>
  )


}

export default Signup