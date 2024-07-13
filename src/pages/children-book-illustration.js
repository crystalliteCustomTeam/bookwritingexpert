import React from 'react'

import { Banner, Card, Cta, BookShelf, BookPortfolio, BookProcess, Testimonial, Logos, Contact } from "../../components/childrenillustration"
import card1 from '../../public/images/childrenillustration/increased-sales.png'
import card2 from '../../public/images/childrenillustration/oriented-content.png'
import card3 from '../../public/images/childrenillustration/device-compatibility.png'
import card4 from '../../public/images/childrenillustration/easy-upload.png'
// import img1 from '../../public/images/childrenillustration/table-with-book.png'
import img1 from '../../public/images/childrenillustration/bookshelf-1.png'
import img2 from '../../public/images/childrenillustration/bookshelf-2.png'
import img3 from '../../public/images/childrenillustration/bookshelf-3.png'
import img4 from '../../public/images/childrenillustration/bookshelf-4.png'
import img5 from '../../public/images/childrenillustration/bookshelf-5.png'

import testimonialImg1 from '../../public/images/childrenillustration/business avatar-02.png'
import testimonialImg2 from '../../public/images/childrenillustration/business avatar-11.png'

const cardData = [
  {
    image: card1,
    alt: 'increased-sales',
    title: 'Increased <br/> Sales',
  },
  {
    image: card2,
    alt: 'Audience-Oriented Content',
    title: 'Audience-Oriented <br/> Content',
  },
  {
    image: card3,
    alt: 'Device Compatibility',
    title: 'Device <br/> Compatibility',
  },
  {
    image: card4,
    alt: 'Easy To Upload',
    title: 'Easy To <br/> Upload',
  }
]
const processData = [
  {
    number: "Step 01",
    title: 'Understanding the Client’s Visual',
    desc: 'We commence our book illustration process by understanding what our client wants their childrens book character to look like. Once decided, we offer our book illustration rates to proceed with the project.'
  }, 
  {
    number: "Step 02",
    title: 'Detailed Interviews with the Client',
    desc: "Our picture book illustrators have a detailed correspondence with the client about the attributes they want in each childrens book character."
  },
  {
    number: "Step 03",
    title: 'Illustrations Begin',
    desc: "Once the book illustrators have the needed information, they head off for their storyboard. "
  },
  {
    number: "Step 04",
    title: 'Client’s Feedback',
    desc: "Here, the picture book illustrators share their drafts via our portal for the client to review."
  },
]

const testimonial = [
  {
    img: testimonialImg1,
    alt:'Testimonial',
    title: 'Abigail Smith',
    desc: 'Book Writing Experts made the process of publishing my book a breeze. They handled everything with expertise and efficiency, from formatting and cover design to distribution and marketing. They even offered personalized support throughout the process, ensuring I felt confident and informed. I’m so glad I chose them to help me bring my book to market.'
  },
  {
    img: testimonialImg2,
    alt:'Testimonial',
    title: 'Glint',
    desc: 'As an author who dreamed of seeing my book listed on all the major platforms, including Goodreads, Amazon, BookBub, and Apple Books, I am thrilled to say that my expectations have been surpassed. Thanks to the dedicated efforts of Book writing experts, my book has achieved widespread visibility and success.'
  },
  {
    img: testimonialImg1,
    alt:'Testimonial',
    title: 'Abigail Smith',
    desc: 'Book Writing Experts made the process of publishing my book a breeze. They handled everything with expertise and efficiency, from formatting and cover design to distribution and marketing. They even offered personalized support throughout the process, ensuring I felt confident and informed. I’m so glad I chose them to help me bring my book to market.'
  },
  {
    img: testimonialImg2,
    alt:'Testimonial',
    title: 'Glint',
    desc: 'As an author who dreamed of seeing my book listed on all the major platforms, including Goodreads, Amazon, BookBub, and Apple Books, I am thrilled to say that my expectations have been surpassed. Thanks to the dedicated efforts of Book writing experts, my book has achieved widespread visibility and success.'
  }
]

const childrenBookIllustration = () => {
  return (
    <>
      <Banner
        subtitle="Your Result To Find An "
        title="Illustrator For My Book"
        desc="Let story book illustrations ignite imagination for children to see and learn from. After all, a picture is worth a thousand words. "
        formTitle="Request A Free Quote"
      />
      <Card
        title="<span className='txtOrange'>Children's</span> Book Illustration Services"
        subtile=""
        desc="Looking to paint a burst of excitement into your children’s book with creativity? At Book Writing Experts, we boast the market’s most polished, gifted, and elite children’s book illustrators ready to bring your aesthetic vision."
        card={cardData}

      />
      <Cta
        title='Leading Children’s Book Illustration Services!'
        desc='Share your exciting ideas with <br/> our bookwritingexperts.com for the best results.'
      />

      <BookShelf
        title="Some Of Our Best Children’s Books"
        desc="We define the story book illustrations our client desires, be it a fantasy book illustrations, comics, or any other kind. Check out our work."
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
      />
      <BookPortfolio
        title="Some Of Our Best Children’s <br class='d-lg-none'/> Book Illustrations"
        desc={`There is a reason we are the leading book illustration company, but we’ll let our work walk the talk!`}
      />

      <BookProcess
        title={`Book Illustration <br/> <span class='font_65'>Process</span>`}
        desc="This is how we create outstanding illustrations"
        data={processData}
      />
      <Testimonial
        title="The Stamp Of Approval For Our Services"
        desc="Our client’s feedback follows through our service excellence philosophy at Book Writing Experts"
        dataTestimonial={testimonial}
      />
      <Logos/>
      <Contact
        title="Contact Us"
        desc="We know the effort book illustration process takes, so why not hire a book illustration company? We are only a call, message, or email away! Let’s collaborate."
      />

    </>
  )
}

export default childrenBookIllustration
