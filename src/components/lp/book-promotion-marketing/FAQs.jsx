// React
import React from "react"
// Next
import Image from "next/image"
// Bootstrap
import { Row, Col, Container } from "react-bootstrap"
// Css
import styles from "./styles/faqs.module.css"
// Media
import PlusIcons from "media/book-promotion-marketing/plus.png"

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <div className={styles.accordion}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: activeIndex === index,
          onToggle: () => handleToggle(index),
        })
      })}
    </div>
  )
}

const AccordionItem = ({ children, isActive, onToggle, title }) => {
  const contentRef = React.useRef(null)

  const [height, setHeight] = React.useState("0px")

  React.useEffect(() => {
    if (isActive) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight("0px")
    }
  }, [isActive])
  return (
    <div
      className={`${styles.accordion_item} ${isActive ? styles.active : ""}`}
    >
      <button className={styles.accordion_toggle} onClick={onToggle}>
        {title}
        <Image
          src={PlusIcons}
          width={15}
          alt="icon"
          className={styles.accordion_icon}
        />
      </button>
      <div
        ref={contentRef}
        className={`${styles.accordion_content}`}
        style={{ height }}
      >
        {children}
      </div>
    </div>
  )
}
const FAQs = () => {
  const data = [
    [
      "How do you get the sales?",
      "<p>Over the past years, we have built partnerships with companies that have millions of subscribers in their email lists who are notified when a book in their preferred genre comes out at a discounted price. We make promotional content for your book and send out the emails to qualified subscribers to get the sales for your eBook. We also run paid advertising campaign for your book on various platforms. Naturally, the “better” your book is, the more sales you’ll get.</p>",
    ],
    [
      "How many copies will I sell?",
      "<p>Our results vary for each book and its respective campaign. Below are the typical results of sales for our bestseller marketing campaigns:</p><ul><li>Book Launch: 300–1,000 eBook copies.</li><li>Book Launch+: 1,000–2,000 eBook copies.</li><li>Full Distribution Launch: 5,000–15,000 eBook copies.</li></ul>",
    ],
    [
      "How do I know my manuscript is in good hands?",
      "<p>Our team of award-winning editors has worked for traditional publishers, and some are published authors themselves. In addition, we've worked with a variety of self-publishing services over many years. The Chicago Manual of Style and Merriam-Webster Dictionary are our go-to guides. Our multistep quality-check process ensures accuracy. Rest assured that every one of our experienced professional editors offers world-class book editing services.</p>",
    ],
    [
      "What do I need to get started?",
      "<p>You just need a completed book (or you can hire us for writing a book for you!) and your marketing budget.</p>",
    ],
    [
      "What am I waiting for?",
      "<p>Great question! Fill out our signup form right away to get started!.</p>",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Row>
            <Col xs="12">
              <div className={styles.content}>
                <h2>Frequently Asked Questions</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Accordion>
                {data?.map(([title, desc], i) => (
                  <AccordionItem key={i} title={title}>
                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default FAQs
