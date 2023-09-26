import React from 'react'
import styles from '@/styles/Audiobookrecordingprojects.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import Image from 'next/image'
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'


const Audiobookrecordingprojects = () => {

  var bookrecordingprojects = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <GrFormPrevious className='privious' />,
    nextArrow: <GrFormNext className='privious' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };



  return (
    <>
      <div className={styles.audiobookrecordingprojects}>
        <Container className='audiobook testtimonials1'>
          <Row>
            <Col md={12}>
              <h2 className='font48 fw900 t-center color-blue font-f'>Our Latest Audiobook Recording Projects</h2>
              <h2 className='font17 fw600 t-center font-f mb-5'>Let Our Audiobook Recording Team Help You</h2>
            </Col>
          </Row>


          <Slider {...bookrecordingprojects}>


            <div>
              <h3 className="font30 fw900 font-f colortextgrey">Power Transcended With Blood</h3>
              <p className='color-tw font15 fw500'>
                The culmination of the book is when the evil sorcwho has been wreaking havoc on the kingdom, is fidefeated by the heroic knight. However, this vicomes at a great cost, as the knight is morwounded in the process. Before he dies, he givefinal words of wisdom to the young prince, who mustake up the mantle of protector of the kingdom.
              </p>


            </div>

            <div>
              <video controls className={`${styles.bgVideo}`} muted
                src="/images/recording/04.m4v" type="video/mp4"></video>
            </div>




            <div>
              <h3 className="font30 fw900 font-f colortextgrey">Heart No longer Aches</h3>
              <p className='color-tw font15 fw500'>
                It was the final exam, and everyone was on edge. The room was muted except for the sound of pencils scratching paper. Suddenly, someone started chuckling. It began as a giggle but quickly turned into full-blown laughter. Everyone turned to see what was so funny, and they saw the student had written "I give up" on their exam. The laughter was contagious, and soon the whole room got infected with it. The teacher didn't know what to do, so they just let the students have their moment. It was a much-needed escape from anxiety, and everyone left the exam feeling lighter
              </p>
            </div>

            <div>
              <video controls className={`${styles.bgVideo}`} muted
                src="/images/recording/01.m4v" type="video/mp4"></video>
            </div>



            <div>
              <h3 className="font30 fw900 font-f colortextgrey">Life With Zero Fear</h3>
              <p className='color-tw font15 fw500'>

                It was the final exam, and everyone was on edge. The room was muted except for the sound of pencils scratching paper. Suddenly, someone started chuckling. It began as a giggle but quickly turned into full-blown laughter. Everyone turned to see what was so funny, and they saw the student had written "I give up" on their exam. The laughter was contagious, and soon the whole room got infected with it. The teacher didn't know what to do, so they just let the students have their moment. It was a much-needed escape from anxiety, and everyone left the exam feeling lighter.

              </p>
            </div>

            <div>
              <video controls className={`${styles.bgVideo}`} muted
                src="/images/recording/03.m4v" type="video/mp4"></video>
            </div>



            <div>
              <h3 className="font30 fw900 font-f colortextgrey">Peace That Comes With Wounds</h3>
              <p className='color-tw font15 fw500'>
                The book's climax occurs when the heroes finally face off against the evil wizard who has been terrorizing the kingdom. After a long and epic battle, the heroes triumph, and the wizard is defeated. The people of the kingdom are finally free from his tyranny and can live in harmony once again.
              </p>
            </div>

            <div>
              <video controls className={`${styles.bgVideo}`} muted
                src="/images/recording/02.m4v" type="video/mp4"></video>
            </div>


          </Slider>

        </Container>

      </div>
    </>
  )
}

export default Audiobookrecordingprojects