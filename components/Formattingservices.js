import React from 'react'
import styles from '@/styles/Formattingservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Formattingservices = () => {
    return (
        <>
            <div className={styles.formattingservices}>
                <Container>
                    <Row className={styles.shape}>
                        <Col md={10}>

                            <h2 className='fw700 font50 color-blue font-f t-center mb-3'> Our Book Editing And Formatting Services Shape Your Manuscript Into A Stellar Piece Of Literary Art! </h2>

                            <p className='textcolor  font-f t-center'>While carrying off <Link className='textdocationnone color-blue hover' href='/book-editing-services'>ebook editing services</Link>, our online book editors pay close attention to the tiniest of details to give your story the personality it needs without compromising the idea or plot.</p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Formattingservices