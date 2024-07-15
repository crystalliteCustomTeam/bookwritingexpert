import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const homebannerlogos = await import("/public/images/bannerimages/logos.png");
const whychoose = await import("/public/images/whychoosebooks/bg-img.webp");
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


  const holddata = <h2 className='font-f font50 t-center'> We Provide Stunning <Link className="color-blue textdocationnone fw700 hover" href="/audiobookproduction">Audio Book  <br className="d-none d-xl-block" />Production</Link> </h2>


  const bannertext = [
    {
      title: '',
      free: '',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'audiobookproduction',
    }
  ]

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
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
          title={holddata}
        />

        <Stoppublish
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
          stopworrying='stopworrying1'
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