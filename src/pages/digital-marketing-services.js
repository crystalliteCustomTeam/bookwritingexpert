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


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/digital-marketing-services"
    },
    "headline": "Digital Marketing Services",
    "description": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
    "author": {
      "@type": "Organization",
      "name": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
      "url": "https://www.bookwritingexperts.com/"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
      }
    },
    "datePublished": ""
  }
 






  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Top Tier Digital Marketing Services - Book Writing Experts</title>
        <meta name="description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Tier Digital Marketing Services - Book Writing Experts" />
        <meta property="og:description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <meta property="og:url" content="/digital-marketing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
        <meta property="og:image" content="/complogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="45 minutes" />
        <link rel="icon" href="/favicon.svg" />


        <meta name="DC.title" content="digital marketing services, digital marketing service, digital marketing company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      


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
        subtitle='One-Stop Solution For Ghostwriting, Promoting, And Branding Your Digital Riches.'
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