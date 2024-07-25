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

    const [ip, setIP] = useState({});
    const [score, setScore] = useState('Submit Form');
    const [checkboxes, setCheckboxes] = useState([]);
    const router = useRouter();
    const currentRoute = router.pathname;

    const getIPData = async () => {
        const res = await Axios.get('https://ipwho.is/');
        setIP(res.data);
    };

    useEffect(() => {
        getIPData();
    }, []);

    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;
        setCheckboxes((prev) =>
            checked ? [...prev, value] : prev.filter((checkbox) => checkbox !== value)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            zip: e.target.zip.value,
            checknow: checkboxes,
            message: e.target.message.value,
            pageUrl: currentRoute,
        };

        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        try {
            const response = await fetch('/api/contact/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            });

            if (response.status !== 200) {
                throw new Error('Failed to send data');
            }

            const currentdate = new Date().toLocaleString();
            const headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer YOUR_API_KEY",
                "Content-Type": "application/json",
            };

            const bodyContent = JSON.stringify({
                "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
                "Brand": "BOOK-WRITING-EXPERT",
                "Page": currentRoute,
                "Date": currentdate,
                "Time": currentdate,
                "JSON": JSONdata,
            });

            await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
                method: "POST",
                body: bodyContent,
                headers: headersList,
            });

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const hubspotData = JSON.stringify({
                "fields": [
                    { "objectTypeId": "0-1", "name": "email", "value": e.target.email.value },
                    { "objectTypeId": "0-1", "name": "firstname", "value": e.target.name.value },
                    { "objectTypeId": "0-1", "name": "phone", "value": e.target.phone.value },
                    { "objectTypeId": "0-1", "name": "message", "value": e.target.message.value }
                ],
                "context": {
                    "ipAddress": ip.IPv4,
                    "pageUri": currentRoute,
                    "pageName": currentRoute,
                },
                "legalConsentOptions": {
                    "consent": {
                        "consentToProcess": true,
                        "text": "I agree to allow Example Company to store and process my personal data.",
                        "communications": [
                            {
                                "value": true,
                                "subscriptionTypeId": 999,
                                "text": "I agree to receive marketing communications from Example Company.",
                            }
                        ],
                    },
                },
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: hubspotData,
                redirect: "follow",
            };

            const hubspotResponse = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", requestOptions);

            if (!hubspotResponse.ok) {
                throw new Error('HubSpot submission failed');
            }

            const result = await hubspotResponse.json();
            console.log(result);

            // Redirect after successful submission
            window.location.href = 'https://www.bookwritingexperts.com/thank-you';
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>



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
                                    <Col md={6}> <input className={styles.inputfilet} required id='phone' type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' placeholder='Phone' /> </Col>
                                    <Col md={6}> <input className={styles.inputfilet} required id='tel' type='number' name='zip' placeholder='Location/Zip Code' /></Col>
                                </Row>


                                <Row>
                                    <Col> <p className='font15 fw500 font-f colortextgrey mt-4'>Desired Service(s)* see our <b> <em> rates and services </em></b> </p> </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow'
                                                checked={checkboxes.includes('bookwriting--I want to hire a professional to write or rewrite my book')}
                                                onChange={handleOptionChange3}
                                                value='bookwriting--I want to hire a professional to write or rewrite my book' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                bookwriting--I want to hire a professional to write or rewrite my book
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