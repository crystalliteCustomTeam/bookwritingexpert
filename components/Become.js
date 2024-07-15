import React from 'react'
import styles from '@/styles/Become.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import marketing from '../public/images/newlp/become.png'
import tick from '../public/images/newlp/tick.png'
import Link from 'next/link'

const Become = () => {


  return (
    <>
      <div className={styles.ready}>

        <Container>

        <Row className={styles.newyouk}>
        <Col md={12}>
         <h2 className='font-f fw700'>Become The Next Best-Selling Author.</h2>
         <p className='font-f'>Amazon Publishing Agency is a leading independent book publishing agency in USA. We have been providing innovative, customized solutions to publishers and authors for over a decade.</p>
        </Col>
        </Row>

          <Row className={`${styles.turn} gx-5`}>
            <Col md={6} >
            <div className={styles.piximg}>
              <Image src={marketing} className='img-fluid' alt="Book Writing Experts" />
            </div>      
            </Col>
            <Col md={6} className={styles.menuinto}>
       
           <h4>Our Mission</h4>
            <p className='font-f'>At Amazon Publishing Agency, Our Mission Is To Help You Publish Your Book Or Help You With The Publishing Process. We Help You With Both Creative And Business Publishing.</p>

            <h4>Our Vision</h4>
            <p className='font-f'>Our Vision Is To Be The Best Amazon Publishing Agency In The World. We Are Proud Of Our Team Of Talented Writers And Editors Who Have Helped Us Bring Out Bestselling Books.</p>

            <h4>Our History</h4>
            <p className='font-f'>Our History Is As Old As The Publishing Industry Itself. We Are One Of The Best Solutions For Authors Looking To Get Their Work Published And Make Money On It.</p>
           
<hr></hr>

           <div className={styles.provide}>

            <div className={styles.help}>
              <Image src={tick} className='img-fluid' alt="Book Writing Experts" />
              <h5>Award-Winning Team.</h5>
            </div>
            <div className={styles.help}>
              <Image src={tick} className='img-fluid' alt="Book Writing Experts" />
              <h5>Extensive Portfolio.</h5>
            </div>
            <div className={styles.help}>
              <Image src={tick} className='img-fluid' alt="Book Writing Experts" />
              <h5>One-Stop-Solutions.</h5>
            </div>
              <div className={styles.help}>
              <Image src={tick} className='img-fluid' alt="Book Writing Experts" />
              <h5>Most Affordable Prices.</h5>
            </div>
            <div className={styles.help}>
              <Image src={tick} className='img-fluid' alt="Book Writing Experts" />
              <h5>Always Deliver Quality Work.</h5>
            </div>

           </div>
           
           <div className={styles.know}>
           <Link className={styles.great} href="javascript:$zopim.livechat.window.show();">Let’s Discuss</Link> 
            <Link className={styles.produce} href="tel:8555000057">(855) 500 0057</Link> 

           </div>
            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Become