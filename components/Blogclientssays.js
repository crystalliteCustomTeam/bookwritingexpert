import React from 'react'
import styles from '@/styles/Blogclientssays.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Freequote from '../components/Freequote'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// images
import whatour from '../public/images/whatourclients/set.png'

// slick css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Blogclientssays = () => {


  const [clickto, setclicktoggle1] = useState(false);

  function toggle() {

    setclicktoggle1((prevState) => !prevState);


  }


  var whatourclients = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className={` ${styles.blogclientssays} blogslide`}>

        <Container>
          <Row>
            <Col md={7}>
              <h2 className='color-blue font50 fw700 font-f'> What Our Clients Says  About Us</h2>

              <Slider {...whatourclients}>


                <div >

                  <div className={styles.whatclientlogo}>

                    <Image loading="lazy" className={`${styles.quit} img-fluid`} width={30} src={whatour} alt="Book Writing Experts"></Image>

                  </div>

                  <p className={`${styles.looking} font15  textcolor font-f `}>

                  My sister was struggling with her book sales; I recommended Book Writing Experts book promotion services. Since then the sales have skyrocketed. I have never seen such great results in a short time.

                  

                  </p>



                  <p className={styles.mark}><b>James Moris</b></p>




                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>




                </div>
                <div >

                  <div className={styles.whatclientlogo}>   <Image loading="lazy" className={`${styles.quit} img-fluid`} width={30} src={whatour} alt="Book Writing Experts"></Image> </div>
                  <p className={`${styles.looking} font15  textcolor font-f `}>
                  Book writing Experts are truly remarkable! I worked with Sam Jordan and he stayed in contact with me almost every day. This was my first time as and Author and To put it mildly, I probably drove him crazy, but he never once was unkind or got angry a true professional and patients of a saint.
                  </p>
                  <p className={styles.mark}><b>Evelyn Keplinger</b></p>


                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>

                <div >

                  <div className={styles.whatclientlogo}>   <Image loading="lazy" className={`${styles.quit} img-fluid`} width={30} src={whatour} alt="Book Writing Experts"></Image> </div>
                  <p className={`${styles.looking} font15  textcolor font-f `}>

                  I worked with Sam Jordan for a few months preparing my first book. Sam was very helpful and courteous. We connected on the phone several times a week. I am not the most patient person, but I found Sam to be capable and professional. He helped me overcome any fears I had about the process..

                  </p>
                  <p className={styles.mark}><b>Ron</b></p>


                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>

                <div >

                  <div className={styles.whatclientlogo}>   <Image loading="lazy" className={`${styles.quit} img-fluid`} width={30} src={whatour} alt="Book Writing Experts"></Image> </div>
                  <p className={`${styles.looking} font15  textcolor font-f `}>

                  my creation of this 24 chapter book is actually a 24 part mini series. But once Claire and Sam from the book writing experts Joined forces with me  they turned my little Mini masterpiece into a  Netflix/Amazon series. 43 years of silence Will become an overnight Box office success. Thank you Claire. I love your team.
                  </p>
                  <p className={styles.mark}><b>Luis Reyes</b></p>


                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>

                <div >

                  <div className={styles.whatclientlogo}>   <Image loading="lazy" className={`${styles.quit} img-fluid`} width={30} src={whatour} alt="Book Writing Experts"></Image> </div>
                  <p className={`${styles.looking} font15  textcolor font-f `}>

                  Since I was short on money and couldn’t afford an expensive proofreader for the book, I was legit quite worried because having a second opinion is always better? My friend recommended Book Writing Experts’ affordable proofreading services, and wow! They were very accommodating and got my work done in 3 days only. So happy!

                  </p>


                  <p className={styles.mark}><b>Dyuti Hai</b></p>


                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>






              </Slider>


            </Col>
            <Col md={5}>
              <Freequote
                formsaspire='blogsays'
                show='yes'

              />
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Blogclientssays