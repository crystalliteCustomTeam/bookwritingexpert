import React from 'react'
import styles from '@/styles/Bigger.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import ready from '../public/images/newlp/lost.png'
import Link from 'next/link'

const Bigger = (props) => {


  return (
    <>
      <div className={`${styles.ready}`}>

        <Container>
          <Row className={`${styles.turn}`}>
            <Col md={7} className={styles.noflod}>
            <div className={styles.menuinto}>
            <h2 className='font-f fw700 color-white'>We’re Ready To Bring Bigger
& Stronger Projects</h2>
<p className='font-f  pb-2 color-white'>With unwavering determination and fortified capabilities, we stand prepared to usher in a new era of monumental achievements, ready to undertake larger and more robust projects. Our commitment to excellence and innovation positions us at the forefront, poised to elevate your ambitions to unprecedented heights.</p>


           
           <div className={styles.know}>
            <Link className={styles.great} href="javascript:$zopim.livechat.window.show();">Let’s Discuss</Link> 
            <Link className={styles.produce} href="tel:8555000057">(855) 500 0057</Link> 
           </div>
            </div>
            </Col>
      
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Bigger