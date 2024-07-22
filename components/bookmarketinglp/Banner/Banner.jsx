// Next
import React from "react";
import style from "./Banner.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";

// Media
import partnerlogo1 from "/public/images/bookmarketinglp/partnerlogo1.png";
import partnerlogo2 from "/public/images/bookmarketinglp/partnerlogo2.png";
import bannerbooks from "/public/images/bookmarketinglp/bannerbooks.png";
import CTA from "../../CTA/CTA";

export default function Banner({
  title = "Make Your Book Unforgettable <br class='d-lg-block d-none'/> with Our Marketing!",
  desc = "Our marketing services will make your book stand out. With targeted strategies and expert promotion, we'll ensure it leaves a lasting impression.",
}) {
  return (
    <section>
      <div className={`${style.banner}`}>
        <Container>
          <Row>
            <Col lg={2} xl={2} className="d-lg-block d-none">
              <Image src={partnerlogo1} alt="Book Marketing" className="img-fluid" width={200} height={600} />
            </Col>
            <Col md={11} lg={8} xl={8} className="mx-auto">
              <div className={`${style.w75} mx-auto text-center pt-5`}>
                <h1 className="fw500 mb-4" dangerouslySetInnerHTML={{__html: title}} />
                <p className="fw400" dangerouslySetInnerHTML={{__html: desc}} />
                <div className="d-flex flex-md-row flex-column gap-3 justify-content-center mb-4">
                  <CTA text="(855) 500 0057" classes="!text-black" color="text-black" handle="" bg="bgWhite" link="tel:855-500-0057" />
                  <CTA
                    text="Get A Quote"
                    link="javascript:$zopim.livechat.window.show();"
                    bg="bgOrangeRoundednone"
                    color="text-white"
                    border="text-white "
                  />
                </div>
              </div>
              <div className="mx-auto">
                <Image src={bannerbooks} alt="Book Marketing" className="img-fluid d-block mx-auto" quality={95} width={800} height={600} />
              </div>
            </Col>
            <Col lg={2} xl={2} className="d-lg-block d-none">
              <Image src={partnerlogo2} alt="Book Marketing" className="img-fluid " width={200} height={600} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
