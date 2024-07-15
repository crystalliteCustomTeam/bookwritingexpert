import React from 'react'
import styles from '@/styles/Stunningillustrations.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// images
import homebannerlogos1 from '/public/images/stunningillustrations/1.svg'
import homebannerlogos2 from '/public/images/stunningillustrations/2.svg'
import homebannerlogos3 from '/public/images/stunningillustrations/3.svg'
import homebannerlogos4 from '/public/images/stunningillustrations/4.svg'
import homebannerlogos5 from '/public/images/stunningillustrations/5.svg'
import homebannerlogos6 from '/public/images/stunningillustrations/6.svg'
import homebannerlogos7 from '/public/images/stunningillustrations/7.svg'
import homebannerlogos8 from '/public/images/stunningillustrations/8.svg'
import homebannerlogos9 from '/public/images/stunningillustrations/9.svg'

const Stunningillustrations = () => {

    
    var makestories = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }

        ]
    };


    return (
        <>

{/* desktop */}

            <section className={styles.stun}>
                <Container>
                    <Row>
                        <Col lg={12}>


                            <h2 className="font-f fw500 colortextgrey t-center mb-5">We Can Make Your Book Look More Appealing, Check Out Our Impressive <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustrations</Link> </h2>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos1} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos2} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos3} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos6} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos4} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos5} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos9} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos7} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos8} className="img-fluid" ></Image>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">OUR PORTFOLIO</Link>
                        </Col>
                    </Row>

                </Container>

            </section>

{/* mobile */}
            <section className={styles.stun1}>

            <Container>

                <h2 className="font-f fw500 colortextgrey t-center mb-5">We Provide Stunning <Link className="color-blue textdocationnone fw700" href="javascript:$zopim.livechat.window.show();">Illustrations For  <br className="d-none d-xl-block" /> Your Book</Link> </h2>


                <Slider {...makestories}>

                 

           

                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos1} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos2} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos3} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos6} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos4} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos5} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos9} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos7} className="img-fluid" ></Image>
                </div>


                <div className={styles.stunimage}>
                    <Image alt="Book Writing Experts" src={homebannerlogos8} className="img-fluid" ></Image>
                </div>

                </Slider>

                <Row className='mt-5'>
                    <Col>
                        <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">OUR PORTFOLIO</Link>
                    </Col>
                </Row>

            </Container>

        </section >

        </>
    )
}

export default Stunningillustrations