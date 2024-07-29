import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import style from "./Process.module.css";
import Image from "next/image";
import processImg from "/public/images/bookmarketinglp/bookProcess.png"
const cardData = [
  {
    title: "The Comprehensive <br/> Marketing Plan",
    desc: "We create a detailed, step-by-step marketing plan tailored to your book’s needs. This ensures your book reaches the right readers and gains maximum visibility and engagement across all platforms.",
  },
  {
    title: "Target Audience",
    desc: "We find the best readers for your book by looking at demographics and reader behavior. This helps us connect your book with the right audience, increasing interest and sales.",
  },
  {
    title: "Social Media And Additional <br/> Media Channels:",
    desc: "We use social media and other marketing channels such as book reviews, optimizing Amazon descriptions, digital marketing, and website development to create engagement with your readership. ",
  },
  {
    title: "Marketing Plan <br/> Implementation:",
    desc: "Our team carefully follows your personalized marketing plan, making sure every step is done right. We monitor progress and make changes as needed to get the best results.",
  },
  
];
const cardData2=[
    {
        title:"Innovative Marketing Strategies:",
        desc:"We use proven methods and new ideas to make your book stand out. Our strategies drive interest and boost sales, making sure your book gets noticed."
    }
]
export default function Process({
  title = "Our Streamlined Book Marketing Process",
  desc = "Our book marketing pros will build a custom plan for your book launch, covering all the important steps. We don't do generic - we find what makes your book special and create a mix of promotions to make it shine.",
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
                    <Card className={style.card2}>
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
