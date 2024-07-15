import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Makestoriesnew from '../../components/Makestoriesnew'
import Aspiring from '../../components/Aspiring'
import Dowecome from '../../components/Dowecome'
import Stillonthefence from '../../components/Stillonthefence'
import copy from '/public/images/selfpublishingservices/copy.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import Whatourclients from '../../components/Whatourclients'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Whybookpublishing.module.css'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Ourprocess from '../../components/Ourprocess'
import Selfpublishing from '../../components/Selfpublishing'

const Childrenbookpublicationservices = () => {

  const fine = [

    {
      img: mission1,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },


  ]


  const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover fw700' href='https://www.bookwritingexperts.com/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>


  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Providing Full Fledged</span> <Link className='textdocationnone color-blue hover' href="/children-book-publication-services"> Book Publishing Services  </Link>  <span className=''>To Our Struggling Authors</span> </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'Publish a book that children will enjoy. Realistic books that are representative of socially conscious children!',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',



    }
  ]

  const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue hover' href="javascript:$zopim.livechat.window.show();">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue hover' href="javascript:$zopim.livechat.window.show();">self publishing</Link> .</span>;

  const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing expert. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;





  const dateset = <span className='fw500'>Let’s <Link className='textdocationnone color-blue hover fw700' href='/children-book-publication-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>

  const reasons = [

    {
      title: 'Reviewing Books',
      text: 'Before giving you the final draught, our devoted teams carefully review each word and each illustration. While ensuring the rhythmic flow of the narrative, we ensure that the pictures are contextually appropriate.',
      classnum: 'number1',

    },
    {
      title: 'Book Structure',
      text: 'We provide the client with a first draught for additional evaluation after the text and illustrations have been reviewed for grammar and context.',
      classnum: 'number1',

    },
    {
      title: 'Publication Of A Book',
      text: 'In this last phase, we assist you with typesetting, page trimming, book length, and the book cover. Our illustration and design experts assist you in polishing the publishing draught.',
      classnum: 'number1',

    },




  ]

  const geta = <span>Get A Customized Solution By <Link className='color-blue hover textdocationnone fw700' href='/children-book-publication-services'> Best Publishing Services </Link></span>




  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/children-book-publication-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>






  return (
    <>
      <Head>

      


        {/* <link rel="icon" href="/favicon.svg" /> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Hire The Best Children Book Publication Services - Book Writing Experts</title>
        <meta name="description" content="By hiring Book Writing Experts, you can publish your childrens book with perfection. We offer children book publication services for kids with perfect illustrations." />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire The Best Children Book Publication Services - Book Writing Experts" />
        <meta property="og:description" content="By hiring Book Writing Experts, you can publish your children's book with perfection. We offer children book publication services for kids with perfect illustrations." />
        <meta property="og:url" content="https://www.bookwritingexperts.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.svg" />
      </Head>




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
        />
      )}


      {/* partners components */}






      {/* Dowecome */}
      <Dowecome
        title={geta}
        text={work}
        Dowecome="publishmybook"

      />


      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Children’s Book Publishing Projects'
          para='Let Our Children’s Book Publishing Team Help You'
        />
      </div>

      <Stopworrying
        title='Stop worrying about publishing books!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />


      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/children-book-publication-services'>  Book Marketing</Link></p>

          </Row>

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
        </Container>
      </div>

      <Ourprocess
        title='The Publication Process For Children s Books'
        text='Every story deserves to be heard. The fulfillment that a successful book can offer to our authors is what matters most to us.'

        heading1='Embracing the Concept '
        para1='The first and most important thing we need to know when publishing a children`s book is the publication strategy you have in mind. If not, our staff would love to be of help!'
        num1='01'

        heading2='Cover Design And Illustrations'
        para2='Cover art and inner page illustrations go a long way when it comes to publishing a colorful and impressive children’s book. Our designers can translate your ideas to bright and interesting artwork.'
        num2='02'

        heading3='Publishing Made Simple!'
        para3='Want to self-publish a children`s book but don`t know how? You can look over our publishing packages and select the one that best meets your needs. '
        num3='03'

        heading4='We Need Your Feedback!'
        para4='We`re interested in hearing whether or not you were satisfied with our work for you once your book has been released. Customers come first in our business; thus, we would greatly appreciate hearing from you!'
        num4='04'

        heading5='Completing The Project & Reassuring Further Assistance:'
        para5='With that,our bok writing comes to an end. In case you need further assistance with editng, publishing, and/or marketing, our team will further connect you to our publishing and marketing team.'
        num5='05'


      />







      {/* Aspiring */}
      {/* <div className='dataset'>
<Aspiring
 title= {dateset}
 text= 'It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
 subtext= 'Trust the marketing professionals for it, do not risk it!'
 number="(855) 500 0057"
 discuss="LET'S DISCUSS"
 img= {together}
/>
</div> */}


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          subtext='Trust the marketing professionals for it, do not risk it!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>




      {/* Talk To Our Whatourclients! */}
      <Whatourclients />












      {/* Selfpublishing */}
      <div className=''>
        <Selfpublishing
          title='What Type Of Books Do We Publish?'
          text={text}
          subtext={subtext}
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
          image={copy}
          whychooseclass="marketyourbook"
        />
      </div>








      {/* Lululogos components */}

      {/* <Lululogos/> */}



      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font50 fw700 color-white t-center font-f mb-3'>Creating Stories to Captivate Children’s Interest!</h2>

            <p className="font15  font-f t-center color-white  mb-5">Be aware that not many authors manage to negotiate an agreement with the publishers. But at our company, we assist you in making contact with prominent publications and working with them.
            </p>
          </Row>

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
        </Container>

      </div>





      {/* Why Choose book writing expert? */}
      {/* <Whychoosebook
   title="What Is Our Children Book Publication Process?"
  text="Our professional book writing services is a collaborative process between our client and our team that has the following steps:"
  whychoose= {whatisourchildren}
 /> */}





      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Your Accomplishment Cements Our Reputation!'
          text="Our professionals understand how much time and effort a single literary composition necessitates. We cherish the work done and admire the budding authors' enthusiasm for publishing. And we vow to assist you in completing a composition that you will be proud of!"
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>







    </>
  )
}

export default Childrenbookpublicationservices