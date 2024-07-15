import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "@/styles/Publicationlp.module.css"

// images
import PublicImage from "../public/images/newlp/dem.png"
import Image from "next/image";

const Publications = () => {
  return (
    <>
      <section className={styles.Publicsec}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 class=" font-f fw700 text-center mb-4">
                Many Got Featured In Major Publications<br className="d-lg-block d-none" /> Just By Working With Us.
              </h2>
              <p className="text-center f20 fw400 mb-5 pb-3 font-f">
                Oftentimes, we find ourselves indulging in thoughts that others
                might fascinating. Most of them remain limited to the abyss
                inside our heads. However, some ideas/<br className="d-2xl-block d-none" />stories and visions are
                meant for the world to read and study. The ideas develop once
                you write, but the important aspect is to let the world to see
                your work and<br className="d-2xl-block d-none" /> change mindsets!
              </p>
              <div className="Image">
                <Image src={PublicImage} alt="Book Writing Experts" width={1316} height={262} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Publications;
