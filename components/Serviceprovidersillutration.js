import React from 'react'

// css
import styles from '@/styles/Serviceproviders.module.css'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import proposal from '/public/images/serviceproviders/3.svg'


const Serviceprovidersillutration = (props) => {
    return (
        <div className={styles.stopworrying}>

            <Container>
                <Row className={` ${styles.books} gy-5 `}>
                    <Col md={8}>
                        {props.subtitle &&
                            props.subtitle
                        }
                        {props.title &&
                            props.title
                        }
                        {props.text &&
                            props.text
                        }



                        <div className={styles.aligntop}>

                            <Link href='#footercontact' className={styles.btn1}> Get A Free Proposal  </Link>
                            <Link href='javascript:$zopim.livechat.window.show();' className={styles.btn2}> Talk To An Expert  </Link>
                            <Link href='tel:2132893888' className={styles.btn2}>(855) 500 0057</Link>

                        </div>

                    </Col>
                    <Col md={3}>
                        <Image alt="Book Writing Experts" src={proposal} className="img-fluid"></Image>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Serviceprovidersillutration