import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Dowecome.module.css'
import Signup2 from './Signup2'

const Dowecome = (props) => {
  return (
    <>
      <div className={styles[props.Dowecome]}>
        <Container>
          <Row className={` ${styles.middle} gy-4`}>
            <Col md={12}>
              <div className={styles.image}>
                <Signup2
                  form='ourform'
                  bannershome='signup1'
                  contacttext='concolor'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dowecome