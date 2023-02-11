import React from 'react'
import styles from './Contact.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

const Contact = () => {
   return (
      <section id='contacts'>
         <h5>Как связаться со мной</h5>
         <h2>Контакты</h2>

         <div className={`container ${styles.contact_container}`}>
            <div className={styles.contact_option}>
               <AiOutlineMail className={styles.contact_icon} />
               <h4>Email</h4>
               <h5>anfd.design@gmail.com</h5>
               <a
                  href='mailto:anfd.design@gmail.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  Отправить email
               </a>
            </div>
            <div className={styles.contact_option}>
               <FaTelegramPlane className={styles.contact_icon} />
               <h4>Telegram</h4>
               <h5>@AnastasiaFD</h5>
               <a
                  href='https://t.me/AnastasiaFD'
                  target='_blank'
                  rel='noreferrer'
               >
                  Отправить сообщение
               </a>
            </div>
            <div className={styles.contact_option}>
               <BsWhatsapp className={styles.contact_icon} />
               <h4>WhatsApp</h4>
               <h5>+7 (904) 924-60-82 </h5>
               <a
                  href='https://wa.me/79049246082'
                  target='_blank'
                  rel='noreferrer'
               >
                  Отправить сообщение
               </a>
            </div>
         </div>
      </section>
   )
}

export default Contact
















