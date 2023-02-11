import React from 'react'
import styles from './Footer.module.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const FooterSocial = () => {
   return (
      <div className={styles.social_links}>
         <a href='https://github.com/AnFD99' target='_blank' rel='noreferrer'>
            <FaGithub />
         </a>
         <a
            href='https://www.linkedin.com/in/anastasia-fadeeva-4609a0264/'
            target='_blank'
            rel='noreferrer'
         >
            <FaLinkedinIn />
         </a>
      </div>
   )
}

export default FooterSocial







