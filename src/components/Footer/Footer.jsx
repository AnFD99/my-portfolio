/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Footer.module.css'
import FooterSocial from './FooterSocial'

const Footer = () => {
   return (
      <footer>
         <a href='#' className={styles.footer_logo}>
            AnFD
         </a>
         <div className={styles.permalinks}>
            <a href='#'>Главная</a>
            <a href='#about'>Обо мне</a>
            <a href='#experience'>Опыт</a>
            <a href='#portfolio'>Портфолио</a>
            <a href='#contacts'>Контакты</a>
         </div>

         <FooterSocial />

         <div className={styles.footer_copyright}>
            <small>&copy; 2023 AnFD. All rights reserved.</small>
         </div>
      </footer>
   )
}

export default Footer
