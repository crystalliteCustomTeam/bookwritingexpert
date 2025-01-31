"use client"
// React
import { useEffect, useState } from "react"
// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "@/components/lp/book-promotion-marketing/styles/header.module.css"
// Image
import Logo from "media/images/logo.svg"
import CommentIcon from "media/book-promotion-marketing/comment.png"
import CallIcon from "media/book-promotion-marketing/call.png"
// Components
import { CTA } from "./index"
const BookPromotionHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="3" xs="12">
              <a href="#" className="text-decoration-none d-block">
                <Image
                  loading="lazy"
                  quality={100}
                  className={styles.logonew}
                  src={Logo}
                  alt="Book Writing Experts"
                ></Image>{" "}
              </a>
            </Col>
            <Col md="9" xs="12">
              <nav>
                <ul className={`p-0 m-0 ${styles.unorderdList}`}>
                  <li className="p-0 m-0">
                    <a
                      href="tel:+17185404968"
                      className="text-decoration-none font-secondary d-inline-flex align-items-center gap-2 text-white"
                    >
                      <Image src={CallIcon} width={40} alt="icon" />
                      <div className={styles.callCTA}>
                        <span className="d-block">TALK TO US</span>
                        <span className="d-block">+1 (718) 540-4968</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="tel:+17185404968"
                      className="text-decoration-none font-secondary d-inline-flex align-items-center gap-2 text-white"
                    >
                      <Image src={CommentIcon} alt="icon" />
                      <div className={styles.chatCTA}>
                        <span className="d-block">24/7 AVAILABLE</span>
                        <span className="d-block">Live Chat</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-0 m-0 d-lg-block d-none">
                    <CTA text="Get A Free Quote" />
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default BookPromotionHeader
