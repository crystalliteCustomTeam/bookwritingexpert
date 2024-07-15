import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// images
const homebannerlogos = await import("/public/images/bannerimages/logos.png");
const whychoose = await import("/public/images/whychoosebooks/ill.png");
const banslider12 = await import("/public/images/illustrativebook/cartoon.svg");
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
const Illustrativebook = dynamic(() => import('../../components/Illustrativebook'));
const Onestepsolutions = dynamic(() => import('../../components/Onestepsolutions'));
const Stunningillustrations = dynamic(() => import('../../components/Stunningillustrations'));
const Serviceprovidersillutration = dynamic(() => import('../../components/Serviceprovidersillutration'));


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







 


 

  return (
    <>


      


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
          text={<><p className='textcolor font-f mb-4 font15'>Book Writing Experts helps you overcome the following challenges:</p></>}
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