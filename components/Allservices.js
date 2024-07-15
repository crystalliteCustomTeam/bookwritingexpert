import React from 'react'
import styles from '@/styles/Allservices.module.css'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import ebook from '../public/images/newlp/ebook.png'
import book from '../public/images/newlp/book.png'
import head from '../public/images/newlp/head.png'
import pri from '../public/images/newlp/pri.png'
import next from '../public/images/newlp/next.png'


const Allservices = () => {

  var partnersslider = {
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Image src={pri} className='img-fluid' />,
    nextArrow: <Image src={next} className='img-fluid' />,
    responsive: [
    
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <>
      <div className={`${styles.partners} expectations`}>

        <Container>

        <Row className={styles.newyouk}>
        <Col md={12}>
         <h2 className='font-f fw700'>All Services</h2>
         <p className='font-f'>Our services are tailored to exceed expectations, delivering unparalleled quality and efficiency. From expert consultations to seamless execution, we prioritize client satisfaction, ensuring a bespoke experience that goes beyond service to create lasting partnerships.</p>
        </Col>
        </Row>

          <Slider {...partnersslider}>

           
                <div className="most">
                 <div className='topimg'>
                 <Image src={ebook} className='img-fluid' />
                 </div>
                  <h3>E-Book Writing & Publishing</h3>
                  <p>Embark On The Journey Of E-Book Creation And Publication, Where Your Words Come To Life In The Digital Realm.</p>
                </div>

                <div className="most">
                <div className='topimg'>
                  <Image src={book} className='img-fluid' />
                  </div>
                  <h3>Book Editing & Proofreading</h3>
                  <p>Embark On The Journey Of E-Book Creation And Publication, Where Your Words Come To Life In The Digital Realm.</p>
                </div>

                <div className="most">
                <div className='topimg'>
                  <Image src={head} className='img-fluid' />
                  </div>
                  <h3>Audio Book Service</h3>
                  <p>Embark On The Journey Of E-Book Creation And Publication, Where Your Words Come To Life In The Digital Realm.</p>
                </div>
                <div className="most">
                <div className='topimg'>
                  <Image src={ebook} className='img-fluid' />
                  </div>
                  <h3>E-Book Writing & Publishing</h3>
                  <p>Embark On The Journey Of E-Book Creation And Publication, Where Your Words Come To Life In The Digital Realm.</p>
                </div>
            

          </Slider>

        </Container>




      </div>

    </>
  )
}

export default Allservices