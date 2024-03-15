import React from 'react'
import styles from '@/styles/Bannerlp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bannerlogos from '../public/images/newlp/bannerlogos.png'

const Banner = (props) => {










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
              <form>
              <div className={styles.publish}>
                <div>
                  <input type="text" class="" required="" name="name" placeholder="Full Name*" />
                </div>
                <div>
                <input type="tel" class="" required="" name="name" placeholder="Phone*" />
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