import React from 'react'
import styles from '@/styles/Letstalk.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bannerlogos from '../public/images/newlp/callcenter.png'

import fb from '../public/images/newlp/fb.png'
import xx from '../public/images/newlp/xx.png'
import insta from '../public/images/newlp/insta.png'
import you from '../public/images/newlp/you.png'
import link from '../public/images/newlp/link.png'
import email from '../public/images/newlp/email.png'
import tel from '../public/images/newlp/tel.png'
import Link from 'next/link'

const Letstalk = () => {










  return (
    <>
      <div className={styles.banner}>

        <Container>
          <Row className='g-3'>
            <Col md={6} className={styles.newtown}>
              <div className={styles.newlongtsk}>
                <h2 className='font-f fw700'>Let's Talk</h2>
                <p className='font-f'>For Inquiries, Collaboration Opportunities, Or Any Assistance, Don't Hesitate To Contact Us. Our Dedicated Team Is Ready To Engage And Support Your Needs, Ensuring A Seamless And Productive Partnership.</p>
             
                <form>
              <div className={styles.publish}>
                <div>
                  <input type="text" class="" required="" name="name" placeholder="Full Name*" />
                </div>
                <div>
                <input type="tel" class="" required="" name="name" placeholder="Phone Number*" />
                </div>
              </div>
              <div className={styles.publish}>
              <div>
                <input type="email" class="" required="" name="name" placeholder="Email*" />
                </div>
                <div>
                <input type="text" class="" required="" name="name" placeholder="Details" />
                </div>
              </div>
              <input type="submit" class="" required="" name="name" value="Send Message" />
              </form>
              </div>
            </Col>
            <Col md={6} className={styles.newtown2}>
              

              <div className={styles.social}>
              <Image src={bannerlogos} className='img-fluid' alt="Book Writing Experts" />

              <div className={styles.gosto}>
                <h3>Social Links</h3>

                <ul>
                  <li> <Link href="https://www.facebook.com/bookwritingexperts">  <Image alt="Book Writing Experts" src={fb} className='img-fluid' /> </Link> </li>
                  <li> <Link href="#">  <Image alt="Book Writing Experts" src={xx} className='img-fluid' /> </Link> </li>
                  <li> <Link href="https://www.instagram.com/bookwritingexp/">  <Image alt="Book Writing Experts" src={insta} className='img-fluid' /> </Link> </li>
                  <li> <Link href="https://www.linkedin.com/company/bookwritingexp">  <Image alt="Book Writing Experts" src={you} className='img-fluid' /> </Link> </li>
                  <li> <Link href="https://www.youtube.com/channel/UCMwHkNiJzrMd6MlPOBFMmLA">  <Image alt="Book Writing Experts" src={link} className='img-fluid' /> </Link> </li>
                </ul>             
                 </div>
              </div>
                


            </Col>

<Col lg={12}>

  <div className={styles.down}>
   <div className={styles.flow}>
      <h3>Email Us</h3>
   </div>
   <div className={styles.flow1}>
    <h4>For Project Inquiries Only:</h4>

    <div className={styles.major}>
      <Link href="mailto:Support@Bookwritingexperts.Com">  <Image src={email} className='img-fluid' /> Support@Bookwritingexperts.Com</Link>
    </div>

   </div>
   <div className={styles.flow2}>
   <h4>For Other Inquiries Only:</h4>

<div className={styles.major}>
  <Link href="tel:8555000057">  <Image src={tel} className='img-fluid' /> (855) 500 0057</Link>
</div>
   </div>



  </div>

</Col>


          </Row>

     
        </Container>


      </div>
    </>
  )
}

export default Letstalk