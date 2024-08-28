import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
 

const Homebanner = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`${styles[props.bannershome]} ${styles[props.servicesBanner]}`}>

                <Container>
                    <Row>
                        <Col xl={6} lg={8} md={12} className={styles[props.alignclass]}>

                            <div className={styles.homebannertext}>

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
                                {props.discuss ?
                                    <div className={`${styles[props.homebancan]} mt-5`}>
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


                                {props.homebanlogos ?

                                    <div className="row">
                                        <div className="col-12 col-lg-12">

                                            <div className={styles.homebannerlogo}>
                                                <Image loading="lazy" className={`${styles.homelogoimgnone} img-fluid mt-3`} src={props.homebanlogos} alt="Book Writing Experts" ></Image>
                                            </div> 
                                        </div>
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

export default Homebanner