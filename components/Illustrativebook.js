import React from 'react'
import styles from '@/styles/Illustrativebook.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Illustrativebook = (props) => {
  return (
    <>
    <section className={styles.plust}>
        <Container>
            <Row className={styles.bookspost}>
                <Col lg={7}>

                    { props.title } 
                   <p className='color-white font-f hero-span font14'>{ props.para }</p> 

                   <div className='mt-4'>
                        <Link className={styles.discuss} href="telto:(213) 289 3888">(213) 289 3888</Link>
                        <Link className={styles.homenumer} href="#"> LET'S DISCUSS</Link>
                  </div>

                </Col>
                <Col lg={4}>
                    <div className={styles[props.cartoon]}>
                          <Image alt='book writing expert' src={props.cartoonimg} className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Illustrativebook