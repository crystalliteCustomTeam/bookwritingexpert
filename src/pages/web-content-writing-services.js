import React from 'react'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/ebookwritingservices/fssf.png'
import mission2 from '/public/images/ebookwritingservices/bgdf.png'
import mission3 from '/public/images/ebookwritingservices/dfdgf.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'

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


  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'><Link className='color-white textdocationnone hover' href='/web-content-writing-services'>Web Content Writing Service</Link> That Gives Your Business Persona A Professional Look! </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Is your website content outdated? Let us help you with it! At Book Writing Experts, we create Search Engine Optimized and high-quality website content that guarantees increased traffic and conversions. We have a team of writers with the experience and skill set required to provide the best and cost-effective writing solutions.',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'webcontentwritingservices',




    }
  ]


  const geta = <span className='fw700 color-black'><Link className='color-black textdocationnone hover' href='/web-content-writing-services'> Web Content Writing Service</Link> That Voices Your Brand Values In The Most Professional Tone! </span>

  const titleDb = <span className=' color-blue'>Want To Boost Traffic? </span>
  const posdata = <span className='fw700'>
    Discuss Your Requirements With Our Qualified Team Of <Link className='color-white textdocationnone hover' href='/web-content-writing-services'>Content Writers</Link>  And Get Best Solutions!</span>


  const WaitingForSomeone = <span>Tired Of The Same Outdated Content On Your Website?</span>

  const fine = [

    {
      img: mission1,
      title: 'Top notch Content',
      text: 'We have a team of experts who knows how to present words that make the content attractive to the reader’s eye. Our website content is search engine optimized to help you get a higher ranking on the search engine result page.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Quick Turnaround',
      text: 'Our team of expert content writers makes sure that each project is completed before the deadline so that we have time to get client’s feedback and make changes if required.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: '100% Content Satisfaction',
      text: 'We keep our clients in the loop while working for them. All the content is discussed with them and finalized only after their approval. If the client is not satisfied with any piece of content, we redesign it for their satisfaction.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'> Tired Of The Same Outdated Content On Your Website?
  </span>


  const datesettext = <span>  Get in touch with our <Link href='javascript:$zopim.livechat.window.show();' className='color-blue textdocationnone hover'>professional book writing</Link> specialists today. Our Books Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!</span>

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

  const text = <span>Allow us to provide some refreshments to your website and make it beneficial for your visitors.


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
        text='Although the first impression is not the last, it leaves a deep mark in the visitor’s mind. Our Professional Content writers are always ready to provide you unique and informative content that engages the audience completely and makes them stay longer. If you desire to improve the quality and quantity of traffic on your website, allow our experts to redesign your content. Let us give your website a professional look.'
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

      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>We Aim To Enhance Your ROI By Fueling Your Website With Impressive Content!
            </p>

          </Row>

          {isSliderActive ?
            <Slider {...bookrecordingprojects}>
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
          title='Professional Web Content Writing Services We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices