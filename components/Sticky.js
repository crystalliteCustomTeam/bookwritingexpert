import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import styles from '@/styles/Sticky.module.css'


const Sticky = () => {
  return (
    <>
      <div className={styles.stickycontainer}>
        <ul className={styles.sticky}>
          <li>
            <BsFillTelephoneFill size={28} />
            <p><a href="tel:+18555000057" target="_self">(855) 500 0057</a></p>
          </li>
          <li>
            <FaRegComments size={28} />
            <p><a href="javascript:void(Tawk_API.toggle())" >Let's Discuss</a></p>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Sticky