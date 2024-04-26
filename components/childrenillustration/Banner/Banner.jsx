import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Banner.module.css'
import Link from 'next/link'
import Image from 'next/image'
import homeBanner from "../../../public/images/childrenillustration/homeBanner.png"
import CTAGroup from '../../CTAGroup/CTAGroup'
const Banner = ({
    subtitle,
    title,
    desc,
    formTitle
}) => {
    return (
        <section>
            <div>
                <div className={styles.childBanner}>
                    <Container>
                        <Row className='d-flex align-items-center'>
                            <Col lg={5}>
                                <div className='d-lg-block d-sm-flex flex-sm-column align-items-sm-center justify-content-center'>
                                    <h3 className="font-30 fw500" dangerouslySetInnerHTML={{ __html: subtitle }} />
                                    <h1 className="text-orange fw700" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className='' dangerouslySetInnerHTML={{ __html: desc }} />

                                    <CTAGroup classes='mb-5 gap-3 d-flex flex-md-nowrap flex-wrap align-items-start align-items-center justify-content-md-start justify-content-center' />
                                    <div className={`d-flex px-5 flex-column justify-content-start py-5 ${styles.formClass}`}>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <h4 className='fw600' dangerouslySetInnerHTML={{ __html: formTitle }} />
                                        </div>
                                        <form method='post' action=''>
                                            <Row>
                                                <Col>
                                                    <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="inputText" className="form-label">Full Name*</label>
                                                        <input type="text" placeholder="Type Full Name " name="first_name" id="" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="inputPhone" className="form-label">Phone*</label>
                                                        <input type="phone" placeholder="123-456-7890" name="phone" id="" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col>
                                                <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="exampleFormControlInput1" className="form-label">Email*</label>
                                                        <input type="email" placeholder="Type Full Email" name="email" id="" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="exampleFormControlTextarea1" className="form-label">Message*</label>
                                                        <input type="message" placeholder="" name="phone" id="" />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className='d-flex justify-content-center mt-4'>
                                                <button className={`${"bgGray"} ${"formbgGray"} text-white position-relative`}>Submit Details</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div>
                                    <Image src={homeBanner} alt="Children Illustration" className="img-fluid me-0 d-lg-block d-none" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Banner
