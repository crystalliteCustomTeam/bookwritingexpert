import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import styles from '@/styles/InnerBlog.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Date from "@/lib/Date";
//
import arrow from '../../../public/images/blogBanners/right-arrow.webp'
import logo from '../../../public/favicon.svg'


export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);

    let featuredImageUrl = "https://wp23.cryscampus.com/bwe/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";

    if (postData.featuredImage) {
        featuredImageUrl = `https://wp23.cryscampus.com/bwe/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`;
    }

    return {
        props: {
            postData,
            featuredImageUrl,
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Post({ postData, featuredImageUrl }) {


    const [score, setScore] = useState('Submit Details');

    const handleSubmit = async (e) => {

        e.preventDefault()


        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');



        fetch('api/submit/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })

        const { pathname } = Router
        if (pathname == pathname) {
            Router.push('/thank-you')
        }

    }

    return (
        <>
            <Head>
                <title key="title">{postData.title}</title>
                <meta name="description" content={postData.metaDesc} key="metadesc" />
                <meta property="og:title" content={postData.opengraphTitle} />
                <meta key="og-description" property="og:description" content={postData.metaDesc} />
                <meta property="og:url" content={postData.opengraphUrl} />
                <meta property="og:type" content={postData.opengraphType} />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={postData.opengraphSiteName} />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <section className={styles.innerBlog}>
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={8}>
                            <div className={styles.blogContent}>
                                <div className={`${styles.contentHeading}`}>
                                    <h1>{postData.title}</h1>
                                    <h6 className={`${styles.detailDate} mt-5`}>
                                        <Image src={logo} alt="Book Writing Experts" width={25} height={25} />
                                        <span>By Book Writing Experts Team in 2023</span>
                                    </h6>
                                    <h6 className="mt-3 mb-0 fw-bold font14">
                                        Published on  <Date dateString={postData.date} />
                                    </h6>
                                </div>
                                <div className="mt-4">
                                    <Image src={featuredImageUrl} className={styles.newstyleimg} alt="Book Writing Experts" width={736} height={450} />
                                </div>
                                <div className={`${styles.contentBody} mt-4`}
                                    dangerouslySetInnerHTML={{ __html: postData.content }}>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className={`${styles.cta} mt-5 mt-lg-0`}>
                                <div className={styles.ctaImg}>
                                    <Link href="/blog" className={`${styles.ctaBtn} mt-5`}>
                                        get custom web designs
                                    </Link>
                                </div>
                            </div>

                            <div className={`${styles.platForm} mt-5`}>
                                <h5 className={styles.subTitle}>
                                    Endorsements on different Platforms
                                </h5>
                                <h5 className={styles.title}>
                                    Awards And Recognition
                                </h5>
                                <p className={styles.para}>
                                    Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                    us to receive acknowledgment and recognition by leading ratings and review platforms.
                                </p>
                                <Link href="/blog" className={`${styles.arrowBtn} mt-3`}>
                                    <span>View Reviews</span>
                                    <Image className='img-fluid' src={arrow} alt="Book Writing Experts" />
                                </Link>
                            </div>

                            <div className={`${styles.newsLetter} mt-5`}>
                                <h4>Signup for</h4>
                                <h5>Newsletter</h5>
                                <form className="mt-4" onClick={handleSubmit}>
                                    <div>
                                        <input type="text" name="name" id="name" placeholder="FULL NAME" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                    </div>
                                    <button type="submit" className={`${styles.arrowBtn} mt-4`}>
                                        <span>{score}</span>
                                        <Image className='img-fluid' src={arrow} alt="Book Writing Experts" />
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}