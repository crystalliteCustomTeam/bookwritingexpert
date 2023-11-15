import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
// images
import banslider1 from '../public/images/bannerimages/banslider1.png'
import banslider3 from '../public/images/bannerimages/banslider3.png'
import banslider4 from '../public/images/bannerimages/banslider4.png'

const Banner = (props) => {

  const bannerlogo =
    [

      { banlogo: banslider1 },
      { banlogo: banslider3 },
      { banlogo: banslider4 },
      { banlogo: banslider1 },
      { banlogo: banslider3 },
      { banlogo: banslider4 },


    ];


  var bannerslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className={`${styles[props.bannershome]} bannergllobal`}>

        <Container>
          <Row>
            <Col md={12} className={styles[props.alignclass]}>

              <div className={`${styles.homebannertext} ${styles.otherBanner}`}>

                {props.title ?
                  props.title
                  :
                  ''
                }

                {props.text ?

                  <p className={`${styles.newPara}  font16 color-white font-f mt-4 m-0`}>{props.text}</p>
                  :
                  ''
                }

                {props.subtext ?

                  <p className={`${styles.newSubPara} fw500 font18 colortextgrey font-f mt-4 m-0`}> <strong>{props.publishers}</strong> {props.subtext}</p>
                  :
                  ''
                }

                {props.subtext1 ?

                  <p className='fw500 font18 colortextgrey font-f m-0'> {props.subtext1}</p>
                  :
                  ''
                }

                {props.subtext2 ?

                  <p className='fw500 font18 colortextgrey font-f m-0'> {props.subtext2}</p>
                  :
                  ''
                }

                {props.subtext3 ?

                  <p className='fw500 font18 colortextgrey font-f m-0'> {props.subtext3}</p>
                  :
                  ''
                }

                {props.subtext4 ?

                  <p className='fw500 font18 colortextgrey font-f'> {props.subtext4} <strong>{props.subtext4bold}</strong> </p>
                  :
                  ''
                }

                {props.discuss ?
                  <div className='mt-5'>
                    <Link className={styles.discuss} href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                    <Link className={styles.homenumer} href="tel:(855) 500 0057"> {props.homebannernum}</Link>


                    {props.processs ?

                      <Link onClick={handleShow} className={` ${styles.homenumer} ${styles.new1} `} href='javascript:$zopim.livechat.window.show();'> <BsFillPlayFill size={25} /> {props.processs} </Link>

                      :
                      ''
                    }

                  </div>
                  :
                  ''
                }
                {props.thankyou ?
                  <div className='mt-5 mb-5'>

                    <Link className={styles.thankyoubtn} href="/"> Back To The Home Page</Link>
                  </div>
                  : ''}

                {props.free ?
                  <div className='mt-4 mb-5'>

                    <Link className={styles.free} href="javascript:$zopim.livechat.window.show();"> {props.free} </Link>
                  </div>
                  : ''}


                {props.homebanlogos ?

                  <div className="row">
                    <div className="col-12 col-lg-12">

                      <div className={styles.homebannerlogo}>
                        <Image loading="lazy" className={`${styles.homelogoimgnone} img-fluid mt-4`} src={props.homebanlogos} alt="Book Writing Experts" ></Image>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-12 col-lg-12">
                        <Slider {...bannerslider} className='mt-5'>
                          {bannerlogo.map((item, i) => {
                            return (
                              <div key={i}>
                                <Image loading="lazy" className='pt-3 img-fluid brandnewlogo' src={item.banlogo} alt="Book Writing Experts"></Image>
                              </div>
                            )
                          })}
                        </Slider>
                      </div>
                    </div> */}



                  </div>
                  :
                  ''
                }
              </div>




            </Col>
          </Row>
        </Container>


        <Modal className='modopp'
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          animation={false}

        >
          <span onClick={handleClose} className={styles.crossclose}>x</span>
          <Modal.Body className='modalprocess'>
            <video controls className={`${styles.bgVideo1}`} autoPlay muted loop src="/images/process-combine.mp4" type="video/mp4"></video>
          </Modal.Body>

        </Modal>



      </div>
    </>
  )
}

export default Banner