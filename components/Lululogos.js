import React from 'react'
import styles from '@/styles/Partners.module.css'
import Image from 'next/image'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

// images
import partnerslogo1 from '../public/images/partnerslogo/partnerslogo1.png'
import partnerslogo2 from '../public/images/partnerslogo/partnerslogo2.png'
import partnerslogo8 from '../public/images/partnerslogo/partnerslogo8.png'
import partnerslogo9 from '../public/images/partnerslogo/partnerslogo9.png'
import partnerslogo10 from '../public/images/partnerslogo/partnerslogo10.png'
import partnerslogo11 from '../public/images/partnerslogo/partnerslogo11.png'
import partnerslogo12 from '../public/images/partnerslogo/partnerslogo12.png'


const partnerdata =
  [
    { img1: partnerslogo1 },
    { img1: partnerslogo2 },
    { img1: partnerslogo8 },
    { img1: partnerslogo9 },
    { img1: partnerslogo10 },
    { img1: partnerslogo11 },
    { img1: partnerslogo12 },
  ];



import { Container } from 'react-bootstrap'

const Partners = () => {

  var partnersslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={styles.partners}>

        <Container>

          <Slider {...partnersslider}>

            {partnerdata.map((item, i) => {
              return (
                <div key={i}>
                  <Image loading="lazy" className='pt-3 img-fluid' src={item.img1} alt="Book Writing Experts"></Image>
                </div>
              )
            })}

          </Slider>

        </Container>




      </div>

    </>
  )
}

export default Partners