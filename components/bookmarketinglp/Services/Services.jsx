import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "../../../components/bookmarketinglp/Services/Services.module.css";
import AutoPlaySlider from "../AutoPlaySlider";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "/public/images/bookmarketinglp/arrow.png"

const data = [
  {
    title: "Personal Marketing Assistants",
    para: "Get dedicated marketing assistants to manage your book promotion. From planning to execution, they ensure consistent and effective marketing efforts.",
  },
  {
    title: "Book Launch Support",
    para: "Our team offers custom graphics and posts for your book’s launch week, highlighting unique selling points using A+ content, and personalized book marketing for self-published authors on Amazon.",
  },
  {
    title: "Amazon Kindle",
    para: "We handle the formatting and publishing of your book on Amazon Kindle, following the best practices to improve readability and discoverability. Our Amazon book promotion ensures your book reaches a global audience.",
  },
  {
    title: "Social Media Set-Up",
    para: "Our experienced social media managers in our team set up and optimize your social media profiles. This is crucial for engaging with readers and marketing your book across multiple platforms.",
  },
  {
    title: "Barnes and Noble Nook Edition",
    para: "Transforming your manuscript into a professional Nook edition for Barnes & Noble expands your reach. Our expertise in digital formatting guarantees your book looks great on every device.",
  },
  {
    title: "Apple Books",
    para: "Convert and optimize your book for Apple Books. We help you reach multiple platforms, effectively marketing your book to your target audience and increasing sales.",
  },
  {
    title: "Creative and Appealing Bookmarks",
    para: "Beautiful bookmarks are designed to serve as excellent promotional items, keeping your book title in readers’ minds. Our custom designs ensure your bookmarks make a lasting impression.",
  },
  {
    title: "Digital Postcards",
    para: "Visually striking digital postcards for email campaigns and social media engage your audience and drive interest in your book. Our attractive digital postcards enhance overall marketing strategy.",
  },
  {
    title: "Press Release",
    para: "Give your book the publicity it deserves. We write and distribute professional press releases to announce your book's launch, garnering media attention and enhancing public awareness.",
  },
  {
    title: "Book Video Trailers",
    para: "Compelling video trailers captivate potential readers. Our book marketing team has expert designers and video makers who know how to narrate your book's story visually through video trailers.",
  },
  {
    title: "Marketing on Social Media Platformss",
    para: "Enhance your book reach with a targeted social media marketing campaign. We use strategies that maximize engagement and conversions, ensuring your book gets the attention it deserves.",
  },
  {
    title: "Audio Book",
    para: "Our production process ensures a top-notch listening experience. We produce high-quality audiobooks, making your book accessible to new audiences who prefer audio content.",
  },
  {
    title: "Author Website",
    para: "Build your author website that truly reflects your unique voice. Our expert developers help you build a thriving platform where you showcase your books and connect with readers.",
  },
  {
    title: "Ad Campaigns Management",
    para: "Managing targeted Facebook ads and handling ad spend on Amazon for the first two weeks post-release drives sales and visibility. Our campaigns help you reach a network of over 100K potential readers.",
  },
  {
    title: "Book Awards & Reviews Submission",
    para: "Maximize your book's impact. We help you submit your book to multiple award contests, reputable reviewers, and create a buzz with a Goodreads giveaway.",
  },
  {
    title: "International Rights Showcase",
    para: "We showcase your book in an exclusive international marketplace, reaching readers in 120 countries and 180 languages, and attracting potential translation or distribution deals.",
  },
  {
    title: "Digital Marketing Consultation",
    para: "Our digital marketing book consultation offers personalized strategies for your book. We focus on Amazon promotion and digital marketing tactics, using data-driven insights to maximize your reach and impact.",
  },
  {
    title: "Business Cards",
    para: "Create professional business cards for book publicity and networking. We design business cards that reflect your author's brand, promoting your book at events, and conferences.",
  },
  {
    title: "Article Writing",
    para: "Articles can engage readers and boost your book's visibility. Our professional content strengthens your overall promotion strategy, enhancing your online presence and attracting more readers.",
  }
];

export default function Services() {
  return (
    <section>
      <div className={style.service}>
        <Container>
          <Row>
            <Col sm={12} md={10} lg={6} xl={6}>
              <div>
                <h3>Result-Driven Book Marketing Services</h3>
                <p>We've helped 750+ book launches, including bestsellers that graced the NYT and WSJ lists. Now, let us transform your manuscript into a reader's obsession with our proven book promotion services.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <AutoPlaySlider arrows={true} options={{align: "start"}} wrapperClasses="mt-3" direction="forward"  EmblaBtn={style.Emblabtn} >
              {data.map((e, i) => (
                <Col key={i} xs={12} sm={6} md={6} lg={4} xl={3} className="ps-0">
                  <div className="d-flex align-items-center">
                    <div className={`${style.sliderClass}`}>
                      <h3 dangerouslySetInnerHTML={{__html: e.title}} />
                      <p className="mb-5" dangerouslySetInnerHTML={{__html: e.para}} />
                      <div className={style.absLink}>
                        <Link href="javascript:;" className="d-flex gap-2 align-items-center">
                        <span>Connect With Us!</span>
                        <Image src={rightArrow} alt="Book Marketing" className="" width={20} height={10}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </AutoPlaySlider>
          </Row>
        </Container>
      </div>
    </section>
  );
}
