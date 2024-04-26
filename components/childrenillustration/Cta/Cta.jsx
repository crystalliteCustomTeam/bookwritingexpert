import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import style from '../Cta/Cta.module.css'
import CTAGroup from '../../CTAGroup/CTAGroup'
import CTAimage from '../../../public/images/childrenillustration/cta-image.png'
import CTA from '../../CTA/CTA'
const cta = ({
  title,
  subtitle,
  desc,
}) => {
  return (
    <section>
      <div className={`${style.ctaSection} text-white`}>
        <Container>
          <Row className='d-flex align-items-center'>
            <Col md={7}>
              <Image src={CTAimage} quality={65} alt='Children Book Illustration' className={`img-fluid ${style.ctaImage} d-md-block d-none`}/>
            </Col>
            <Col md={5}>
              <div className='d-flex flex-column'>
                {title && <h3 className='fw700' dangerouslySetInnerHTML={{ __html: title }} />}
                {subtitle && <h4 className='' dangerouslySetInnerHTML={{ __html: subtitle }} />}
                {desc && <p className='' dangerouslySetInnerHTML={{ __html: desc }} />}
                <CTAGroup classes='d-flex flex-lg-nowrap flex-wrap align-items-md-start align-items-center justify-content-md-start justify-content-center' />


              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default cta