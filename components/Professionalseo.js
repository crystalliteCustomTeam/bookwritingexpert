import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Professionalseo.module.css'
import Image from 'next/image'
import blog1 from '/public/images/blogimage/1.png'
import blog2 from '/public/images/blogimage/2.png'
import blog3 from '/public/images/blogimage/3.png'

const Professionalseo = () => {
    return (
        <>
            <div className={styles.professionalseo}>

                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className='font48 fw900 color-blue font-f t-center'> Professional SEO Article Writing Services That Make an Impact</h2>

                            <p className='fw500 font18 colortextgrey font-f mt-3 m-0 t-center'>
                                Our team of article writers has worked on countless projects from vario niches.
                            </p>

                        </Col>
                    </Row>

                    <Row className={` ${styles.worked} gy-3 quality`}>
                        <Col md={3}>
                            <div className={styles.blog}>
                                <Image loading="lazy" src={blog1} className='img-fluid' alt="book_writing_cube"></Image>
                                <div className={styles.cardbody}>
                                    <a className='textdocationnone' href="#">
                                        <h5 className='fw700 font17 color-blue font-f'> Quality </h5> </a>
                                    <p className='font15 fw500 font-f'> At Book Writing Cube, we only work with experienced and professional writers who
                                        are experts in their field. This ensures that your articles will be of the highest quality
                                        and will provide accurate and up-to-date information.
                                    </p>
                                </div>


                            </div>
                        </Col>
                        <Col md={3}>

                            <div className={styles.blog}>
                                <Image loading="lazy" src={blog2} className='img-fluid' alt="book_writing_cube"></Image>
                                <div className={styles.cardbody}>
                                    <a className='textdocationnone' href="#">
                                        <h5 className='fw700 font17 color-blue font-f'> Creativity </h5> </a>
                                    <p className='font15 fw500 font-f'> Our content development team is also highly creative, meaning they can come up with unique and engaging ways to present your information. This helps to make your articles stand out from the rest and gives readers a reason to keep coming back.
                                    </p>
                                </div>


                            </div>

                        </Col>
                        <Col md={3}>

                            <div className={styles.blog}>
                                <Image loading="lazy" src={blog3} className='img-fluid' alt="book_writing_cube"></Image>
                                <div className={styles.cardbody}>
                                    <a className='textdocationnone' href="#">
                                        <h5 className='fw700 font17 color-blue font-f'> Plagiarism Free </h5> </a>
                                    <p className='font15 fw500 font-f'> When you are looking for SEO article writing services, it is important to find one that offers plagiarism-free content. This is something that Book Writing Cube takes pride in offering. All of their articles are written from scratch, so you can be sure that the content is 100% original.
                                    </p>
                                </div>


                            </div>

                        </Col>
                    </Row>

                </Container>

            </div>
        </>
    )
}

export default Professionalseo