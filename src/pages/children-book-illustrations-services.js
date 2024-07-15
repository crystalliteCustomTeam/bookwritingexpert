import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Head from 'next/head'
import Banner from '../../components/Banner'
import Makestoriesnew from '../../components/Makestoriesnew'
import Aspiring from '../../components/Aspiring'
import Dowecome from '../../components/Dowecome'
import Childrenbook from '../../components/Childrenbook'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Selfpublishing from '../../components/Selfpublishing'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import styles from '@/styles/Whybookpublishing.module.css'

const Childrenbookillustrationsservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Give Your Book the Aesthetic Edge Over the Others. Avail our </span> <Link className='textdocationnone color-blue hover' href="/children-book-illustrations-services"> Book Illustration Services   </Link>  <span className=''>to Elevate the Experience for Your Readers! </span> </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'While your words might do justice, illustrations take your book experience to a whole new level. Let us bring your imaginary characters on the paper for your readers to connect.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',



    }
  ]

  const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue hover' href="javascript:$zopim.livechat.window.show();">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue hover' href="javascript:$zopim.livechat.window.show();">self publishing</Link> .</span>;

  const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing expert. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

  const reasons = [

    {
      title: 'Spot Illustrations:',
      text: 'A spot illustration is a small section or single illustration that is drawn on the first or title page of each chapter to add color or context. Above the chapter title, which occupies a quarter or less of the page, there may be some simple line art or a small caricature.',
      classnum: 'number1',

    },

    {
      title: 'Half-Page Illustrations:',
      text: 'Illustrations that take up more than a quarter or, at most, half of a book page are referred to as half-page illustrations, as their name suggests. This type of image typically goes along with words by emphasizing one of the fascinating components of the narrative and is not typically limited to the chapter`s title page.',
      classnum: 'number1',

    },

    {
      title: 'Single-Page Illustrations:',
      text: 'Unlike the ones previously described, these illustrations often take up the entire page and are far more expressive and detailed. These are quite thorough, and the text is typically no longer necessary because the graphic speaks for itself.',
      classnum: 'number1',

    },

    {
      title: 'Spread Illustrations: ',
      text: 'These particular drawings are spread across both pages of the book and are typically more emotive and detailed than the text, which at this point, is mostly optional. You may compare them to comic books, except instead of just a little section of the strip, an image occupies the entire page.',
      classnum: 'number1',

    },


  ]



  const geta = <span>Get A Customized Solution By <Link className='fw700 color-blue hover textdocationnone' href='/book-publishing-services'> Best Publishing Services </Link></span>


  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


  const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>



  const fine = [

    {
      img: mission1,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Let’s <Link className='textdocationnone fw700 color-blue hover' href='/book-publishing-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>




  return (
    <>
      <Head>


     

        <link rel="icon" href="/favicon.svg" />
        <title>Hire The Best Children Book Publication Services - Book Writing Experts</title>
        <meta name="description" content="" />
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
        title={geta}
        text={work}
        Dowecome="publishmybook"

      />

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Illustrations Books Projects'
          para='Let Our Book Children’s Illustration Team Help You'
        />
      </div>

      <Stopworrying
        title='Stop worrying about publishing books!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />





      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/book-publishing-services'>  Book Marketing</Link></p>

          </Row>

          <Row className='gy-5'>
            {fine.map((item, i) =>
              <Finetoothedbook key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                img1={item.img}
                btn={item.btn}
              />
            )}
          </Row>
        </Container>
      </div>

      <Ourprocess
        title='The Steps In The Process Of Illustrating A Children`s Book!'

        heading1='Identifying the Aesthetic Elements from our client:'
        para1='Before starting a project, it’s vital our team grasps the expectations set by the client. After a complete assessment our team kicks off with needed information. Once your envisioned  framework is ready, we start throwing ideas accumulated by the team. Only the best ones make it to the final stage.'
        num1='01'

        heading2='The Art Commences:'
        para2='As soon as the artist obtains the necessary information, they move to the storyboard and create a piece that is still very much in its early phases for the client to view. Before assembling this initial piece, they would ensure that all the input had been taken into account and that it complied with the brief.'
        num2='02'

        heading3='Arranging The Final Artwork And Text!'
        para3='After receiving thorough feedback from the customer, the illustrator would return to the storyboard and make the necessary adjustments before revealing the finished product to the client for final approval.'
        num3='03'

        heading4='Comprehensive Client Interviews:'
        para4='Before we start over at the drawing board, our illustrators would have an in-depth conversation with the client to find out in great detail what traits they would like to see in each character and what they want in each character to stand out. They would also inquire as to whether the client had any particular requirements that they could not compromise on.'
        num4='04'

        heading5='We Actively Seek Feedback:'
        para5='At this stage of the process, the illustrator would send the client what they had put together on their storyboard or show it to them in person to receive their feedback. They attentively consider the input they receive after releasing the first artwork and make an effort to take it into consideration.'
        num5='05'


      />

      {/* Aspiring */}
      {/* <div className='dataset'>
<Aspiring
 title= {dateset}
 text= 'It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
 subtext= 'Trust the marketing professionals for it, do not risk it!'
 number="(855) 500 0057"
 discuss="LET'S DISCUSS"
 img= {together}
/>
</div> */}


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          subtext='Trust the marketing professionals for it, do not risk it!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



























      {/* Lululogos components */}
      {/* <Lululogos/> */}



      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font50 fw700 color-white t-center font-f mb-3 font-f'>The Ideal Illustrations for Children's Books!</h2>

            <p className='font15  color-white t-center pb-5 font-f'>Through compelling text and excellent illustrations, we hope to explore and illuminate the emotional and amusing aspects of children's experiences and social interactions. Why not come along with us? There are several different kinds of children's book illustrations, so before you contact us, for instance, you should be aware of them all and decide which one is best for your project. Don't know what the different types of illustrations are? Allow us to enlighten you.</p>

          </Row>

          <Row className={`${styles.childline} gy-5`}>
            {reasons.map((item, i) =>
              <Childrenbook key={i}
                title={item.title}
                text={item.text}
                classnumber={item.classnum}
              />
            )}

          </Row>
        </Container>

      </div>




      {/* Selfpublishing */}

      <Selfpublishing
        title='What Type Of Books Do We Publish?'
        text={text}
        subtext={subtext}
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />





      {/* Why Choose book writing expert? */}
      {/* <Whychoosebook
   title="5 Steps To Our Children's Book Illustrations Process!"
  text="We at book writing expert have a detailed five-step process to getting your Children's Book Illustrations as good as you want them to be. This process is pretty much similar for illustrators all over the world, and we appreciate it if we educate our clients beforehand on what goes on in the entire illustration process."
  whychoose= {stepstoour}
 /> */}


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='You Are One Step Closer To Displaying Your Writing Excellence. Let Our Professional Help You Out.'
          text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>







    </>
  )
}

export default Childrenbookillustrationsservices