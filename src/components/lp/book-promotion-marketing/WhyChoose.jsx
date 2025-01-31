// Next
import Image from "next/image"
// Css
import styles from "./styles/why-choose.module.css"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Components
import CTA from "./CTA"
import { Autoplay } from "./index"
// Media
import Banner from "media/book-promotion-marketing/why-choose-bg.jpg"
import Icon1 from "media/book-promotion-marketing/why-choose/1.png"
import Icon2 from "media/book-promotion-marketing/why-choose/2.png"
import Icon3 from "media/book-promotion-marketing/why-choose/3.png"
import Icon4 from "media/book-promotion-marketing/why-choose/4.png"
import Icon5 from "media/book-promotion-marketing/why-choose/5.png"

const WhyChoose = () => {
  const data = [
    [
      Icon1,
      "Personalized Service",
      "We design a specific set of services for each unique author and book. Our experienced publicists take the time to research media contacts and reach out to them in a personalized manner, making all the difference.",
    ],
    [
      Icon2,
      "Extended Experience",
      "Ghost Book Writers has no junior publicists. Every member of our team is experienced. Most of our publicists have been with us for over five years and many for over ten. This is rare in the book publicity industry.",
    ],
    [
      Icon3,
      "Team Approach",
      "We often use two publicists on a campaign, alongside a Team Manager and Director of Publicity who are either involved or supervising every campaign. This is to ensure every campaign receives maximum attention.",
    ],
    [
      Icon4,
      "Campaigns Backup",
      "If a publicist appointed on a particular campaign is unavailable for any reason, our team structure allows for a seamless transition to another publicist or manager already closely involved in the campaign.",
    ],
    [
      Icon5,
      "Creative Tactics",
      "Ghost Book Writers employ unique book promotion strategies and tactics no other firm does, and our ability to make books and authors stand out from the crowd is well-known with both media and publishers.",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <Image src={Banner} alt="banner" className={styles.bannerImage} />
        <Container>
          <Row>
            <Col lg="6">
              <div className={styles.content}>
                <h2>Why Choose Our Services</h2>
                <p>
                  So it's clear why getting media's attention and other book
                  marketing tactics will make you stand out and increase your
                  book sales, but the question remains — why choose us for your
                  book promotion & marketing?
                </p>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <CTA css={styles.whyChooseCTA1} />
                  <CTA text="Live Chat" css={styles.whyChooseCTA2} />
                </div>
              </div>
            </Col>
          </Row>
          <Autoplay arrows={false} dots={true} align="start">
            {data?.map(([img, text, desc], i) => (
              <div key={i} className={styles.slides}>
                <div className={styles.card}>
                  <Image src={img} alt="icon" />
                  <h3>{text}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </Autoplay>
        </Container>
      </div>
    </section>
  )
}

export default WhyChoose
