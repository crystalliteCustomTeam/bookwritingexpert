import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from '../BookShelf/BookShelf.module.css'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BookShelf = ({
  title,
  desc,
  img1,
  img2,
  img3
}) => {
  var settings = {
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3, // Display 2 columns at this breakpoint
          slidesToScroll: 3, // Scroll 2 columns at this breakpoint
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display 1 column at this breakpoint
          slidesToScroll: 1, // Scroll 1 column at this breakpoint
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1, // Display 1 column at this breakpoint
          slidesToScroll: 1, // Scroll 1 column at this breakpoint
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Display 1 column at this breakpoint
          slidesToScroll: 1, // Scroll 1 column at this breakpoint
        }
      }
    ]
  };
  return (
    <section>
      <div className={`${style.bookShelf}`}>
        <Container>
          <Row>
            <Col md={10} className='mx-auto text-center'>
              <div className={`d-flex flex-column align-items-center justify-content-center`}>
                <h3 className={`fw700 ${style.font_50}`} dangerouslySetInnerHTML={{ __html: title }} />
                <p className={`${style.font_18}`} dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={9} className='mx-auto mt-5 mb-5'>
              <div className={`d-md-flex flex-row d-none gap-3 align-items-center justify-content-center mb-xl-3 mb-0 px-5`}>
                {img1 && <Image src={img1} alt="Children Book Illustration" width={230} height={300} className='img-fluid mx-auto' />}
                {img2 && <Image src={img2} alt="Children Book Illustration" width={230} height={300} className='img-fluid mx-auto' />}
                {img3 && <Image src={img3} alt="Children Book Illustration" width={230} height={300} className='img-fluid mx-auto' />}
              </div>

              <div className='d-md-none d-block childrenTestimonial'>
                <Slider {...settings}>
                  {img1 && <Image src={img1} alt="Children Book Illustration" className='img-fluid mx-auto' />}
                  {img2 && <Image src={img2} alt="Children Book Illustration" className='img-fluid mx-auto' />}
                  {img3 && <Image src={img3} alt="Children Book Illustration" className='img-fluid mx-auto' />}
                </Slider>
              </div>


            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default BookShelf
