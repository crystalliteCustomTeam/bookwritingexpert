import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./PartnersCompanies.module.css";
import AutoScrollSlider from "../AutoScrollSlider";
import Image from "next/image";

// Media
import partners1 from "/public/images/bookmarketinglp/partners-companies/business-insider.png";
import partners2 from "/public/images/bookmarketinglp/partners-companies/digital-journal.png";
import partners3 from "/public/images/bookmarketinglp/partners-companies/elite-daily.png";
import partners4 from "/public/images/bookmarketinglp/partners-companies/entrepreneur.png";
import partners5 from "/public/images/bookmarketinglp/partners-companies/forbes.png";
import partners6 from "/public/images/bookmarketinglp/partners-companies/huffpost.png";
import partners7 from "/public/images/bookmarketinglp/partners-companies/inc.png";
import partners8 from "/public/images/bookmarketinglp/partners-companies/marketers-media.png";
import partners9 from "/public/images/bookmarketinglp/partners-companies/marketwatch.png";
import partners10 from "/public/images/bookmarketinglp/partners-companies/small-biz.png";
import partners11 from "/public/images/bookmarketinglp/partners-companies/tnw.png";
import partners12 from "/public/images/bookmarketinglp/partners-companies/yahoo-finance.png";
import CTA from "../../CTA/CTA";

const imageArray = [partners1, partners2, partners3, partners4, partners5, partners6, partners7, partners8, partners9, partners10, partners11, partners12];

export default function PartnersCompanies({
  title = "Get Your Book Featured On Leading Publications!",
  desc = "We collaborate with leading authors and publishers to implement marketing strategies that boost visibility and ensure success across various genres and platforms.",
}) {
  return (
    <section>
      <div className={style.partnersCompanies}>
        <Container>
          <Row>
            <Col md={11} lg={10} xl={10} className="mx-auto">
              <h3 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-center" dangerouslySetInnerHTML={{__html: desc}} />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <div>
            <AutoScrollSlider>
              {imageArray.map((e, i) => (
                <div key={i} className={style.scrollSlider}>
                  <Image tabIndex={0} key={i} src={e} alt="awards" className="" width={150} height={30} quality={95} />
                </div>
              ))}
            </AutoScrollSlider>
          </div>
          <div className="d-flex flex-sm-row flex-column gap-3 justify-content-sm-center justify-content-center mt-4">
            <CTA text="(855) 500 0057" classes="" color="text-white" handle="" bg="bgBlue" link="tel:855-500-0057" />
            <CTA
              text="Get A Quote"
              link="javascript:$zopim.livechat.window.show();"
              bg="bgOrangeRoundednone"
              color="text-white"
              border="text-white"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
