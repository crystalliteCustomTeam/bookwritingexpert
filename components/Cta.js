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
                                <h2 className="fw300 font50 text-white font-f mb-4">
                                   Access Our <span className='color-blue fw700 hover textdocationnone' href='/book-publishing-services'> Book Writers </span>at Your Fingertips
                                </h2>
                                <p className='font15 fw400 font-f text-white pe-lg-5 pe-0'>
                                    <span>We have you covered in all the domains with our dedicated team of skilled book writers, talented designers, proactive publicists, and innovative marketers. With our proactive approach and diverse skill sets, we ensure that your projects are handled with precision and efficiency. So hire professional book writing services to stand in the competitive market!</span>
                                </p>
                                <div className='mt-5'>
                
                                    <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">Chat With Our Expert Now!</Link>
                                    <Link className={styles.btn2} href="tel:(855) 500 0057"> Call Us At (855) 500 0057</Link>
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