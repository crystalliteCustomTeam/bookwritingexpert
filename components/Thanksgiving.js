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


const Thanksgiving = () => {



  const [score, setScore] = useState('Submit');


  const router = useRouter();
  const currentRoute = router.pathname;

  const handleSubmit = async (e) => {

    e.preventDefault();
   

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      pageUrl:currentRoute,
      giving : 'Thanks Giving'
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

    const { pathname } = Router
    if (pathname == pathname) {
      window.location.href = 'https://www.bookwritingexperts.com/thank-you';
    }

  }







  return (
    <>

      <div className={styles.getstart}>


        

          <Container>
            <Row className={styles.notes}>

              <Col lg={5}>

                <div className={styles.post}>
                  <span className='togpost'>
                    <Image src={textimage} className='img-fluid w-50 d-block m-auto' />
                  </span>

                  
                  <form onSubmit={handleSubmit} className={styles.giving}>
                 
                    <input type="text" className={styles.formfree} required name="name" placeholder="Enter Your Name" />
                    <input type="email" className={styles.formfree} required name="email" placeholder="Enter Your Email" />
                    <input type="number" className={styles.formfree} required name="phone" placeholder="Enter Your Number" />
                    <button className={styles.freebtn} type="submit"> {score}</button>
                  

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