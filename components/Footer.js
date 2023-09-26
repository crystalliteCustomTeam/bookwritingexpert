import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
// images 
import footerlogo from '../public/images/logo.svg'
import protectedlogo from '../public/images/footer/protected.png'
import visa from '../public/images/footer/visa.png'
import logo1 from '../public/images/footer/logo1.png'
import logo2 from '../public/images/footer/logo2.png'
import logo3 from '../public/images/footer/logo3.png'
import logo4 from '../public/images/footer/logo4.png'
import logo5 from '../public/images/footer/logo5.png'
import logo6 from '../public/images/footer/logo6.png'
import logo7 from '../public/images/footer/logo7.png'
import logo8 from '../public/images/footer/logo8.png'
import logo9 from '../public/images/footer/logo9.png'
import logo10 from '../public/images/footer/logo10.png'
import logo11 from '../public/images/footer/logo11.png'
import logo12 from '../public/images/footer/logo12.png'
import logonew1 from '../public/images/footer/logonew1.png'
import logonew2 from '../public/images/footer/logonew2.png'
import logonew3 from '../public/images/footer/logonew3.png'
import logonew4 from '../public/images/footer/logonew4.png'
import logonew5 from '../public/images/footer/logonew5.png'
// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



const footerlogos1 =
  [

    { footerimg1: logo1 },
    { footerimg1: logo2 },
    { footerimg1: logo3 },
    { footerimg1: logo4 },
    { footerimg1: logo5 },
    { footerimg1: logo6 },
    { footerimg1: logo7 },
    { footerimg1: logo8 },
    { footerimg1: logo9 },
    { footerimg1: logo10 },
    { footerimg1: logo11 },
    { footerimg1: logo12 },

  ];


const footerlogosnew =
  [

    { footerlogosfuncy: logonew1 },
    { footerlogosfuncy: logonew2 },
    { footerlogosfuncy: logonew3 },
    { footerlogosfuncy: logonew4 },
    { footerlogosfuncy: logonew5 },

  ];



const Footer = () => {

  var visalogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
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

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className={styles.footer}>
        <Container>
          <Row className='pb-5'>
            <Col md={4}>
              <Image loading="lazy" className={styles.footerlogosize} src={footerlogo} alt='book writing expert'></Image>
              <ul className={styles.footermenu1}>
                <li className={`${styles.footermenulinks} mt-4`}><MdEmail size={16} />  <Link className={styles.styleset} href="mailto:support@bookwritingexperts.com">support@bookwritingexperts.com</Link></li>
                <li className={`${styles.footermenulinks} pt-3`}><BsFillTelephoneFill size={12} /> <Link className={styles.styleset} href="tel:213-289-3888"> (213) 289 3888 </Link></li>
                <li className={`${styles.footermenulinks} pt-3`}> <ImLocation2 size={16} /> 445 S.Figueroa Street, Los Angeles, CA 90071 </li>



              </ul>

              <ul className={styles.socialiconfooter}>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.facebook.com/bookwritingexperts"><RiFacebookBoxFill size={20} /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://twitter.com/bookwritingexp"><AiOutlineTwitter size={17} /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.instagram.com/bookwritingexp/"><AiOutlineInstagram size={17} /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.youtube.com/channel/UCMwHkNiJzrMd6MlPOBFMmLA"><BsYoutube size={17} /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.linkedin.com/company/bookwritingexp"><FaLinkedinIn size={17} /></Link></li>
              </ul>

              <Image loading="lazy" className='mt-3' src={protectedlogo} alt='book writing expert'></Image>

            </Col>
            <Col md={3}>
              <h2 className='font-f font22 fw500 border-bottom'>Useful Links</h2>
              <ul className={`${styles.footermenu1} mt-4`}>

                <li className={`${styles.footermenulinks} `}><Link className={styles.styleset} href="/">Home</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/pricing">Pricing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/contact">Contact</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/faqs">Faq's</Link></li>
                

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="#">Let's Get Started</Link></li>

              </ul>


            </Col>
            <Col md={3}>

              <h2 className='font-f font22 fw500 border-bottom'>Services</h2>

              <ul className={`${styles.footermenu1}  mt-4`}>


                <li className={`${styles.footermenulinks} pt-1`}><Link className={styles.styleset} href="/book-editing-services">Book Editing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-publishing-services">Book Publishing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-writing-services">Book Writing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-marketing-services">Book Marketing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/digital-marketing-services">Digital Marketing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-proofreading-services">Proofreading Services</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/ghostwriting-services">Ghostwriting</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/children-book-publication-services">Children Book Publication</Link></li>


              </ul>





            </Col>
            <Col md={2}>
              <h2 className='font-f font22 fw500 border-bottom'>Awards</h2>




              <div className={styles.imgvisa}>


                <Slider {...visalogo}>



                  {footerlogosnew.map((item, i) => {
                    return (
                      <div key={i} className={styles.rightlogo}>
                        <Image loading="lazy" className='img-fluid' src={item.footerlogosfuncy} alt='book writing expert'></Image>
                      </div>
                    )
                  })}




                </Slider>






              </div>
              <div className={styles.imgvisa}>

                <Slider {...awardslogo}>

                  {footerlogos1.map((item, i) => {
                    return (
                      <div key={i} className={styles.rightlogo}>
                        <Image loading="lazy" className='pt-1 img-fluid' src={item.footerimg1} alt='book writing expert'></Image>
                      </div>
                    )
                  })}

                </Slider>


              </div>

            </Col>

          </Row>


          <div className={styles.footerborder}>
            <Row className='pt-2'>
              <Col md={4}>
                <Image loading="lazy" className='img-fluid' src={visa} alt='book writing expert'></Image>
              </Col>
              <Col md={4}>
                <p className='font14 text-center font-f'>© 2023 - All Rights Reserved</p>
              </Col>
              <Col md={4}>
                <div className={styles.aligntextrignt}>
                  <p className='font14 font-f'> <Link className={styles.styleset} href="/terms-of-use">Terms of Use</Link> | <Link className={styles.styleset} href="/privacy-policy">Privacy Policy</Link></p>
                </div>

              </Col>
            </Row>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer