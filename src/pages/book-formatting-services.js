import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/bookformating/icon-1.png'
import mission2 from '/public/images/bookformating/icon-2.png'
import mission3 from '/public/images/bookformating/icon-3.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Stillonthefence from '../../components/Stillonthefence'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'
// css
import styles from '@/styles/Whybookpublishing.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'



const EbookWritingservices = () => {


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


  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>  Refine Your Book To Perfection with Our Professional <br className='d-lg-block d-none'/><span className='color-blue textdocationnone'>Book Formatting Services</span> </h1>;

  const discuss = <span>Get A Quote </span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'We know how important a properly formatted book is, and our team of professionals will work directly with you to make sure your book satisfies all the standards. Our reliable book formatting services guarantee an error-free final product.  Refine Your book with us, rest assured that we are the experts that help your book reach its full potential!',
      discuss: discuss,
      homebannernum: 'Call Us Now!',
      banlogo: homebannerlogos,
      banners: 'articlewritingservices',




    }
  ]


  const geta = <span className='fw700 color-black'>With Us, Get Ready To Finally See Your Hard Work In Print!</span>

  const titleDb = <span className=' color-blue'>Top Book Formatting Company That Gives Your Book the Look It Deserves.
  </span>
  const posdata = <span className='fw700' >Provide Your Readers With An Eye-Catching Reading Experience With Our Professional  <span className='color-blue textdocationnone '>Book Formatting Services.</span> </span>


  const WaitingForSomeone = <span>Elegant And Versatile <span className='color-blue textdocationnone'> Book Formatting For Your Ebooks </span></span>

  const fine = [

    {
      img: mission1,
      title: 'Finding and Fixing the flaws',
      text: 'When our book formatters receive your work, they immediately begin to identify any errors. Having identified every potential mistake, we promptly rectify the flaws to ensure the book is immaculate.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Bringing the Perfect Skills and Tools to the Table',
      text: 'Our formatting experts go through the text with a fine-tooth comb to prepare your book for success. They are adept at using formatting tools to address the problems and give the book a fresh, vibrant appearance.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Personalized Book Formatting Services',
      text: "Our top-notch book formatting company was organized by keeping your book's genre and specific needs in mind. When it comes to providing the formatting services for your masterpiece, we make sure to cover every ground!",
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>  Are You On The Lookout For <br></br> <Link href='/book-formatting-services' className='color-blue textdocationnone hover fw700'>Professional Formatting Services?</Link> </span>


  const datesettext = <span>  Book Writing Experts is the perfect destination to stop by. You can confide in us for formatting your book up to the universal standards. Have us on your side and define the success of your book with our professional book formatting services!

  </span>

  const reasons = [

    {
      title: 'A Top-Notch Group Of Writers',
      text: 'Work with some of the industry`s top editors, authors, and publishing strategists. Our team-based strategy will give you the best chance of success.',
      classnum: 'number1',

    },
    {
      title: 'Individualized Approach to Strategy',
      text: 'In order to ensure that we develop a strategy that will help you achieve your goals, we first hold four extensive publishing strategy meetings.',
      classnum: 'number1',

    },
    {
      title: 'Fine-Tuned Process',
      text: 'Enjoy the dependability and effectiveness of our professionally managed book-writing process.',
      classnum: 'number1',

    },

    {
      title: 'Specialists in Books Composing',
      text: 'Authors from practically every genre who have received accolades are on our team, along with #1 New York Times Book Writers.',
      classnum: 'number1',

    },
    {
      title: 'The Best of the Best Editors',
      text: 'Your proposal will be supervised and edited by a former acquisitions editor from a Big-5 publisher with a number of New York Times’ book writing titles to their credit.',
      classnum: 'number1',

    },
    {
      title: 'Publishing Process',
      text: 'Publishing Process We will walk you through the entire book publication process. We can either place your book directly with traditional publishers or assist you in choosing the best hybrid publishing solution.',
      classnum: 'number1',

    },


  ]

  const text = <span>Writing is a challenging skill to master, and even the most skilled writers require the helping hand of professional formatters. Luckily, the best formatting services are at your fingertips now! Our experts know how to showcase your book for maximum impact.  
  </span>;


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
        text='Document formatting services can save you a lot of time and hassle when it comes to getting your book ready for publication. A professional formatter will ensure that your book meets all the necessary requirements in terms of layout, design, and typography, as well as making sure it complies with any international standards. If you want to get rid of this tedious process, give our professionals a call and let your book outshine!'
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title={titleDb}
        title2={posdata}
        btn1='Get a free Proposal'
        btn2='Get A Quote '
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <span className="color-lightgray font25 t-center font-f mb-2 fw500">Our Method</span>

            <h2 className='font30 font-f fw500 colortextgrey t-center pb-2'>We Take Your Raw Manuscript And Convert It Into A Ready-To-Publish Book.
            </h2>

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
            <Row className='gy-5 pb-5'>
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




      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              Our book writing team is composed of the industry's elite who know the ins and outs of the writing industry better than any of us. If you have any more questions about signing up for the professional book writing services, we may have your answers listed below!
            </p>

          </Row>

          <Row>
            {whybookpublishingdata.map((item, i) =>
              <Whybookpublishing key={i}
                title={item.title}
                text={item.text}
                col6={item.col6}
              />
            )}
          </Row>
        </Container>
      </div> */}




      {/* Selfpublishing */}

      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="Call Us (855) 500 0057"
          discuss="Get A Quote "
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>





      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Lululogos components */}
      <Lululogos />




      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Work with the Leading Book Formatting Services'
          text="Our team is home to the most talented <a class='color-black textdocationnone hover' href='https://www.bookwritingexperts.com/book-writing-services'> book writing </a> and formatting professionals. Connect with vetted specialists who have worked on best-selling books for major publishers. "
          number="Call Us (855) 500 0057"
          discuss="Get A Quote "
        />
      </div>


    </>
  )
}

export default EbookWritingservices