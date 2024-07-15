import React from 'react'
import styles from '@/styles/Unique.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import marketing from '../public/images/newlp/marketing.png'
import tick from '../public/images/newlp/tick.png'
import Link from 'next/link'

const Unique = () => {


  return (
    <>
      <div className={styles.ready}>

        <Container>
          <Row className={`${styles.turn} gx-5`}>
            <Col md={9} >
            <h2 className='font-f fw700'>What Makes Us Unique</h2>
            <p className='font-f'> <span>Everything is yours and within your control:</span> Our clients hold their own publication rights, have total control over their accounts, and receive 100% of the money. We will take you through every step of the procedure.</p>
            <p className='font-f'> <span>Books are published to be sold:</span> Every project starts with a plan for getting people to find your book — after all, you can't market a book that no one can find. Your book is then created, rather than the other way around.</p>
           
            <div className={styles.know}>
            <Link className={styles.great} href="javascript:$zopim.livechat.window.show();">Let’s Discuss</Link> 
           </div>
            </Col>
          
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Unique