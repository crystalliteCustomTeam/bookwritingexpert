import React from 'react'
import Image from "next/image";
import { useState } from "react";
import styles from '@/styles/BlogListBody.module.css'
import arrow from '../public/images/blogBanners/right-arrow.webp'
import { useRouter } from 'next/router';
import Router from 'next/router'

const Blogform = () => {
    const [score, setScore] = useState('Submit Details');

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleSubmit = async (e) => {

        e.preventDefault()


        const data1 = {
            name: e.target.first.value,
            email: e.target.email.value,
            pageUrl: currentRoute,
        }
   
        
      

        const JSONdata = JSON.stringify(data1)

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
            window.location.href = 'https://www.bookwritingexperts.com/thank-you';
        }
    }


    return (
        <>


            <div className={`${styles.newsLetter} mt-5`}>
                <h4>Signup for</h4>
                <h5>Newsletter</h5>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div>
                
                        <input type="text" required name="first" placeholder="FULL NAME" />
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


        </>
    )
}

export default Blogform