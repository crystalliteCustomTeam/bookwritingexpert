import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Major.module.css'
// images
import icon01 from '/public/images/major/icon1.png'
import icon02 from '/public/images/major/icon2.png'
import icon03 from '/public/images/major/icon3.png'
import icon04 from '/public/images/major/icon4.png'
import icon05 from '/public/images/major/icon5.png'
import icon06 from '/public/images/major/icon6.png'
import icon07 from '/public/images/major/icon7.png'
import icon08 from '/public/images/major/icon8.png'
import icon09 from '/public/images/major/icon9.png'
import icon10 from '/public/images/major/icon10.png'
import icon11 from '/public/images/major/icon11.png'
import icon12 from '/public/images/major/icon12.png'


const Major = () => {
    return (
        <>
            <section className={styles.major}>
                <Container>
                    <Row className='mb-5 pb-2'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                <h2 className='fw700 font50 text-black font-f t-center'>
                                    Many Got Featured In Major Publications Just By Working With Us.
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon01}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon02}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon03}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon04}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center my-5 py-3'>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon05}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon06}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon07}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon08}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon09}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon10}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon11}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='text-center'>
                                <Image className='img-fluid'
                                    src={icon12}
                                    alt="Book Writing Experts"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Major