import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Styles from "@/styles/Quote.module.css"

// Images 
import QuoteBook from "public/images/amazonbookpublishing/quoteimage.png"

const RequestQuote = () => {
  return (
    <>
     <section className={Styles.Quote}>
        <Container>
            <Row>
                <Col lg={6} className='px-lg-0'>
                    <Image src={QuoteBook} alt="Quote-Book" width={555} height={477} className='mx-auto'/>
                </Col>
                <Col lg={6} className='px-lg-0'>
                    <form action='javascript:;'>
                        <h4 className='font50 fw700 mb-4'>Request A Free Quote</h4>
                        <Row>
                            <Col lg={6} className='px-2'>
                                <input placeholder='Full Name*' className={Styles.secInput} required/>
                            </Col>
                            <Col lg={6} className='px-2'>
                                <input placeholder='Phone *' className={Styles.secInput} required/>
                            </Col>
                            <Col lg={6} className='px-2'>
                                <input placeholder='Email *' className={Styles.secInput} required/>
                            </Col>
                            <Col lg={6} className='px-2'>
                                <input placeholder='Details' className={Styles.secInput} required/>
                            </Col>
                            <button className={`${Styles.formBtn}`} type='submit'>Get A Quote</button>
                        </Row>
                        <hr className={`mt-5 `} />
                    </form>
                </Col>
            </Row>
        </Container>
        </section> 
    </>
  )
}

export default RequestQuote
