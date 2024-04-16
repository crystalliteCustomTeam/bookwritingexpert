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


  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'> <Link className='color-white textdocationnone hover' href='/ebook-writing-services'>Book Formatting Services</Link> That Help You Proudly Put Your Name On Your Book! </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'We offer book formatting services that help make your book look professional and appealing to readers. We understand the importance of a well-formatted book, and our team of experts will work closely with you to ensure that your book meets all the necessary requirements. To help your masterpiece be error-free, our formatting services fit the bill! Hone your writing skills with us. Rest assured, we are the ones you need to make your book the best it can be!',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'articlewritingservices',




    }
  ]


  const geta = <span className='fw700 color-black'>With Us, Get Ready To Finally See Your Hard Work In Print!</span>

  const titleDb = <span className=' color-blue'>Do You Want To Captivate Your Readers From Beginning To End?
  </span>
  const posdata = <span className='fw700' >Give Your Book The Professional Look It Deserves With Our <Link className='color-white textdocationnone hover' href='/book-formatting-services'>Formatting Services!</Link> </span>


  const WaitingForSomeone = <span>Waiting For Someone To <Link className='color-black textdocationnone hover' href='/ebook-writing-services' > Give Your Book An EBook Version?</Link></span>

  const fine = [

    {
      img: mission1,
      title: 'Identifying and Rectifying the Flaws',
      text: 'Our formatting professionals receive the manuscript from the clients to start spotting the flaws. With every possible error spotted, we jump-start fixing the imperfections to make the book impeccably flawless.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Bringing Right Expertise and Tools to the Table',
      text: 'To format your book for success, our formatting pros go over the manuscript with a fine-tooth comb. They know how to best use the formatting tools to rectify the issues and make the book bright-eyed and bushy-tailed.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Customized Formatting Services',
      text: 'Our best book formatting services are designed by keeping the genre of your book and the unique requirements in mind. We ensure to leave no stone unturned when it comes to delivering the formatting services for your masterpiece!',
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

  const text = <span>Get in touch with our professional book writing specialists today. Our eBooks Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!
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
        btn2='Talk to an expert'
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-lightgray font25 t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>We Take Your Raw Manuscript And Turn It Into A Finished, Print-Ready Book.
            </p>

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
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
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
          title='Professional Book Formatting Services We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices