import React from 'react'
import styles from '@/styles/Illustrativebook.module.css'
import logo from '../public/images/logo.svg';
import Image from 'next/image';



const Loader = () => {
    return (
        <>

            <div className="loading-screen">
                {/* Customize your loader here */}
                <Image quality={100} src={logo} alt="Book Writing Experts"></Image>
                {/* <Image quality={100}   src={loader} alt="Book Writing Experts"></Image> */}
                <div className="spinner mt-3 mb-3"></div>
                <p className='color-white'>Loading...</p>
            </div>
        </>
    )
}

export default Loader