// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Logos from "media/book-promotion-marketing/ftr-logo-img.png"
// Css
import styles from "./styles/brand-logos.module.css"
const BrandLogos = () => {
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row className="justify-content-center">
            <Col md="10" xs="12">
              <Image
                src={Logos}
                alt="logos"
                className="d-block mx-auto img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default BrandLogos
