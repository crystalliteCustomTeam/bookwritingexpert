import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Dowecome.module.css'

const Cta = () => {
    return (
        <>
            <section className={styles.cta}>
                <Container>
                    <Row className={` ${styles.middle} gy-4`}>
                        <Col md={12}>
                            <div className={styles.dowemargin}>
                                <h3 className="fw300 font50 text-white font-f mb-4">
                                    <span>Get A Customized Solution By <Link className='d-block color-blue fw700 hover textdocationnone' href='/book-publishing-services'> Best Publishing Services </Link></span>
                                </h3>
                                <p className='font15 fw400 font-f text-white pe-lg-5 pe-0'>
                                    <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='text-white textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>
                                </p>
                                <div className='mt-5'>
                
                                    <Link className={styles.btn1} href="#">Chat With Our Expert Now!</Link>
                                    <Link className={styles.btn2} href="tel:(213) 289 3888"> Call Us At (213) 289 3888</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>
        </>
    )
}

export default Cta