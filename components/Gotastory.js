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
              <video className={`${styles.bgVideo}`} width={890} autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/950057618/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2f66c3a010fb9e04ad78b5c128befb1500e0bd02d8fd397b7c074615bd7e4f21" type="video/mp4"></video> 
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Gotastory