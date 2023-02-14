import React from 'react'
import styles from './About.module.css'
import { BiAward, BiFolder } from 'react-icons/bi'
import { ContactButton } from '../Buttons/Buttons'
import me2 from '../../assets/img/IMG_2180.jpg'
import me from '../../assets/img/IMG_5528.JPG'

const About = () => {
   return (
      <section id='about'>
         <h2>Обо мне</h2>

         <div className={`container ${styles.about_container}`}>
            <div className={styles.about_me_side}>
               <div className={styles.about_me}>
                  <div className={styles.about_me_img}>
                     <img src={me} alt='' />
                  </div>
               </div>
               <div className={styles.about_me}>
                  <div className={styles.about_me_img}>
                     <img src={me2} alt='' />
                  </div>
               </div>
            </div>

            <div className={styles.about_content}>
               <div className={styles.about_cards}>
                  <div className={styles.about_card}>
                     <BiAward className={styles.about_icon} />
                     <h5>Опыт</h5>
                     <small>Около 5 лет работы в иностранной IT-компании</small>
                  </div>
                  <div className={styles.about_card}>
                     <BiFolder className={styles.about_icon} />
                     <h5>Проекты</h5>
                     <small>3 успешных проекта для албанского рынка</small>
                  </div>
               </div>
               <p>
                  Я Frontend-разработчик. Люблю создавать пользовательские
                  интерфейсы. Ежедневно занимаюсь разработкой собственных
                  проектов и изучением новых технологий.
               </p>
               <p>
                  Если что-то не понимаю или не знаю, то могу быстро найти
                  информацию в различных источниках. Умею работать в команде.
                  Обладаю хорошей стрессоустойчивостью и ответственно подхожу к
                  задачам. При возникновении неожиданных проблем очень быстро
                  нахожу решения.
               </p>
               <p>
                  В свободное время люблю осваивать новые интересные программы,
                  увлекаюсь фотографией, обработкой фото в Adobe Photoshop, так
                  же графическим дизайном в Adobe Illustrator, занимаюсь спортом
                  и много читаю, в том числе профессиональную литературу.
               </p>
               <p>На данный момент нахожусь в Черногории.</p>
               <ContactButton>Связаться со мной</ContactButton>
            </div>
         </div>
      </section>
   )
}

export default About











