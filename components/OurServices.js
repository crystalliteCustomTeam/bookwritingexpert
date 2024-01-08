import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import styles from "@/styles/OurServices.module.css";
import Image from "next/image";

// Images
import Client1 from "public/images/amazonbookpublishing/testi1.png";
import Client2 from "public/images/amazonbookpublishing/testi2.png";
import Star from "public/images/amazonbookpublishing/star.png";

const OurServices = () => {
  var partnersslider = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className={`${styles.ourServices} ourservices`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="font45 fw400 text-black text-center mb-5 pb-3">
                The Stamp of Approval for Our Services
              </h2>
              <Slider
                {...partnersslider}
                className={`mt-5 ${styles.slider} OurServices`}
              >
                <div className="mx-4">
                  <div className={styles.crad}>
                    <Image
                      src={Client1}
                      alt="Client1"
                      width={93}
                      height={93}
                      className="mx-auto"
                    />
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                    </div>
                    <div className="">
                      <p className="text-center font18 fw200 pt-4">
                        Book Writing Experts made the process of publishing my
                        book a breeze. They handled everything with expertise
                        and efficiency, from formatting and cover design to
                        distribution and marketing. They even offered
                        personalized support throughout the process, ensuring I
                        felt confident and informed. I’m so glad I chose them to
                        help me bring my book to market.
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Abigail Smith
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="mx-4">
                  <div className={styles.crad}>
                    <Image
                      src={Client2}
                      alt="Client1"
                      width={93}
                      height={93}
                      className="mx-auto"
                    />
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                    </div>
                    <div className="">
                      <p className="text-center font18 fw200 pt-4">
                        As an author who dreamed of seeing my book listed on all
                        the major platforms, including Goodreads, Amazon,
                        BookBub, and Apple Books, I am thrilled to say that my
                        expectations have been surpassed. Thanks to the
                        dedicated efforts of Book writing experts, my book has
                        achieved widespread visibility and success.
                      </p>
                      <h5 className="fw700 font25 text-center ">Glint</h5>
                    </div>
                  </div>
                </div>
                <div className="mx-4">
                  <div className={styles.crad}>
                    <Image
                      src={Client1}
                      alt="Client1"
                      width={93}
                      height={93}
                      className="mx-auto"
                    />
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                    </div>
                    <div className="">
                      <p className="text-center font18 fw200 pt-4">
                        Book Writing Experts made the process of publishing my
                        book a breeze. They handled everything with expertise
                        and efficiency, from formatting and cover design to
                        distribution and marketing. They even offered
                        personalized support throughout the process, ensuring I
                        felt confident and informed. I’m so glad I chose them to
                        help me bring my book to market.
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Abigail Smith
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="mx-4">
                  <div className={styles.crad}>
                    <Image
                      src={Client2}
                      alt="Client1"
                      width={93}
                      height={93}
                      className="mx-auto"
                    />
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                      <Image src={Star} width={20} height={19} />
                    </div>
                    <div className="">
                      <p className="text-center font18 fw200 pt-4">
                        As an author who dreamed of seeing my book listed on all
                        the major platforms, including Goodreads, Amazon,
                        BookBub, and Apple Books, I am thrilled to say that my
                        expectations have been surpassed. Thanks to the
                        dedicated efforts of Book writing experts, my book has
                        achieved widespread visibility and success.
                      </p>
                      <h5 className="fw700 font25 text-center ">Glint</h5>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurServices;
