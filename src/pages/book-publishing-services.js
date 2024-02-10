import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
const homebannerlogos = await import("/public/images/bannerimages/logos.png");
const typeofbooks = await import("/public/images/selfpublishingservices/1.jpg");
const copy = await import("/public/images/selfpublishingservices/2.jpg");
const marketyourbook = await import("/public/images/selfpublishingservices/3.jpg");
const publishmybook = await import("/public/images/selfpublishingservices/4.jpg");
// components
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../../components/Banner'));
const Dowecome = dynamic(() => import('../../components/Dowecome'));
const Stopworrying = dynamic(() => import('../../components/Stopworrying'));
const Aspiring = dynamic(() => import('../../components/Aspiring'));
const Ourprocess = dynamic(() => import('../../components/Ourprocess'));
const Whatourclients = dynamic(() => import('../../components/Whatourclients'));
const Makestoriesnew = dynamic(() => import('../../components/Makestoriesnew'));
const Whychoosebookwritingcube = dynamic(() => import('../../components/Whychoosebookwritingcube'));
const Selfpublishing = dynamic(() => import('../../components/Selfpublishing'));
const Lululogos = dynamic(() => import('../../components/Lululogos'));
const Customersatisfaction = dynamic(() => import('../../components/Customersatisfaction'));
const Bookpublishingservicesweoffer = dynamic(() => import('../../components/Bookpublishingservicesweoffer'));
const Major = dynamic(() => import('../../components/Major'));
const Cta = dynamic(() => import('../../components/Cta'));

// css
import styles from '@/styles/Whybookpublishing.module.css'



const Bookpublishingservices = () => {

  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>It’s Time to Convert Your Literary Dreams To Reality With Our Diverse Range of <Link className='textdocationnone fw700 color-blue hover' href="/book-publishing-services/">Book Publishing Services</Link>.</h1>
        </>
      ),
      pra: (
        <> Are you facing complications regarding <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing</Link>? Break free from the challenges of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing</Link> with the help of Book Writing Experts! </>
      ),
      discuss: (<> Hire The Best Book Publishers Today! </>),
      homebannernum: 'Call Us at (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',



    }
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
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title={<> Dwell into Our Recent <Link className='textdocationnone color-blue hover' href="/book-publishing-services/">Book Publishing</Link> Projects! </>}
          para={<> Allow our professional <Link className='textdocationnone textcolor hover' href="/book-publishing-services/">book publishers</Link> to assist you in your literary endeavors. </>}
        />
      </div>

      {/* Bookpublishingservicesweoffer */}
      <Bookpublishingservicesweoffer />

      <Ourprocess
        title={<> How Does Our Incredibly Crafted <Link className='textdocationnone color-blue hover' href="/book-publishing-services/">Book Publishing</Link> Journey Unfold? </>}
        text='Join us on a streamlined journey from manuscript to masterpiece. Our process includes refining narratives, crafting compelling visuals, meticulous book preparation, and handling distribution, marketing, and copyright tasks. Discover the elegance of our efficient book publishing process, designed to make your literary vision a global reality.'
        heading1='Manuscript Assessment'
        para1='Your journey begins with us diving into your raw manuscript. Our dedicated team diligently assesses your work, identifying its strengths and areas for improvement.'
        num1='01'

        heading2='Editing and Refinement'
        para2={<> Your words are then entrusted to our skilled <Link className='textdocationnone color-lightgray hover' href="/book-editing-services/">book editors</Link>, who meticulously refine your narrative, ensuring optimal clarity, coherence, and compelling storytelling. </>}
        num2='02'

        heading3='Design and Layout'
        para3='Once the editing phase is complete, our talented designers step in. They artistically bring your book to life, creating an engaging layout and an impactful cover that echoes your unique voice.'
        num3='03'

        heading4='Book Preparation'
        para4='We then prepare your book for publishing. Every detail is scrutinized to align with industry standards, maintaining the highest level of quality.'
        num4='04'

        heading5='Distribution, Marketing, and Copyright'
        para5='Here comes the moment you wait for the most! Your masterpiece is finally ready to reach the masses. We navigate the complexities of distribution, craft strategic marketing plans, and register the copyright, ensuring your book makes its mark in the literary world.'
        num5='05'
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={<> Hire Our <Link className='textdocationnone fw700 color-blue hover' href='/book-publishing-services/'>Book Publishing Company</Link> to Bring Your Literary Masterpiece to Life! </>}
          subtitle3='Are you looking for a publishing partner? Well, Book Writing Experts will inspire you in your literary adventures. We are here to help you transform your literary dreams into reality. At our publishing company, we believe in nurturing and supporting talented authors like you, and we are dedicated to bringing your masterpiece to the bookshelves.'
          subtitle4='So, what’s stopping you from reaching your goals to become an aspiring novelist? '
          btn1='Get a free Proposal'
          btn2='Looking For a Publishing Partner? Hire Us Today!'
        />
      </div>



      <section className={styles.publicservices}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>
                Why Choose Our <Link className='textdocationnone color-blue hover' href='/book-publishing-services/'>Amazon Publishing Services</Link>?
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Selfpublishing */}
      <Selfpublishing
        title='Prime-Quality and Expertise'
        text={<> Our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision. </>}
        number="(855) 500 0057"
        discuss="Consult With Our Expert Team Now!"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Enhanced Visibility and Reach'
        text={<> Choosing our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> opens up new avenues for your book to reach a wider audience. With Amazon's vast customer base and powerful marketing tools, we can help boost the visibility of your book, increase its discoverability, and maximize its potential for success. Our strategies are designed to enhance your book's presence and attract more readers. </>}
        number="(855) 500 0057"
        discuss="Let’s Discuss Your Book Publishing Project"
        image={typeofbooks}
        whychooseclass="marketyourbook"
      />

      {/* Selfpublishing */}
      <Selfpublishing
        title='Streamlined Publishing Process'
        text={<> We at Book Writing Experts understand the importance of a smooth and efficient <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>book publishing</Link> process. With our services, you can expect a streamlined workflow that simplifies the publishing journey. From manuscript formatting and editing to cover design and eBook conversion, we handle every aspect professionally, allowing you to focus on your writing while we take care of the technicalities. </>}
        number="(855) 500 0057"
        discuss="Chat Now!"
        image={copy}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Comprehensive Marketing Support'
        text={<> Our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> go beyond just publishing your book. We offer comprehensive marketing support to help you build a strong author platform and promote your work effectively. Our marketing strategies include targeted advertising, social media campaigns, email marketing, and more, tailored to your specific audience and genre. We strive to maximize your book's exposure and generate buzz in the competitive publishing landscape. </>}
        number="(855) 500 0057"
        discuss="Click On This Chat Button and Get Our Assistance"
        image={marketyourbook}
        whychooseclass="marketyourbook"
      />


      {/* Customersatisfaction */}
      <Customersatisfaction />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>


      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title={<> Choose Our <Link className='textdocationnone color-blue fw700 hover' href='/book-publishing-services/'>Book Publishing Company</Link> and Expand Your Reach in the Book Realm! </>}
          text={<> Ready to turn the page on your publishing dreams? Let us write your success story together! Choose our <Link className='textdocationnone color-lightgray hover' href='/book-publishing-services/'>book publishing company</Link> and let your words come to life. Start your literary journey now! </>}
          number="Call at (855) 500 0057"
        />

      </div>


    </>
  )
}

export default Bookpublishingservices