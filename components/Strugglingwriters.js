import React from 'react'
import styles from '@/styles/Strugglingwriters.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'

// images
import cover1 from '../public/images/thousandsofstruggling/book1.png'
import cover2 from '../public/images/thousandsofstruggling/book2.png'
import cover3 from '../public/images/thousandsofstruggling/book3.png'
// import cover4 from '../public/images/thousandsofstruggling/book4.png'
import cover5 from '../public/images/thousandsofstruggling/book5.png'
import cover6 from '../public/images/thousandsofstruggling/book6.png'
// import cover7 from '../public/images/thousandsofstruggling/Book-Mockup7.png'
import cover8 from '../public/images/thousandsofstruggling/book4.png'

const Strugglingwriters = () => {

    var mockupslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    var mockupslider2 = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        rtl: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className={styles.strugglingwriters}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className='font-f font50 fw700 t-center color-blue'>Our Experts Have Helped Thousands Of Struggling Writers Come And Join The League!</h2>
                        <p className='font15 font-f t-center textcolor mt-3'>Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                    </Col>
                </Row>


                <Row className={`${styles.aligncenter}`}>
                    <Col md={12}>
                        <Slider {...mockupslider} className='mt-5 mockupslider'>
                            <div>
                                <Image  loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover1}  />
                            </div>
                            <div>
                                <Image  loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover2}  />
                            </div>
                            <div>
                                <Image  loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover3}  />
                            </div>
                           
                        </Slider>
                        <Slider {...mockupslider2} className='mt-3 mockupslider'>
                            <div>
                                <Image  loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover5}  />
                            </div>
                            <div>
                                <Image  loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover6}  />
                            </div>
                          
                            <div>
                                <Image width={260} height={389} loading="lazy" quality={70} className='img-fluid' alt="Book Writing Experts" src={cover8}  />
                            </div>
                        </Slider>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Strugglingwriters