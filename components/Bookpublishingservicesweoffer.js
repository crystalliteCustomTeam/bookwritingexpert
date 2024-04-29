import React from 'react'
import styles from '@/styles/Bookpublishingservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import bookediting from '../public/images/bookpublishingservices/book-editing.png'
import pubicon01 from '../public/images/bookpublishingservices/pub-icon01.png'
import pubicon02 from '../public/images/bookpublishingservices/pub-icon02.png'
import book from '../public/images/bookpublishingservices/book.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'


const Bookpublishingservicesweoffer = () => {




    var bookrecordingprojects = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
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

    const card =
        [

            {
                image: bookediting,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> </>),
                subTitle: "Amazon KDP",
                pra: (<> Dreaming of becoming an <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Utilize our professional advice and help to fulfill your ambition of becoming an <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> author. While benefiting from expert marketing and distribution tactics, keep control over your work. Accept the thrill of self-publication and let your tale shine with our support.</>)

            },

            {
                image: pubicon01,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Self-Publishing</Link> </>),
                subTitle: "Self-Publishing",
                pra: (<> Are you prepared to share your artistic triumph? Our <Link className='textdocationnone text-white hover' href="/book-publishing-services/">self-publishing service</Link> provides persistent assistance, including professional resources and custom marketing and distribution support. Keep complete control over your work and have it published just how you intended. With us by your side, embrace the beauty of self-publishing.</>)

            },

            {
                image: pubicon02,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Lulu Book Publishing</Link> </>),
                subTitle: "Lulu Book Publishing",
                pra: (<> Unleash your creativity with our <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Lulu Book Publishing service!</Link> Our committed group of qualified <Link className='textdocationnone text-white hover' href="/book-publishing-services/">lulu book publishers</Link> will be there for you every step of this process, providing individualized help, effective marketing, and distribution plans. Enjoy the ease of self-publishing with confidence and accept your individual literary path to effortlessly bring your writing to life.</>)

            },


            {
                image: book,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Ingramspark Publishing Services</Link> </>),
                subTitle: "Ingramspark Publishing Services",
                pra: (<>Become familiar with <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Ingramspark Publishing Services</Link> to begin your easy self-publishing path! Our team of experts provides comprehensive assistance, ranging from vital information to specially designed marketing and distribution plans. Enjoy total freedom to publish your work however, you see fit. Join us as we dive in and bring your literary idea to life!</>)

            },




        ]
    return (
        <>
            <div className={styles.comprehensive}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h2 className="fw700 font50 text-white font-f t-center mb-3">The <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Book Publishing Services</Link> We Provide!</h2>

                            <p className="font15 text-white font-f t-center textcolor mb-3">Book Writing Experts proudly provides a comprehensive range of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing services</Link>. From the initial manuscript evaluation to final <Link className='textdocationnone text-white hover' href="https://www.bookwritingexperts.com/book-proofreading-services/">proofreading</Link>, and including steps such as detailed editing, layout design, and cover art creation, we've got you covered. We also offer guidance through the often complex world of distribution, marketing, and copyright registration. Our commitment is to deliver a professional, seamless service that allows your unique voice to reach readers worldwide. Entrust your literary journey to our expert team.</p>

                        </Col>

                    </Row>

                    {isSliderActive ?
                        <Slider {...bookrecordingprojects} className='newdotflod'>
                           
                                {card.map((item, i) => {
                                    return (
                                        


                                            <div className={styles.flipcard} key={i}>
                                                <div className={styles.flipcardinner}>
                                                    <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                        <Image loading="lazy" width={80} height={80} className='img-fluid' src={item.image} alt="Book Writing Experts"></Image>
                                                        <h3>{item.subTitle}</h3>
                                                    </div>
                                                    <div className={styles.flipcardback}>
                                                        <h3 className='text-white'>{item.title}</h3>
                                                        <p className='text-white'>{item.pra}</p>

                                                    </div>
                                                </div>
                                            </div>


                                  
                                    )
                                })}




                          
                        </Slider>
                        :
                        <Row className='mt-4'>
                            {card.map((item, i) => {
                                return (
                                    <Col className={`${styles.post} col-md-3`} key={i}>


                                        <div className={styles.flipcard}>
                                            <div className={styles.flipcardinner}>
                                                <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                    <Image loading="lazy" width={80} height={80} className='img-fluid' src={item.image} alt="Book Writing Experts"></Image>
                                                    <h3>{item.subTitle}</h3>
                                                </div>
                                                <div className={styles.flipcardback}>
                                                    <h3 className='text-white'>{item.title}</h3>
                                                    <p className='text-white'>{item.pra}</p>

                                                </div>
                                            </div>
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

export default Bookpublishingservicesweoffer