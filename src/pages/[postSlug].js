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
import arrow from '../../public/images/blogBanners/right-arrow.webp'
import logo from '../../public/favicon.svg'
import { useRouter } from 'next/router';
import Router from "next/router";




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

    const router = useRouter();
    const { postSlug } = router.query;
    const path = router.pathname;

    const slug = `${postSlug}`;

    const handleSubmit = async (e) => {

        e.preventDefault();


        const data = {
            name: e.target.first.value,
            email: e.target.email.value,
            pageUrl: slug,
        }

        console.log(data);

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');



        fetch('../api/submit/route', {
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
            window.location.href = 'https://www.bookwritingexperts.com/thank-you';
        }

    }
    const newpath = router.asPath;


    return (
        <>
            {newpath === '/alberta-amazon-kdp' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Dive into global publishing from home. Discover how with our Alberta Amazon KDP guide. Read now!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/oregon-book-publishers' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Discover how Oregon publishers are taking the lead. Click to read this blog and contact us today to start your book publishing journey' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/hire-ebook-writing-services-usa' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Explore why USA`s ebook writing services are the ultimate choice for emerging authors. Contact us today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/amazon-self-publishing' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Discover the 5 essential steps for successful Amazon self publishing. A beginner`s guide to achieve your publishing dreams on the world`s largest platform' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/hire-affordable-fiction-ghostwriting-services' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Learn the 7 advantages of choosing affordable fiction ghostwriting services. Connect with us today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/the-benefits-of-hiring-a-book-marketing-company' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Discover why authors should consider hiring a professional book marketing company. Contact us today to increase your book sales today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/6-proven-strategies-for-marketing-a-book' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Learn author success with these 6 proven strategies for marketing a book. Call us to learn more!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/5-common-mistakes-to-avoid-while-publishing-on-amazon-kdp' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Learn how to become a successful author with amazon kdp by avoiding these common book publishing mistakes. Contact us today to get the best amazon kdp services.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/how-much-does-it-cost-to-self-publish-a-book' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Learn the expenses involved while authors self publish a book. Learn about editing, design, distribution, and marketing costs for your author journey.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/10-strategies-for-marketing-a-book' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='This blog will help discover ten strategies for marketing a book. Increase visibility, engage readers, and achieve literary success.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/5-reasons-to-build-author-platform-for-marketing-a-book' ? (
                <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content='Discover why an enduring author platform is important for marketing a book. Learn how it boosts visibility, credibility, and reader engagement' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : null

            }

            {/* <Head>
                <title key="title">{postData.title}</title>
                <meta name="description" content={postData.metaDesc} key="metadesc" />
                <meta property="og:title" content={postData.opengraphTitle} />
                <meta key="og-description" property="og:description" content={postData.metaDesc} />
                <meta property="og:url" content={postData.opengraphUrl} />
                <meta property="og:type" content={postData.opengraphType} />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={postData.opengraphSiteName} />
                <link rel="icon" href="/favicon.svg" />
            </Head> */}


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
                                <div className={`${styles.contentBody} ${styles.imgsizes} mt-4`}
                                    dangerouslySetInnerHTML={{ __html: postData.content }}>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} className={styles.stickyMain}>
                            <div className={styles.sticky}>
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
                                    <form className="mt-4" onSubmit={handleSubmit}>
                                        <div>
                                            <input type="text" name="first" required placeholder="FULL NAME" />
                                        </div>
                                        <div className="mt-3">
                                            <input type="email" name="email" required placeholder="EMAIL ADDRESS" />
                                        </div>
                                        <button type="submit" className={`${styles.arrowBtn} mt-4`}>
                                            <span>{score}</span>
                                            <Image className='img-fluid' src={arrow} alt="Book Writing Experts" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}