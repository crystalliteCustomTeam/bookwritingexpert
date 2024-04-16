import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import bookeditingprocess from '/public/images/whychoosebooks/bookeditingprocess.png'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Audiobookrecordingprojects from '../../components/Audiobookrecordingprojects'
import Stillonthefence from '../../components/Stillonthefence'


const Audiobookrecordingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>    <Link className='fw700 textdocationnone color-blue hover' href="/book-formatting-services">Audiobook Recording Services  </Link> to Add a Touch of Captivity to Your Manuscripts’ Words!! </span>   </h1>;


  const bannertext = [
    {
      title: newSpan,
      pra: 'Audiobooks are an investment that pays off in the longer run. Audiobook recording services help you get your book on audio, making it easier for people to enjoy while they’re on the go.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'audiobookrecordingservices',



    }
  ]



  const whybookpublishingdata = [

    {
      title: 'What is the best audiobook service?',
      text: 'As an author, you want your audiobook to be perfect. You want every word to be clear, and you want the overall performance to be engaging. This is why so many authors choose book writing expert’s audiobook recording service. We are the best in the industry for a reason. Our team of professional voice actors has years of experience performing audiobooks. They know how to bring a book to life, and they know how to make sure every word is clear. Plus, they’re just plain fun to listen to! ',
      col6: '6',
    },
    {
      title: 'What are the benefits of audiobook recording services?',
      text: 'Audiobook recording services can provide a range of benefits for businesses and individuals. For businesses, audiobooks can be used as a marketing tool to promote products or services. For individuals, audiobooks can provide a convenient way to learn new skills or improve existing ones. They can also be a great way to stay entertained and engaged while driving, working out, or doing other activities.',
      col6: '6',
    },
    {
      title: 'What is the cheapest audiobook service?',
      text: 'book writing expert offers affordable audiobook recording services that are perfect for any author. Our packages are designed to fit any budget, and we offer a variety of services that will make your audiobook recording process easy and hassle-free. We understand that not every author has the time or resources to record their own audiobook. That’s why we offer professional recording services that will make your audiobook sound great. We also offer editing and mastering services to ensure that your audiobook is ready for distribution.',
      col6: '6',
    },
    {
      title: 'What are audiobook recording rates?',
      text: 'Audiobook recording rates can vary depending on the length of the audiobook, the quality of the recording, and the number of people who are involved in the recording process. For a typical audiobook that is around 8 hours long, the recording rate might be around $200-$400. However, for an audiobook that is longer than 10 hours, the rate may increase to $500 or more.',
      col6: '6',
    },

  ]





  const reasons = [

    {
      title: 'Professional & High-Quality',
      text: 'Our audiobook recording services are professional and of the highest quality. We use state-of-the-art equipment and have a team of experienced professionals who are dedicated to providing you with the best possible service.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'One-Stop Solution',
      text: 'We offer a wide range of services, so we can meet your specific needs and requirements. Whether you need a simple recording or complex editing and post-production work, we can do it all.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Fast Delivery',
      text: 'We have a fast turnaround time, so you can get your audiobook recorded and ready for sale quickly.',
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Affordable',
      text: 'We offer competitive rates, so you can get high-quality recordings without breaking the bank.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Cooperative',
      text: 'Our team is friendly and helpful and will work with you to ensure that you are happy with the final product.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Trusted By Many',
      text: 'We are a reliable and trusted company and have years of experience in the audiobook industry. You can be sure that your project will be in good hands when you choose us.',
      col: '6',
      classnum: 'number',
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


      <Audiobookrecordingprojects />


      {/* Whybookpublishing */}
      <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font48 fw900 color-blue t-center'>Competent And Impeccable Audiobook Production Service For Your Success</h2>
            <p className='font15 fw500 colortextgrey t-center pb-5'>
              Audiobooks are becoming more and more popular as time goes on. You can listen to an audiobook while you're working out, cleaning the house, or driving. They're also perfect for people who like to read but don't have a lot of time. book writing expert offers audiobook recording services for just that reason. Here is where your books are brought to life!
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
          <h2 className='font48 fw900 color-blue t-center font-f mb-5'>Why Our World-Class Audiobook Recording Services Are Ideal For You</h2>
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
        title="Storytelling Made Easy With Our Audio Book Recording Services"
        text="If you're a book writer, then audiobook production must be on your radar. Even if you're not yet a published author, it's worth learning about the process of turning your words into an audio experience."
        whychoose={bookeditingprocess}
      />


      {/* Aspiring */}
      <Aspiring
        title='Dive into The New Era of Audiobooks with book writing expert’s High-Quality Audiobook Recording Services Today!'
        text="Get in touch with one of our industry experts for more information about our online blog writing services and pricing details by leaving your email or phone number below!"
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
      />








    </>
  )
}

export default Audiobookrecordingservices