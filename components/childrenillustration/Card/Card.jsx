import React, { useState, useEffect } from 'react';
import styles from '../Card/Card.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({
    subtitle,
    title,
    desc,
    card,
    theme = "light",

}) => {
    var settings = {
        infinite: true,
        dots: true,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    
    return (
        <section>
            <div className={`${styles.card}`}>
                <Container>
                    <Row>
                        <Col lg={11} className='mx-auto mb-3'>
                            <div>
                                {subtitle && (<span className="mb-2">
                                    {subtitle}
                                </span>)}
                                {title && (<h2 className={`fw700 ${theme == "light" ? "text-[#000000]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{ __html: title }} />)}
                                {desc && (<p className={`${theme == "light" ? "text-[#000000]" : "text-white"}`} dangerouslySetInnerHTML={{ __html: desc }} />)}
                            </div>
                        </Col>
                    </Row>
                    <Row>

                            {card?.map((e, i) => (
                                <Col key={i} lg={3} md={6} className='d-md-block d-none '>
                                    <div className={`${styles.cardDesign} text-center`}>
                                        {e.image && <Image src={e.image} alt={e.alt} width={80} height={70} className={`m-auto mb-3`} />}
                                        {e.title && <h3 className='' dangerouslySetInnerHTML={{ __html: (e.title) }} />}
                                        {e.desc && <p className='' dangerouslySetInnerHTML={{ __html: (e.desc) }} />}
                                    </div>
                                </Col>
                            ))}

                        {/* Mobile Screen Slider */}
                        <div className={`d-md-none d-block childrenTestimonial`}>
                            <Slider {...settings}>
                                {card?.map((e, i) => (
                                    <div key={i} className="slick-slide">
                                        <div className={`${styles.cardDesign} text-center`}>
                                            {e.image && <Image src={e.image} alt={e.alt} width={80} height={70} className={`m-auto mb-3`} />}
                                            {e.title && <h3 className='' dangerouslySetInnerHTML={{ __html: (e.title) }} />}
                                            {e.desc && <p className='' dangerouslySetInnerHTML={{ __html: (e.desc) }} />}
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>


                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Card
