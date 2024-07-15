import React from 'react'
import styles from '@/styles/Publish.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import ready from '../public/images/newlp/lost.png'
import Link from 'next/link'

const Publish = (props) => {


  return (
    <>
      <div className={`${styles.ready}`}>

        <Container>
          <Row className={`${styles.turn}`}>
            <Col md={4} >
            <div className={styles.piximg}>
              <Image src={ready} className='img-fluid' alt="Book Writing Experts" />
            </div>
            </Col>
            <Col md={8} className={styles.menuinto}>
            <h2 className='font-f fw700'>Publish Audio Books On Amazon</h2>
<p className='font-f pt-1 pb-2'>We help you turn your manuscript into an audiobook on Amazon, and provide the necessary services to create a finished product. - Get an editor to polish your book before publication</p>

<p className='font-f pb-2'>We specialize in audio books narration and audio book production for both fiction and non-fiction books. Our services are unparalleled, and we offer an affordable solution that works well for authors on tight budgets too.</p>
           
           <div className={styles.know}>
            <Link className={styles.great} href="javascript:$zopim.livechat.window.show();">Let’s Discuss</Link> 
            <Link className={styles.produce} href="tel:8555000057">(855) 500 0057</Link> 
           </div>
           
            </Col>
          </Row>
        </Container>


      </div>
    </>
  )
}

export default Publish