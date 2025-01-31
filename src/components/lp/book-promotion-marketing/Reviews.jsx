// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/reviews.module.css"
// Components
import { Autoplay } from "./index"
// Media
import Avater1 from "media/book-promotion-marketing/reviews/1.png"
import Avater2 from "media/book-promotion-marketing/reviews/2.png"
import Avater3 from "media/book-promotion-marketing/reviews/3.png"
const Reviews = () => {
  const data = [
    [
      Avater1,
      "Gavin Wyatt",
      "Hired Ghost Book Writers for promotion and marketing of my new story book for children. They did an amazing job. Before I hired them, there were close to no sales for my book. It keeps increasing now!",
    ],
    [
      Avater2,
      "Leah Tyler",
      "I have worked with Ghost Book Writers many times over the years for my memoir, book proposal, and articles. With each interaction, their team provided excellent editorial services. Highly recommended! ",
    ],
    [
      Avater3,
      "Ken Adams",
      "I loved their services and my experience was really smooth. The team helped me with book promotion and publishing. Their services were beyond my expectations. Definitely recommending it in my circle! ",
    ],
    [
      Avater1,
      "Gavin Wyatt",
      "Hired Ghost Book Writers for promotion and marketing of my new story book for children. They did an amazing job. Before I hired them, there were close to no sales for my book. It keeps increasing now!",
    ],
    [
      Avater2,
      "Leah Tyler",
      "I have worked with Ghost Book Writers many times over the years for my memoir, book proposal, and articles. With each interaction, their team provided excellent editorial services. Highly recommended! ",
    ],
    [
      Avater3,
      "Ken Adams",
      "I loved their services and my experience was really smooth. The team helped me with book promotion and publishing. Their services were beyond my expectations. Definitely recommending it in my circle! ",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>What Our Clients Say About Us?</h2>
              </div>
            </Col>
          </Row>
          <Autoplay arrows={false} dots={true}>
            {data?.map(([img, title, desc], i) => (
              <div className={styles.slides}>
                <div className={styles.card}>
                  <Image
                    src={img}
                    alt="avater"
                    className="d-block mx-auto img-fluid"
                  />
                  <h4>{title}</h4>
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

export default Reviews
