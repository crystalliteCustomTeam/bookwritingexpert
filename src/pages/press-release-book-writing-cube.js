import React from 'react'
import styles from '@/styles/Announcement.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Banner from '../../components/Banner'
import Aspiring from '../../components/Aspiring'
import Link from 'next/link'
import Head from 'next/head'

const Announcement = () => {

    const pressHead = <h1 className='font30 fw700 color-blue'>Press Release</h1>
    const pressSubPara = <span className='font50 fw700'>Book Writing Experts Sets The Record Straight On Domain Ownership</span>

    const bannertext = [
        {
            title: pressHead,
            banners: 'bookeditingservices',
            alignclass: 'release',
            pra: pressSubPara,
        }
    ]



    return (

        <>

            <Head>



                <link rel="icon" href="/favicon.svg" />


            </Head>

            {/* banner components */}

            {bannertext.map((item, i) =>
                <Banner key={i}
                    title={item.title}
                    text={item.pra}
                    bannershome={item.banners}
                    alignclass={item.alignclass}
                />
            )}


            <div className={styles.announcement}>

                <Container>
                    <Row>
                        <Col md={12}>

                            <p className='font15 fw500 font-f'> <strong>Beaverton, Oregon, March 28, 23</strong>  – book writing expert, a leading provider of book writing and
                                publishing services, would like to take this opportunity to clarify a matter of domain
                                ownership. It has come to our attention that there has been confusion regarding the ownership of
                                a specific domain name. We would like to take this moment to confirm that this domain, <Link className='textdocationnone' href="/" rel="nofollow" target="_blank">https://www.thebookwritingcube.com/</Link> , is not
                                owned, operated, or affiliated with book writing expert. The correct domain is <Link className='textdocationnone' href="/">https://www.bookwritingcube.com/</Link>.
                            </p>

                            <p className='font15 fw500 font-f'>
                                book writing expert, with years of experience and a commitment to excellence, have established
                                a reputation as a trusted and reliable source for writing and publication services. Our goal is
                                to provide our clients with the best possible experience and deliver results exceeding their
                                expectations.
                            </p>
                            <p className='font15 fw500 font-f'>
                                book writing expert is committed to providing our clients with the highest quality service. We
                                understand the importance of clear and accurate information, especially when it comes to matters
                                of domain ownership. This is why we have taken the time to issue this official statement. It is
                                imperative that our clients and the public at large are aware of the correct information
                                regarding our company and the domains we own. It will ensure that any communications or
                                transactions made with book writing expert are secure and legitimate.
                            </p>

                            <p className='font15 fw500 font-f'>We have taken the necessary steps to investigate the issue and have determined that Book Writing
                                Cube does not own the domain in question. We have also taken steps to address the confusion and
                                prevent any further misunderstandings. We would like to remind our clients and the public that
                                book writing expert only operates official websites and domains that are listed on our official
                                website. Any other domains or websites claiming to be affiliated with us should be considered
                                unauthorized and potentially fraudulent.</p>

                            <p className='font15 fw500 font-f'>We advise our clients to always verify the authenticity of a website or domain before conducting
                                any business or providing any personal information. Our clients can do this by checking the
                                website's URL and ensuring it matches the official domain on book writing expert's website.
                            </p>

                            <p className='font15 fw500 font-f'>We take the security and privacy of our client's information seriously and will take all
                                necessary measures to protect it. book writing expert will continue to monitor the situation and
                                take appropriate action to ensure the accuracy of information regarding our company and domains.
                            </p>

                            <p className='font15 fw500 font-f'>book writing expert would like to thank our clients for their continued support and loyalty. We are
                                committed to providing our clients with the best possible experience and will continue to work
                                towards that goal.
                            </p>

                            <strong className='font-f'>If you have any questions or concerns, please get in touch with us. </strong>

                            <h4 className='font-f mt-4 mb-4'>Press Contact:</h4>

                            <ul>
                                <li className='font-f'><strong>Brand Name: </strong> book writing expert
                                </li>
                                <li className='font-f'><strong>Address: </strong> 12365 SW Pioneer Ln Suite 106, Beaverton, Oregon
                                </li>
                                <li className='font-f'><strong>Country: </strong> USA
                                </li>
                                <li className='font-f'><strong>Zip code: </strong> 97008
                                </li>
                                <li className='font-f'><strong>Email: </strong> <Link className='colortextgrey font-f textdocationnone' href="mailto:support@bookwritingexperts.com">support@bookwritingexperts.com</Link>
                                </li>
                                <li className='font-f'><strong>Phone: </strong> <Link className='colortextgrey font-f textdocationnone' href="tel:+1302 883-8877">(855) 500 0057</Link>
                                </li>
                                <li className='font-f'><strong>Working hours: </strong> Mon-Fri, 9:00 AM - 5:00 PM
                                </li>

                                <li className='font-f'><strong>Website: </strong>
                                    <Link className='textdocationnone' href="/">https://www.bookwritingcube.com/</Link>
                                </li>
                                <li className='font-f'><strong>Trustpilot: </strong> <Link className='textdocationnone' href="https://www.trustpilot.com/review/bookwritingcube.com" rel="nofollow" target="_blank">https://www.trustpilot.com/review/bookwritingcube.com
                                </Link>
                                </li>
                                <li className='font-f'><strong>Sitejabber: </strong> <Link className='textdocationnone' href="https://www.sitejabber.com/reviews/bookwritingcube.com" rel="nofollow" target="_blank">https://www.sitejabber.com/reviews/bookwritingcube.com
                                </Link>
                                </li>
                                <li className='font-f'><strong>Publishersglobal: </strong> <Link className='textdocationnone' href="https://www.publishersglobal.com/directory/supplier-profile/23334" rel="nofollow" target="_blank">https://www.publishersglobal.com/directory/supplier-profile/23334
                                </Link>
                                </li>
                                <li className='font-f'><strong>Better Business Bureau: </strong> <Link className='textdocationnone' href="https://www.bbb.org/us/or/beaverton/profile/publishers-
                            book/book-writing-cube-1296-1000120771" rel="nofollow" target="_blank">https://www.bbb.org/us/or/beaverton/profile/publishers-
                                    book/book-writing-cube-1296-1000120771
                                </Link>
                                </li>
                            </ul>



                        </Col>
                    </Row>
                </Container>

            </div>


            {/* Aspiring */}
            <Aspiring
                title='Professional Book Writing and Publishing We Give New Life To Your Words'
                text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
                number="(855) 500 0057"
                discuss="LET'S DISCUSS"
            />


        </>
    )
}

export default Announcement