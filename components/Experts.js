import React from 'react'
import styles from '@/styles/Experts.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Experts = (props) => {
  return (
    <>
      <div className={styles.experts}>

        <Container>
          <Row>
            <Col md={12}>
              <h2 className='fw700 font50 color-white font-f t-center font-f mb-4'>{props.title}</h2>
              <p className='fw500 color-white t-center font-f mb-3' dangerouslySetInnerHTML={{__html : props.text}}/>

              <div className={`${styles.expertnum} t-center font-f font-f`}>
                <Link className='fw500 color-white font18 font-f' href="tel:(855) 500 0057">{props.number}</Link>
              </div>
              <div className={styles.expertdiscuss}>
                <Link className={`${styles.discuss1} hover`} href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                <Image />
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Experts