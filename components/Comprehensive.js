import React from 'react'
import styles from '@/styles/Comprehensive.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import comprehensive1 from '../public/images/comprehensive/1.png'
import comprehensive2 from '../public/images/comprehensive/2.png'
import comprehensive3 from '../public/images/comprehensive/3.png'
import comprehensive4 from '../public/images/comprehensive/4.png'
import icon1 from '../public/images/comprehensive/icon1.png'
import icon2 from '../public/images/comprehensive/icon2.png'
import icon3 from '../public/images/comprehensive/icon3.png'
import icon4 from '../public/images/comprehensive/icon4.png'
import icon6 from '../public/images/comprehensive/icon6.png'
import icon7 from '../public/images/comprehensive/icon7.png'
import icon8 from '../public/images/comprehensive/icon8.png'
import icon9 from '../public/images/comprehensive/icon9.png'
import icon10 from '../public/images/comprehensive/icon10.png'
import icon11 from '../public/images/comprehensive/icon11.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Comprehensive = () => {


    var bookrecordingprojects = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [isSliderActive, setIsSliderActive] = useState(true);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 480) {
                setIsSliderActive(true);
            } else {
                setIsSliderActive(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);






    const card =
        [
            {
                image: icon1,
                title: 'Book Editing',
                subTitle: "Book Editing",
                pra: "Once your ideas are on paper, you need an expert’s eye to look for the red flags. Book editing can be a tiresome and redundant process for which we have experts running the show. Book Writing Expert enhances your book’s vocabulary and sentence formations, in order to provide your readers a refined product."

            },
            {
                image: icon2,
                title: 'Book Writing',
                subTitle: "Book Writing",
                pra: "From our writing approach to phrasing selection, we're all about creating riveting stories of any length or type. Let us handle your project from beginning to end with absolute finesse since, when you have professionals like us on your team, no responsibility is too huge."

            },
            {
                image: icon11,
                title: 'Book Publishing Services',
                subTitle: "Book Publishing Services",
                pra: "Book Writing Expert is one of the most preferred publishing agencies, specializing in book publishing on all platforms. Having assisted thousands of fiction/non-fiction writers become documented authors. We guarantee you a completely seamless publication process."

            },
            {
                image: icon6,
                title: 'Article Publication',
                subTitle: "Article Publication",
                subTitle: "Article Publication",
                pra: "Content creation has always been an automated process to us. Writing blogs and Articles and publishing them is an easy task for us. Our job doesn’t end once we’re done publishing, we also share it on multiple online platforms in order to gain traction to your content. "

            },

            {
                image: icon7,
                title: 'Children’s Book Publication',
                subTitle: "Children’s Book Publication",
                pra: "Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist."

            },

            {
                image: icon10,
                title: 'E-Book Writing',
                subTitle: "E-Book Writing",
                pra: "Professional eBook writing increases traffic, and our experienced authors are aware of the best practices for retaining readers through compelling word choice. When it comes to custom eBook writing services, we are the best choice. Try collaborating with us! You won't regret doing it!"

            },

            {
                image: icon8,
                title: "Children's Book Illustrations",
                subTitle: "Children's Book Illustrations",
                pra: "Kids may be choosy and unfiltered when they want to be with the things that are offered to them! That does not mean they are impartial. They pick up the book and flip over the pages to evaluate whether the illustrations and designs appeal to them. Give them books they'll be eager to return to time and time again!"

            },

            {
                image: icon9,
                title: 'Book Marketing',
                subTitle: "Book Marketing",
                pra: "Stop getting lost in the mix with our remarkable book marketing services! We advertise and promote your book in the most efficient way possible, taking it from the back of the shelf to the top of the bestseller list. We are the marketing & promotion specialists for the books you require."

            },


        ]
    return (
        <>
            <div className={styles.comprehensive}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h2 className="fw700 color-blue font50 font-f t-center mb-5">Our Comprehensive Services Include</h2>

                        </Col>

                    </Row>
                    {isSliderActive ?
                        <Slider {...bookrecordingprojects}>

                            {card.map((item, i) => {
                                return (


                                    <div className={styles.flipcard} key={i}>
                                        <div className={styles.flipcardinner}>
                                            <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                <Image loading="lazy" quality={70} className='img-fluid' src={item.image} alt="Book Writing Experts"></Image>
                                                <h3>{item.subTitle}</h3>
                                            </div>
                                            <div className={styles.flipcardback}>
                                                <h3 className='mt-2'>{item.title}</h3>
                                                <p>{item.pra}</p>

                                            </div>
                                        </div>
                                    </div>


                                )
                            })}

                        </Slider>


                        :

                        <Row className='gy-5'>
                            {card.map((item, i) => {
                                return (
                                    <Col className={`${styles.post} col-md-3`} key={i}>

                                        <div className={styles.flipcard}>
                                            <div className={styles.flipcardinner}>
                                                <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                    <Image loading="lazy" quality={70} className='img-fluid' src={item.image} alt="Book Writing Experts"></Image>
                                                    <h3>{item.subTitle}</h3>
                                                </div>
                                                <div className={styles.flipcardback}>
                                                    <h3 className='mt-2'>{item.title}</h3>
                                                    <p>{item.pra}</p>

                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                )
                            })}




                        </Row>
                    }
                </Container>

            </div>
        </>

    )
}

export default Comprehensive