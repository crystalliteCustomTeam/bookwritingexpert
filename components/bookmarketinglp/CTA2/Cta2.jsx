import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Cta2.module.css";
import CTA from "../../CTA/CTA";
export default function Cta2({
  title = "The Next Best Selling Author Is You!",
  desc = "Hire our expert marketing team for your book promotion and watch your book become the next best seller. Let's build your dream fanbase together!",
}) {
  return (
    <section>
      <div className={style.cta2}>
        <Container>
          <Row>
            <Col md={10} lg={8} xl={8} className="mx-auto">
            
              <div className={style.headStyle}>
                <span className={style.span1}></span>
                <h3 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
                <span className={style.span2}></span>
              </div>
              <p className="text-center" dangerouslySetInnerHTML={{__html: desc}} />
              <div className="d-flex gap-3 justify-content-center mt-4">
                <CTA text="(855) 500 0057" classes="hover:bg-secondary-100 !text-black" color="text-black" handle="" bg="bgWhite" link="tel:855-500-0057" />
                <CTA
                  text="Get A Quote"
                  link="javascript:$zopim.livechat.window.show();"
                  bg="bgOrangeRoundednone"
                  color="text-white"
                  border="border-primary-100 text-white hover:!bg-primary-100 hover:border-transparent hover:text-white"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
