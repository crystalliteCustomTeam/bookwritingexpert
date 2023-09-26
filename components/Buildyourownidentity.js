import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/buildyour.png'
import Image from 'next/image'
import Link from 'next/link'

const Buildyourownidentity = () => {
    return (
        <>

            <div className={styles.buildyourownidentity}>
                <Container>
                    <Row className='mb-3'>
                        <Col>
                            <h2 className="fw700 font50 color-blue font-f mb-2 t-center">Craft Your Distinct Identity</h2>
                            <p className='font15 textcolor font-f t-center'><Link className='textdocationnone hover textcolor' href='/digital-marketing-services/'>Digital book marketing</Link> is a delicate art that demands strategy and finesse. It requires a touch of creativity and persuasive pitching. From conceptualizing captivating social media campaigns to generating excitement through influencer collaborations, marketing is a multidimensional endeavor. Leveraging the power of influencers and public figures is a pivotal aspect of pre-launch marketing, expanding your reach to new audiences and potential clients.</p>
                        </Col>
                    </Row>


                    <Row className={` ${styles.media} gy-5`}>

                        <Col md={3}>

                            <div>
                                <h4 className='font17 fw500 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Ignite brand growth and engagement by leveraging the power of social media platforms.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font17 fw500 color-blue t-center font-f'>EMAIL MARKETING PLANS</h4>
                                <p className='font15  textcolor t-center font-f'>Expand your reach and nurture customer relationships with strategic email campaigns.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>


                        </Col>
                        <Col md={6}>

                            <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt='book writing expert'></Image>

                        </Col>
                        <Col md={3}>

                            <div className=''>
                                <h4 className='font17 fw500 color-blue t-center font-f'>ADVERTISING PLANS</h4>
                                <p className='font15  textcolor t-center font-f'>Amplify your brand's visibility through targeted social media advertising for enhanced reach.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font17 fw500 color-blue t-center font-f'>SEO SERVICES</h4>
                                <p className='font15  textcolor t-center font-f'>Increase your visibility on search engines with our proven SEO strategies.</p>
                                <Link className={styles.lets} href='#'>Chat With Us To Get Your Book Marketing Plan</Link>

                            </div>


                        </Col>

                    </Row>
                </Container>

            </div>

        </>
    )
}

export default Buildyourownidentity