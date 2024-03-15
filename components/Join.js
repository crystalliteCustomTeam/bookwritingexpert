import React from 'react'
import styles from '@/styles/Join.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import ready from '../public/images/newlp/girls.png'
import Link from 'next/link'

const Join = () => {


  return (
    <>
      <div className={styles.ready}>

        <Container>
          <Row className={styles.turn}>
            <Col md={4} >


            <h2 className='font-f fw700'>Join The Best Audiobook Publishing Service</h2>


            <p className='font-f'>If you have a story you want to share with the world as an audiobook, don't do it alone. Let our team of experts handle the narration and production so you can focus on what matters most - your content. We have access to top voice talent, equipment, and editing tools that will help your stories come alive.</p>
           
       
            </Col>
            <Col md={8} className={styles.menuinto}>
            <div className={styles.piximg}>
              <Image src={ready} className='img-fluid' alt="Book Writing Experts" />
            </div>
           
            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Join