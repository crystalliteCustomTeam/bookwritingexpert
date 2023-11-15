import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Error.module.css'
import Link from 'next/link'

const Error = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                
                <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                <link rel="profile" href="http://gmpg.org/xfn/11" />
                <meta name='robots' content='noindex, follow' />
                <title>Page not found - Book Writing</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="Page not found - Book Writing" />
                <meta property="og:site_name" content="Book Writing" />
                <link rel="icon" href="/favicon.svg" />
            </Head>



            <div className={styles.error}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='fw600 font60 color-blue t-center font-f mb-4'>404 NOT FOUND</h2>
                            <h4 className="fw500 font40 color-white t-center font-f mb-2">THIS IS SOMEWHAT EMBARRASSING, ISN’T IT?</h4>
                            <p className="font18 fw400 color-white t-center font-f mb-4">It looks like nothing was found at this location. Maybe try a search?</p>
                            <div className='mt-4 t-center'>
                                <Link href="javascript:$zopim.livechat.window.show();" className={styles.btn404}>LET'S DISCUSS</Link>
                                <Link href="tel:(800) 781-9093" className={styles.btn404}>(800) 781-9093</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Error