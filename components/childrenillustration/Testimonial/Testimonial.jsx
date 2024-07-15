import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import Star from '../../../public/images/childrenillustration/Star.png'
import style from '../Testimonial/testimonial.module.css'
// slick css
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const Testimonial = ({
    title,
    desc,
    dataTestimonial
}) => {
    var testimonial = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section>
            <div className={`${style.testimonial}`}>
                <Container>
                    <Row className='mb-5'>
                        <Col md={10} className='mx-auto text-center'>
                            <h3 className='fw700 font_50' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='' dangerouslySetInnerHTML={{ __html: desc }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={`${style.testimonialSlide} childrenTestimonial `}>
                                <Slider {...testimonial}>
                                    {dataTestimonial?.map((e, i) => (
                                        <div key={i} className={`${style.testimonialData} d-flex flex-column gap-3 px-4 align-items-center justify-content-center text-center`}>
                                            <Image src={e.img} alt={e.alt} />
                                            <Image src={Star} alt='star' />
                                            <p dangerouslySetInnerHTML={{ __html: (e.desc) }} />
                                            <h4 className='' dangerouslySetInnerHTML={{ __html: (e.title) }} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Testimonial
