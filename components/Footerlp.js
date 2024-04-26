import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footerlp.module.css'
import Link from 'next/link'
import Image from 'next/image'
// images 
import { useState, useEffect } from 'react'
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
import email from '../public/images/footer/email.png'
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

import social1 from '../public/images/newlp/1.png'
import social2 from '../public/images/newlp/2.png'
import social3 from '../public/images/newlp/3.png'
import social4 from '../public/images/newlp/4.png'
import social5 from '../public/images/newlp/5.png'
import location from '../public/images/newlp/location.png'



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



const Footerlp = () => {


  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

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
          <Row className='pb-4 footercolset'>
            <Col md={4}>
              <Image loading="lazy" className={styles.footerlogosize} src={footerlogo} alt="Book Writing Experts"></Image>
              <ul className={styles.footermenu1}>
                <li className={`${styles.footermenulinks} mt-4`}><MdEmail size={16} />  <Link className={styles.styleset} href="mailto:support@bookwritingexperts.com"><Image src={email} alt="Book Writing Experts" /></Link></li>
                <li className={`${styles.footermenulinks} ${styles.footermenulinks2} pt-3`}>   <BsFillTelephoneFill size={12} /> Toll Free:<Link className={styles.styleset} href="tel:8555000057"> (855) 500-0057 </Link></li>
                <li className={`${styles.footermenulinks} ${styles.footermenulinks2} pt-3`}>   <BsFillTelephoneFill size={12} /> For Sales Inquiry:<Link className={styles.styleset} href="tel:2135499870"> (213) 549-9870 </Link></li>
                <li className={`${styles.footermenulinks} ${styles.footermenulinks2} pt-3`}>  <BsFillTelephoneFill size={12} /> For Project Inquiry:<Link className={styles.styleset} href="tel:2135499850"> (213) 549-9850 </Link></li>
                <li className={`${styles.footermenulinks} ${styles.footerdo} pt-3`}>  <Image src={location} className='img-fluid' /> 445 S.Figueroa Street, Los Angeles, CA 90071 </li>
              </ul>

              <ul className={styles.socialiconfooter}>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.facebook.com/bookwritingexperts">
                  <Image src={social1} className='img-fluid' /> </Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://twitter.com/bookwritingexp"> <Image src={social2} className='img-fluid' /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.instagram.com/bookwritingexp/"> <Image src={social3} className='img-fluid' /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.linkedin.com/company/bookwritingexp"> <Image src={social4} className='img-fluid' /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.youtube.com/channel/UCMwHkNiJzrMd6MlPOBFMmLA"> <Image src={social5} className='img-fluid' /></Link></li>
              </ul>



            </Col>
            <Col md={3} className={`${styles.insta} ${styles.newcom} ${styles.lpot6}`}>
              <h3 className='font-f font22 fw500 '>Quick Links</h3>
              <ul className={`${styles.footermenu1} mt-3`}>

                <li className={`${styles.footermenulinks} `}><Link className={styles.styleset} href="/">Home</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/pricing">Pricing</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/contact">Contact</Link></li>

                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/faqs">Faq's</Link></li>


                <li className={`${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="javascript:$zopim.livechat.window.show();">Let's Get Started</Link></li>

              </ul>


            </Col>
            <Col md={3} className={`${styles.insta} ${styles.newcom}`}>

              <h3 className='font-f font22 fw500 '>Services</h3>

              <ul className={`${styles.footermenu1}  mt-3`}>


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
            <Col md={2} className={styles.insta}>
              <h3 className='font-f font22 fw500 '>Awards</h3>




              <div className={styles.imgvisa}>

                {imagesLoaded &&
                  <Slider {...visalogo}>
                    {footerlogosnew.map((item, i) => {
                      return (
                        <div key={i} className={styles.rightlogo}>
                          <Image loading="lazy" className='img-fluid' src={item.footerlogosfuncy} alt="Book Writing Experts"></Image>
                        </div>
                      )
                    })}
                  </Slider>
                }
              </div>
              <div className={styles.imgvisa}>
                {imagesLoaded &&
                  <Slider {...awardslogo}>

                    {footerlogos1.map((item, i) => {
                      return (
                        <div key={i} className={styles.rightlogo}>
                          <Image loading="lazy" className='pt-1 img-fluid' src={item.footerimg1} alt="Book Writing Experts"></Image>
                        </div>
                      )
                    })}

                  </Slider>
                }

              </div>

            </Col>

          </Row>


          <div className={styles.footerborder}>
            <Row className='pt-2'>
              <Col md={4}>
                <Image loading="lazy" className='img-fluid' src={visa} alt="Book Writing Experts"></Image>
              </Col>
              <Col md={4}>
                <p className='font14 text-center font-f'>© 2024 - All Rights Reserved <Link className='font14 text-center font-f text-white text-decoration-none' target='_blank' href="https://mini-investments.net/"></Link></p>
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

export default Footerlp