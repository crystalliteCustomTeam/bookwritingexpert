import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'


const BlogListing = () => {

    return (
        <>
            <section className={styles.blogListBody}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={2}>
                            <h5 className='font20 fontf fw700 mt-1 letterspace black'>Blogs</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font48 black fontf fw700 line60 black'>Insight</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogListing
