// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/hero.module.css"
// Media
import HeroBanner from "media/book-promotion-marketing/banner.jpg"
import SideImage from "media/book-promotion-marketing/bnr-side-img.png"
import SortRight from "media/book-promotion-marketing/sort.png"
// Components
import { CTA } from "./index"
const Hero = () => {
  return (
    <section>
      <div className={styles.root}>
        <Image
          src={HeroBanner}
          alt="banner"
          className={styles.bannerImage}
          draggable="false"
          priority
        />
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className={styles.content}>
                <h1>Boost Your Sales With Right Book Promotion</h1>
                <h2>
                  Providing Compelling Promotional Opportunities to Rising
                  Authors
                </h2>
                <p>
                  The best promotion campaigns succeed because they are
                  carefully developed for individual authors and titles. It
                  means diving in and getting to know the work — at Ghost Book
                  Writers, we understand how to promote to both readers and
                  media.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <CTA link="tel:+18555000057" css={styles.heroCTA1} />
                  <CTA
                    link="javascript:void(Tawk_API.toggle())"
                    text="Live Chat"
                    css={styles.heroCTA2}
                  />
                </div>
              </div>
            </Col>
            <Col lg="6" className="mt-lg-0 mt-5">
              <Image
                src={SideImage}
                alt="hero"
                className="d-block img-fluid mx-auto"
                draggable="false"
                priority
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="9">
              <div className={styles.couter}>
                <ul className="d-flex flex-wrap align-items-center justify-content-md-center justify-content-evenly text-white list-unstyled gap-md-5 gap-4">
                  {[
                    ["400", "+", "Authors Trust Us"],
                    ["95", "%", "Customer Reoccurrence"],
                    ["2 K", "+", "Editor and Writers"],
                    ["99", "%", " Client Satisfaction"],
                  ].map(([text, subscript, desc], i) => (
                    <li key={i}>
                      {text}
                      <sub>{subscript}</sub>
                      <div className="d-flex align-items-center">
                        <Image src={SortRight} width={15} alt="icon" />
                        <span>{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero
