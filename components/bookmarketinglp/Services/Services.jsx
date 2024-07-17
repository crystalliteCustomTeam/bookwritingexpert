import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "../../../components/bookmarketinglp/Services/Services.module.css";

export default function Services() {
  return (
    <section>
      <div className={style.service}>
        <Container>
          <Row>
            <Col md={6} lg={6} xl={6}>
              <div>
                <h3>Our Book Marketing Services</h3>
                <p>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
