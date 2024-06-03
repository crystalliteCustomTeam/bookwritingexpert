import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Container, Row } from 'react-bootstrap'

// images
const homebannerlogos = await import("/public/images/bannerimages/logos.png");
const mission1 = await import("/public/images/mission/1.png");
const mission2 = await import("/public/images/mission/2.png");
const mission3 = await import("/public/images/mission/3.png");
const publishmybook = await import("/public/images/selfpublishingservices/publishmybook.png");

// components
const Banner = dynamic(() => import('../../components/Banner'));
const Dowecome = dynamic(() => import('../../components/Dowecome'));
const Stopworrying = dynamic(() => import('../../components/Stopworrying'));
const Finetoothedbook = dynamic(() => import('../../components/Finetoothedbook'));
const Aspiring = dynamic(() => import('../../components/Aspiring'));
const Ourprocess = dynamic(() => import('../../components/Ourprocess'));
const Whatourclients = dynamic(() => import('../../components/Whatourclients'));
const Makestoriesnew = dynamic(() => import('../../components/Makestoriesnew'));
const Stillonthefence = dynamic(() => import('../../components/Stillonthefence'));
const Lululogos = dynamic(() => import('../../components/Lululogos'));
const Selfpublishing = dynamic(() => import('../../components/Selfpublishing'));
const Major = dynamic(() => import('../../components/Major'));
const Cta = dynamic(() => import('../../components/Cta'));
// css
import styles from '@/styles/Whybookpublishing.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'




const Bookpublishingservices = () => {


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




  const newSpan = <h1 className='font50  color-white font-f hero-span'> Turn Your Ideas Into Bestsellers With Our Professional <span class='textdocationnone color-blue fw700'>Book Writing Services! </span> </h1>;

  const discuss = <span>Let’s Write Your Book!</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Our professional book writers can help you become the next Dan Brown or Stephen King with a specialty in captivating your readers with gripping narratives! So what are you waiting for? ',
      discuss: discuss,
      homebannernum: 'Call Now!',
      banlogo: homebannerlogos,
      banners: 'ebook',




    }
  ]


  const geta = <span>Get Connected To Your Readers With <span className='color-blue fw700 textdocationnone hover'> Book Writing Experts! <br></br> </span></span>

  const posdata = <span>We Take Pride In Providing The Best <span className='textdocationnone fw700 color-blue hover'> Book Writing Services</span>, Ensuring To Win Your Trust For The Years To Come.   </span>



  const fine = [

    {
      img: mission1,
      title: 'Delivery Commitments',
      text: 'Our clients are our utmost priority! We promise to deliver your Books right on time.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Originality',
      text: 'We have a team of expert Book writers who dedicatedly write original and customized content every time you take our services.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Well - Researched Personalization',
      text: 'The professional Book writers at Book Writing Experts conduct in-depth research on the topic and deliver personalized content as per your requirements.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'> Looking For a Reliable  <br/> <span className='color-blue textdocationnone hover fw700'>Book Writing Company? Hire Us Today!</span> </span>


  const datesettext = <span>  Our team of  <span className='color-blue textdocationnone hover'>experienced book writers</span> is ready to collaborate with you to create interesting stories that captivate your readers. We promise originality and quality and make sure that your journey from idea to publication is smooth and successful.</span>
    
  const reasons = [
    
    
    
    {
      title: 'Affordable Solutions',
      text: "We understand the importance of cost-effectiveness. Our services are designed to make <a href='https://www.bookwritingexperts.com/book-publishing-services' class='textdocationnone color-blue hover fw700'>  book publishing</a> affordable for authors, allowing you to manage your budget effectively",
      classnum: 'number1',

    },
    {
      title: 'Privacy Protection',
      text: 'Your privacy is our first priority. With our private publication services, we ensure that your work, ideas, and data remain secure throughout the publishing process.',
      classnum: 'number1',

    },
    {
      title: 'Thorough Research',
      text: 'Accuracy matters. Our team conducts in-depth research to verify the content of your book, ensuring that it is authentic, reliable, and well-supported.',
      classnum: 'number1',

    },

    {
      title: 'Expert Book Composition',
      text: 'Our team includes celebrated authors from various genres, including #1 New York Times bestselling writers, providing a wealth of experience in book creation.',
      classnum: 'number1',

    },
    {
      title: 'Top-Tier Editing',
      text: 'Your manuscript will receive the highest level of attention from a professional acquisitions editor with a track record of success at a prestigious Big-5 publishing house',
      classnum: 'number1',

    },
    {
      title: 'Publishing Process',
      text: "Let us guide you through the entire book publication process. Whether you prefer traditional publishers or seek the best hybrid publishing solution, we're here to assist every step of the way.",
      classnum: 'number1',
    },


  ]

  const text = <span>Do you have a story waiting to be told and you are looking for book writer? Speak to us. Our team of experienced writers are dedicated to helping you create compelling narratives because those who tell the stories rule the world.</span>;


 


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
        text='Writing an Book is no walk in the park, and you do not have to go through this trouble. Book Writing Experts have a dedicated team of Book Writers for you, right at your disposal. Our specialists do not just transform your words into a story but also help your book rank among the top sellers. We take your ideas to the world and help you reach out to the right readers through the right platforms.'
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />


      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title='Our Book Writing Projects'
          para='Let Our Book Writing Team Help You'
        />
      </div>


      {/* Stopworrying */}
      <Stopworrying
        title='Are You Seeking For a Swift Solution to Reach a Mass Readership?'
        subtitle={posdata}
        btn1="Let's Write Your Book "
        btn2="Let's Write Your Book "
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <span className="color-lightgray   font25   t-center font-f mb-2">Our Approach</span>

            <h2 className='font50 font-f fw500 colortextgrey t-center pb-2'>We Aim To Add Value To Your <span className='textdocationnone color-blue hover fw700'> Books!</span></h2>

          </Row>
          {isSliderActive ?
            <Slider {...bookrecordingprojects} className='newdotflodwhite'>

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
        title='The World is Waiting for Your Story To Be Written'
        text='With a book writing company by Your Side, Your Story Gets a VIP Pass to Life! Let us seize the chance to guide you toward realizing your utmost writing capabilities, ensuring your best-selling book shines brightly among millions!'

        heading1='Talk to a Book Writing Consultant'
        para1='Everything depends on communication because we need your input to move forward. A detailed discussion on the topic or story is the key to a successful book.'
        num1='01'

        heading2='The Writing Phase Begins'
        para2='Our skilled bookwriters begin writing, keeping in mind your writing philosophy and ideas, in accordance with the framework.'
        num2='02'

        heading3='Q/A and Submission'
        para3='After completion of each chapter, the draft is sent to the QA for full screening. Once all mistakes are fixed, the draft is then shared to the client for review. If there’s a feedback of any sort, that gets incorporated and adjusted, before sharing it again with the client for final review.'
        num3='03'

        heading4='Cover Design'
        para4='Have you ever found yourself browsing on a book shelf? Do the most interesting covers catch your eye? They always do.  People always do judge the book by its cover. That’s the reason designing book covers is a tedious but the most important of all our jobs. The design team gets on board with the client to design a cover that best speaks for the book.'
        num4='04'

        heading5='Feedback and Provision of Other Services'
        para5='Our book writing comes to a stop at this point. Our team will further connect you to our publishing and marketing teams if you require more help with editing, publishing, and/or marketing.'
        num5='05'


      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={datesettext}
          btn1='Get a free Proposal'
          btn2='Let’s Write Your Book '
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
          title="Time to Turn Your Ideas Into Page-Turners, Let's Make it Happen!"
          text={text}
          number="Call Us Now"
          discuss="Let’s Write "
          image={publishmybook}
          whychooseclass="marketyourbook"
        />
      </div>



      {/* Lululogos components */}
      <Lululogos />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font50 fw700 color-white t-center font-f mb-5'>Why Are We A Leading Book Writing Company?</h2>
          </Row>

          {isSliderActive ?
            <Slider {...bookrecordingprojects} className='newdotflod'>

              {reasons.map((item, i) =>
                <Stillonthefence key={i}
                  title={item.title}
                  text={item.text}
                  col6={item.col}
                  classnumber={item.classnum}
                />
              )}

            </Slider>
            :
            <Row className='gy-5'>
              {reasons.map((item, i) =>
                <Stillonthefence key={i}
                  title={item.title}
                  text={item.text}
                  col6={item.col}
                  classnumber={item.classnum}
                />
              )}
            </Row>
          }
        </Container>

      </div>


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Become a Bestseller with Our Professional Book Writing Services'
          text="Are you ready for your thoughts to be published? Our talented writers can make your idea a reality. We provide professional book writers in any genre or style, customized to meet your unique requirements."
          number="Call Us at (855) 500 0057"
          discuss="Let’s Write Your Book "
        />
      </div>


    </>
  )
}

export default Bookpublishingservices