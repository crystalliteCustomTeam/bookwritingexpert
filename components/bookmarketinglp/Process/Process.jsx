import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import style from "./Process.module.css";
import Image from "next/image";
import processImg from "/public/images/bookmarketinglp/bookProcess.png"
const cardData = [
  {
    title: "The Comprehensive <br/> Marketing Plan:",
    desc: "As experts in book marketing, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy",
  },
  {
    title: "Social Media And Additional <br/> Media Channels:",
    desc: "As experts in book marketing, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy",
  },
  {
    title: "Marketing Plan <br/> Implementation:",
    desc: "As experts in book marketing, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy",
  },
  {
    title: "Target Audience:",
    desc: "As experts in book marketing, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy",
  },
];
const cardData2=[
    {
        title:"Effective Marketing Strategy <br/> Is What Is Needed:",
        desc:"As experts in book marketing, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy"
    }
]
export default function Process({
  title = "Our Streamlined Book Marketing Process",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost <br class='d-lg-block d-none'/> your literal presence. Our seasoned marketing professionals",
}) {
  return (
    <section>
      <div className={style.process}>
        <Container>
          <Row>
            <Col md={10} lg={10} xl={10} className="mx-auto mb-5">
              <h3 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-center" dangerouslySetInnerHTML={{__html: desc}} />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} xl={4} className={`d-lg-block d-none ${style.position}`}>
              <Image src={processImg} alt="Book Marketing Experts" className={`img-fluid ${style.imgPosition}`} width={600} height={1000}/>
            </Col>
            <Col sm={12} md={12} lg={8} xl={8} className="ps-xl-5 ps-4">
              <Row>
                {cardData?.map((e, i) => (
                  <Col key={i} sm={6} md={6} lg={6} xl={6}>
                    <Card className={style.card}>
                      <Card.Body>
                        <h3 dangerouslySetInnerHTML={{__html: e.title}} />
                        <p dangerouslySetInnerHTML={{__html: e.desc}} />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                {cardData2?.map((e, i) => (
                  <Col key={i} md={12} lg={12} xl={12}>
                    <Card className={style.card}>
                      <Card.Body>
                        <h3 dangerouslySetInnerHTML={{__html: e.title}} />
                        <p dangerouslySetInnerHTML={{__html: e.desc}} />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
