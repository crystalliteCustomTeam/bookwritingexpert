import React from 'react'
import styles from '@/styles/Bannerlp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bannerlogos from '../public/images/newlp/bannerlogos.png'
import Router from 'next/router'
import { useRouter } from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";


const Banner = (props) => {



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
      name: e.target.firstname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
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
      <div className={styles.banner}>

        <Container>
          <Row>
            <Col md={8} className={styles.newtown}>
            <h1 className='color-white font-f fw700'>Get Your Book Heard</h1>
            <h2 className='color-white font-f fw500'>Publish Your Audio Book on Amazon</h2>
            <p>Create your audio book with our professional voice actors and authors. Let your voice be heard. Put your words on the pages of an audiobook, get it published on Amazon, and you will be able to reach millions of listeners.</p>
            

            <div className={styles.bookshowform}>
              <h3 className='color-white font-f fw700'>Request A Free Quote</h3>
              <form onSubmit={handleSubmit}>
              <div className={styles.publish}>
                <div>
                  <input type="text" required class=""  name="firstname" placeholder="Full Name*" />
                </div>
                <div>
                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" class="" required name="phone" placeholder="Phone*" />
                </div>
              </div>
              <div className={styles.publish}>
              <div>
                <input type="email" class="" required name="email" placeholder="Email*" />
                </div>
                <div>
                <input type="text" class="" required name="message" placeholder="Details" />
                </div>
              </div>
              <input type="submit" class="" required name="name" value="Send Message" />
              </form>
            </div>
            <div className={styles.folpo}>
                <Image src={bannerlogos} className="img-fluid" alt="Book Writing Experts" quality={95} />
            </div>
            

            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Banner