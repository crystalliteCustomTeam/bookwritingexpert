import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/businessplanwriting/ss.png'
import mission2 from '/public/images/businessplanwriting/fdf.png'
import mission3 from '/public/images/businessplanwriting/hg.png'
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


const businessplanWringservices = () => {



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





  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Get Professional <span className='color-blue textdocationnone'>Business Plan Writing Services</span> To Meet Your Strategic Business Needs!</h1>;

  const discuss = <span>Talk to an Expert</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Securing funding, drawing in investors, and promoting business expansion all depend on having a strong business plan. Our team of skilled business plan writers can help you write a business plan that can effectively raise capital and establish your company. Get a free consultation and work with the best business plan writing company.',
      discuss: discuss,
      homebannernum: 'Call Us  (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ghostwriting',




    }
  ]


  const geta = <span className='fw700 color-black'>We Know What It Takes To Write A Business Plan That Wins!</span>

  const posdata = <span className='fw700'>We Write Professional Business Plans That Bring In Results </span>

  const datap = <span className=''>Our Professional business plan writers are ready to work with you to create a complete business plan that meets your strategic needs. Our business plan writing services can help with everything ranging from planning bank loans to raising funds.

  </span>

  const fine = [

    {
      img: mission1,
      title: 'Researching',
      text: 'We study your target market, competition, and the goal of this step. We are aware of the workings of your sector and the requirements for success. We will be able to create more accurate financial estimates for your company with the aid of this research.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Planning',
      text: 'Creating a thorough business plan that covers your financial estimates, marketing strategy, and business model is the next stage. We will be able to determine your unique selling proposition and the steps necessary to reach your objectives with the aid of this planning process.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Writing',
      text: 'Your business plan acts as a roadmap for your business. We make sure to cover key elements such as executive summary, job description, market research, product or service offering, marketing strategies, financial projections, and in-depth bios of your board. ',
      class: 'fintop',


    },


  ]

  const dateset = <strong className='fw600'> <span className='color-blue'>Best Business Plan Writing Services</span><br/> at Affordable Price</strong>


  const datesettext = <span> Staffed with qualified writers, we have a team of professional business plan writers who have undergone our strict vetting process. They have developed more than 1000 projects for different companies across various sectors. Gain benefits from their wealth of knowledge and experience.</span>

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

  const text = <span>A perfect business plan is all about detailing the company’s operations, SWOT analysis, revenue strategies, and financial projections so that it can attract potential investors. Our team of best business plan writers is ready to help you come up with an individualized operative plan that will launch your business toward the coveted development heights..

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
        text='Business plans are important for small businesses and startups because they provide essential guidance on starting and operating a successful business. While many business plans writing companies are out there, Book Writing Experts is peerless.  If you’re ready to take your business to the next level, contact us to get started on your custom business plan. We offer affordable rates and flexible payment plans so that you can get the help you need without breaking the bank. Trust us to help you achieve your business dreams.

        '
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title='Let’s Get Paired With Our Expert Business Plan Writers '
        title2={posdata}
        subtext={datap}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <span className="color-lightgray font25 t-center font-f mb-2">Our Approach</span>

            <h2 className='font30 font-f fw500 colortextgrey t-center pb-2'>Three-Step Formula for Creating a Winning Business Plan
            </h2>

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



      <Ourprocess
        title='Our Modernized Business Plan Writing Process'

        heading1='Initial Discovery Phone Call'
        para1='One of our expert consultants will organize a call. During this conversation, you will answer some basic questions to assist us in understanding the key features of your project and lay the groundwork for our work.'
        num1='01'

        heading2='Review The Preliminary Draft'
        para2="After careful evaluation, one of our business plan writers will start writing the first chapters of your business plan. This early draft will emphasize your plan's major aspects and structure. We will then email it to you for approval."
        num2='02'

        heading3='Creating Financial Model'
        para3='We will contact you with specific inquiries to acquire precise financial and market information. We will develop a complete financial model for your company, including pro forma statements and cash flow estimates.'
        num3='03'

        heading4='Content Review'
        para4='After integrating the research and financial data, you will receive the first full copy of your business plan. We will provide frequent updates throughout the process and give you plenty of opportunity to examine the draft. '
        num4='04'

        heading5='Visually Appealing Design'
        para5='Our design team will add a polished and professional look to your business plan after the written content is finished. We guarantee that the design is eye-catching and properly complements the logo of your business.'
        num5='05'


      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={datesettext}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
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
          title='Writing Perfect Business Plans for Long-Term Success'
          text={text}
          number="Call Us (855) 500 0057"
          discuss="Talk To An Expert "
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
          title='Successful Companies Set Out with A Solid Business Plan'
          text="Trust us to deliver a business plan that impresses investors and serves as a roadmap for your business's future growth and success."
          number="Call Us  (855) 500 0057"
          discuss="Get A Proposal "
        />
      </div>


    </>
  )
}

export default businessplanWringservices