import React, { useState } from 'react'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../public/images/logo.svg';
import logochildrenlp from '../public/images/childrenillustration/childrenlp-logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import Sticky from '../components/Sticky';
import avtar1 from '../public/images/testimonial/avatar-1.png'
import avtar2 from '../public/images/testimonial/avatar-2.png'
import avtar3 from '../public/images/testimonial/avatar-3.png'
import headericon1 from '../public/images/headericon/1.png'
import headericon2 from '../public/images/headericon/2.png'
import headericon3 from '../public/images/headericon/3.png'
import headericon4 from '../public/images/headericon/4.png'
import headericon5 from '../public/images/headericon/5.png'
import headericon6 from '../public/images/headericon/6.png'
import headericon7 from '../public/images/headericon/7.png'
import headericon8 from '../public/images/headericon/8.png'
import headericon9 from '../public/images/headericon/9.png'
import headericon10 from '../public/images/headericon/10.png'
import Modal from 'react-bootstrap/Modal';
import Getstarted from './Getstarted'
import Thanksgiving from './Thanksgiving';

import { useRouter } from "next/router";

const Header = () => {

  const [click, setclick] = useState(false);

  function toggle() {

    setclick((prevState) => !prevState);


  }

  const [show, setShow] = useState(false);



  function modal(e) { e.preventDefault(); setShow(true); }
  function closemodal() { setShow(false); }




  const router = useRouter();
  const router1 = router.asPath;

  // Check if postSlug exists and is not 'undefined'
  const { postSlug } = router.query;
  const slug = postSlug && postSlug !== 'undefined' ? `/${postSlug}` : '';

  const headercolor =
    router1 === '/illustration' ||
    router1 === '/ghostwriting-services2' ||
    router1 === '/audiobookproduction' ||
    router1 === '/ourportfolio' ||
    router1 === '/portfoliobookediting' ||
    router1 === '/portfoliobookmarketing' ||
    router1 === '/portfoliobookwriting' ||
    router1 === '/portfoliobookpublishing' ||
    router1 === '/blog';

  const navbarTextColor =
    router1 === '/children-book-illustration'

  const navbarCtaColor =
    router1 === '/children-book-illustration'
    
  const navbarColor =
    router1 === '/children-book-illustration'








  return (
    <>







      <header className={headercolor || slug ? `${styles.headerblue}` : `${styles.headerhome}`}>


        <Navbar expand="lg">
          <Container className={styles.headerContainer}>

            {navbarTextColor ? (
              <Link href="/">
                <Image loading="lazy" quality={70} className={styles.logoNewCbi} src={logochildrenlp} alt="Book Writing Experts" />
              </Link>
            ) : (
              <Link href="/">
                <Image loading="lazy" quality={70} className={styles.logonew} src={logo} alt="Book Writing Experts" />
              </Link>
            )}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navalign}>
              <>
                <ul className={styles.align_menu}>
                  <li className={styles.navlinks}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="/">Home</Link></li>
                  {/* <li className={styles.navlinks}><Link className={styles.menulinks} href="/about">About us</Link></li> */}
                  <li onClick={toggle} className={`${styles.navlinks} ${styles.serviceshover}`}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="">Services <IoMdArrowDropdown size={12} /></Link>

                    <Row className={click ? `${styles.megamenu} ${styles.active}` : `${styles.megamenu}`}>
                      <Col md={4}>
                        <div className={styles.megaTitle}>
                          <h5 className='font15 mt-4 pt-3'>Services</h5>
                        </div>
                        <ul className={`${styles.border} scrollNav`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon1} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-publishing-services">Book Publishing</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon2} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-promotion-services">Book Promotion</Link>
                              <p>Book Promotion Services Helping You Be A Cut Above The Rest!</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon3} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-writing-services">Book Writing</Link>
                              <p>Get Connected To Your Readers With Ebook Writing Experts!</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon4} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-editing-services">Book Editing</Link>
                              <p>Professional and unmatched Reliable Editing Solutions For All!</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon2} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/business-plan-writing-services">Business Plan Writing Services</Link>
                              <p>Professional and unmatched Reliable Business Plan Writing Solutions For All!</p>
                            </div>
                          </li>
                          {/* <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon3} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ghostwriting-services">Ghostwriting Services</Link>
                              <p>Professional and unmatched Reliable Ghostwriting Solutions For All!</p>
                            </div>
                          </li> */}

                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon5} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/web-content-writing-services">Web Content Writing Services</Link>
                              <p>Professional and unmatched Reliable Web Content Writing For All!</p>
                            </div>
                          </li>

                        </ul>
                      </Col>
                      <Col md={4}>
                        <div className={styles.megaTitle}>
                          <h5 className={`${styles.unUseDiv} font15 mt-4 pt-3`}>Services</h5>
                        </div>
                        <ul className={`${styles.border} scrollNav`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon6} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-proofreading-services">Proofreading Services</Link>
                              <p>Professional Proofreading Services To Turn Your Words Into Masterpieces.</p>
                            </div>
                          </li>

                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon5} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-marketing-services">Book Marketing</Link>
                              <p>Book Promotion Has Just Become Easier With The Global Book...</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/digital-marketing-services">Digital Marketing</Link>
                              <p>You Are One Step Closer To Displaying Your Writing Excellence...</p>
                            </div>

                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-trailer-services">Book Trailer Services</Link>
                              <p>You Are One Step Closer To Displaying Your Book Trailer Excellence...</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon9} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ebook-writing-services">Ebook Writing Services</Link>
                              <p>You Are One Step Closer To Displaying Your Ebook Writing Excellence...</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon7} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-formatting-services">Book Formatting Services</Link>
                              <p>You Are One Step Closer To Displaying Your Book Formatting Excellence...</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/illustration">Illustration</Link>
                              <p>You Are One Step Closer To Displaying Your Writing Excellence...</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                            <Image loading="lazy" alt="Book Writing Experts" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/audiobookproduction">Audio book production </Link>
                              <p>You Are One Step Closer To Displaying Your Writing Excellence...</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col md={4} className={styles.lastCol}>
                        <div className={styles.megaTitle}>
                          <h5 className='font15 mt-4 pt-3'>Our Experts</h5>
                        </div>
                        <ul className={styles.border}>
                          <li className={styles.navlinks}>
                            <div className={`${styles.megaImg} mt-3`}>
                              <Image loading="lazy" className='img-fluid'
                                src={avtar1}
                                alt="Book Writing Experts"
                              />
                              <Image loading="lazy" className='img-fluid'
                                src={avtar2}
                                alt="Book Writing Experts"
                              />
                              <Image loading="lazy" className='img-fluid'
                                src={avtar3}
                                alt="Book Writing Experts"
                              />
                            </div>
                            <div className={`${styles.megaImgTxt} mt-4`}>
                              <p className='font15 fw700'>Book a call with one of our experts</p>
                              <p className='font14'>Book a call with one of our experts get a customized solution by best publishing services Book Writing Experts Is waiting for you to Ask for a Professional Writer.</p>
                              <Link href="tel:8555000057" className='text-white'>Book A Free Call
                                <FaLocationArrow />
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </li>
                  <li className={styles.navlinks}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="/pricing">Pricing</Link></li>
                  <li className={styles.navlinks}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="/ourportfolio"> Our Portfolio</Link></li>
                  <li className={styles.navlinks}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="/blog">Blogs</Link></li>
                  <li className={styles.navlinks}><Link className={navbarTextColor || slug ? `${styles.menuLinksCbi}` : `${styles.menulinks}`} href="/contact">Contact us</Link></li>
                </ul>
              </>

              <ul className={styles.align_menu}>
                <li className={navbarCtaColor || slug ? `${styles.headerTelCbi}` : `${styles.headertel} ${styles.navlinks}`}>

                  <Link className={navbarCtaColor || slug ? `${styles.headerbtnCBIcolor} ${styles.headerCBIicon}` : `${styles.headerbtncolor} ${styles.headericon}`} href="tel:(855) 500 0057">

                    <BsFillTelephoneFill className={styles.valuenum} size={12} /> (855) 500 0057 </Link>

                </li>
                <li onClick={modal} className={navbarCtaColor || slug ? `${styles.navlinks} ${styles.headerBtnSpacingCbi} ${styles.headertel}` : `${styles.navlinks} ${styles.headertel} ${styles.headerbtnspacing}`}><Link className={styles.headerbtncolor} href="">Get A Quote</Link></li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>

      <Sticky />


      <Modal show={show} centered onHide={closemodal} className='getmodal'>
        <Modal.Body> <Getstarted /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

      </Modal>


    </>
  )
}

export default Header