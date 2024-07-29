import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Cta.module.css";
import CTA from "../../CTA/CTA";
import Image from "next/image";
import ctaBook from "/public/images/bookmarketinglp/ctabook.png"
export default function Cta({
  title="Book Marketing Gets Your Story Heard 2X Louder!",
  desc="Silence no more! Spread your story with us. We'll craft a personalized book marketing plan to attract your target audience and boost your sales."
}) {
  return (
    <section>
      <div className={style.cta}>
        <Container>
          <div className={style.ctaInner}>
            <Row >
              <Col sm={12} md={6} lg={6}  xl={6}>
                <h3 dangerouslySetInnerHTML={{__html : title}}/>
                <p dangerouslySetInnerHTML={{__html: desc}}/>
               <div className={`${style.w25}`}>
               <CTA
                bg=""
                classes={`d-flex justify-content-center py-2 px-4 `}
                text="(855) 500 0057"
                />
               </div>
              </Col>
              <Col md={6} lg={6} xl={6} className="position-relative ">
              <Image src={ctaBook} alt="book Marketing" className={`img-fluid ${style.ctaImage}`} width={1000} height={500}/>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
