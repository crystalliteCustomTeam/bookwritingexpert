import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import styles from "@/styles/OurServices.module.css";
import Image from "next/image";

// Images
import Client1 from "../public/images/amazonbookpublishing/testi1.png";
import Client2 from "../public/images/amazonbookpublishing/testi2.png";
import Client3 from "../public/images/amazonbookpublishing/jacob-hartley.png";
import Client4 from "../public/images/amazonbookpublishing/matthew-udoni.png";
import Client5 from "../public/images/amazonbookpublishing/benjamin-norris.png";
import Client6 from "../public/images/amazonbookpublishing/andrew-peters.png";
import Star from "../public/images/amazonbookpublishing/star.png";

const OurServices = () => {
  var partnersslider = {
    dots: true,
    arrows: false,
    autoplay: false,
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
    ],
  };
  return (
    <>
      <section className={`${styles.ourServices} ourservices`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="font50 fw700 text-black text-center mb-4">
                The Stamp of Approval for Our Services
              </h2>
              <Slider
                {...partnersslider}
                className={`mt-5 ${styles.slider} OurServices`}
              >
                <div className="">
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
                <div className="">
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
                <div className="">
                  <div className={styles.crad}>
                    <Image
                      src={Client3}
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
                        What stood out the most was their ability to capture the
                        essence of my characters and scenes. The illustrations
                        were beautifully drawn and conveyed the emotions and
                        messages of my story flawlessly. Communication with the
                        team of Book Writing Experts was smooth and efficient.
                        They kept me updated throughout the illustration
                        process, sharing drafts and seeking feedback to ensure
                        everything aligned with my vision.
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Jacob Hartley
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={styles.crad}>
                    <Image
                      src={Client4}
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
                        I could not recommend BWE strongly enough. After having
                        been scammed by another "publisher" earlier in the year,
                        I had significant anxiety trusting another company. BWE
                        was extremely professional and prompt in their services
                        and, in particular, Carol Norbert was exception in her
                        support services. BWE's services are top notch!
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Matthew Udoni
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={styles.crad}>
                    <Image
                      src={Client5}
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
                        I can't express how satisfied I am with The Book Writing
                        Experts. From our initial consultation to the final
                        draft, everything was smooth sailing. They managed to
                        capture the essence of DnD, complete with epic battles,
                        intricate spellwork, and complex characters. If you're
                        an author in the DnD fantasy niche, this is the company
                        you want to go with.
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Benjamin Norris
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={styles.crad}>
                    <Image
                      src={Client6}
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
                        I hired The Book Writing Experts to give my
                        psychological horror novel a facelift, and the results
                        were nothing short of astonishing! They took my already
                        twisted plot and characters and amplified the fear
                        factor to an entirely new level. The revised manuscript
                        was an eerie journey through the depths of the human
                        psyche, filled with dread and suspense. They created
                        phrases that were both exquisitely worded and intensely
                        frightening, which improved the story's mood overall.
                      </p>
                      <h5 className="fw700 font25 text-center ">
                        Andrew Peters
                      </h5>
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
