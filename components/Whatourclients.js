import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import avtar1 from '../public/images/testimonial/julian-anthony-pereira.png'
import avtar2 from '../public/images/testimonial/silas-micah.png'
import avtar3 from '../public/images/testimonial/terrif-hawlk.png'
import avtar4 from '../public/images/testimonial/glint.png'
import avtar5 from '../public/images/testimonial/abigail.png'


// footer icons
import { AiFillStar } from 'react-icons/ai';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {

  var whatourclients = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
      <div className={styles.ourclients}>
        <Container className='testtimonials clintTesti'>




          <Slider {...whatourclients}>


            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='font18 fw700 color-blue mb-4'>Client Testimonials </h3>
              <h2 className={styles.value}>The Stamp of Approval for Our Services</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>
                Book Writing Experts(BWE) has been an absolute lifesaver for me. Their book writing services exceeded my expectations, as they skillfully transformed my ideas into a captivating story. Although there were a few minor hiccups during the book writing process, such as some initial miscommunication about the tone and style I wanted for my book, BWE&#8217;s team was quick to address these concerns. They took the time to understand my vision and made the necessary adjustments to ensure the final product aligned with my expectations.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar1}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Julian Anthony Pereira</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

            <div >
              <div className={styles.whatclientlogo}>    </div>
              <h3 className='font18 fw700 color-blue mb-4'>Client Testimonials </h3>
              <h2 className={styles.value}>The Stamp of Approval for Our Services</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>
                My expectations were surpassed by The Book Writing Experts&#8217; audio book services. With a crystal-clear and captivating narrative, the production value was excellent, holding listeners&#8217; attention from beginning to end. The Book Writing Experts easily turned my thoughts into an engaging
                audio experience that connected with my audience.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar2}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>silas micah</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='font18 fw700 color-blue mb-4'>Client Testimonials </h3>
              <h2 className={styles.value}>The Stamp of Approval for Our Services</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>
                As an author who dreamed of seeing my book listed on all the major platforms, including Goodreads, Amazon, BookBub, and Apple Books, I am thrilled to say that my expectations have been surpassed. Thanks to the dedicated efforts of Book writing experts, my book has achieved widespread
                visibility and success.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar4}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Glint</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='font18 fw700 color-blue mb-4'>Client Testimonials </h3>
              <h2 className={styles.value}>The Stamp of Approval for Our Services</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>
                Book Writing Experts gave my book the professional push it needed to make a splash in the literary world. Their strategies were targeted and effective, helping me reach readers all over the globe. TBH, I was not sure if they could walk the talk because the support person was clueless of what I
                used to tell him, but overall, I enjoyed working with them every step of the way and
                was amazed by the results. If you&#8217;re looking for the best in book marketing
                services, look no further than Book Writing Experts!
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar3}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Terrif Hawlk</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

            <div >
              <div className={styles.whatclientlogo}>    </div>
              <h3 className='font18 fw700 color-blue mb-4'>Client Testimonials </h3>
              <h2 className={styles.value}>The Stamp of Approval for Our Services</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>
                Book Writing Experts made the process of publishing my book a breeze. They handled
                everything with expertise and efficiency, from formatting and cover design to
                distribution and marketing. They even offered personalized support throughout the
                process, ensuring I felt confident and informed. I&#8217;m so glad I chose them to
                help me bring my book to market.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar5}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Abigail Smith</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>
          </Slider>


        </Container>

      </div>
    </>
  )
}

export default Whatourclients