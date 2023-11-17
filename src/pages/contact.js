import React from 'react'
import styles from '@/styles/Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import email2 from '../../public/images/footer/email2.png'

const Contact = () => {

    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
      const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
      setIP(res.data);
    }
    useEffect(() => {
      getIPData()
    }, [])

    const [score, setScore] = useState('Submit Form');
    const [selectedOption3, setSelectedOption3] = useState('');


    const [checkboxes, setCheckboxes] = useState([]);
    const handleOptionChange3 = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        setCheckboxes([...checkboxes, value]);
      } else {
        setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
      }
  
      
    };



    // const handleOptionChange3 = (e) => {
    //     setSelectedOption3(e.target.value);

    //   };

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleSubmit = async (e) => {

        e.preventDefault()


        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            zip: e.target.zip.value,
            checknow: checkboxes,
            message: e.target.message.value,
            pageUrl:currentRoute,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');



        fetch('api/contact/route', {
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


        var currentdate = new Date().toLocaleString() + ''
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json"
        }
    
        let bodyContent = JSON.stringify({
          "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
          "Brand": "BOOK-WRITING-EXPERT",
          "Page": `${currentRoute}`,
          "Date": currentdate,
          "Time": currentdate,
          "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
          method: "POST",
          body: bodyContent,
          headers: headersList
        });


        const { pathname } = Router
        if (pathname == pathname) {
            window.location.href = 'https://www.bookwritingexperts.com/thank-you';
        }

    }



    const schema = {

        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "bookwritingexperts",
        "alternateName": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/contact-us/",
        "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]


    }
    const schema1 = {

        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "bookwritingexperts",
        "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "@id": "",
        "url": "https://www.bookwritingexperts.com/contact-us/",
        "telephone": "2132893888",
        "priceRange": "$99",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S Figueroa St",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0536155,
            "longitude": -118.2568651
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]

    }

    return (
        <>

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                
                <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <title>Contact Us - Book Writing</title>
                <meta name="description"
                    content="Contact us and let us define the success of your book with our various book related solutions. We are 24/7 all ears to your needs." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Contact Us - Book Writing" />
                <meta property="og:description"
                    content="Contact us and let us define the success of your book with our various book related solutions. We are 24/7 all ears to your needs." />
                <meta property="og:url" content="/contact" />
                <meta property="og:site_name" content="Book Writing" />
                <meta property="article:modified_time" content="2022-08-31T23:04:58+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="4 minutes" />
                <link rel="icon" href="/favicon.svg" />



                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
                />

            </Head>

            <div className={styles.contactbg}>

                <Container>
                    <Row className='gy-4'>
                        <Col md={5}>


                            <h2 className='color-blue font50 fw700 font-f'>
                                Have your story read.
                                Get published.

                            </h2>
                            <div className={`${styles.published} pt-5`}>

                                <p className='fw500 font20 color-white font-f'>
                                    Let’s get in touch!
                                </p>
                                <p className='font20 fw500 font-f color-white'>
                                    <span className=''>Phone:</span> <Link href='tel:(855) 500 0057' className={` ${styles.numpost} fw700 color-white textdocationnone`}> (855) 500 0057 </Link>
                                </p>
                                <p className='font20 fw500 font-f color-white'>
                                    <span className=''>Email:</span> <Link href='mailto:info(@)bookwritingcube(.)com' className={` fw700 color-white textdocationnone`}>
                                    <Image src={email2} alt="Book Writing Experts" /> </Link>
                                </p>

                            </div>


                            <p className='fw500 font20 color-white font-f mt-5'>
                                Unable to reach us? Fill out the  <Link href='#contpost' className='textdocationnone color-white'>form below</Link>
                            </p>

                        </Col>

                        <Col md={1}></Col>
                        <Col md={6}>


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6200791070223!2d-118.25944002448333!3d34.053615473156526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b26b2805e7%3A0x631167a0f496a896!2sUnion%20Bank%20Plaza%2C%20445%20S%20Figueroa%20St%2C%20Los%20Angeles%2C%20CA%2090071%2C%20USA!5e0!3m2!1sen!2s!4v1681986458438!5m2!1sen!2s" width='100%' height='252' ></iframe>



                            <h4 className='font-f fw400 font20 color-white t-center mt-3' >(Operations)</h4>
                            <p className='font-f fw300 mt-3 color-white t-center' >
                                445 S.Figueroa Street, Los Angeles, CA 90071
                            </p>


                        </Col>
                    </Row>
                </Container>

            </div>


            <div className={styles.contfom}>

                <Container className='contpost' id='contpost'>
                    <Row className={styles.conrow}>
                        <Col md={9}>
                            <h2 className='t-center fw700 font50 color-blue font-f mb-5'> Fill Out The Form Below We Will Contact You Promptly</h2>



                            <form className={styles.label2} onSubmit={handleSubmit}>

                                <Row className='gy-3'>
                                    <Col md={6}><input className={styles.inputfilet} required id='name' type='text' name='name' placeholder='Name' /></Col>
                                    <Col md={6}><input className={styles.inputfilet} required id='email' type='email' name='email' placeholder='Email' /></Col>
                                </Row>

                                <Row className='mt-3 mb-3 gy-3'>
                                    <Col md={6}> <input className={styles.inputfilet} required id='phone' type="tel" minLength="10" maxLength="13" name='phone' placeholder='Phone' /> </Col>
                                    <Col md={6}> <input className={styles.inputfilet} required id='tel' type='number' name='zip' placeholder='Location/Zip Code' /></Col>
                                </Row>


                                <Row>
                                    <Col> <p className='font15 fw500 font-f colortextgrey mt-4'>Desired Service(s)* see our <b> <em> rates and services </em></b> </p> </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                            checked={checkboxes.includes('Ghostwriting--I want to hire a professional to write or rewrite my book')}
                                            onChange={handleOptionChange3}
                                            value='Ghostwriting--I want to hire a professional to write or rewrite my book' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Ghostwriting--I want to hire a professional to write or rewrite my book
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                           
                                              checked={checkboxes.includes('Editing--I have written a manuscript and would like a professional to review and/or edit it')}
                                              onChange={handleOptionChange3}
                                            value='Editing--I have written a manuscript and would like a professional to review and/or edit it' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Editing--I have written a manuscript and would like a professional to review and/or edit it
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                            
                                             checked={checkboxes.includes('Book Coaching--I want to write my book on my own, but with the help of a professional to guide me')}
                                             onChange={handleOptionChange3}
                                            value='Book Coaching--I want to write my book on my own, but with the help of a professional to guide me' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Book Coaching--I want to write my book on my own, but with the help of a professional to guide me
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                              
                                               checked={checkboxes.includes('Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes')}
                                               onChange={handleOptionChange3}
                                            value='Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes
                                            </label>
                                        </div>
                                    </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                            checked={checkboxes.includes('Book Proposal')}
                                            onChange={handleOptionChange3}
                                            value='Book Proposal' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Book Proposal
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                             checked={checkboxes.includes('Beta Reader Services')}
                                             onChange={handleOptionChange3}
                                            value='Beta Reader Services' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Beta Reader Services
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                            checked={checkboxes.includes('Other')}
                                            onChange={handleOptionChange3}
                                            value='Other' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Other
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>

                                    </Col>
                                </Row>

                                <Row className='mt-4'>
                                    <Col><p className={styles.general}> General Genre Category*</p></Col>
                                </Row>

                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                             checked={checkboxes.includes('Business')}
                                             onChange={handleOptionChange3}
                                            value='Business' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Business
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                               checked={checkboxes.includes('Memoir/Biography')}
                                               onChange={handleOptionChange3}
                                            value='Memoir/Biography' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Memoir/Biography
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                               checked={checkboxes.includes('Health')}
                                               onChange={handleOptionChange3}
                                            value='Health' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Health
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                              checked={checkboxes.includes('Self-Help/Personal Development')}
                                              onChange={handleOptionChange3}
                                            value='Self-Help/Personal Development' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Self-Help/Personal Development
                                            </label>
                                        </div>
                                    </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                              checked={checkboxes.includes('Fiction')}
                                              onChange={handleOptionChange3}
                                            value='Fiction' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Fiction
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                             checked={checkboxes.includes('General Nonfiction')}
                                             onChange={handleOptionChange3}
                                            value='General Nonfiction' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                General Nonfiction
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                                checked={checkboxes.includes('Children’s')}
                                                onChange={handleOptionChange3}
                                            value='Children’s' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Children’s
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                             checked={checkboxes.includes('Others')}
                                             onChange={handleOptionChange3}
                                            value='Others' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Others
                                            </label>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col>
                                        <textarea type="text" id="message" className={styles.textarea1} name="message" placeholder="Tell Us More About Your Project and  Publishing Goals Here"></textarea>
                                    </Col>

                                </Row>

                                <Col className='mt-3 mb-5'>
                                    <em className='textcolor'>
                                        You may find our confidentiality policy <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}>here</strong></Link> , or request a signed NDA by email: <Link className='textdocationnone colortextgrey' href="mailto:support@bookwritingexperts.com"> <strong className={styles.numpost}>support@bookwritingexperts.com</strong></Link> This site is protected by reCAPTCHA and the Google
                                        <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}> Privacy Policy</strong></Link>  and Terms of Service <Link className='textdocationnone colortextgrey' href="/terms-of-use"> <strong className={styles.numpost}>Terms of Service</strong> </Link> apply.
                                    </em>

                                </Col>

                                <button className={styles.submitform} type='submit'>{score}</button>

                            </form>



                        </Col>
                    </Row>
                </Container>
            </div>


            <div className={styles.contactdata}>
                <Container>
                    <Row className={styles.conrow}>
                        <Col md={9}>

                            <h2 className='color-blue font50 fw700 font-f'> Your Publishing Goals Will All Be Realized Here!</h2>
                            <p className='font15  font-f colortextgrey' >Contact us and have yourself a best seller book written now. </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact