import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from '../Logos/logo.module.css'
const Logos = () => {
  return (
    <section>
      <div className={`${style.logos}`}>
        <Container>
          <Row>
            <Col md={10} className="">

            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Logos
