// Next
import Image from "next/image"
// Bootstrap
import { Container } from "react-bootstrap"
// Components
import { Autoscroll } from "./index"
// Css
import styles from "./styles/client-logos.module.css"
// Media
import Logo1 from "media/book-promotion-marketing/client-logo/1.png"
import Logo2 from "media/book-promotion-marketing/client-logo/2.png"
import Logo3 from "media/book-promotion-marketing/client-logo/3.png"
import Logo4 from "media/book-promotion-marketing/client-logo/4.png"
import Logo5 from "media/book-promotion-marketing/client-logo/5.png"
const ClientLogos = () => {
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
  ]
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <Autoscroll>
            {logos?.map((e, i) => (
              <div className={styles.slides} key={i}>
                <Image src={e} alt="logos" />
              </div>
            ))}
          </Autoscroll>
        </Container>
      </div>
    </section>
  )
}

export default ClientLogos
