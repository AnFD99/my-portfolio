import React from 'react'
import styles from './Header.module.css'
import { CVButton, ContactButton } from '../Buttons/Buttons'
// import me from '../../assets/img/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
   return (
      <header>
         <div className={`container ${styles.header_container}`}>
            <h5>Привет, меня зовут </h5>
            <h1>Анастасия</h1>
            <h5 className='text_light'>Frontend Developer</h5>

            <div className={styles.header_btn}>
               <CVButton>Резюме</CVButton>
               <ContactButton>Контакты</ContactButton>
            </div>

            <div className={styles.me}>
               <img src='' alt='' />
            </div>

            <a href='#contacts' className={styles.scroll_down}>
               Вниз
            </a>
            <HeaderSocial />
         </div>
      </header>
   )
}

export default Header

