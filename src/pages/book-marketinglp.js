import React from "react";
import Image from "next/image";

import {Banner, CaseStudies, CTA, Cta2, Faqs, FeaturedContact, PartnersCompanies, Portfolio, Process, PublishingServices, Testimonials} from "../../components/bookmarketinglp";
import Services from "../../components/bookmarketinglp/Services/Services";

// Media
import bgImgNew from "/public/images/bookmarketinglp/featuredContactbg.png";
import service from "/public/images/bookmarketinglp/service.png";
import customer from "/public/images/bookmarketinglp/customer-satisfaction.png";
import ownership from "/public/images/bookmarketinglp/ownership.png";
import delivery from "/public/images/bookmarketinglp/delivery-time.png";

const servicData = [
  {
    IconImg: service,
    title: "Proven Results",
    desc: "We consistently deliver successful outcomes, helping authors achieve their marketing and sales goals by getting their books noticed and increasing their readership.",
  },
  {
    IconImg: customer,
    title: "Personalized Strategies",
    desc: "We create customized marketing plans tailored to each book's unique needs and target audience, ensuring effective promotion and maximum impact.",
  },
];
const servicData2 = [
  {
    IconImg: delivery,
    title: "Dedicated Support",
    desc: "We offer continuous, hands-on support to guide you through every step of the marketing process, making sure you never feel lost or alone.",
  },
  {
    IconImg: ownership,
    title: "Customer Satisfaction",
    desc: "We prioritize your satisfaction, working closely with you to ensure your expectations are met and your book reaches its full potential.",
  },
];
const faqsContent = [
  [
    "Can I hire someone to market my book?",
    "Yes, you can hire book marketing services to boost your sales. A book marketing company can enhance your Amazon description, choose effective keywords, and improve your website to attract more readers and drive sales.",
  ],
  [
    "What is the difference between a book publicist and a book marketer?",
    "A book marketer focuses on paid promotions, like ads and optimized sales pages, to drive sales. A book publicist handles earned promotions, such as media coverage and book signings, to generate organic interest and buzz.",
  ],
  [
    "Can you sell a book without marketing?",
    "No, selling a book without marketing is very difficult, especially in self-publishing. Marketing is essential to reach readers, generate interest, and drive sales. Without it, your book is unlikely to gain the visibility needed for success.",
  ]
];
export default function bookmarketinglp() {
  return (
    <main>
      <Banner />
      <FeaturedContact />
      <Services />
      <CaseStudies />
      <Portfolio />
      <CTA />
      <Process />
      <PublishingServices data={servicData} data2={servicData2}/>
      <Cta2 />
      <PartnersCompanies />
      <Testimonials />
      <FeaturedContact
        title="Be Among the 10,000+ Authors Who Have Achieved Greatness!"
        desc="We know the book marketing world inside and out. We have worked with big names like Amazon's CreateSpace, Kindle Direct Publishing, and other publishing companies. Let us help you market your story and watch your Readership grow bigger than ever! <br/> <br/>Imagine happy readers talking about your book, excited to share it with everyone they know. We'll help you build you a readership who can't wait to read your story and tell the world how much they enjoyed it"
        cta={false}
        cta2={true}
        bgImg={bgImgNew}
        list={false}
        classes="text-white"
        formclasses="bg-white text-black"
      />
      <Faqs title={`Frequently Asked Questions`} items={faqsContent} />
    </main>
  );
}
