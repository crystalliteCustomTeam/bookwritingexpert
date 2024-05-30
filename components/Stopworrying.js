import React from 'react'

// css
import styles from '@/styles/Stopworrying.module.css'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

const Stopworrying = (props) => {
  return (
    <div className={styles.stopworrying}>

      <Container>
        <Row>
          <Col md={12}>
            <h3 className='font25 font-f t-center color-white fw300'> {props.title} </h3>



            {props.title2 ?

              <h2 className='font50 font-f t-center color-white fw300'> {props.title2} </h2>
              :

              ''

            }

            {props.subtitle3 ?

              <p className='font15 color-white fw100 font-f t-center mt-4'>{props.subtitle3}</p>
              :
              ''

            }
            {props.subtitle4 ?

              <p className='font15 color-white fw100 font-f t-center'>{props.subtitle4}</p>
              :
              ''

            }


            <p className='font15 color-white fw100 font-f t-center'>{props.text}</p>
            {props.subtext ?

              <p className='font15 color-white fw100 font-f t-center'>{props.subtext}</p>
              :
              ''
            }


            <h2 className='font50 color-white fw300 font-f t-center mt-4'>{props.subtitle}</h2>
            {props.subtitle2 ?

              <p className='font18 color-white fw100 font-f t-center mt-4'>{props.subtitle2}</p>
              :
              ''

            }





            <div className={styles.aligntop}>

          
              <Link href='javascript:$zopim.livechat.window.show();' className={styles.btn1}> {props.btn2} </Link>
              <Link href='tel:2132893888' className={styles.btn2}>Call Us Now!</Link>

            </div>

          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Stopworrying