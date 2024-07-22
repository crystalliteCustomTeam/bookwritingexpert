import {useState, useId} from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Faqs.module.css";
import Arrows from "/public/images/bookmarketinglp/Arrows.png";
import ActiveArrow from "/public/images/bookmarketinglp/ActiveArrow.png";
import Image from "next/image";

export default function Faqs({title, items}) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section>
      <div className={style.faqs}>
        <Container>
          <Row>
            <Col>
              <div className="text-center text-justify mb-5">
                <h2 dangerouslySetInnerHTML={{__html: title}} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} xl={12} className="mx-auto">
              <div>
                {items.map(([title, desc], index) => (
                  <div key={index}>
                    <div className={`d-flex gap-5 ${openIndex === index ? "my-2 align-items-start" : "my-0 align-items-center"}`}>
                      <button className={`w-100 ${openIndex === index ? style.btnCollapse : style.btnCss } `} onClick={() => toggleAccordion(index)}>
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h4 className={`${openIndex === index ? "mb-4" : "mb-0"}`}>{title}</h4>
                            <span className="d-block">
                              {openIndex === index ? (
                                 <Image src={ActiveArrow} alt="Expand" className={style.rotateArrow} width={25} height={25} />
                              ) : (
                               
                                <Image src={Arrows} alt="Collapse" width={25} height={25} />
                              )}
                            </span>
                          </div>
                          {openIndex === index && <p>{desc}</p>}
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
