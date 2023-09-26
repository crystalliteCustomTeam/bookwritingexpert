import React from 'react'
import styles from '@/styles/Gotastory.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Gotastory = (props) => {
  return (
    <>
      <div className={styles.gotastory}>

        <Container fluid>
          <Row>
            <Col md={12} className='p-0'>
              <video className={`${styles.bgVideo}`} width={890} autoPlay muted loop src="/images/bwc-video.m4v" type="video/mp4"></video>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Gotastory