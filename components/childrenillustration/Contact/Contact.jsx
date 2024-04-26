import React from 'react'
import Image from 'next/image'
import style from '../Contact/contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../../../public/images/childrenillustration/contact-img.png'
import CTA from '../../CTA/CTA'
const Contact = ({ title, desc }) => {
  return (
    <section>
      <div className={`${style.contact}`}>
        <Container>
          <Row>
            <Col lg={6} md={12} className='px-4'>
              <h3 className='fw700 font_50' dangerouslySetInnerHTML={{ __html: title }} />
              <p className='' dangerouslySetInnerHTML={{ __html: desc }} />
              <form method='post' className='bg-white py-3'>
                <div className='d-flex flex-column gap-3 align-self-start justify-content-start'>
                  <div>
                    <label className='form-label'>Full Name *</label>
                    <input type="text" className='form-control' name="name" id="" placeholder='Type Full Name ' />
                  </div>
                  <div>
                    <label className='form-label'>Phone *</label>
                    <input type="number" className='form-control' name="phone" id="" placeholder='(000) 000-0000 ' />
                  </div>
                  <div>
                    <label className='form-label'>Email Address *</label>
                    <input type="email" className='form-control' name="email" id="" placeholder='Type Email Address' />
                  </div>

                  <div>
                    <label className='form-label'>Message *</label>
                    <textarea className="form-control" id="" name='message' rows="5" placeholder='Message'></textarea>
                  </div>

                  <div className='d-flex flex-lg-row flex-column align-items-lg-start align-items-center gap-4 mt-3 mb-3'>
                    <CTA
                      text='Submit Details'
                      bg="bgGray"
                      classes={`${style.submitDetails} formbgGray py-2`}
                    />
                    <CTA
                      text="(302) 883-8877"
                      bg="bgOrange"
                      classes='py-2'
                    />
                  </div>
                </div>

              </form>
            </Col>
            <Col md={6} className='d-lg-flex align-items-center justify-content-center flex-column d-none'>
              <Image src={contactImg} alt="Contact Us" className='img-fluid m-auto' />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Contact
