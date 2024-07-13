import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/businessplanwriting/ss.png'
import mission2 from '/public/images/businessplanwriting/fdf.png'
import mission3 from '/public/images/businessplanwriting/hg.png'
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
import Selfpublishing from '../../components/Selfpublishing'
import Lululogos from '../../components/Lululogos'
import Major from '../../components/Major'
import Cta from '../../components/Cta'
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


  const reasons = [

    {
      title: 'Share Your Tale Via Professional Ghostwriters',
      text: 'Team up with the best editors, authors, and publishing strategists in the business. Your chances of success are greatest with our team-based approach. Make your goal of having a book published a reality by utilizing the skills of one of our qualified ghostwriters.',
      classnum: 'number1',

    },
    {
      title: 'Our Ghostwriters Adopt A Personable Style',
      text: 'At Book Writing Experts, we provide a personalized approach since we recognize that each project is unique. Consider using our ghostwriting services if you want to write a novel, a nonfiction book, a children`s book, an autobiography, a history book, or a business book.',
      classnum: 'number1',

    },
    {
      title: 'Explicit And Precise Approach',
      text: 'Enjoy the consistency and effectiveness of a process that is professionally managed for ghostwriting services.',
      classnum: 'number1',

    },

    {
      title: 'The Best Team of Ghostwriters',
      text: 'We acknowledge that not everyone can write at the same level as their thoughts and that some people find it difficult to put their ideas into words. And hence, we`ve assembled a great team of experienced ghostwriters who can provide all of this and more.',
      classnum: 'number1',

    },
    {
      title: 'Top-5 Publishers',
      text: 'We collaborate with the top five publishers and publishing houses in the industry. We strive the hardest to offer you well-thought-out contracts with the best in-town publishers.',
      classnum: 'number1',

    },
    {
      title: 'Both Online And Offline Formats',
      text: 'We thoroughly guide our customers through the online and offline publication processes. Our hybrid technique is our integrated publishing solution, from well-designed paperback and hardback to well-formatted eBook.',
      classnum: 'number1',

    },


  ]

  const newSpan = <span className='font50 fw700 color-white font-f hero-span'>Bring Your Ideas to Life With Our Expert <Link className='textdocationnone color-white hover' href="/ghostwriting-services"> Ghostwriting Services! </Link> </span>;




  const bannertext = [
    {
      title: newSpan,
      pra: 'Let our experts fire the imagination of your readers with their killer writing techniques. Your story needs to be heard, and Book Writing Experts make sure your story keep the readers hooked onto it until the end.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ghostwriting',
    }
  ]

  const geta = <span>Our <Link className='color-blue textdocationnone hover fw700' href='/ghostwriting-services'> Ghostwriting </Link>Team Has A Knack For Telling Stories</span>

  const posdata = <span>Get The <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Top Ghostwriting Services</Link> From The Writers Who Best Understands The Readers?</span>


  const fine = [

    {
      img: mission1,
      title: 'Well versed writers',
      text: 'To provide high-quality work, we have a team of native speakers who have years of content writing experience.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Refund Policy',
      text: 'We offer a refund if the client is not satisfied with our overall work. After all, client satisfaction comes first!',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Customized Offers',
      text: 'Different clients have different needs. We take care of their requirements with customized packages',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>A Complete Solution To Your <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Ghost Writing </Link> Essentials Is Here! </span>









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


      {/* partners components */}






      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='The Ghost Writers at Book Writing Experts deliver compelling stories that persuade their audience to read more. We have a scattered team of experts that provide excellent ghostwriting services for all genres, fiction to nonfiction, from mystery to horror, history to humor, magic to romance, you name it, and we will get it written for you. We understand your requirements, draft the manuscript, utilize the best resources, make edits, and deliver your mere idea as a Powerful Book.'

        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Ghostwriting Services Projects'
          para='Become a renowned author with the help of our ghostwriters!'
        />
      </div>
      <Stopworrying
        title='Transform Your Ideas Into Words That Matters!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Book Marketing</Link></p>

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


      <div className='datacloudco'>
        <Ourprocess
          title='Our Ghostwriting Service Process'

          heading1='Studying, Researching, and Drafting'
          para1='Our Ghost Writing team leaves no stones unturned when they start the research. Upon that, we draft an outline as per your idea, get it approved, and start working accordingly.'
          num1='01'

          heading2='The Initial Writing Begins'
          para2='As per the outline, our expert ghostwriters start writing the initial content that reflects your ideology behind book writing.'
          num2='02'

          heading3='Critics, Edits, and Proofreading'
          para3='We make the Book writing content firm through critical reviews, which leads to required edits by the professionals. After making changes, our proofreaders double-check the content and leave no lapse behind.'
          num3='03'

          heading4='Formatting And Designing Process'
          para4='In this step, we determine what looks best where. The Formatting and Designing team critically looks into the finalized content and presents it with the best graphical details.'
          num4='04'

          heading5='Market And Promote The Book'
          para5='With the completion of your book, we design strategies. And take complete responsibility to market, distribute, and promote your work through effective channels.'
          num5='05'


        />
      </div>

      {/* Selfpublishing */}

      <Selfpublishing
        title='A Complete Solution To Your Ghost Writing Essentials Is Here!'
        text='Book Writing Experts has got you covered with the Best-Ghostwriting services. You are just one click away!'

        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={newimagetwoo}
        whychooseclass="marketyourbook"
      />
      {/* Lululogos components */}




      {/* Talk To Our Whatourclients! */}
      <Whatourclients />




      <Lululogos />




      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='When It Comes Down To It, You Need The Whole Nine Yards To Nail It!'
          text="Call us or send us an email, and our professionals will walk you through the full procedure, requirements, and packages for ghostwriting services for your book!"
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>



    </>
  )
}

export default Bookpublishingservices
