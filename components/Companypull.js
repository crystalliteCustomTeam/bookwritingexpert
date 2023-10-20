import React from 'react'
import styles from '@/styles/Companypull.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Signup from './Signup'
import together from '/public/images/together/together.png'


const Companypull = (props) => {
  return (
    <>
    
        <div className={styles.aspiring}>

            <Container>
                <Row className={styles.middle}>
                  
                    <Col md={5}>
 
                    <Image loading="lazy" alt="Book Writing Experts" src={together} className='img-fluid mt-3' />
         


 

         


                    </Col>

                    <Col md={7}>

                        <h2 className="fw600 font50 color-white font-f mb-4">{props.title}</h2>
                        <p className={`${styles.colortext} color-lightgray font14 fw400 font-f mt-3`}>{props.text}</p>
                            { props.subtext ?

                                <p  className='color-lightgray font14 fw400 font-f mt-3'>{props.subtext}</p>
                                :
                                    ''
                            }


                        <div className='mt-5'>
                
                            <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">We are Available 24/7 Chat With Us!</Link>
                            <Link className={styles.btn2} href="tel:(855) 500 0057"> {props.number}</Link>
                            
                        </div>

                </Col>
                </Row>
            </Container>




        </div>
    
    </>
  )
}

export default Companypull