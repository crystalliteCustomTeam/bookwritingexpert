import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from '../BookProcess/Bookprocess.module.css'
const BookProcess = ({ title,desc,data }) => {
  return (
    <section>
      <div className={`${style.bookProcess}`}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={`${style.heading} d-flex flex-column align-items-md-end align-items-center justify-content-md-end justify-content-center`}>
                <h3 className={`fw700 mt-5 ${style.font_30} text-white`} dangerouslySetInnerHTML={{ __html: title }} />
                <p className={`${style.font_12} text-white `} dangerouslySetInnerHTML={{__html : desc}}/>
              </div>
            </Col>
            <Col md={6} className={`positive-relative`}>
                <div className={`${style.process} `}>
                  <div className={`d-flex flex-md-column flex-row flex-md-nowrap flex-wrap gap-4 align-items-center`}>
                        <div className="">
                          {data?.map((e,i)=>(
                            <div key={i} className={`${style.processData} d-flex flex-column align-items-start`}>
                                <span className={`fw700`}>{e.number}</span>
                                <h3 className='text-white' dangerouslySetInnerHTML={{__html : (e.title)}}/>
                                <p className='text-white' dangerouslySetInnerHTML={{__html : (e.desc)}}/>
                            </div>
                          ))}
                        </div>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default BookProcess
