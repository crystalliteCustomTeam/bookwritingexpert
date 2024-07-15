import React from 'react'
import Head from 'next/head'
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
// css 
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


  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>Strengthening Ideas and Enriching The Concepts With Our Proficient <Link className='textdocationnone fw700 color-blue hover' href="/ebook-writing-services/">Ebook Writing Services</Link>!</h1>
        </>
      ),
      pra: (
        <> Let us be the voice of your creativity and bring your novels to life with our expert <Link className='textdocationnone text-white hover' href="/ebook-writing-services/">ebook writers</Link>. We breathe life into your ideas, crafting exceptional narratives. </>
      ),
      discuss: "Hire Professional Ebook Writing Services!",
      homebannernum: 'Call Us at (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ebook',

    }
  ]


  const WaitingForSomeone = <span>Waiting For Someone To <Link className='color-black textdocationnone hover' href='/ebook-writing-services/'> Give Your Book An EBook Version?</Link></span>

  const fine = [

    {
      img: mission1,
      title: 'Delivery Commitments',
      text: (<> At <strong>Book Writing Experts</strong>, we prioritize our clients above all else! Our <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> guarantee timely delivery of your e-books, ensuring you receive them right on schedule. </>),
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Unparalleled Originality',
      text: (<> Our team of expert <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> are committed to crafting original and tailor-made content exclusively for you when you choose our ebook writing services. </>),
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Thoroughly Researched Customization:',
      text: (<> At <strong>Book Writing Experts</strong>, our team of professional <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> conducts comprehensive research on the subject matter, ensuring the delivery of personalized content tailored to your specific requirements. </>),
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>  Waiting For Someone To <br></br> <Link href='javascript:$zopim.livechat.window.show();' className='color-blue textdocationnone hover fw700'>Give Your Book An Book Version?</Link> </span>


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

  const text = <span>Get in touch with our professional <a class='textdocationnone textcolor hover' href="https://www.bookwritingexperts.com/book-writing-services">book writing</a>  specialists today. Our eBooks Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!
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
        Dowecome="publishmybook"
      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title={<> <span className=' color-blue'>Exhausted from Attempting to Compose an Ebook By Yourself?</span> </>}
        title2={<> <span className='fw700'>What Obstacle Are You Facing That's Preventing You From Utilizing Our Affordable <Link className='text-white textdocationnone hover' href='/ebook-writing-services/'>Ebook Writers</Link>? </span> </>}
        btn1='Get Your Free Proposal!'
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

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>Our Objective Is To Enhance The Quality Of Your Ebooks!</p>

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
          title={<> Revitalize Your Words With Our Expert <Link className='color-blue textdocationnone hover' href='/ebook-writing-services/'>Ebook Writing Services</Link>! </>}
          text="Trust us to guide you through every step, ensuring your legacy thrives in the power of words."
          subtext="So, ask yourself, what is restricting you to reach your goals?"
          number="Call Now At (855) 500 0057"
        />
      </div>
    </>
  )
}

export default EbookWritingservices