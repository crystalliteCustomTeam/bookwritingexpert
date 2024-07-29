import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./PublishingServices.module.css";
import Image from "next/image";
import CTA from "../../CTA/CTA";

export default function PublishingServices({
  title = "Why Should You Choose Our Book Marketing Service?",
  desc = "Our expert book marketers created smart book marketing plans that helped many books get featured in top newspapers and media outlets. We understand how important your book is to you, and we work hard to create a personalized marketing plan that fits your book’s needs. Authors choose us for our team's experience and dedication, we ensure that your book stands out and gets the attention it deserves. Let us help you make your book a bestseller.",
  data,
  data2,
  cta2 = true,
  cta = false,
}) {
  return (
    <section>
      <div className={style.services}>
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={5} xl={5} className="">
              <h3 dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-left" dangerouslySetInnerHTML={{__html: desc}} />
              {cta && (
                <div className={style.w45}>
                  <CTA text="Book An Appointment" link="javascript:$zopim.livechat.window.show();" color="text-white" classes="mb-5" bg="bg-white" />
                </div>
              )}
              {cta2 && (
                <div className="d-flex flex-sm-row flex-column gap-3 justify-content-sm-start justify-content-center mt-4">
                  <CTA text="(855) 500 0057" classes="" color="text-white" handle="" bg="bgBlue" link="tel:855-500-0057" />
                  <CTA text="Get A Quote" link="javascript:$zopim.livechat.window.show();" bg="bgOrangeRoundednone" color="text-white" />
                </div>
              )}
            </Col>
            <Col md={12} lg={7} xl={7} className={`mt-lg-3 mt-5 ${style.classes}`}>
              <Row className="position-relative">
                <span className={style.absolute}></span>
                <Col md={6} lg={6} xl={6}>
                  <div className="d-flex flex-column justify-content-start mt-5">
                    {data?.map((e, i) => (
                      <div key={i} className={style.cardClass}>
                        <div>
                          <Image src={e.IconImg} alt="Book Marketing Expert" className="mb-4" width={60} height={60} quality={100} />
                          <h4 className="mb-3" dangerouslySetInnerHTML={{__html: e.title}} />
                          <p dangerouslySetInnerHTML={{__html: e.desc}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col md={6} lg={6} xl={6}>
                  <div className="d-flex flex-column justify-content-start mt-0">
                    {data2 &&
                      data2.map((e, i) => (
                        <div key={i}>
                          <div className={style.cardClass}>
                            <Image src={e.IconImg} alt="Book Marketing Expert" className="mb-4" width={60} height={60} quality={100} />
                            <h4 className="mb-3" dangerouslySetInnerHTML={{__html: e.title}} />
                            <p dangerouslySetInnerHTML={{__html: e.desc}} />
                          </div>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
