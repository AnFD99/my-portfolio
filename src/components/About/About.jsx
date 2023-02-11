import React from 'react'
import styles from './About.module.css'
import { BiAward, BiFolder } from 'react-icons/bi'
import { ContactButton } from '../Buttons/Buttons'

const About = () => {
   return (
      <section id='about'>
         <h5>Подробнее</h5>
         <h2>Обо мне</h2>

         <div className={`container ${styles.about_container}`}>
            <div className={styles.about_me}>
               <div className={styles.about_me_img}>
                  <img src='' alt='' />
               </div>
            </div>
            <div className={styles.about_content}>
               <div className={styles.about_cards}>
                  <div className={styles.about_card}>
                     <BiAward className={styles.about_icon} />
                     <h5>Опыт</h5>
                     <small>3+ years working</small>
                  </div>
                  <div className={styles.about_card}>
                     <BiFolder className={styles.about_icon} />
                     <h5>Проекты</h5>
                     <small>90+ завершенных проектов</small>
                  </div>
               </div>
               <p>
                  Culpa occaecat do ipsum aute laboris sit ea sunt sunt. Officia
                  adipisicing amet non ad ullamco proident anim. Occaecat non
                  magna occaecat aliqua magna ex tempor amet ex occaecat magna.
                  Aute magna sunt minim esse nostrud qui fugiat commodo nisi
                  velit nulla consectetur reprehenderit.
               </p>

               <ContactButton>Связаться со мной</ContactButton>
            </div>
         </div>
      </section>
   )
}

export default About

