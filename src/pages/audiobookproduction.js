import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const homebannerlogos = await import("/public/images/bannerimages/logos.png");
const whychoose = await import("/public/images/whychoosebooks/bg-img.png");
// import components
const Banner = dynamic(() => import('../../components/Banner'));
const Partners = dynamic(() => import('../../components/Partners'));
const Whychoosebook = dynamic(() => import('../../components/Whychoosebook'));
const Gotastory = dynamic(() => import('../../components/Gotastory'));
const Whatourclients = dynamic(() => import('../../components/Whatourclients'));
const Requestafreequote = dynamic(() => import('../../components/Requestafreequote'));
const Stoppublish = dynamic(() => import('../../components/Stoppublish'));
const Customersatisfaction = dynamic(() => import('../../components/Customersatisfaction'));
const Strugglingtogive = dynamic(() => import('../../components/Strugglingtogive'));
const Onestepsolutions = dynamic(() => import('../../components/Onestepsolutions'));
const Serviceproviders = dynamic(() => import('../../components/Serviceproviders'));
const Providestunning = dynamic(() => import('../../components/Providestunning'));
const Professionalaudiobook = dynamic(() => import('../../components/Professionalaudiobook'));








function Audiobookproduction() {



  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Get Your</span>  <Link className='dblockmobile textdocationnone color-blue hover' href="/ghostwriting-services">  Book Ghost Writing <br></br> Services </Link>  <span className=''> from Our Team of Top Ghost <br></br> Writing for Hire.</span> </h1>;

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='javascript:$zopim.livechat.window.show();'>Amazon Kindle Direct Publishing (KDP)</Link>Service Providers Handle All Your Publishing Troubles!</span>

  const dataspan = <h1 className='font50 color-white font-f hero-span'>  <Link className='fw700 dblockmobile textdocationnone color-blue hover' href="/ghostwriting-services"> Book Writing Experts </Link>  Is  waiting for you to Ask for a    <Link className='fw700 dblockmobile textdocationnone color-blue hover' href="/ghostwriting-services"> Professional Ghost Writing </Link> </h1>;


  const holddata =  <h2 className='font-f font50 t-center'> We Provide Stunning <Link className="color-blue textdocationnone fw700 hover" href="/audiobookproduction">Audio Book  <br className="d-none d-xl-block" />Production</Link> </h2>


  const bannertext = [
    {
      title: '',
      free: '',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'audiobookproduction',
    }
  ]







  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/"
    },
    "headline": "Book Writing Company",
    "description": "Book Writing Company",
    "image": "",
    "author": {
      "@type": "Organization",
      "name": "Mini Investments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "2022-03-21"
  }

  const schema2 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://www.bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]
  }

  const schema3 = {
    "@context": "https://schema.org", "@type": "Service", "name": "book writing services book writing company book writers affordable book writing services", "description": "book writing services book writing company book writers affordable book writing services book writing services book writing company book writers affordable book writing services", "provider": { "@type": "Organization", "name": "book writing services book writing company book writers affordable book writing services", "url": "https://www.bookwritingexperts.com/" },
    "serviceType": ["book writing services book writing company book writers affordable book writing services"], "areaServed": { "@type": "country", "name": "us" }
  }

  return (
    <>


      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Top Audiobook Production Services - Book Writing Experts</title>
        <meta name="description" content="Hire the best audiobook production services, we offer a simple and creative process so your audiobook can be heard worldwide. Contact our audiobook production company today!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Audiobook Production Services - Book Writing Experts" />
        <meta property="og:description" content="Hire the best audiobook production services, we offer a simple and creative process so your audiobook can be heard worldwide. Contact our audiobook production company today!" />
        <meta property="og:url" content="https://www.bookwritingexperts.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.svg" />



       

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
          title=""
          text="You may be a victim of the following nuisances"
          list1="Slow Productivity"
          list2="Lack of Resources"
          list3="Mismanaged Time Schedules"
          list4="Financial Constraints"
          list5="Demotivation"
          list6="Delayed Creativity Process"
          list7="Delayed Writing Process"
          list8="Continuous Revisions"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(855) 500 0057"
        />

        <Professionalaudiobook />
    


        <Providestunning
        
        title = {holddata}
        
        
        />



        <Stoppublish
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
          stopworrying = 'stopworrying1'
        />

        {/* Why Choose book writing expert? */}
        <Whychoosebook
          title="Why Choose Book Writing Expert?"
          text="We are aware of the distinctiveness of the content creation needs of our customers. We take great pride in the incredibly various opinions, experiences, and knowledge that our team of authors can contribute. To ensure the greatest efficacy, we firmly believe in and work towards a transparent collaboration between you and us. For the greatest candor, we develop intricate production processes that accommodate each of our clients uniquely. The typical content around here is remarkable, genuine, and original!"
          whychoose={whychoose}
        />


        {/* Customersatisfaction */}
        <Customersatisfaction />






        <div className='datacloud'>
          <Onestepsolutions />
        </div>

        <Serviceproviders
     
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
export default Audiobookproduction