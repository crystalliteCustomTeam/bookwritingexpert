import React from 'react'
import styles from '@/styles/Ready.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import ready from '../public/images/newlp/ready.png'
import Link from 'next/link'

const Ready = (props) => {


  return (
    <>
      <div className={styles.ready}>

        <Container>
          <Row className={styles.turn}>
            <Col md={4} >
            <div className={styles.piximg}>
              <Image src={ready} className='img-fluid' alt="Book Writing Experts" />
            </div>
            </Col>
            <Col md={8} className={styles.menuinto}>
            <h2 className='font-f fw700'>Ready To Turn Your Manuscript Into
A Best-Selling Audio Book?</h2>
<p className='font-f'>Achieve more success on Amazon with an audio book narration! Publish your story on Amazon, become a bestseller, and be able to reach millions of listeners.</p>

<p className='font-f'>We know what it takes to produce a great audiobook. With our award-winning production team, we can turn any type of story into an unforgettable audio experience. Whether you're an author or publisher, we've got you covered!</p>
           
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

export default Ready