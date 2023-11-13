import React from 'react'
import styles from '@/styles/Whychoosebook.module.css'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'



const Whychoosebook = (props) => {
  return (
    <>

      <div className={styles.choosebook}>

        <Container>
          <Row>
            <h2 className='fw700 font50 color-blue font-f t-center'>{props.title}</h2>
            <p className={`${styles.whytext} font15  font-f t-center mt-3 mb-5 textcolor`}>{props.text}</p>
            <div className={styles.whychooseimge}>
              <Image loading="lazy" quality={70} className='img-fluid' src={props.whychoose} alt="Book Writing Experts"></Image>
            </div>
          </Row>

        </Container>


      </div>

    </>
  )
}

export default Whychoosebook