import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Ourportfolio.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

// Loader component
const LoaderSpinner = () => (
    <div className="spinner-border"></div>
);

// Component
const OurPortfolio = ({ initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [year, setYear] = useState('2024');
    const [month, setMonth] = useState('01');
    const [loader, setLoader] = useState(false);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleLoader = () => {
        setLoader(true);
    };

    const handleSearchClick = () => {
        fetchPostsFilter();
    };

    const fetchPostsFilter = async () => {
        handleLoader();
        const startDate = `${year}-${month}-01T00:00:00`;
        const endDate = new Date(year, month, 0).toISOString().split('T')[0] + 'T23:59:59'; // Get last day of the month

        const res = await fetch(`https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/publishbooks?after=${startDate}&before=${endDate}`);
        const data = await res.json();

        if (data.length === 0) {
            setLoader(false);
        }

        // Fetch featured images
        const postsWithImages = await Promise.all(
            data.map(async (post) => {
                if (post.featured_media) {
                    const mediaRes = await fetch(`https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/media/${post.featured_media}`);
                    const mediaData = await mediaRes.json();
                    return { ...post, featured_image_url: mediaData.source_url };
                } else {
                    return { ...post, featured_image_url: '/path/to/default/image.jpg' }; // Use your default image path
                }
            })
        );

        setLoader(false);
        setPosts(postsWithImages);
    };

    return (
        <>
            <Head>
                <title>Book Publishing Portfolio</title>
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content="Read our professional book publishing portfolio and check out the best-sellers that we published. Get in touch with us to publish your book today." />
                <meta property="og:title" content="Book Publishing Portfolio" />
                <meta property="og:description" content="Read our professional book publishing portfolio and check out the best-sellers that we published. Get in touch with us to publish your book today." />
            </Head>

            <section className={styles.ourportfolio}>
                <div className={styles.banner}>
                    <div className={styles.heading}>
                        <h1 className='color-black font70 t-center'>Our <br />Publishing</h1>
                        <Link className={styles.free} href="javascript:$zopim.livechat.window.show();"> FREE AUTHOR CONSULTATION CALL </Link>
                    </div>
                </div>

                <Container className={styles.rate1}>
                    <Row className='mb-5'>
                        <Col>
                            <div className={styles.filterbuttons}>
                                <select className={`form-control ${styles.filterselect}`} value={year} onChange={handleYearChange}>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                                <select className={`form-control ${styles.filterselect}`} value={month} onChange={handleMonthChange}>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <input type="button" className='btn btn-outline-dark' value="search" onClick={handleSearchClick} />
                            </div>
                            <hr />
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        {loader ? (
                            <LoaderSpinner />
                        ) : (
                            posts.length === 0 ? (
                                <p>No posts found.</p>
                            ) : (
                                posts.map((post) => (
                                    <Col md={6} lg={4} xl={3} key={post.id} className='mb-5 gap-3'>
                                        <main>
                                            <div className={styles.bookcard}>
                                                <div className={styles.bookcardcover}>
                                                    <div className={styles.bookcardbook}>
                                                        <div className={styles.bookcardbookfront}>
                                                            <Image className={styles.bookcard__img} src={post.featured_image_url} width={200} height={300} alt="bookwritingexpert" />
                                                        </div>
                                                        <div className={styles.bookcardbookback}></div>
                                                        <div className={styles.bookcardbookside}></div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                    <div className={styles.bookcardtitle}>
                                                        {post.title.rendered}
                                                    </div>
                                                    <div className={styles.bookcardauthor}>
                                                        {post.acf.author_name}
                                                    </div>
                                                </div>
                                            </div>
                                        </main>
                                    </Col>
                                ))
                            )
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

// getStaticProps function
export const getStaticProps = async () => {
    const res = await fetch('https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/publishbooks');
    const data = await res.json();

    // Fetch featured images
    const postsWithImages = await Promise.all(
        data.map(async (post) => {
            if (post.featured_media) {
                const mediaRes = await fetch(`https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/media/${post.featured_media}`);
                const mediaData = await mediaRes.json();
                return { ...post, featured_image_url: mediaData.source_url };
            } else {
                return { ...post, featured_image_url: '/path/to/default/image.jpg' }; // Use your default image path
            }
        })
    );

    return {
        props: {
            initialPosts: postsWithImages
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
};

export default OurPortfolio;
