import React from 'react'

import { Banner, Card, Cta, BookShelf, BookPortfolio, BookProcess, Testimonial, Logos, Contact } from "../../components/childrenillustration"
import card1 from '../../public/images/childrenillustration/increased-sales.png'
import card2 from '../../public/images/childrenillustration/oriented-content.png'
import card3 from '../../public/images/childrenillustration/device-compatibility.png'
import card4 from '../../public/images/childrenillustration/easy-upload.png'
// import img1 from '../../public/images/childrenillustration/table-with-book.png'
import img1 from '../.../../../public/images/childrenillustration/BookShelf-img11.png'
import img2 from '../.../../../public/images/childrenillustration/BookShelf-img12.png'
import img3 from '../.../../../public/images/childrenillustration/BookShelf-img13.png'

import testimonialImg1 from '../.../../../public/images/childrenillustration/business avatar-02.png'
import testimonialImg2 from '../.../../../public/images/childrenillustration/business avatar-11.png'

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
    number: "01",
    title: 'Place an order',
    desc: 'Provide a brief overview of your ideas and information about your book in our order form. If you’re not sure what you want to see on the cover, we’ll gladly help you.'
  }, 
  {
    number: "02",
    title: 'First Draft in 4-7 Business Days',
    desc: "After we've discussed all the details with you, our illustrators get to work. You'll receive the first black and white sketch in 4-7 days."
  },
  {
    number: "03",
    title: 'Revision process',
    desc: "We work with you tightly to make your book illustration look as you always imagined. That’s why we don’t limit the number of revisions."
  },
  {
    number: "04",
    title: 'Delivery',
    desc: "Once satisfied with the final look of your book. We will deliver your project as commited."
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
        subtitle="Custom Book"
        title="illustration"
        desc="We are helping you to share your story with kids that stimulate their <br class='d-lg-none d-block'/> imagination and boom their interest in your stories."
        formTitle="Request A Free Quote"
      />
      <Card
        title="<span className='txtOrange'>Children's</span> Book Illustration Services"
        subtile=""
        desc="Designing a children's book can be quite hectic since we cannot comprehend their choice, but our highly experienced and qualified illustrators can create something that people of all ages would love to read. We make sure that you get to relive your childhood and make children love everything about reading. Our Illustration will surely attract more conversions for your book."
        card={cardData}

      />
      <Cta
        title='Talk To Us Today!'
        desc='Share your exciting ideas with <br/> our bookwritingcube.com for the best results.'
      />

      <BookShelf
        title="Some Of Our Best Children’s Books"
        desc="We've created exceptional illustrations for countless children’s books across various genres. Have a look out some of our best work so far."
        img1={img1}
        img2={img2}
        img3={img3}

      />
      <BookPortfolio
        title="Some Of Our Best Children’s <br class='d-lg-none'/> Book Illustrations"
        desc={`We've created exceptional illustrations for countless children's books across various genres. Have a look out some of our best work so far.`}
      />

      <BookProcess
        title={`Book Illustration <br/> <span class='font_65'>Process</span>`}
        desc="This is how we create outstanding illustrations"
        data={processData}
      />
      <Testimonial
        title="The Stamp Of Approval For Our Services"
        dataTestimonial={testimonial}
      />
      <Logos/>
      <Contact
        title="Contact Us"
        desc="Ready to turn the page on your publishing dreams? Let us write your success story together! Choose our book publishing company and let your words come to life. Start your literary journey now!"
      />

    </>
  )
}

export default childrenBookIllustration
