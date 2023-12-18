import Head from 'next/head'
import Link from 'next/link'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import whychoose from '/public/images/whychoosebooks/ill.png'
// import components
import Banner from '../../components/Banner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Gotastory from '../../components/Gotastory'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Stoppublish from '../../components/Stoppublish'
import Customersatisfaction from '../../components/Customersatisfaction'
import Strugglingtogive from '../../components/Strugglingtogive'
import Illustrativebook from '../../components/Illustrativebook'
import Onestepsolutions from '../../components/Onestepsolutions'
import Script from 'next/script'
import Stunningillustrations from '../../components/Stunningillustrations'
import Serviceprovidersillutration from '../../components/Serviceprovidersillutration'
import banslider12 from '/public/images/illustrativebook/cartoon.svg'


function Illustrationbook() {



  const newSpan = <h1 className='font50 fw100 color-white font-f hero-span'> Turn Your Manuscript Into A Creative And <br /> Professional Looking Book With Our <br /> <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustration Services</Link>.</h1>;

  const posdata = <>Let Our <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustrators</Link> For Hire Handle All Your <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustration</Link> Needs!
  </>

  const dataspan = <h2 className='font50 color-white font-f hero-span'>  Hire Book Writing Experts: The Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustration Company</Link> Ready To Turn Your Book Into A Masterpiece  </h2>;



  const bannertext = [
    {
      title: newSpan,
      free: 'FREE AUTHOR CONSULTATION CALL',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'illustrationbook',
    }
  ]







  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/illustration"
    },
    "headline": "Book Illustration Services",
    "description": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
    "author": {
      "@type": "Organization",
      "name": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
      "url": "https://www.bookwritingexperts.com/"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
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
        <title>Best Book Illustration Services - Book Writing Experts</title>
        <meta name="description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Book Illustration Services - Book Writing Experts" />
        <meta property="og:description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />
        <meta property="og:url" content="https://www.bookwritingexperts.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.svg" />


        <meta name="DC.title" content="book illustration services, book illustration service, book illustration company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* <Schema /> */}

      </Head>


      {/* googletagmanager */}



      <main>
        {/* banner components */}

        {/* banner components */}

        {bannertext.map((item, i) =>
          <Banner key={i}
            title={item.title}
            subtext1={item.subtext1}
            subtext2={item.subtext2}
            subtext3={item.subtext3}
            free={item.free}
            homebannernum={item.homebannernum}
            bannershome={item.banners}
            processs={item.process}
          />
        )}


        {/* partners components */}
        <Partners />

        <Strugglingtogive
          titleills={
            <>
              <h2 className='color-blue font50 fw700 font-f mb-4'>Need Help Making Your Book <br className='d-none d-md-block' />Look Appealing?</h2>
            </>
          }
          title=""
          text="You may be a victim of the following nuisances"
          list1="Slow Productivity"
          list2="Lack of Resources"
          list3="Time Management Issues"
          list4="Financial Constraints"
          list5="Lack of Motivation"
          list6="Lack of Creativity"
          list7="Continuous Revisions"
          list8="Failing To Grab Reader Attention"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(855) 500 0057"
        />

        <Illustrativebook
          title={dataspan}
          para='Book Writing Experts has a team of book illustrators that can add colors to your book.
          '
          cartoonimg={banslider12}
          cartoon='cartoon'
        />

        <Stunningillustrations />






        <Stoppublish
          title='Our best book illustrators come together to create the most perfect book for you.
          '
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
          stopworrying='stopworrying'
        />

        {/* Why Choose book writing expert? */}
        <Whychoosebook
          title="Why Choose Book Writing Experts?"
          text="We understand how unique our clients' needs are when it comes to book illustrations. We are proud of the remarkably diverse viewpoints, life experiences, and expertise that our team of book illustrators can offer. In order to guarantee optimal effectiveness, we sincerely believe in and strive for an open and honest collaboration between you and us. Hire Book Writing Experts today!
          "
          whychoose={whychoose}
        />


        {/* Customersatisfaction */}
        <Customersatisfaction />






        <div className='datacloud'>
          <Onestepsolutions />
        </div>

        <Serviceprovidersillutration
          title={<>  <h2 className='font40 font-f color-white fw300'>
            Let The Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href="/illustration">Book Illustrators</Link> Turn Your Boring Book Into An Interesting One
          </h2></>}
          text={<> <p className="text-white font-f mb-4 font15">Hire Book Writing Experts today and make sure that your readers become glued to your books with our perfect book illustration services.</p> </>}

        />



        {/* Talk To Our Whatourclients! */}
        <Whatourclients />

        {/* Got a Story */}
        <Gotastory />

        {/* Talk To Our Requestafreequote! */}
        <Requestafreequote />

      </main>
    </>
  )
}
export default Illustrationbook