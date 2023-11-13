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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Buildingyour = (props) => {


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

        </Container>





      </div>


    </>
  )
}

export default Buildingyour