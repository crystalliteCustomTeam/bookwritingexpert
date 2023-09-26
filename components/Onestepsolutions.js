import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Onestepsolutions.module.css'
import Link from 'next/link'
import Image from 'next/image'
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// images
import book100 from '../public/images/thousandsofstruggling/book1.png'
import book101 from '../public/images/thousandsofstruggling/book2.png'
import book102 from '../public/images/thousandsofstruggling/book3.png'
import book105 from '../public/images/thousandsofstruggling/book4.png'
import book106 from '../public/images/thousandsofstruggling/book5.png'

const Onestepsolutions = () => {


  const numdata5 = <span>Stories That Empower Young Minds: Let your imagination run wild and join us in unleashing creativity for the next generation through our exceptional children's book writing and <Link className='textdocationnone colorta hover' href="/book-publishing-services">publishing services</Link></span>

  const numdata6 = <span>Bringing Thrills and Suspense to Life - From heart-pumping action scenes to gripping suspense, our professional adventure <strong >story writing services</strong> will bring your ideas to life!
  </span>

  const numdat7 = <span>

    <span>From Concept to Bestseller: </span>
    <span className={styles.join}>Join us on a journey from concept to bestseller with our exceptional <Link className='textdocationnone colorta' href="/book-editing-services/">novel editing</Link>, writing, and publishing services</span>

  </span>

  const numdat1 =


    <span className={styles.join}>Taking you into the fictional world, our
      <Link className='textdocationnone colorta hover' href="/ghostwriting-services/"> ghostwriters </Link> pen down some of the great tales effortlessly, making the best use of the words </span>






  const makestoriesimg =
    [

      {
        num: '01',
        title: 'Fiction ',
        text: numdat1,
        storiesimg: book100
      },
      {
        num: '02',
        title: 'Non-Fiction',
        text: 'We trigger emotions and engage the target readers with our impeccable writing styles. We make non-fiction exciting and interesting.',
        storiesimg: book101
      },
      {
        num: '03',
        title: 'Autobiography',
        text: 'Our expert ghostwriters surely know all the tricks to captivate and engage the readers by showcasing your hassles and extraordinary life story.',
        storiesimg: book102
      },
      {
        num: '04',
        title: 'Christian Book',
        text: 'We significantly cover every life event by indexing the realness and keeping the emotional essence alive to take you back in time.',
        storiesimg: book106
      },
      {
        num: '05',
        title: 'Children`s Book',
        text: numdata5,
        storiesimg: book105
      },

    ];



  var makestories = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
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
    <>
      <div className={styles.onestepsolutions}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='font-f fw500 colortextgrey t-center mb-5'>Our <Link className='color-blue textdocationnone fw700' href="/">Book Writing Company</Link> Will Be A One Stop Solution For You!</h2>
            </Col>

            <Col md={12}>

              <Slider {...makestories} className='makestories'>

                {makestoriesimg.map((item, i) => {
                  return (
                    <div key={i}>
                      <h3 className='color-blue font-f font30 fw600 mb-4'>{item.title}</h3>
                      <p className={` ${styles.wrtingtext} font15 font-f textcolor maxwidth`}>{item.text}</p>
                      <Image loading="lazy" className='img-fluid' src={item.storiesimg} alt='Book Writing Experts'></Image>
                    </div>
                  )
                })}

              </Slider>

            </Col>

          </Row>
        </Container>

      </div>
    </>
  )
}

export default Onestepsolutions