import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Ourportfolio.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import bookpublishing1 from '/public/images/ourportfolio/bookpublishing/1.svg'
import bookpublishing2 from '/public/images/ourportfolio/bookpublishing/2.svg'
import bookpublishing3 from '/public/images/ourportfolio/bookpublishing/3.svg'
import bookpublishing4 from '/public/images/ourportfolio/bookpublishing/4.svg'

import bookmarketing1 from '/public/images/ourportfolio/bookmarketing/1.svg'
import bookmarketing2 from '/public/images/ourportfolio/bookmarketing/2.svg'
import bookmarketing3 from '/public/images/ourportfolio/bookmarketing/3.svg'
import bookmarketing4 from '/public/images/ourportfolio/bookmarketing/4.svg'

import bookwriting1 from '/public/images/ourportfolio/bookwriting/1.svg'
import bookwriting2 from '/public/images/ourportfolio/bookwriting/2.svg'
import bookwriting3 from '/public/images/ourportfolio/bookwriting/3.svg'
import bookwriting4 from '/public/images/ourportfolio/bookwriting/4.svg'

import bookediting1 from '/public/images/ourportfolio/bookediting/1.svg'
import bookediting2 from '/public/images/ourportfolio/bookediting/2.svg'
import bookediting3 from '/public/images/ourportfolio/bookediting/3.svg'
import bookediting4 from '/public/images/ourportfolio/bookediting/4.svg'




const ourportfolio = () => {
    return (

        <>

            <Head>
                <title>Book Marketing Portfolio</title>
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content="Check out the extensive book marketing portfolio of Book Writing Experts and see how we market best-sellers" />
                <meta property="og:title" content="Book Marketing Portfolio" />
                <meta property="og:description" content="Check out the extensive book marketing portfolio of Book Writing Experts and see how we market best-sellers" />
            </Head>




            <section className={styles.ourportfolio}>

                <div className={styles.banner}>
                    <div className={styles.heading}>
                        <h1 className='color-black font70 t-center linhight mb-4'>Our <br></br> Marketing</h1>
                        <Link className={styles.free} href="javascript:$zopim.livechat.window.show();"> FREE AUTHOR CONSULTATION CALL </Link>
                    </div>
                </div>



                <Container className={styles.rate1}>



                    <Row className='mt-5'>
                        <Col md={3}>
                            <Image src={bookpublishing1} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookpublishing2} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookpublishing3} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookpublishing4} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                    </Row>







                    <Row className='mt-5'>
                        <Col md={3}>
                            <Image src={bookwriting1} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookwriting2} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookwriting3} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookwriting4} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                    </Row>








                    <Row className='mt-5'>
                        <Col md={3}>
                            <Image src={bookediting1} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookediting2} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookediting3} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookediting4} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                    </Row>












                    <Row className='mt-5'>
                        <Col md={3}>
                            <Image src={bookmarketing1} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookmarketing2} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookmarketing3} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                        <Col md={3}>
                            <Image src={bookmarketing4} className='img-fluid' alt="Book Writing Experts"></Image>
                        </Col>
                    </Row>


                </Container>




            </section>

        </>
    )
}

export default ourportfolio