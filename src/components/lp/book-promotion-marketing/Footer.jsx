// Next
import Link from "next/link"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/footer.module.css"
const BookPromotionFooter = () => {
  return (
    <footer>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
            <div className={styles.content}>
              <span>Copyright © 2025, Infinti Media INC All Rights Reserved</span>
              <Link href="/terms-of-use">Terms Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default BookPromotionFooter