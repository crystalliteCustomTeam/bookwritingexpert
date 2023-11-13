import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Customersatisfaction.module.css'
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// images
import icon01 from '/public/images/customersatisfaction/icon01.png'
import icon02 from '/public/images/customersatisfaction/icon02.png'
import icon03 from '/public/images/customersatisfaction/icon03.png'
import icon04 from '/public/images/customersatisfaction/icon04.png'
import Image from 'next/image'


const Customersatisfaction = () => {

    const customer = [

        {
            title: '100% Customer Satisfaction',
            customerimages: icon01,
        },
        {
            title: '2500+ Customers',
            customerimages: icon02,
        },
        {
            title: 'Flexible Plans',
            customerimages: icon03,
        },
        {
            title: 'All Royalties Belong To You',
            customerimages: icon04,
        },
    ]


    var makestories = {
        dots: false,
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
            <div className={styles.customersatisfaction}>

                <Container>
                    <Row>

                        <Slider {...makestories}>

                            {customer.map((item, i) =>
                                <Col md={3} key={i}>
                                    <div className={styles.customerbrandimg}>
                                        <Image loading="lazy" quality={70} src={item.customerimages} alt="Book Writing Experts" className='img-fluid'></Image>
                                    </div>
                                    <h3 className='color-white font15 fw500 t-center font-f mt-4 pt-3'>{item.title}</h3>
                                </Col>

                            )}

                        </Slider>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Customersatisfaction