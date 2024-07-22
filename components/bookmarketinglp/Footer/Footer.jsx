import React from "react";
import style from "./Footer.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className="d-flex align-items-center gap-1">
                <span><Link href="javascript:;">Terms of Use</Link></span>
                <span>|</span>
                <span><Link href="javascript:;">Privacy Policy</Link></span>
              </div>
            </Col>
            <Col xs={12} sm={6} md={8} lg={8} xl={8}><p className="mb-0 mt-1 mt-sm-0">© 2024 - All Rights Reserved <Link href="javascript:;">Bhaoo INC</Link></p></Col>
            
          </Row>
        </Container>
      </div>
    </footer>
  );
}
