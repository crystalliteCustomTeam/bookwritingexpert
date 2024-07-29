import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Testimonials.module.css";
import { AutoPlaySlider } from "..";
import Image from "next/image";
import starImg from "/public/images/bookmarketinglp/star.png"
import googleReview from "/public/images/bookmarketinglp/google-review-new.png"
import trustpilot from "/public/images/bookmarketinglp/trustpilot.png"
import nicon from "/public/images/bookmarketinglp/Nicon.png"

const dataTestimonial=[
    {
        title:"Dr. Liam O'Malley",
        position:"Astrophysicist ",
        desc:"Book Writing Experts launched my sci-fi novel 'Celestial Cradle' into the literary stratosphere! Their targeted marketing strategies propelled my book past the competition, creating a gravitational pull of reader interest.",
        imgIcon: trustpilot,
    },
    {
        title:"Willow Green",
        position:"Herbalist",
        desc:"As a self-published author of plant-powered guides, I was hesitant about book promotion. Their team has set up a perfect marketing plan, reaching a new audience eager to explore the healing power of nature.",
        imgIcon: googleReview,
    },
    {
        title:"Enzo Rossi",
        position:"Wildlife photographer",
        desc:"Their visual storytelling brought 'Nature's Symphony' to life. Their captivating campaigns transformed my wildlife photography into a visual feast, leaving readers enthralled by the beauty of the natural world.",
        imgIcon: nicon,
    },
    {
        title:"Isabela Rodriguez",
        position:"Chef",
        desc:"My cookbook 'Sabor Latino' wouldn't be a global fiesta without them. Their multicultural marketing strategies transformed my humble recipes into a vibrant culinary adventure for audiences worldwide.",
        imgIcon: trustpilot,
    },
    {
        title:"Dr. Nikolai Petrov",
        position:"Philosopher",
        desc:"The team is fantastic, they sparked a philosophical wildfire with my book 'Beyond Existence.' Their online marketing ignited intellectual debates, drawing readers into a vortex of thought-provoking ideas.",
        imgIcon: googleReview,
    },
    {
        title:"Fiona Davies",
        position:"Tech Entrepreneur",
        desc:"Their team is awesome! They decoded the tech jargon in my book 'Coding for Change.' Their marketing strategies hacked into a new generation of tech enthusiasts ready to revolutionize the world.",
        imgIcon: nicon,
    },
]

export default function Testimonials({
  title = "Insights From Our Valued Clients",
  desc = "Hear what our authors have to say about their experience working with our book promotion company. See how we've helped them achieve their publishing goals.",
}) {
  return (
    <section>
      <div className={style.__testimonials}>
        <Container>
          <Row>
            <Col md={10} lg={10} xl={10} className="mx-auto">
              <h3 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-center" dangerouslySetInnerHTML={{__html: desc}} />
            </Col>
          </Row>

          <Row>
            <AutoPlaySlider arrows={true} options={{align: "center"}} wrapperClasses="__testiCard" direction="forward">
              {dataTestimonial?.map((e, i) => (
                <Col key={i} xs={12} sm={12} md={6} lg={4} xl={4} className={`mx-auto px-3`}>
                  <div className={`d-flex flex-column gap-lg-3 gap-3 overflow-hidden ${style.slider}`}>
                    <div className={`d-flex align-items-center justify-content-between ${style.borderLine}`}>
                        <div className="d-flex flex-column">
                            <Image src={starImg} alt="Testimonial Book Marketing" className="" width={100} height={20} quality={100}/>
                            <h3 className="mt-2 mb-0" dangerouslySetInnerHTML={{__html: e.title}}/>
                            <span dangerouslySetInnerHTML={{__html: e.position}}/>
                        </div>
                        <Image src={e.imgIcon} alt="Review" width={90} height={50} quality={100}/>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: e.desc}}/>
                    </div>
                  </div>
                </Col>
              ))}
            </AutoPlaySlider>
          </Row>
        </Container>
      </div>
    </section>
  );
}
