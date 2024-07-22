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
    title: "Quality Work",
    desc: "Our Top Focus Is Giving Our Clients High-Quality Work, And Our Book Writers For Hire Constantly Think Of The Ideal Strategy.",
  },
  {
    IconImg: customer,
    title: "Customer Satisfaction",
    desc: "Transform Your Writing Aspirations Into A Reality With Our Book Writing Services. We Guarantee Satisfaction For Every Book We Craft.",
  },
];
const servicData2 = [
  {
    IconImg: delivery,
    title: "Timely Delivery",
    desc: "We're Skilled, Quick, And Prepared. We Make Sure That Our Team Meets All Deadlines. We're Always Ahead Of Time.",
  },
  {
    IconImg: ownership,
    title: "100% Ownership",
    desc: "We Give 100% Ownership Of The Book-Writing Content To Our Clients.",
  },
];
const faqsContent = [
  [
    "Is it better to self-publish or get a publisher?",
    "Choosing between self-publishing and traditional publishing depends on your goals. Self-publishing offers more control and higher royalty rates, while traditional publishing provides support from agents and industry professionals. We at Best Selling Publisher offer both services, allowing you to choose the path that best suits your needs and ensuring your book's success.",
  ],
  [
    "How long does it take to publish a book?",
    "The book publication time varies, typically ranging from a few months to a year. Factors like editing, design, and marketing plans impact the timeline. We streamline the process, ensuring efficient progress while maintaining high-quality standards, so your book reaches readers as soon as possible.",
  ],
  [
    "Can I publish both print and e-book versions?",
    "Yes, you can publish both print and e-book versions of your book. We offer comprehensive services to format, design, and distribute your book across multiple platforms, ensuring it reaches a wide audience in both physical and digital formats.",
  ],
  [
    "Do I retain the rights to my book?",
    "Yes, with our self-publishing services, you retain all rights to your book. For traditional publishing, rights depend on the contract terms. We provide clear guidance on rights management, ensuring you make informed decisions that best suit your publishing goals.",
  ],
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
        title="Let's Turn Your Book <br class='d-lg-block d-none'/> Into A Best Seller"
        desc="Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond. <br/> <br/>Don't hesitate to reach out and take the first step towards literary success with one of the finest publishers in the industry."
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
