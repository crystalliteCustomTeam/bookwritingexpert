import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image"; 
import { useMediaQuery } from "react-responsive";
import styles from "@/styles/DiveStories.module.css";

// Images 
import Book2 from "../public/images/amazonbookpublishing/dive2.png"; 
import Book4 from "../public/images/amazonbookpublishing/dive4.png";
import Book5 from "../public/images/amazonbookpublishing/dive5.png";
import Book6 from "../public/images/amazonbookpublishing/dive6.png";
import Book7 from "../public/images/amazonbookpublishing/dive7.png";
import Book8 from "../public/images/amazonbookpublishing/dive8.png";
import Book9 from "../public/images/amazonbookpublishing/dive9.png";
import Book10 from "../public/images/amazonbookpublishing/dive10.png";
import Book12 from "../public/images/amazonbookpublishing/dive12.png";
import Book13 from "../public/images/amazonbookpublishing/dive13.png";
import Book14 from "../public/images/amazonbookpublishing/dive14.png";
import Book15 from "../public/images/amazonbookpublishing/dive15.png";
import Book16 from "../public/images/amazonbookpublishing/dive16.png";
import Book17 from "../public/images/amazonbookpublishing/dive17.png";
import Book18 from "../public/images/amazonbookpublishing/dive18.png";
import Book19 from "../public/images/amazonbookpublishing/dive19.png";
import Book20 from "../public/images/amazonbookpublishing/dive20.png";
import Book21 from "../public/images/amazonbookpublishing/dive21.png";
import Book22 from "../public/images/amazonbookpublishing/dive22.png";
import Book23 from "../public/images/amazonbookpublishing/dive23.png";
import Book24 from "../public/images/amazonbookpublishing/dive24.png";
import Book25 from "../public/images/amazonbookpublishing/dive25.png";
import Book26 from "../public/images/amazonbookpublishing/dive26.png";
import Book27 from "../public/images/amazonbookpublishing/dive27.png";
import Book28 from "../public/images/amazonbookpublishing/dive28.png";
import Book29 from "../public/images/amazonbookpublishing/dive29.png";
import Book30 from "../public/images/amazonbookpublishing/dive30.png";
import Book31 from "../public/images/amazonbookpublishing/dive31.png";
import Book32 from "../public/images/amazonbookpublishing/dive32.png";
import Book33 from "../public/images/amazonbookpublishing/dive33.png";
import Book34 from "../public/images/amazonbookpublishing/dive34.png";
import Book35 from "../public/images/amazonbookpublishing/dive35.png";
import Book36 from "../public/images/amazonbookpublishing/dive36.png";
import Book37 from "../public/images/amazonbookpublishing/dive37.png";
import Book38 from "../public/images/amazonbookpublishing/dive38.png";
import Book39 from "../public/images/amazonbookpublishing/dive39.png";


const DiveStories = () => {
  
  const bookImages = [ 
    Book2, 
    Book4,
    Book5,
    Book6,
    Book7,
    Book8,
    Book9,
    Book10,
    Book12,
    Book13,
    Book14,
    Book15,
    Book16,
    Book17,
    Book18,
    Book19,
    Book20,
    Book21,
    Book22,
    Book23,
    Book24,
    Book25,
    Book26,
    Book27,
    Book28,
    Book29,
    Book30,
    Book31,
    Book32,
    Book33,
    Book34,
    Book35,
    Book36,
    Book37,
    Book38,
    Book39,
  ];

  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const visibleItems = showAll
    ? bookImages
    : bookImages.slice(0, isMobile ? 2 : 8);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  var partnersslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.diveSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="font50 fw700 text-black text-center mb-2">
                We are proud of our Published Project
              </h2>
              <h6 className="text-center font25 fw600">
                Biographies, Autobiographies, Memoirs, Business Books, and
                Beyond!
              </h6>
              <p className="text-center f20 fw400 mb-sm-5">
                Explore Examples of Our Custom Creations Below.
              </p>
            </Col>
          </Row>
          <Row className="gy-3 justify-content-center">
            {visibleItems.map((bookSrc, index) => (
              <Col md={3}>
                <div className={styles.books}>
                  <Image  
                    quality={75}
                    alt={`Book${index + 3}`}
                    src={bookSrc}
                    className="img-fluid"
                  />
                </div>
              </Col>
            ))}
            <Col lg={12}>
              <button onClick={toggleShowAll} className={styles.showMoreBtn}>
                {showAll ? "Show Less" : "Show More"}
              </button>
            </Col>
          </Row> 
        </Container>
      </section>
    </>
  );
};

export default DiveStories;
