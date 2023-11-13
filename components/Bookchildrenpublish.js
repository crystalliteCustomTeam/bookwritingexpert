import React, { useState } from 'react'
import styles from '@/styles/Bookbadges.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Freequote from './Freequote'

// images
import bookbadges6 from '/public/images/bookbadges/6.png'
import bookbadges7 from '/public/images/bookbadges/7.png'


const BookChildrenPublish = (props) => {


    const [show, setShow] = useState(false);

    function modal(events) { event.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }


    const data = [

        {
            title: 'STANDARD',
            para: 'Creative content with a range of 200-300 pages.',
            btnname: 'Get A Quote',
            bookbadges1: bookbadges6,
        },

        {
            title: 'PREMIUM',
            para: 'Strategically designed content with a range of 350 pages & beyond.',
            btnname: 'Get A Quote',
            bookbadges1: bookbadges7,
        },

    ];




    return (
        <>

            <div className={styles.bookbadges}>

                <Container className='bookalign'>
                    <Row className={` ${styles.bookrow} gy-3 `}>

                        <Col md={12}>
                            <h2 className='font50 fw700 color-blue text-center mb-5'>Children Book Publication</h2>
                        </Col>

                        {data.map((post, i) => (
                            <Col md={6} key={i}>
                                <Row className={`${styles.bookcontent} content`} >
                                    <Col md={8}>
                                        <div>

                                            <h2 className="fw700 font40 color-blue font-f"> {post.title}</h2>
                                            <h4 className={`${styles.marketing} fw500 font20 font-f`}> {post.subtitle}</h4>
                                            <p className='font15  textcolor font-f mb-4'>{post.para}</p>
                                            <span onClick={modal} className={styles.quote} href="">{post.btnname}</span>

                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <Image loading="lazy" src={post.bookbadges1} alt="Book Writing Experts" className='img-fluid'></Image>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                    <Modal.Body> <Freequote formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>


                </Modal>


            </div>

        </>
    )
}

export default BookChildrenPublish