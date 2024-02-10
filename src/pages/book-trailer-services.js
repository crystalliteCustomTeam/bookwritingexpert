import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'


// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Major from '../../components/Major'


// css
import styles from '@/styles/Whybookpublishing.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'



const BookTrailerServcies = () => {






  var bookrecordingprojects = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const [isSliderActive, setIsSliderActive] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsSliderActive(true);
      } else {
        setIsSliderActive(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Our Marvelous  <Link className='textdocationnone color-blue hover' href="/book-trailer-services"> Book Trailer Services</Link> <span className=''></span> Add Creativity To Your Writing Projects!</h1>;

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Looking for a new and captivating way to promote your upcoming book? Look no further, Book Writing Experts have you covered! Our unmatched book video trailer services help you create the online hype your book deserves. Our experts bring creativity and passion into the mix.',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookvideotrailer',




    }
  ]

  const geta = <span className='font50 fw700 font-f hero-span'>

    <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services/'> Book Video Trailers</Link>  Are The Future For
    <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services/'> Digital Book Promotions,</Link> Get On The Trend With Us!

  </span>

  const leveup = <span className='font50 fw700 font-f  color-black textdocationnone  hero-span'>Level Up Your <Link href='/book-trailer-services' className='textdocationnone color-black hover fw700'>Book Promotion</Link> Game With Our #1 <Link className='textdocationnone color-black hover fw700' href='/book-trailer-services'>Book Video Trailer Services</Link> </span>

  const posdata = <span>Creative <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services'>Book Video Trailers</Link> Are Now Accessible At One-Click; Reach Us Now!</span>

  const fine = [

    {
      img: mission1,
      title: 'Engaging Content',
      text: 'We understand the importance of creating a trailer that accurately reflects the tone and style of your book. We will work with you to ensure that your trailer is an accurate representation of your work.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Promotion',
      text: 'We have a wide network of contacts in the book industry, and we can help you promote your book through these channels. We will work with you to ensure that your book reaches the widest possible audience.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Creativity At Work',
      text: 'We are committed to helping you create a trailer that is both creative and informative. We will work with you to ensure that your trailer is entertaining and informative. With our help, you can create a book video trailer that will make a lasting impression on your audience.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'> Book Promotions? </Link>  </span>






  return (
    <>
 




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext1={item.subtext1}
          subtext2={item.subtext2}
          subtext3={item.subtext3}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
          processs={item.process}
        />
      )}








      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='What’s the best way to get people interested in your book? By creating a video trailer, of course! A book video trailer is a short, attention-grabbing clip that gives viewers a taste of what your book is all about. At Book Writing Experts, we create visually appealing book video trailers infused with creativity and innovation!'
        subtext=''
        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      <Stopworrying
        title='With The Right Mediums,
        Book Promotion Is Not That Hard!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row className="pt-5 pb-5">
            <h2 className="color-lightgray font25 t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Beat Your Competitors with Concise, Informative, and Engaging <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services'>  Book Video Trailers</Link></p>

          </Row>

          {isSliderActive ?
            <Slider {...bookrecordingprojects} className='mb-5 pb-3'>
              {fine.map((item, i) =>
                <Finetoothedbook key={i}
                  title={item.title}
                  text={item.text}
                  classtop={item.class}
                  img1={item.img}
                  btn={item.btn}
                />
              )}
            </Slider>
            :
            <Row className='gy-5'>
              {fine.map((item, i) =>
                <Finetoothedbook key={i}
                  title={item.title}
                  text={item.text}
                  classtop={item.class}
                  img1={item.img}
                  btn={item.btn}
                />
              )}
            </Row>
          }
        </Container>
      </div>

      {/* Selfpublishing */}
      <Selfpublishing
        title={leveup}
        text='First impression is indeed the last impression, which is why Book Writing Experts offer the best book video trailer services for our valued clients. Make the right impression on your readers with compelling book video trailers! '

        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={newimagetwoo}
        whychooseclass="marketyourbook"
      />













      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}
      <Lululogos />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Let’s Commence On The Journey To Book Excellence!'
          text="Give us a call at (855) 500 0057, or hit us up with your queries by filling out the form below."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />

      </div>

    </>
  )
}

export default BookTrailerServcies