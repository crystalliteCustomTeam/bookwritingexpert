import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Ourportfolio.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'





const ourportfolio = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
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
                        return { ...post, featured_image_url: bookpublishing1 };
                    }
                })
            );

            setPosts(postsWithImages);
        };
        fetchPosts();
    }, []);


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
                        <h1 className='color-black font70 t-center'>Our <br></br>Publishing</h1>
                        <Link className={styles.free} href="javascript:$zopim.livechat.window.show();"> FREE AUTHOR CONSULTATION CALL </Link>
                    </div>
                </div>

                <Container className={styles.rate1}>
                    <Row className='mb-5'>
                        <Col>
                            <div className={styles.filterbuttons}>
                                <select className={`form-control ${styles.filterselect}`}>
                                    <option value="2024">2024</option>
                                    <option value="2024">2023</option>
                                    <option value="2024">2022</option>
                                </select>
                                <select className={`form-control ${styles.filterselect}`}>
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
                                <input type="button" className='btn btn-outline-dark' value="search"/>
                               
                            </div>
                            <hr />
                        </Col>
                    </Row>


                    <Row className='mt-5'>
                        {posts.length === 0 ? (
                            <p>No posts found.</p>
                        ) : (
                            <>
                                {posts.map((post) => (

                                    <Col md={3} key={post.id} className='mb-5'>

                                        <main>
                                            <div className={styles.bookcard}>
                                                <div className={styles.bookcardcover}>
                                                    <div className={styles.bookcardbook}>
                                                        <div className={styles.bookcardbookfront}>
                                                            <Image className={styles.bookcard__img} src={post.featured_image_url} width={200} height={300} />
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



                                ))}
                            </>
                        )}
                    </Row>


                </Container>




            </section>

        </>
    )
}

export default ourportfolio