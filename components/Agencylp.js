import React from 'react'
import styles from '@/styles/Agencylp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import marketing from '../public/images/newlp/marketing.png'
import tick from '../public/images/newlp/tick.png'
import Link from 'next/link'

const Agencylp = () => {


  return (
    <>
      <div className={styles.ready}>

        <Container>
          <Row className={`${styles.turn} gx-5`}>
            <Col md={6} >

            <div className={styles.piximg}>
              <Image src={marketing} className='img-fluid' alt="Book Writing Experts" />
            </div>
           
           
       
            </Col>
            <Col md={6} className={styles.menuinto}>
       
            <h2 className='font-f fw700'>Book Marketing Agency & Author Promotion Services.</h2>
            <h4>Amazon Publishing Agency is a professional book marketing agency that helps authors write and promote their books, help them in book editing and proofreading, design book covers, get more reviews and build their platform.</h4>
            <p className='font-f'>We provide services like Amazon Author Central, Amazon Book Promotion Services and Author Platform Building Services. We also help authors increase their visibility by sharing their content on social media and other platforms.</p>
           
           <div className={styles.provide}>

            <div className={styles.help}>
              <Image src={tick} className='img-fluid' />
              <h5>Book Writing</h5>
            </div>
            <div className={styles.help}>
              <Image src={tick} className='img-fluid' />
              <h5>Book Publishing</h5>
            </div>
            <div className={styles.help}>
              <Image src={tick} className='img-fluid' />
              <h5>Book Marketing</h5>
            </div>

           </div>
           <div className={styles.know}>
            <Link className={styles.great} href="javascript:$zopim.livechat.window.show();">Discover More</Link> 

           </div>
            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Agencylp