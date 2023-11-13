import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Professionalghostwriter.module.css'
import Image from 'next/image'
import Link from 'next/link'
import professionalghostwriter from '/public/images/professionalghostwriter/professionalghostwriter.webp'

const Professionalghostwriter = () => {
  return (
    <div className={styles.professionalghostwriter}>
      <Container>
        <Row className={styles.writercenter}>
          <Col md={6}>
            <Image loading="lazy" alt="Book Writing Experts" src={professionalghostwriter} className='img-fluid' />
          </Col>
          <Col md={6}>
            <h2>
              <Link className='color-blue font50 font-f textdocationnone' href="https://www.bookwritingexperts.com/">Book Writing Experts </Link>
              Is waiting for you to Ask for a <Link className='color-blue font50 font-f textdocationnone' href="https://www.bookwritingexperts.com/">Professional Ghostwriter</Link></h2>

            <p className='font15 textcolor font-f mt-4'>Hit us a message, or give us a call, and make the most of our Professional Ghostwriters.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Professionalghostwriter