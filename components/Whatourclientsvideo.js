import { React, useEffect } from 'react'
import styles from '@/styles/Whatourclientsvideo.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Fancybox from "./fancybox.js";
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


const Whatourclientsvideo = () => {

  var Whatourclientsvideo = {
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  // useEffect(() => {

  //   Fancybox.bind();
  // }, []);



  return (
    <>
      <div className={styles.ourclients}>
        <Container className='testtimonials video-testi my-5'>
          <p className="font18 fw700 font-f color-blue text-center">Book Reviews</p>
          <h2 className="Whatourclients_value__b9cDY text-center">Let’s hear what they have to say!</h2>
          <p className="font15 font-f text-black fw-400 mb-3 text-center">We have been delivering top-notch services to our
            clients, which has established us as one of the most trusted book writing, <br className="d-lg-block d-none" />
            publishing and marketing company in the eyes of every author out there!</p>
          <Fancybox>
            <Slider className='py-5' {...Whatourclientsvideo}>
              <div className="position-relative">
                <span className="d-block px-2">
                  <a href="https://player.vimeo.com/progressive_redirect/playback/1000857231/rendition/720p/file.mp4?loc=external&log_user=0&signature=10e620793d75ef8447f5b6949fa026c31fa44931d64865381ad57a81178dd016" className={styles.__testiPlayIcon} data-fancybox="clientsVideos" data-caption="Client #1"><Image src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a0732a42-5554-42c6-075c-0d100d129700/public" width="400" height="225" priority={true} alt="testimonial" className="d-block mx-auto img-fluid" /></a>
                </span>
              </div>
              <div className="position-relative">
                <span className="d-block px-2">
                  <a href="https://player.vimeo.com/progressive_redirect/playback/1000857191/rendition/360p/file.mp4?loc=external&log_user=0&signature=45a45423e9a39b3bd77aef4af2f35a8f1b88ecf669d64d3211c8e6ff4b1d245d" className={styles.__testiPlayIcon} data-fancybox="clientsVideos" data-caption="Client #2">
                    <Image src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a1fa43dd-fefa-4672-00a6-65014286a700/public" width="400" height="225" priority={true} alt="testimonial" className="d-block mx-auto img-fluid" /></a>
                </span>
              </div>
              <div className="position-relative">
                <span className="d-block px-2">
                  <a href="https://player.vimeo.com/progressive_redirect/playback/1000857153/rendition/360p/file.mp4?loc=external&log_user=0&signature=d53069cc0abfb3f537f4d21d86e04d5391f791cd2f77923faa8075519c273524" className={styles.__testiPlayIcon} data-fancybox="clientsVideos" data-caption="Client #3"><Image src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/42f70a32-07f6-48dc-426d-75b08c64f800/public" width="400" height="225" priority={true} alt="testimonial" className="d-block mx-auto img-fluid" /></a>
                </span>
              </div>
              <div className="position-relative">
                <span className="d-block px-2">
                  <a href="https://player.vimeo.com/progressive_redirect/playback/1000857107/rendition/360p/file.mp4?loc=external&log_user=0&signature=b5105213506c95ef003f62ee6287c6a164b75c78262e0a8075a588374fde22cb" className={styles.__testiPlayIcon} data-fancybox="clientsVideos" data-caption="Client #4"><Image src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/c0ed9954-f390-474b-7310-bb3e4e4f3f00/public" width="400" height="225" priority={true} alt="testimonial" className="d-block mx-auto img-fluid" /></a>
                </span>
              </div>
              <div className="position-relative">
                <span className="d-block px-2">
                  <a href="https://player.vimeo.com/progressive_redirect/playback/1000857074/rendition/360p/file.mp4?loc=external&log_user=0&signature=7ddbf1af252e9eb1bccdf466dc6e118498f5f02a562f29804a2febf8ce32699a" className={styles.__testiPlayIcon} data-fancybox="clientsVideos" data-caption="Client #5"><Image src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f987f1e4-a5c1-46e7-784f-b6ea66158400/public" width="400" height="225" priority={true} alt="testimonial" className="d-block mx-auto img-fluid" /></a>
                </span>
              </div>
            </Slider>
          </Fancybox>


        </Container>

      </div>
    </>
  )
}

export default Whatourclientsvideo