import React from 'react'
import styles from '@/styles/Bestinclass.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/dulpost.jpg'
import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Bestinclass = () => {


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
                            <h2 className="fw700 font50 color-blue font-f mb-2 t-center">Best <Link className='textdocationnone color-blue hover' href="/digital-marketing-services/">Digital Marketing Company</Link></h2>
                            <p className='font15 textcolor font-f t-center'>As a leading <Link className='textdocationnone textcolor hover' href="/digital-marketing-services/">digital marketing service</Link> provider, we excel in the art of promotions, going the extra mile to ensure you shine brightly as an aspiring author.</p>

                            <p className='font15 textcolor font-f t-center'>With us by your side, you'll enjoy personalized branding for your books, creating a distinct and memorable author identity.</p>
                        </Col>
                    </Row>
                    {isSliderActive ?
                        <Slider {...bookrecordingprojects} className='mb-5 pb-3'>
                          

                       

                                    <div>
                                        <h4 className='font17 fw500 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                        <p className='font15  textcolor t-center font-f'>Get the expertise of our world-class social media marketers, who craft exceptional content and growth-focused campaigns to boost your publication's sales potential.</p>
                                        <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Discuss Now!</Link>
                                    </div>

                                    <div>
                                        <h4 className='font17 fw500 color-blue t-center font-f'>AMAZON BOOK MARKETING</h4>
                                        <p className='font15  textcolor t-center font-f'>Discover the true power of <Link className='textdocationnone textcolor hover' href="/book-marketing-services/">Amazon book marketing</Link> by enabling, emerging, and establishing authors to promote their narratives like never before. Our creative team designs personalized ads that target readers who are most likely to be interested in your publication.</p>
                                        <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Hire Us Today!</Link>
                                    </div>


                       
                  


                        

                                    <div className=''>
                                        <h4 className='font17 fw500 color-blue t-center font-f'>BOOK COVER DESIGN</h4>
                                        <p className='font15  textcolor t-center font-f'>Don't underestimate the impact of a book cover! Our <Link className='textdocationnone textcolor hover' href="/digital-marketing-services/">digital marketing services</Link> include captivating book cover designs that act as the missing piece to enhance your book's popularity. After all, it's true that people do judge a book by its cover!</p>
                                        <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S DISCUSS</Link>
                                    </div>

                                    <div>
                                        <h4 className='font17 fw500 color-blue t-center font-f'>SEO</h4>
                                        <p className='font15  textcolor t-center font-f'>By cashing in on the perks of Search Engine Optimization, our marketers highlights the opportunity to help your book win the search game. With search engine marketing, we tap the untapped marketing odds, helpful for your book to grasp the maximum attention.</p>
                                        <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S  DISCUSS </Link>

                                    </div>


                             
                          
                        </Slider>
                        :
                        <Row className={` ${styles.media} gy-5 `}>

                            <Col md={3}>

                                <div>
                                    <h4 className='font17 fw500 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                    <p className='font15  textcolor t-center font-f'>Get the expertise of our world-class social media marketers, who craft exceptional content and growth-focused campaigns to boost your publication's sales potential.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Let’s Discuss Now!</Link>
                                </div>

                                <div className='mt-5'>
                                    <h4 className='font17 fw500 color-blue t-center font-f'>AMAZON BOOK MARKETING</h4>
                                    <p className='font15  textcolor t-center font-f'>Discover the true power of <Link className='textdocationnone textcolor hover' href="/book-marketing-services/">Amazon book marketing</Link> by enabling, emerging, and establishing authors to promote their narratives like never before. Our creative team designs personalized ads that target readers who are most likely to be interested in your publication.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>Hire Us Today!</Link>
                                </div>


                            </Col>
                            <Col md={6}>

                                <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt="Book Writing Experts"></Image>

                            </Col>
                            <Col md={3}>

                                <div className=''>
                                    <h4 className='font17 fw500 color-blue t-center font-f'>BOOK COVER DESIGN</h4>
                                    <p className='font15  textcolor t-center font-f'>Don't underestimate the impact of a book cover! Our <Link className='textdocationnone textcolor hover' href="/digital-marketing-services/">digital marketing services</Link> include captivating book cover designs that act as the missing piece to enhance your book's popularity. After all, it's true that people do judge a book by its cover!</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S DISCUSS</Link>
                                </div>

                                <div className='mt-5'>
                                    <h4 className='font17 fw500 color-blue t-center font-f'>SEO</h4>
                                    <p className='font15  textcolor t-center font-f'>By cashing in on the perks of Search Engine Optimization, our marketers highlights the opportunity to help your book win the search game. With search engine marketing, we tap the untapped marketing odds, helpful for your book to grasp the maximum attention.</p>
                                    <Link className={styles.lets} href='javascript:$zopim.livechat.window.show();'>LET'S  DISCUSS </Link>

                                </div>


                            </Col>

                        </Row>
                    }
                </Container>

            </div>

        </>
    )
}

export default Bestinclass