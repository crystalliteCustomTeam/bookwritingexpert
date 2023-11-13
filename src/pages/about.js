import React from 'react'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Head from 'next/head'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import howdoimg from '/public/images/howdowecomeintobeing/howdowecomeintobeing.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import whychoosebookritingcube from '/public/images/whychoosebookritingcube/whychoosebookritingcube.png'
import Dowecome from '../../components/Dowecome'
import Aspiring from '../../components/Aspiring'

const About = () => {


  const bannertext = [
    {
      title: 'Who Are We?',
      pra: 'As self-searching as this question might sound, we are a book writing, editing, and publishing company. Well, that sounds a bit too over-simplified, but you get the gist. We produce, publish, and market book, a synergy of creativity fueled by a staff of writers, editors, publishers, developers, and designers.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      aboutbanners: 'aboutbanner',
    }
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
          bannershome={item.aboutbanners}
        />
      )}

      {/* Makestories */}
      <Makestories
        title='We make stories… happen!'
        para='Let us help you tell it.'
      />

      {/* Dowecome */}
      <Dowecome
        title='How Do We Come Into Being?'
        text="It calls for storytime! At first, it was just an idea to escape the daily 9 to 5 frustration and explore the storyteller hiding within. So after attempting multiple book writing projects, it convinced me of my storytelling destiny. Relaxing and solving the rubic’s cube, I came up with the name and booked the domain. It was my eureka moment!"
        subtext="So it is our story of inspiration and courage to do what we want. If you are inspired to write and put the courage to pen down a story, we are pretty sure you want it to be a bestseller? Why not let us be your guide in the journey from a writer to a bestseller?"
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={howdoimg}
        Dowecome="Dowecome"
      />


      {/* Lululogos components */}
      <Lululogos />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Why Choose book writing expert?'
        text="Started as a small online organization, expanded the team from a few to a handful of people, and set the office. We put our skills, experience, and everything we knew of book writing, editing, publishing, and marketing to acquire a significant clientele. Soon, we got partnerships with publications houses, reputable editors, and experienced marketers—it was my dream come true!"
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={whychoosebookritingcube}
        whychooseclass="whychoosebookwritingcube"

      />

      {/* Talk To Our Experts! */}
      <Experts
        title="Talk To Our Experts!"
        text="Call and get a free consultation, sample, & a price quote."
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Aspiring */}
      <Aspiring
        title='Over to you, all the courageous aspiring authors!'
        //  title= 'Over to you, all the courageous aspiring authors!' {...greeting}
        text="“A book is all about the verbal artificiality of reality and how well you convey your idea through this—and this is what we aim to bring out. We respect the efforts of every client, as we know what it takes to write a book. That’s why we try not to disrupt the original idea but make it sound convincing.” – A message from teams of The Bookwriting Cube."
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
      />




    </>
  )
}

export default About