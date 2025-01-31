// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/qualify.module.css"

const Qualify = () => {
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>Drive Awareness to Your Book and Author Platform</h2>
                <p>
                  Our book marketing services are tailored to your goals, your
                  genre, and your skill level. Whether you’re starting from
                  scratch or refining your current efforts, we’re here to guide
                  you to better book promotion.
                </p>
                <p>
                  Over the years, Ghost Book Writers has launched many USA
                  Today, Wall Street Journal, Amazon, and Barnes & Noble
                  bestsellers.
                </p>
                <p>
                  We've partnered with some of the biggest independent, hybrid,
                  and traditional publishers in the world and are fortunate
                  enough to be able to work with amazing authors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Qualify
