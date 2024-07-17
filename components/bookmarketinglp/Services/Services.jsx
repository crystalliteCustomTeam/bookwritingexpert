import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "../../../components/bookmarketinglp/Services/Services.module.css";
import AutoPlaySlider from "../AutoPlaySlider";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "../../../public/images/bookmarketinglp/arrow.png"

const data = [
  {
    title: "Personal Marketing Assistants",
    para: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.",
  },
  {
    title: "Social Media Set-Up",
    para: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.",
  },
  {
    title: "Creative and Appealing Bookmarks",
    para: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.",
  },
  {
    title: "Digital Postcards",
    para: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.",
  },
  {
    title: "Press Release",
    para: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.",
  },
];

export default function Services() {
  return (
    <section>
      <div className={style.service}>
        <Container>
          <Row>
            <Col sm={12} md={10} lg={6} xl={6}>
              <div>
                <h3>Our Book Marketing Services</h3>
                <p>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <AutoPlaySlider arrows={true} options={{align: "start"}} wrapperClasses="mt-3" direction="forward">
              {data.map((e, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={3} className="ps-0">
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
