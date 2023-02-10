import React from 'react'
import styles from './Header.module.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const HeaderSocial = () => {
   return (
      <div className={styles.social_links}>
         <a href='https://github.com/AnFD99' target='_blank' rel='noreferrer'>
            <FaGithubSquare />
         </a>
         <a
            href='https://www.linkedin.com/in/anastasia-fadeeva-4609a0264/'
            target='_blank'
            rel='noreferrer'
         >
            <FaLinkedin />
         </a>
      </div>
   )
}

export default HeaderSocial



