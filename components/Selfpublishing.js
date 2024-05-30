import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Selfpublishing.module.css'
import Image from 'next/image'
import Link from 'next/link'




const Selfpublishing = (props) => {
    return (
        <>

            <div className={styles[props.whychooseclass]}>
                <Container>
                    <Row className={`${styles.middle} gy-4`}>

                        <Col md={7}>

                            <div className={styles.cube}>

                                <h2 className="fw700 font50 colorexpertgrey font-f mb-2">{props.title}</h2>
                                <p className='font15  font-f textcolor'>{props.text}</p>
                                {props.subtext ?

                                    <p className='font15  font-f textcolor'>{props.subtext}</p>
                                    :
                                    ''
                                }


                                <div className='mt-4'>
                                    <Link className={styles.asdiscuss} href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                                    <Link className={styles.asnumber} href="tel:(855) 500 0057"> {props.number}</Link>

                                </div>

                            </div>


                        </Col>

                        <Col md={4}>

                            <div className={styles.image}>
                                <Image loading="lazy" src={props.image} className={`${styles.imgshowdow} img-fluid`} alt="Book Writing Experts"></Image>
                            </div>

                        </Col>
                    </Row>
                </Container>



            </div>

        </>
    )
}

export default Selfpublishing