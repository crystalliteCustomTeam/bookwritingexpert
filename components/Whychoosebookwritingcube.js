import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Whychoosebookwritingcube.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Whychoosebookwritingcube = (props) => {
    return (
        <>

            <div className={styles[props.whychooseclass]}>
                <Container>
                    <Row className={`${styles.middle} gy-4`}>

                        <Col md={4}>

                            <div className={styles.image}>
                                <Image loading="lazy" src={props.image} className={`${styles.imgshowdow} img-fluid`} alt="Book Writing Experts"></Image>
                            </div>

                        </Col>


                        <Col md={7}>

                            <div className={styles.cube}>

                                <h3 className="fw700 font50 colorexpertgrey font-f mb-2">{props.title}</h3>
                                <p className='font15 textcolor font-f'>{props.text}</p>
                                {props.subtext ?

                                    <p className='font15 textcolor font-f'>{props.subtext}</p>
                                    :
                                    ''
                                }


                                <div className='mt-4'>
                                    <Link className={styles.asdiscuss} href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                                    <Link className={styles.asnumber} href="tel:(855) 500 0057"> {props.number}</Link>

                                </div>

                            </div>


                        </Col>
                    </Row>
                </Container>



            </div>

        </>
    )
}

export default Whychoosebookwritingcube