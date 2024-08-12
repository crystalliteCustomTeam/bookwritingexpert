import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/buildyour.png'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Buildyourownidentity = () => {



    var bookrecordingprojects = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [isSliderActive, setIsSliderActive] = useState(true);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 480) {
                setIsSliderActive(true);
            } else {
                setIsSliderActive(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>

            <div className={styles.buildyourownidentity}>
                <Container>
                    <Row className='mb-3'>
                        <Col>
                            <h2 className="fw700 font50 color-blue font-f mb-2 t-center">The Range Of Services We Offer As a <br />Top-Grade Digital

                                Marketing Agency</h2>
                            <p className='font15 textcolor font-f t-center'>As a leading <Link className='textdocationnone hover textcolor' href='/digital-marketing-services/'>digital book marketing service</Link> provider, our expertise covers promoting books and
                                creating impactful author websites. Here are the services you’ll get if you partner with us</p>
                        </Col>
                    </Row>


                    {isSliderActive ?
                        <Slider {...bookrecordingprojects}>





                            <div>
                                <h3 className='font17 fw500 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h3>
                                <p className='font15  textcolor t-center font-f'>Ignite brand growth and engagement by leveraging the power of social media platforms.</p>
                                <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S DISCUSS</Link>
                            </div>

                            <div>
                                <h3 className='font17 fw500 color-blue t-center font-f'>EMAIL MARKETING PLANS</h3>
                                <p className='font15  textcolor t-center font-f'>Expand your reach and nurture customer relationships with strategic email campaigns.</p>
                                <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S DISCUSS</Link>
                            </div>


                            <div className=''>
                                <h3 className='font17 fw500 color-blue t-center font-f'>ADVERTISING PLANS</h3>
                                <p className='font15  textcolor t-center font-f'>Amplify your brand's visibility through targeted social media advertising for enhanced reach.</p>
                                <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S DISCUSS</Link>
                            </div>

                            <div>
                                <h3 className='font17 fw500 color-blue t-center font-f'>SEO SERVICES</h3>
                                <p className='font15  textcolor t-center font-f'>Increase your visibility on search engines with our proven SEO strategies.</p>
                                <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Chat With Us To Get Your Book Marketing Plan</Link>

                            </div>






                        </Slider>
                        :
                        <Row className={` ${styles.media} gy-5`}>

                            <Col md={3}>

                                <div>
                                    <h3 className='font17 fw500 color-blue t-center font-f'>Social Media &amp; Influencer Marketing</h3>
                                    <p className='font15  textcolor t-center font-f'>Stand out with impactful social media campaigns and collaborations with familiar faces in the
                                        industry.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Connect!</Link>
                                </div>

                                <div className='mt-5'>
                                    <h3 className='font17 fw500 color-blue t-center font-f'>Digital Advertising</h3>
                                    <p className='font15  textcolor t-center font-f'>Reach the right audience with cost-effective paid advertising and informed decision-making.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Connect!</Link>
                                </div>


                            </Col>
                            <Col md={6}>

                                <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt="Book Writing Experts"></Image>

                            </Col>
                            <Col md={3}>

                                <div className=''>
                                    <h3 className='font17 fw500 color-blue t-center font-f'>SEO</h3>
                                    <p className='font15  textcolor t-center font-f'>Optimize your book and author website with targeted keywords and top-notch SEO strategies.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Connect!</Link>
                                </div>

                                <div className='mt-5'>
                                    <h3 className='font17 fw500 color-blue t-center font-f'>Content Marketing</h3>
                                    <p className='font15  textcolor t-center font-f'>Engage readers with book trailers, author interviews, and podcast features discussing their
                                        journey.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Connect!</Link>

                                </div>


                            </Col>

                        </Row>

                    }
                </Container>

            </div>

        </>
    )
}

export default Buildyourownidentity