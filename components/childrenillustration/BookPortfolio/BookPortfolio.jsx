import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import style from '../BookPortfolio/BookPortfolio.module.css'
import BookImg1 from '../../../public/images/childrenillustration/BookPortfolio-img1.png'
import BookImg2 from '../../../public/images/childrenillustration/BookPortfolio-img2.png'
import BookImg3 from '../../../public/images/childrenillustration/BookPortfolio-img3.png'
import BookImg11 from '../../../public/images/childrenillustration/BookPortfolio-img11.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BookPortfolio = ({
    title,
    desc
}) => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
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
            <div className={`${style.bookPortfolio}`}>
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h3 className={`${style.font_50} fw700`} dangerouslySetInnerHTML={{ __html: title }} />
                            <p className={`${style.font_20}`} dangerouslySetInnerHTML={{ __html: desc }} />
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-md-flex flex-md-row flex-column align-items-center gap-3 d-none'>
                            <div>
                                <Image src={BookImg1} alt="Childeren Book Portfolio" className='img-fluid m-0 d-md-block d-none' />
                                <Image src={BookImg11} alt="Childeren Book Portfolio" className='img-fluid m-0 d-md-none d-block' />

                            </div>

                            <div className='d-flex flex-column gap-3'>
                                <Image src={BookImg2} alt="Childeren Book Portfolio" className='img-fluid m-0' />
                                <Image src={BookImg3} alt="Childeren Book Portfolio" className='img-fluid m-0' />
                            </div>
                        </div>
                        <div className='d-md-none d-block childrenTestimonial'>
                            <Slider {...settings}>
                                <Image src={BookImg11} alt="Childeren Book Portfolio" className='img-fluid mx-auto' />
                                <Image src={BookImg2} alt="Childeren Book Portfolio" className='img-fluid mx-auto' />
                                <Image src={BookImg3} alt="Childeren Book Portfolio" className='img-fluid mx-auto' />
                            </Slider>
                        </div>

                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default BookPortfolio
