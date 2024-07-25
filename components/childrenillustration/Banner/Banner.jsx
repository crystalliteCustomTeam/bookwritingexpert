import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Banner.module.css'
import Link from 'next/link'
import Image from 'next/image'
import homeBanner from "../../../public/images/childrenillustration/homeBanner.png"
import CTAGroup from '../../CTAGroup/CTAGroup'
import Router, { useRouter } from 'next/router'
import Axios from "axios";

const Banner = ({
    subtitle,
    title,
    desc,
    formTitle
}) => {

    const [ip, setIP] = useState('');
    const [score, setScore] = useState('Submit Details');
    const router = useRouter();
    const currentRoute = router.pathname;

    // Function to load IP address from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://ipwho.is/');
            setIP(res.data);
        } catch (error) {
            console.error("Error fetching IP data:", error);
        }
    };

    useEffect(() => {
        getIPData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            pageUrl: currentRoute,
        };

        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        try {
            const emailResponse = await fetch('/api/email/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            });

            if (emailResponse.status === 200) {
                console.log('Email sent successfully');
            }

            const currentdate = new Date().toLocaleString();
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json",
            };

            let bodyContent = JSON.stringify({
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

            const pagenewurl = currentRoute;

            const hubspotHeaders = new Headers();
            hubspotHeaders.append("Content-Type", "application/json");

            const hubspotBody = JSON.stringify({
                "fields": [
                    {
                        "objectTypeId": "0-1",
                        "name": "email",
                        "value": e.target.email.value,
                    },
                    {
                        "objectTypeId": "0-1",
                        "name": "firstname",
                        "value": e.target.name.value,
                    },
                    {
                        "objectTypeId": "0-1",
                        "name": "phone",
                        "value": e.target.phone.value,
                    },
                    {
                        "objectTypeId": "0-1",
                        "name": "message",
                        "value": e.target.message.value,
                    },
                ],
                "context": {
                    "ipAddress": ip.IPv4,
                    "pageUri": pagenewurl,
                    "pageName": pagenewurl,
                },
            });

            const hubspotResponse = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", {
                method: "POST",
                headers: hubspotHeaders,
                body: hubspotBody,
                redirect: "follow",
            });

            const hubspotResult = await hubspotResponse.text();
            console.log(hubspotResult);

            window.location.href = 'https://www.bookwritingexperts.com/thank-you';
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <section>
            <div>
                <div className={styles.childBanner}>
                    <Container>
                        <Row className='d-flex align-items-center'>
                            <Col lg={5}>
                                <div className='d-lg-block d-sm-flex flex-sm-column align-items-sm-center justify-content-center'>
                                    <h3 className="font-30 fw500" dangerouslySetInnerHTML={{ __html: subtitle }} />
                                    <h1 className="text-orange fw700" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className='' dangerouslySetInnerHTML={{ __html: desc }} />

                                    <CTAGroup classes='mb-5 gap-3 d-flex flex-md-nowrap flex-wrap align-items-start align-items-center justify-content-md-start justify-content-center' />
                                    <div className={`d-flex px-5 flex-column justify-content-start py-5 ${styles.formClass}`}>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <h4 className='fw600' dangerouslySetInnerHTML={{ __html: formTitle }} />
                                        </div>
                                        <form method='post' onSubmit={handleSubmit}>
                                            <Row>
                                                <Col>
                                                    <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="inputText" className="form-label">Full Name*</label>
                                                        <input type="text" placeholder="Type Full Name " name="name" id="" required />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="inputPhone" className="form-label">Phone*</label>
                                                        <input type="phone" placeholder="123-456-7890" name="phone" id="" required />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col>
                                                    <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="exampleFormControlInput1" className="form-label">Email*</label>
                                                        <input type="email" placeholder="Type Full Email" name="email" id="" required />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='d-flex flex-column align-items-start d-block mb-0 w-100'>
                                                        <label for="exampleFormControlTextarea1" className="form-label">Message*</label>
                                                        <input type="message" placeholder="" name="message" id="" />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className='d-flex justify-content-center mt-4'>
                                                <button className={`${"bgGray"} ${"formbgGray"} text-white position-relative`} type='submit'>{score}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div>
                                    <Image src={homeBanner} alt="Children Illustration" className="img-fluid me-0 d-lg-block d-none" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Banner
