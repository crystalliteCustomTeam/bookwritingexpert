import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import bookwritingprocess from '/public/images/whychoosebooks/bookwritingprocess.png'
import Dowecome from '../../components/Dowecome'
import bookwritingcanbe from '/public/images/bookwritingcanbe/bookwritingcanbe.png'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Stillonthefence from '../../components/Stillonthefence'
import Finetoothedbook from '../../components/Finetoothedbook'

const Bookwritingservices = () => {


  const bannertext = [
    {
      title: 'Turn Your Dream Of Becoming A Published Writer With Our Book Writing Services!',
      pra: 'Dream to become a published book writer? Then what are you waiting for? Avail our professional book writing services and manifest your dreams into reality. Talk to our book writing consultant today, and get it all started.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookwritingservices',
    }
  ]

  const bookwritersforhire = <span>Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable <Link className='textdocationnone' href="/book-writing-services"> book writers for hire </Link> today!</span>;

  const whybookpublishingdata = [

    {
      title: 'Why a book writer when I can write a book myself?',
      text: 'Of course, you can write your book on your own, and we are sure that you would do a stellar job with it. But are you sure that you wouldn’t appreciate an extra helping hand? A helping hand from a professional eBook writer who has been doing this for longer than you had the idea of writing your own book. Our book writing services are a collaborative process between the client and our team where we merely help our client write the book that would sell well and is up to the industry’s standards. So I ask you again, won’t a professional know how to do this better?',
      col6: '6',
    },
    {
      title: 'How strict are you with your confidentiality?',
      text: 'We are very strict and thorough when it comes to protecting the identity of our clients and book writers. As a bookwriting company, we make our writers sign contract and NDA where they aren’t allowed to take any material out of the office premises or tell anyone anything about the kind of project they are working on to protect our client’s identity. So many years in book writing services, and we have never had a scandal when it comes to protecting the anonymity of our client. As professional bookwriting experts, we maintain a very ethical decorum and play by the rules of the literary world.',
      col6: '6',
    },
    {
      title: 'Such services, are they very expensive?',
      text: 'It doesn’t have to be! We have various packages, depending upon the nature of your project and what kind of package would suit it better. And don’t worry, we have a very flexible mode of payment that wouldn’t cost you an arm and a leg.',
      col6: '6',
    },
    {
      title: 'What genres do you cover?',
      text: 'All! We cover all genres from fiction to autobiographies, fantasy thrillers, to children’s literature. Our book writing services cover all genres and all types of work f literature. We have an arsenal of teams dedicated to numerous genres, and all of them are tremendous at their job.',
      col6: '6',
    },

  ]

  const reasons = [

    {
      title: 'World-Class bookwriting Team',
      text: 'Work with the industry’s top writers, editors, and publishing strategists. Our team approach gives you the best chance for success.',
      classnum: 'number1',

    },
    {
      title: 'Personalized Strategic Approach',
      text: 'Our process begins with 4extensive publishing strategy sessions to ensure we develop a plan to achieve your goals.',
      classnum: 'number1',

    },
    {
      title: 'Refined Process',
      text: 'Enjoy the efficiency and dependability of our professionally managed bookwriting process.',
      classnum: 'number1',

    },

    {
      title: 'Book Writing experts',
      text: 'Our team includes #1 New York Times- Book Writers and award-winning authors for almost every genre.',
      classnum: 'number1',

    },
    {
      title: 'Big-5 Editors',
      text: 'Your project will be managed and edited by a former acquisitions editor from a Big-5 publisher with numerous New York Times - Book Writing titles.',
      classnum: 'number1',

    },
    {
      title: 'Publishing Navigation',
      text: 'We guide you through every step of the book publishing process. We can place your book directly with traditional publishers or help you choose the ideal hybrid publishing solution.',
      classnum: 'number1',

    },


  ]

  const finetext = <span>We offer our clients a customized book writing process that starts with clear communication before initiating the project. Our professional book writing experts inquire and probe to clarify the requirements, so there is no hurdle. Every stage of the process is customizable according to your preferences. We promise you we have the best <Link className='textdocationnone' href='/book-writing-services'>ebook writers for hire </Link> ! </span>


  const fine = [

    {
      title: 'Customized Book Writing Packages',
      text: finetext,
      class: 'fintop',
      btn: 'LET`S DISCUSS'

    },

    {
      title: 'All-in-One Book Writing Approach',
      text: 'We provide a range of services to authors who need book writing services. These include the initial idea draft up to the final proofreading. Before publishing it, we ensure that each work holds its essence according to the idea and does not deviate.',
      class: 'fintop',
      btn: 'LET`S DISCUSS'

    },

    {
      title: 'Specialist Services',
      text: 'We collaborate with the industry’s best bookwriting experts and eBook Writers to give you a piece a that stands out among all the rest. Our value-added services allow us to design your cover and market your publication to reach maximum readers. We won’t abandon you, and as professional book writing services we ensure that our teams of book writer help you reach that bestseller status!',
      class: 'fintop',
      btn: 'LET`S DISCUSS'

    },
  ]

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
      {/* Makestories */}
      <Makestoriesnew
        title='Our Book Writing Projects'
        para='Let Our Book Writing Team Help You.'
      />

      {/* Whybookpublishing */}
      <div className={styles.whybookpublishing}>
        <Container>
          <Row>
            <h2 className='font48 fw900 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
            <p className='font15  textcolor t-center pb-5'>
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
      </div>

      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font48 fw900 color-white t-center font-f mb-5'>Why Choose Our Book Writing Services?</h2>
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

      {/* Dowecome */}
      <Dowecome
        title='Book Writing Can Be A Nightmare If You Are Not As Fluent With Your Words As You Are With Your Thoughts'
        text="When you think about writing a book, know that it doesn't have to be complicated. As absurd as it may sound, thoughts or ideas may already exist within your head as seed or germinating premises of stories that still need development before they can blossom into anything concrete and comprehensive for readers around the world. Luckily, you have our professional book writers who can help turn those thoughts from just an idea into something worth sharing with friends, family members & strangers alike. Let us help you get rid of writer's block and take that burden off your shoulders."
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        Dowecome="publishmybook"
        image={bookwritingcanbe}
      />

      {/* Lululogos components */}

      <div className='mt-5'>
        <Lululogos />
      </div>
      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='font48 fw900 color-blue  t-center font-f mb-2'>Fine-toothed book writing to give your readers a truly immersive experience with the help of our team of professional eBook writers!</h2>

            <p className='font15 fw500 colortextgrey t-center pb-2'>book writing expert is a portal to bring your thoughts, ideas, or dreams to paper for your readers.</p>
          </Row>

          <Row className='gy-5'>
            {fine.map((item, i) =>
              <Finetoothedbook key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                btn={item.btn}
              />
            )}
          </Row>
        </Container>
      </div>

      {/* Why Choose book writing expert? */}
      <Whychoosebook
        title="What Is Our Book Writing Process?"
        text="Our professional book writing services is a collaborative process between our client and our team that has the following steps:"
        whychoose={bookwritingprocess}
      />

      {/* Aspiring */}
      <Aspiring
        title='Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
        text={bookwritersforhire}
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
      />
    </>
  )
}

export default Bookwritingservices