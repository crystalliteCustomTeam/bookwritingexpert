// Next
import React from "react";
import style from "./Banner.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// Media
import bgim1 from "/public/images/bookmarketinglp/banner/Rectangle.png";
import partnerlogo2 from "/public/images/bookmarketinglp/partnerlogo2.png";
import bannerbooks from "/public/images/bookmarketinglp/bannerbooks.png";
import Bannerimg1 from "/public/images/bookmarketinglp/banner.png";

import Logo1 from "/public/images/bookmarketinglp/banner/entrepreneur.png";
import Logo2 from "/public/images/bookmarketinglp/banner/facebook-logo.png";
import Logo3 from "/public/images/bookmarketinglp/banner/huffpost.png";
import Logo4 from "/public/images/bookmarketinglp/banner/googlebook.png";
import Logo5 from "/public/images/bookmarketinglp/banner/IngramSpark.png";
import Logo6 from "/public/images/bookmarketinglp/banner/ibook.png";
import Logo7 from "/public/images/bookmarketinglp/banner/theNewyorktimes.png";

import rightCarousel1 from "/public/images/bookmarketinglp/banner/rightlogo/forbes.png"
import rightCarousel2 from "/public/images/bookmarketinglp/banner/rightlogo/inc-ar21.png"
import rightCarousel3 from "/public/images/bookmarketinglp/banner/rightlogo/Instagram-Wordmark.png"
import rightCarousel4 from "/public/images/bookmarketinglp/banner/rightlogo/lulu.png"
import rightCarousel5 from "/public/images/bookmarketinglp/banner/rightlogo/YahooFinance.png"
import rightCarousel6 from "/public/images/bookmarketinglp/banner/rightlogo/YouTube.png"
import rightCarousel7 from "/public/images/bookmarketinglp/banner/rightlogo/AmazonKindle.png"


import CTA from "../../CTA/CTA";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";


export default function Banner({
  title = "Smash Sales Records With A <br class='d-lg-block d-none'/> Leading Book Marketing Company!",
  desc = "We've helped 500+ authors become bestsellers. Our proven book marketing services boost visibility, engage readers, and skyrocket sales. Let's make your book the next big hit!",
  bannerImg = Bannerimg1,
}) {
  const [emblaRef] = useEmblaCarousel({axis: "y", dragFree: true, loop: true, slidesToScroll: "auto"}, [AutoScroll({playOnInit: true})]);
  const [emblaRef2] = useEmblaCarousel({axis: "y", dragFree: true, loop: true, slidesToScroll: "auto"}, [AutoScroll({playOnInit: true})]);
  
  return (
    <section>
      <div className={`${style.banner}`}>
        <Image src={bannerImg} alt="Book Marketing" className={style.BannerImg} />
        <Container>
          <Row>
            <Col lg={2} xl={2} className="d-lg-block d-none ">
              <section className={`${style.embla}`}>
                <div className={`${style.embla__viewport}`} ref={emblaRef}>
                  <div className={`${style.embla__container}`}>
                    {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7].map((imgPortfolio, index) => (
                      <div className={`${style.embla__slide}`} key={index}>
                        <Image src={imgPortfolio.src} alt="Book Marketing" className="img-fluid" width={150} height={40} quality={100} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </Col>
            <Col md={11} lg={8} xl={8} className="mx-auto">
              <div className={`${style.w85} mx-auto text-center pt-5`}>
                <h1 className="fw500 mb-4" dangerouslySetInnerHTML={{__html: title}} />
                <p className="fw400" dangerouslySetInnerHTML={{__html: desc}} />
                <div className="d-flex flex-md-row flex-column gap-3 justify-content-center mb-4">
                  <CTA text="(855) 500 0057" classes="!text-black" color="text-black" handle="" bg="bgWhite" link="tel:855-500-0057" />
                  <CTA text="Get A Quote" link="javascript:$zopim.livechat.window.show();" bg="bgOrangeRoundednone" color="text-white" border="text-white " />
                </div>
              </div>
              <div className="mx-auto">
                <Image src={bannerbooks} alt="Book Marketing" className="img-fluid d-block mx-auto" quality={95} width={800} height={600} />
              </div>
            </Col>
            <Col lg={2} xl={2} className="d-lg-block d-none">
              <section className={`${style.embla}`}>
                <div className={`${style.embla__viewport}`} ref={emblaRef2}>
                  <div className={`${style.embla__container}`}>
                    {[rightCarousel1, rightCarousel2, rightCarousel3, rightCarousel4, rightCarousel5, rightCarousel6, rightCarousel7].map((imgPortfolio, index) => (
                      <div className={`${style.embla__slide}`} key={index}>
                        <Image src={imgPortfolio.src} alt="Book Marketing" className="img-fluid" width={150} height={40} quality={100} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
