import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Link from 'next/link'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Dowecome from '../../components/Dowecome'
import youareonestepcloserto from '/public/images/youareonestepcloserto/down2.jpg'
import Whatourclients from '../../components/Whatourclients'
import Buildyourownidentity from '../../components/Buildyourownidentity'
import Companypull from '../../components/Companypull'
import Buildingyour from '../../components/Buildingyour'
import Bestinclass from '../../components/Bestinclass'
import Stopworrying from '../../components/Stopworrying'
import Major from '../../components/Major'
import Cta from '../../components/Cta'


const Digitalmarketingservices = () => {

  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>Data-Driven Digital <Link className='textdocationnone fw700 color-blue hover' href="/digital-marketing-services/">Book Marketing Services </Link><br /> to Enhance Your Visibility and Impact!</h1>
        </>
      ),
      pra: (
        <> Our expert-vetted marketers can increase your ROI by enhancing your visibility in the digital
          space. With our reputation as the best digital marketing company, we utilize in-depth data
          analysis to create targeted campaigns that have increased book sales by 150% and boosted

          online presence for authors by 200%. </>
      ),
      discuss: "LET'S DISCUSS",
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'digitalmarketingservices',

    }
  ]
  return (
    <>
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
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta
        title=" How We Deliver Exceptional <span class='color-blue fw700 hover textdocationnone' href='/book-publishing-services'>  Digital Marketing Services </span>"
        desc=" <span>As a leading digital marketing company, we bring a fresh perspective and expertise to create
          custom plans that are focused and effective. With project management tools, we monitor
          progress in real time and provide regular reports. Our flexible strategies emphasize effective
          communication, creativity, and achieving your core goals, driving your digital marketing success.</span>"
      />

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Digital Marketing Projects'
          para='Let Our Digital Marketing Team Help You'
        />
      </div>

      {/* Lululogos components */}

      <Lululogos />
      <Buildyourownidentity /> 

      {/* Aspiring */}
      <Aspiring
        title='Sales-Centric Digital Marketing Company That Drives
          Revenue Growth!'
        text={`Our <a class='textdocationnone color-lightgray hover' href="/digital-marketing-services/">digital marketing services</a> for books optimize your sales through targeted digital advertising
          campaigns. We focus on maximizing customer interest by capturing attention and increasing
          reach on search engines. With our expertise, your book can achieve a global impact. Strategies
          are developed to enhance visibility, engage potential readers, and drive revenue growth. Hire
          Book Writing Experts today for the best digital marketing services that deliver outstanding sales
          results`}
        number="(855) 500 0057"
        discuss="Chat With Us Today!"
      />

      <div className='dataset'>
        <Buildingyour />
      </div>

      <Lululogos />

      {/* Aspiring */}
      <div className='newdatecloud'>
        <Aspiring
          title={<> Why Choose Us As Your <Link className='textdocationnone color-blue hover' href="/digital-marketing-services/">Digital Book Marketing

            Company</Link>? </>}
          text={`When you hire book digital marketers from us, you gain access to the best services available.
            We are passionate about book marketing and optimizing your author websites, offering
            expertise in all areas. Our team dynamically employs tried and tested methods, resulting in
            numerous success stories our clients love! Outsourcing your marketing campaign to us, you
            benefit from comprehensive strategies, including social media and influencer marketing, digital
            advertising, SEO, and content marketing. We create engaging book trailers and conduct author
            interviews to captivate your audience, generate excitement, and create a deeper connection
            with readers. Choose us to get the best digital marketing services and see your book's visibility

            and sales grow significantly!` }
          number="Dial (855) 500 0057"
          img={youareonestepcloserto}

        />
      </div>
      <Companypull
        title={<> Expanding Your Story's Global Presence through Comprehensive <Link className='textdocationnone text-white hover' href="/digital-marketing-services/">Digital Marketing Services</Link>! </>}
        text={<> Contact Us Today to Illuminate Your Book's Path to Success. </>}
        number="Call At (855) 500 0057"
      />
      <Bestinclass />
      <Stopworrying
        title='Finding It Hard to Stand Out in the Digital Space?'
        subtitle='We Are Your One-Stop Solution for Professional Digital Marketing Services!'
        subtitle2='Join us and watch your online impact grow!'
        btn1='Get a free Proposal'
        btn2='Get Started Today! '
      />

      {/* Talk To Our Whatourclients! */}
      <Whatourclients />
    </>
  )
}

export default Digitalmarketingservices