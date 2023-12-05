import React from 'react'
import styles from '@/styles/Makestories.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

// images
import makestories1 from '../public/images/buildingyour/1.png'
import makestories2 from '../public/images/buildingyour/2.png'
import makestories3 from '../public/images/buildingyour/3.png'
import makestories4 from '../public/images/buildingyour/4.png'

// slick css
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Buildingyour = (props) => {


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


  const makestoriesimg =
    [

      { storiesimg: makestories1 },
      { storiesimg: makestories2 },
      { storiesimg: makestories3 },
      { storiesimg: makestories4 },


    ];





  return (
    <>

      <div className={styles.makestories}>

        <Container>
          <h2 className="fw700 font50 color-blue font-f t-center mb-4">We Are Building Your Identity </h2>
          <h2 className="font15 textcolor font-f t-center mb-4"> Done With Book Publishing? It’s High Time You Market Your Asset to Control the Narrative. Need Helping Hands? Our Digital Marketing Agency Is Here To Help You Climb The Ladder Of Success!</h2>

          {isSliderActive ?
            <Slider {...bookrecordingprojects}>

           
                {makestoriesimg.map((item, i) => {
                  return (
                    <Col md={3} key={i}>
                      <div>
                        <Image loading="lazy" className='pt-3 img-fluid' src={item.storiesimg} alt="Book Writing Experts"></Image>
                      </div>
                    </Col>
                  )
                })}

              

            </Slider>
            :
            <Row>
              {makestoriesimg.map((item, i) => {
                return (
                  <Col md={3} key={i}>
                    <div>
                      <Image loading="lazy" className='pt-3 img-fluid' src={item.storiesimg} alt="Book Writing Experts"></Image>
                    </div>
                  </Col>
                )
              })}

            </Row>
          }
        </Container>





      </div>


    </>
  )
}

export default Buildingyour