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
          <h1 className='font50 fw300 text-white font-f hero-span'>Propel Your Book's Success With Customized <Link className='textdocationnone fw700 color-blue hover' href="/digital-marketing-services/">Digital Book Marketing Services</Link>, Designed To Enrich The Reader Experience.</h1>
        </>
      ),
      pra: (
        <> Supercharge Your Book Sales with Our Innovative <Link className='textdocationnone text-white hover' href="/digital-marketing-services/">Digital Book Marketing Services</Link>. Expand Your Reach, Build  Extraordinary Credibility, and Engage an Ever-Growing Audience. </>
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
      <Cta />

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
        title='Eye-Catching Book Cover Designs: Standing Out From The Crowd'
        text={<> Our exceptional <Link className='textdocationnone color-lightgray hover' href="/digital-marketing-services/">digital book marketing services</Link> help to design cover designs, page layouts, and book designs, that are the perfect choice for your business. Our highly skilled graphic designers have crafted numerous captivating book covers and page layouts. By hiring our skilled designers, we ensure that your book and cover are specifically customized to meet your business needs and requirements. </>}
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
          title={<> Relieve Your Marketing Burden With Our <Link className='textdocationnone color-blue hover' href="/digital-marketing-services/">Digital Book Marketing Agency</Link>! </>}
          text={<> Marketing, especially book marketing, can be a challenging task for many. However, for <strong>Book Writing Experts</strong>, it's a breeze. We understand the intricacies of advertising, from crafting compelling pitches to devising profitable social media campaigns and beyond. While these tasks may seem overwhelming to you, we have the expertise and experience to handle them with ease. Let us shoulder the marketing strain and pave the way for your success! </>}
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
        title='Conquer the Challenges of Book Selling!'
        subtitle='One-Stop Solution For bookwriting, Promoting, And Branding Your Digital Riches.'
        subtitle2='Trust your books to be crafted by our team of professional writers.'
        btn1='Get a free Proposal'
        btn2='Hire Our Digital Book Marketing Services Now! '
      />



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

    </>
  )
}

export default Digitalmarketingservices