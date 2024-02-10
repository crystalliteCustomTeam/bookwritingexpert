import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

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



  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>Weave Your Success Narrative Today with Our Effective <Link className='textdocationnone fw700 color-blue hover' href="/book-promotion-services/">Book Promotion Services</Link>!</h1>
        </>
      ),
      pra: 'Are you struggling to connect with your intended audience? Worry no more because your book is yearning for readers to immerse themselves in its pages, but the world has yet to discover its wonders!',
      discuss: 'Hire Our Book Promotion Services Today!',
      homebannernum: 'Call Us Now at (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpromotionservices',
    }
  ]



  const fine = [

    {
      img: mission1,
      title: 'Promoting Your Book Creatively',
      text: (<> At Book Writing Expert, we excel in book promotion, captivating your target audience and inspiring them to delve into your book. Count on our innovative marketing experts to make your book stand out!</>),
      class: 'fintop',
    },

    {
      img: mission2,
      title: 'Right People, Right Time',
      text: 'We are committed to championing the authors we represent, helping them establish a sustained media presence, and positioning them as the go-to experts in their respective fields. We aim to market you in the best possible way, ensuring your message reaches the right people at the right time.',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Tailored Services that Make a Difference',
      text: (<>At Book Writing Experts, exceptional <Link className='textdocationnone text-black hover' href="/book-promotion-services/">book promotion services</Link> by an award-winning team are offered to increase the potential of your book by using smart promotion and reliable reviews. No matter the size or genre of your campaign, we elevate its potential to new heights.</>),
      class: 'fintop',
    },
  ]


  const reasons = [

    {
      title: 'Proven Track Record: Delivering Results',
      text: (<> Our <Link className='textdocationnone text-white hover' href="/book-promotion-services/">book promotion company</Link> excels in executing successful book promotion strategies, consistently delivering tangible results to our clients. </>),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Expert Marketing Team: Tailored Strategies',
      text: (<> Our team of skilled professionals at <strong>Book Writing Experts</strong> specializes in <Link className='textdocationnone text-white hover' href="/book-promotion-services/">book promotion</Link>. We customize strategies that cater to the unique audience of each book and ensure effective engagement with your target readers.</>),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Cost-Effective Solutions: Accessible Promotion',
      text: (<> We believe in making <Link className='textdocationnone text-white hover' href="/book-promotion-services/">book promotion</Link> accessible to authors of all budgets. Our affordable book marketing packages encompass a wide range of services, including social media platforms, blogging, guest posting, and email marketing. </>),
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Extensive Connections: Reaching the Right Audience',
      text: 'Due to our extensive network of contacts, we have a proven track record of assisting authors from diverse genres and backgrounds in achieving their publishing goals and reaching their targeted niche.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Comprehensive Understanding: Navigating Complexity',
      text: (<> We possess a comprehensive understanding of the <Link className='textdocationnone text-white hover' href="/book-promotion-services/">book promotion</Link> process, equipped with the knowledge and expertise to generate desired results. Trust in our ability to precisely navigate the complexities and intricacies of book promotion. </>),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Results-Focused Methodology: Your Success Matters',
      text: (<> Our unwavering dedication lies in providing top-notch online book promotion services, driven by the desire to achieve the best outcomes for our clients. We deliver the results your book deserves.</>),
      col: '6',
      classnum: 'number',
    },


  ]





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
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />


      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title='Our Book Editing Projects'
          para='Let Our Book Editing Team Help You.'
        />
      </div>


      <Stopworrying
        title={`Don't wait any longer for your book to be discovered!`}
        subtitle={<> Take Control Of Your <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>Book Promotions</Link> And Let The Experts Work Their Magic! </>}
        btn1='Need Guidance?'
        btn2='Our Book Promotion Expert is Just One Click Away!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray font25 t-center font-f mb-2'>Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Attract A Thriving Community Of Readers — Let Our Online <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>Book Promotion Services</Link> Lead The Way!</p>
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
        title={<> Discover The Mastery Of <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>Book Promotion Services!</Link> </>}
        text="Our dedicated team of marketing experts leaves no stone unturned in promoting your book to the widest possible audience. Here's an overview of our proven promotion strategy:"

        heading1='Evaluation and Advancement:'
        para1={<> Give your book the spotlight it deserves. Take advantage of our <Link className='textdocationnone color-lightgray hover' href='/book-promotion-services/'>author promotion services</Link> and unlock opportunities to expand your readership. </>}
        num1='01'

        heading2='Inspection and Assessment:'
        para2='Leverage the power of an effective sales strategy. Establish and handle price promotions for your books without a hitch, optimizing their attractiveness to readers.'
        num2='02'

        heading3='Coherence Verified!'
        para3={<> We ensure your book gets featured across thousands of our esteemed store partners. From <Link className='textdocationnone color-lightgray hover' href='/book-promotion-services/'>book promotion</Link> websites to other publications, we'll showcase your book to captivated audiences. </>}
        num3='03'

        heading4='Delivery!'
        para4={<> We've partnered with leading <Link className='textdocationnone color-lightgray hover' href='/book-promotion-services/'>book publishers</Link> to streamline and enhance your promotion efforts for independently published books. </>}
        num4='04'

        heading5='Continued Execution!'
        para5={<> Our <Link className='textdocationnone color-lightgray hover' href='/book-promotion-services/'>book promotion services</Link> go beyond just publication and distribution assistance. We are here to help you connect with your target audience and find the perfect platforms to promote your Books. </>}
        num5='05'
      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={<> Seeking an Expert for Your <Link className='textdocationnone color-blue fw700 hover' href='/book-promotion-services/'>Book Promotions</Link>? </>}
          text={`It's time to bring in the expertise of book promotion professionals and elevate your book's visibility. Your story deserves to be heard by everyone, but it's crucial to avoid questionable agencies that could potentially harm your book's reputation.`}
          subtext='Don’t leave it to luck! Craft your triumph tale today.'
          btn2='Chat With Our Expert Now!'
        />
      </div>



      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              book writing expert is a creative studio that offers book promotion services to help authors and business personas get their work noticed by potential readers. We offer various services to suit your needs, including book trailer creation, social media marketing, and more. We're here to help you get your work out there and seen by as many people as possible. Here are a few FAQs that our professional book marketers curated to add information to your knowledge bag.
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







      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Stillonthefence component */}
      <section className='still'>
        <Container>
          <Row >
            <Col lg={10} className='mx-auto'>
              <h2 className='font50 fw700 color-blue t-center font-f mb-5'>Not Yet Persuaded? Place Your Trust in Our Offerings!</h2>
            </Col>
          </Row>

          {isSliderActive ?
            <Slider {...bookrecordingprojects} className='newdotflod text-center'>

              {reasons.map((item, i) =>
                <Stillonthefence key={i}
                  title={item.title}
                  text={item.text}
                  text2={item.text2}
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
                  text2={item.text2}
                  col6={item.col}
                  classnumber={item.classnum}
                />
              )}

            </Row>
          }
        </Container>
      </section>


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title={<> Transforming Your Book into a Literary Gem: Join the Ranks of Literature With The Best <Link className='textdocationnone color-blue fw700 hover' href='/book-promotion-services/'>Book Promotion Services</Link>! </>}
          text={<> Ready to witness your work soar to new heights? Look no further than the <strong>Book Writing Experts</strong>. Our extensive industry experience gives us the knowledge and expertise to make your book stand out and garner unparalleled exposure. Take the leap and call us today to propel your book to the next level! </>}
          number="Call us at (855) 500 0057"
        />
      </div>

    </>
  )
}

export default Bookpublishingservices