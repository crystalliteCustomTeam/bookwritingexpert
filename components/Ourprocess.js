import React from 'react'
// css
import styles from '@/styles/Ourprocess.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Ourprocess = (props) => {

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
    <div className={styles.ourprocess}>
      <Container>
        <Row>
          <Col md={11} className='mx-auto'>
            {props.title2 ?
              <h2 className='font50 fw700 t-center mb-2 color-blue'> {props.title2}  </h2>
              : ''}

            {props.title ?
              <h2 className='font50 fw700 t-center mb-2 color-blue'> {props.title} </h2>

              : ''}

            {props.text ?
              <p className='color-lightgray font15 fw400 font-f t-center'> {props.text} </p>


              : ''}
          </Col>
        </Row>

        {isSliderActive ?
          <Slider {...bookrecordingprojects}>
           
                <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                  <h3>{props.heading1}</h3>
                  <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para1} </p>
                </div>

            


                <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                  <h3>{props.heading3}</h3>
                  <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para3} </p>
                </div>
           

                <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                  <h3>{props.heading5}</h3>
                  <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para5} </p>
                </div>
            
             
           
           

                <div className={styles.dataslot}>
                  <h3>{props.heading2}</h3>
                  <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para2} </p>
                </div>

            

                <div className={styles.dataslot}>


                  <h3>{props.heading4}</h3>
                  <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para4} </p>
                </div>

              
           
        
          </Slider>
          :

          <Row className={`${styles.borderpost} mt-5`}>
            <Col md={5}>
              <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                <h3>{props.heading1}</h3>
                <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para1} </p>
              </div>

              <div className={`${styles.dataslot2} ${styles.dataslotz2}`}>
                <h3>    {props.num2}</h3>
              </div>


              <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                <h3>{props.heading3}</h3>
                <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para3} </p>
              </div>
              <div className={`${styles.dataslot2} ${styles.dataslotz2}`}>
                <h3> {props.num4} </h3>
              </div>

              <div className={`${styles.dataslot} ${styles.dataslotz1}`}>
                <h3>{props.heading5}</h3>
                <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para5} </p>
              </div>
            </Col>
            <Col md={2} className={styles.sideline}>

              <div className={styles.sidepic}></div>

            </Col>
            <Col md={5}>
              <div className={styles.dataslot1}>
                <h3> {props.num1} </h3>
              </div>

              <div className={styles.dataslot}>
                <h3>{props.heading2}</h3>
                <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para2} </p>
              </div>

              <div className={styles.dataslot1}>
                <h3> {props.num3} </h3>
              </div>

              <div className={styles.dataslot}>


                <h3>{props.heading4}</h3>
                <p className='color-lightgray font14 fw400 font-f t-center mb-0'> {props.para4} </p>
              </div>

              <div className={styles.dataslot1}>
                <h3> {props.num5} </h3>
              </div>
            </Col>
          </Row>

        }


      </Container>
    </div>
  )
}

export default Ourprocess