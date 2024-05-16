import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'
//
import { getPostList } from "@/lib/posts";
import FeaturedImage from "@/lib/FeaturedImage";
import Date from "@/lib/Date";
import LoadMore from "@/lib/LoadMore";
import BlogListing from '@/lib/Bloglisting';
import Blogform from '../../components/Blogform';
//
import arrow from '../../public/images/blogBanners/right-arrow.webp'


export async function getStaticProps() {
    const allPosts = await getPostList();
    return {
        props: {
            allPosts: allPosts,
        },
    }
}


export default function BlogHome({ allPosts }) {

    const [posts, setPosts] = useState(allPosts);

    return (
        <>


            <BlogListing />

            <main>
                <section className={`${styles.postList} mt-0 mt-lg-4`}>
                    <Container>
                        <Row>
                            <Col lg={9}>
                                <div className={`${styles.blogCard}`}>
                                    {
                                        posts.nodes.map((post) => (
                                            <Row key={post.slug} className={`${styles.blogRow} align-items-center mb-0 mb-lg-5`}>
                                                <Col md={5}>
                                                    <FeaturedImage post={post} />
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.cardCntnt}>
                                                        <h4 className={`${styles.blogTitle} mb-0`}>
                                                            <Link href={`${post.slug}`}>
                                                                {post.title}
                                                            </Link>
                                                        </h4>

                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <h5 className={`${styles.blogCategory} mt-2`} key={category.slug}>
                                                                    {category.name} - Blog
                                                                </h5>
                                                            ))
                                                        }

                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>

                                                        <h6 className={styles.detailDate}>
                                                            Published on <Date dateString={post.date} />
                                                        </h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </div>
                                <div className="pt-lg-0 pt-4 pb-4 text-center">
                                    <LoadMore posts={posts} setPosts={setPosts} />
                                </div>
                            </Col>
                            <Col lg={3} className='mb-5 mb-lg-0'>
                                <div className={`${styles.cta}`}>
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

                                <Blogform />

                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

