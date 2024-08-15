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


  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Convert Visitors Into Clients With Quality <br /><Link className='color-white textdocationnone hover' href='/web-content-writing-services'>Web Content Writing Services!</Link> </h1>;

  const discuss = <span>FREE CONSULTATION</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Hire web content writers to grow your client base quickly and cost-effectively. Our trained writers and editors have over 10 years of experience creating high quality web copy that communicates the value of your product, service, or business effectively. We understand digital trends and modern SEO, ensuring your web copy is both engaging and optimized for search engines. Let us help you launch your website faster without waiting for quality content. Focus on your business while we handle your web content needs efficiently and expertly.',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'webcontentwritingservices',




    }
  ]


  const geta = <span className='fw700 color-black'><Link className='color-black textdocationnone hover' href='/web-content-writing-services'> Web Content Writing Service</Link> That Voices Your Brand Values In The Most Professional Tone! </span>

  const titleDb = <span className=' color-blue'>Experience High Organic Rankings</span>
  const posdata = <span className='fw700'>
    Our Website Content Writers Produce <br /> Results-Driven
    Copies For Maximum ROI!</span>


  const WaitingForSomeone = <span>We Create Website Content That Speaks Your
    Customers' Language!</span>

  const WaitingForSomeone2 = <span>Lead the Market With The Best Web Content Writing
    Company</span>

  const fine = [

    {
      img: mission1,
      title: 'Expertise and Industry Knowledge',
      text: 'We have recruited the top web content writers who are industry veterans and possess years of experience and in-depth knowledge at the core of the business, ensuring that the website content is correct and highly relevant to your audience.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'SEO-Optimized Content',
      text: 'Our web content writing services include researching long-tail keywords relevant to your industry/niche to increase your website performance and ranking on search engines. This ensures that the right audience finds your content, leading to higher engagement and conversion rates.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Cost-Effective Solutions',
      text: 'We understand that budget is always a sensitive matter for every business. Our affordable web content writing services offer different budget ranges, meaning you can get quality content that is best suited to your needs at the best price.',
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

  const text = <span>Modern consumers are savvier, more knowledgeable, and more demanding than ever. They
    want authenticity, reliability, easy discoverability, and mobile-friendly access. Here at Book
    Writing Experts, our website content writing services help fulfill those needs through detailed
    industry research and engaging content creation in such a way that it gives your target audience
    the personal touch they crave.


  </span>;

  const text2 = <span>Take action now and enhance your online presence through our top-rated web content writing
    services. Be it your new website content, blog posts, or informational articles, we have your
    back! Don't let average content hold you back—partner with the best web content writers and let
    your business boom!


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
        subtitle2="Today's audience simply wants content that speaks to them. They want information that is
relevant and incisive, tailored to their particular needs and interests. Our professional web
content writers conduct comprehensive research on your industry and target readers; then, they
craft the type of content your audience is already looking for. Let us take the reins, and we'll
carry you way ahead of the competition with content that matches your unique brand voice and
targets the right audience!"
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />


      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="(855) 500 0057"
          discuss="Free Consultation"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>

      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h3 className="color-lightgray   font25   t-center font-f mb-2">Market-Focused Solutions!</h3>

            <h2 className='font30 font-f fw500 colortextgrey t-center pb-2'>Attract, Engage, And Convert With Targeted Web Content
              Writing Services!
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
          title={WaitingForSomeone2}
          text={text2}
          number="(855) 500 0057"
          discuss="Get Free Consultation"
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
          title='Hire Web Content Writers to Grow Your Client Base'
          text="Our web content writers for hire are professionals who understand the minute happenings and
complexities of your industry. They stay updated on the latest trends and developments,
ensuring that your content is always current and impactful for the readers.
Our website content writing services include SEO-optimized web pages, detailed articles,
informative blog posts, and other industry-specific content. We deliver content that speaks
directly to your audience and drives results.
Call us now to discuss your web content needs, and let us show you real results for your
business!"
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices