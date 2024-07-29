import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Casestudies.module.css";
import AutoPlaySlider from "../AutoPlaySlider";
import imgcase1 from "/public/images/bookmarketinglp/case-studies/Casestudy2.png";
import imgcase3 from "/public/images/bookmarketinglp/case-studies/Casestudy3.png";
import imgcase2 from "/public/images/bookmarketinglp/case-studies/Casestudy1.png";
import imgcaselogo from "/public/images/bookmarketinglp/case-studies/partnerlogo1.png";
import Image from "next/image";
const dataSlider = [
  {
    imgPortfolio: imgcase1,
    title: "Neon Dragon",
    desc: 'Kai Nakamura, a debut author, penned the unique cyberpunk thriller "Neon Dragon." We crafted a multi-platform campaign highlighting its genre-bending elements and fast-paced action. The novel became a cult classic, securing a film adaptation deal.',
    list: [
      "Delivered cinematic book trailers that captivated audiences.",
      "Partnered with top sci-fi influencers for engaging content and reviews.",
      "Offered limited edition pre-order bonuses to drive early sales.",
    ],
    partnerlogo1: imgcaselogo,
  },
  {
    imgPortfolio: imgcase3,
    title: "Love Under the Monsoon",
    desc: 'We helped Anya Patel, a self-published romance novelist, by developing a targeted social media campaign with captivating visuals and reader testimonials.  Her novel, "Love Under the Monsoon," earned the #5 spot on Amazon.',
    list: [
      "Launched visually appealing social media campaigns.",
      "Ran contests and giveaways on social media to boost engagement.",
      "Increased sales through strategic Amazon targeted ads.",
    ],
    partnerlogo1: imgcaselogo,
  },
  {
    imgPortfolio: imgcase2,
    title: "Bayou Bloodshed",
    desc: '"Bayou Bloodshed" by Sarah Jones, a detective thriller set in Louisiana, struggled initially. struggled initially. Our multi-channel campaigns with interactive quizzes and hashtags like #BayouBloodshed propelled it to become a bestseller.',
    list: [
      "Utilized targeted hashtags for increased visibility.",
      "Drove sales with targeted Amazon Ads and effective marketing strategies."
    ],
    partnerlogo1: imgcaselogo,
  },
];

export default function CaseStudies({
  title = "Our Case Studies",
  desc = "Here, we showcase real-life examples of how our book marketing strategies transformed the journeys of authors across genres.",
}) {
  return (
    <section>
      <div className={style.caseStudies}>
        <Container>
          <Row>
            <span className={style.absimages}></span>
            <Col xs={12} sm={12} md={12} lg={10} xl={9} className="mx-auto text-center">
              <h3 dangerouslySetInnerHTML={{__html: title}} />
              <p dangerouslySetInnerHTML={{__html: desc}} />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <AutoPlaySlider arrows={true} options={{align: "start"}} wrapperClasses="mt-3" direction="forward" EmblaBtn={style.EmblaBtn} arrowsCss={style.EmblaBtnStyle}>
              {dataSlider?.map((e, i) => (
                <Col key={i} xs={12} sm={12} md={12} lg={12} xl={12} className="px-lg-5 px-3 mx-auto ">
                  <Row className="align-items-center">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mx-auto d-md-block d-none">
                      <Image src={e.imgPortfolio} alt="Book Marketing" className="img-fluid block " width={450} height={300} />
                    </Col>
                    
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="ps-lg-5 ">
                    <div className={`${style.content}`}>
                      {e.title && <h3 dangerouslySetInnerHTML={{__html: e.title}} />}
                      {e.desc && <p dangerouslySetInnerHTML={{__html: e.desc}} />}
                      {e.list && (
                        <ul className="mt-3 mb-5 d-flex flex-column gap-2">
                          {e.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {e.partnerlogo1 && <Image src={e.partnerlogo1} className={`img-fluid`} width={500} height={100} alt="Book Marketing " />}
                    </div>
                  
                    </Col>
                  </Row>
                  {/* <div className="d-flex flex-md-row flex-column align-items-center gap-lg-5 gap-3 overflow-hidden">
                    <div className={`${style.sliderClass} overflow-hidden`}>
                      <Image src={e.imgPortfolio} alt="Book Marketing" className="img-fluid" width={800} height={300} />
                    </div>
                    <div className={`${style.content}`}>
                      {e.title && <h3 dangerouslySetInnerHTML={{__html: e.title}} />}
                      {e.desc && <p dangerouslySetInnerHTML={{__html: e.desc}} />}
                      {e.list && (
                        <ul className="mt-3 mb-5 d-flex flex-column gap-2">
                          {e.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {e.partnerlogo1 && <Image src={e.partnerlogo1} className={`img-fluid`} width={500} height={100} alt="Book Marketing " />}
                    </div>
                  </div> */}
                </Col>
              ))}
            </AutoPlaySlider>
          </Row>
        </Container>
      </div>
    </section>
  );
}
