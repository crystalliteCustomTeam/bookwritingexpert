import React from 'react'
import styles from '@/styles/Aspiring.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Signup from './Signup'

const Aspiring = (props) => {
    return (
        <>

            <div className={styles.aspiring}>

                <Container>
                    <Row className={`${styles.middle} gy-4`}>
                        <Col md={7}>
                            <h2 className="fw700 font50 colortextgrey font-f mb-4">{props.title}</h2>
                            <p className='color-lightgray font14 fw400 font-f mt-3' dangerouslySetInnerHTML={{ __html: props.text }} />
                            <p className='color-lightgray font14 fw400 font-f mt-3'>{props.subtext}</p>
                            <div className='mt-5'>
                                <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">Get A Free Proposal</Link>
                                <Link className={styles.btn2} href="tel:(855) 500 0057"> {props.number}</Link>
                            </div>
                        </Col>
                        <Col md={5}>
                            {props.img ?
                                <Image loading="lazy" alt="Book Writing Experts" src={props.img} className='img-fluid mt-3' />
                                :
                                <Signup
                                    bannershome='signup'
                                    contacttext='contacttextblack'
                                />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Aspiring