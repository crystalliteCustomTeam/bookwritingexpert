import React from 'react'
import styles from '@/styles/Finetoothedbook.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Finetoothedbook = (props) => {
  return (
    <>
      <Col md={4}>
        <div className={styles[props.classtop]}>
          <Image loading="lazy" alt="Book Writing Experts" src={props.img1} className='img-fluid' />
          <h3 className="font20 fw600 colorexpertgrey font-f t-center">{props.title}</h3>
          {props.text ?
            <div className='scrollBox'>
              <p className='color-lightgray font14 fw400 font-f t-center mt-3'>{props.text}</p>
            </div>
            : ''}
        </div>
      </Col>

    </>
  )
}

export default Finetoothedbook