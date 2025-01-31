// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/promote-book.module.css"
// Components
import { Autoplay } from "./index"
// Media
import Book1 from "media/book-promotion-marketing/promote-book/1.png"
import Book2 from "media/book-promotion-marketing/promote-book/2.png"
import Book3 from "media/book-promotion-marketing/promote-book/3.png"
import Book4 from "media/book-promotion-marketing/promote-book/4.png"
import Book5 from "media/book-promotion-marketing/promote-book/5.png"
import Book6 from "media/book-promotion-marketing/promote-book/6.png"
import Book7 from "media/book-promotion-marketing/promote-book/7.png"
import Book8 from "media/book-promotion-marketing/promote-book/8.png"
const PromoteBook = () => {
  const data = [
    [
      "Media Outreach",
      Book1,
      "When media write or broadcast stories about your work and books, it improves credibility and sparks readers’ interest in discovering more.",
    ],
    [
      "Social Media Visibility",
      Book2,
      "We post content that attracts followers and allows you as an author to communicate with your readers, building word-of-mouth for your work.",
    ],
    [
      "Appearances & Events",
      Book3,
      "Meeting people and getting your story out is highly effective. Holding book events makes your story memorable for readers and newsworthy.",
    ],
    [
      "Author Branding",
      Book4,
      "You can instill interest in your readers by doing well in appearances and interviews, you build relationships that spark interest and sales.",
    ],
    [
      "Video Promotions",
      Book5,
      "Author appearances in short videos posted to a YouTube channel are highly effective in reaching readers who are interested in your topic.",
    ],
    [
      "GoodReads Visibility",
      Book6,
      "High GoodReads visibility and on similar sites help readers to discover your work. Maintaining profiles take time, but it's worth the efforts.",
    ],
    [
      "Trade Shows & Expos",
      Book7,
      "Getting out and meeting people in-person is a great way to build relationships and interest; people like to read more from people they know.",
    ],
    [
      "Paid Reviews",
      Book8,
      "Because reviews can be critical drivers of reader interest, people publishing favorable opinions about your work can provide you a sales boost.",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>The Tactics We Use to Successfully Promote Your Books</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.root2}>
          <span className={styles.before}></span>
        <Autoplay arrowsCss={styles.slidesArrows} arrowNextCss={styles.slidesNextArrow} arrowPrevCss={styles.slidesPrevArrow}>
          {data?.map(([title, img, desc], i) => (
            <div key={i} className={styles.slides}>
              <div className={styles.card}>
                <h3>{title}</h3>
                <Image src={img} alt="books" className="d-block mx-auto w-100" />
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </Autoplay>
          <span className={styles.after}></span>
        </div>
      </div>
    </section>
  )
}

export default PromoteBook
