import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import ourefficientauthor from '/public/images/whychoosebooks/ourefficientauthor.png'
import Dowecome from '../../components/Dowecome'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Stillonthefence from '../../components/Stillonthefence'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Ourprocess from '../../components/Ourprocess'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import together from '/public/images/together/together.png'
import Whatourclients from '../../components/Whatourclients'

const Authormarketingpromotionservices = () => {


  const bannertext = [
    {
      title: 'Capitalize On Your Visibility and Online Presence with Finest Author Marketing Promotion Services',
      pra: 'Reach a broader audience with author marketing promotion services. Our author book marketing services guarantee you an improved reputation and sales.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'authormarketingpromotionservices',



    }
  ]


  const whybookpublishingdata = [

    {
      title: 'What is author marketing?',
      text: 'Author marketing is the process of promoting and selling books or other written works by an author. This can include activities such as arranging book signings, conducting media interviews, or organizing promotional events.',
      col6: '6',
    },
    {
      title: 'What are some common author marketing strategies?',
      text: 'There are many different ways to market a book or author, but some common strategies include using social media, running ads in print or online publications, and partnering with bookstores or libraries for promotional events.',
      col6: '6',
    },
    {
      title: 'How can author marketing services help me sell more books?',
      text: 'Author marketing services can provide valuable assistance with tasks such as creating a media list, developing a publicity plan, or crafting press releases. These services can help to increase exposure for your book and make it more likely to sell.',
      col6: '6',
    },
    {
      title: 'What are some things I should avoid when marketing my book?',
      text: 'There are a few things to avoid when marketing a book, such as spamming potential customers or over-hyping your book. It’s also important to remember that not everyone will be interested in your book, so don’t take rejections personally. Instead, focus on finding the readers who will appreciate your work. book writing expert’s team of author marketing experts creates engaging ads for authors and helps expand their reach.',
      col6: '6',
    },

  ]





  const reasons = [

    {
      title: 'Industry Experts',
      text: 'We have a team of experienced professionals who know how to promote your book.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Range of Services',
      text: 'We have a variety of services to choose from, so you can find the perfect package for your needs.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Cost-Effective',
      text: 'We offer great value for money, with prices that are competitive and affordable.',
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Stellar Portfolio',
      text: 'We have a track record of success, with many clients achieving bestseller status.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Passion & Dedication',
      text: 'We are passionate about helping authors reach their goals and achieve success.',
      col: '6',
      classnum: 'number',
    },
    {
      title: '24/7 Customer Service',
      text: 'Our team is dedicated to providing excellent customer service and support every step of the way.',
      col: '6',
      classnum: 'number',
    },


  ]


  const geta = <span>Get A Customized Solution By <Link className='color-blue hover textdocationnone' href='/book-publishing-services'> Best Publishing Services </Link></span>


  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


  const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>



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

  const dateset = <span>Let’s <Link className='textdocationnone color-blue hover' href='/book-publishing-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>


  return (
    <>
      <Head>

     

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




      <Stopworrying
        title='Stop worrying about publishing books!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />





      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray   font48   t-center font-f mb-2'>Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover' href='/book-publishing-services'>Book Marketing</Link></p>

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
        title='Our Process'

        heading1='Manuscript Submission'
        para1='The writer contacts us for submission of their full-length manuscript, while submitting, we discuss our publishing rules and sign the contract.'
        num1='01'

        heading2='Peers Review'
        para2='Our experienced editors then review the manuscript and make the required changes with the writer’s permission.'
        num2='02'

        heading3='Formatting and Typesetting'
        para3='After the manuscript is reviewed by editors, our experts do the formatting and add images.'
        num3='03'

        heading4='Book Production'
        para4='We design the first copy of the book and take reviews from the writer. The rest of the books are produced on the same pattern while keeping all the important aspects into consideration.'
        num4='04'

        heading5='Marketing, Publishing, and Distribution'
        para5='Before publishing, we spread awareness about the book to create demand. And Voila! The book is published now!'
        num5='05'


      />



      {/* Aspiring */}
      <Aspiring
        title={dateset}
        text='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
        subtext='Trust the marketing professionals for it, do not risk it!'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        img={together}
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />








      {/* Makestories */}
      <Makestoriesnew
        title='A Quick Look At Our Spectacular Author Marketing Projects'
        para='With extensive knowledge and creativity, our marketing experts transform your career and set it up for success!'
      />


      {/* Whybookpublishing */}
      <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font48 fw900 color-blue t-center'>Combining The Elements Of Author Marketing And Public Relations</h2>
            <p className='font15 fw500 colortextgrey t-center pb-5'>
              In general, the purpose of the author is to entertain the readers with the story, inform them of reality, and persuade them of the truth. But with digital marketing on the rise, this purpose has an additional aspect—to market themselves for readership. The author's skill is reflected in the narrative and style they write in, but their readership is built when they are marketed well. With book writing expert's author promotion services, we create captivation ads for authors. Whether they are Facebook ads for authors or Amazon ads for authors, we deliver!
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
      </div>

      {/* Lululogos components */}
      <Lululogos />



      {/* Stillonthefence component */}

      <Container className='still'>


        <Row >
          <h2 className='font48 fw900 color-blue t-center font-f mb-5'>Why Our Author Marketing Services Are Ideal For You</h2>
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






      {/* Why Choose book writing expert? */}
      <Whychoosebook
        title="Our Efficient Author Marketing Process"
        text="The book writing expert's 5-step author marketing process is designed to help authors connect with their audience, build a platform, and sell more books."
        whychoose={ourefficientauthor}
      />


      {/* Aspiring */}
      <Aspiring
        title='Create the right buzz for every title you pen down with our Author Marketing Promotion Services!'
        text="From amateur author to a brilliant success story, our author marketing services transform your name into a recognized brand."
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
      />








    </>
  )
}

export default Authormarketingpromotionservices