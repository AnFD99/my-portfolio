import React from 'react'
import styles from './Buttons.module.css'
import CV from '../../assets/img/Fadeeva-Anastasia-CV.pdf'

export const CVButton = ({ children }) => {
   return (
      <a href={CV} download className={styles.btn}>
         {children}
      </a>
   )
}

export const ContactButton = ({ children }) => {
   return (
      <a href='#contacts' className={`${styles.btn} ${styles.btn_primary}`}>
         {children}
      </a>
   )
}

export const ViewGithubButton = ({ children, ...props }) => {
   return (
      <a
         href={props.link}
         className={styles.btn}
         target='_blank'
         rel='noreferrer'
      >
         {children}
      </a>
   )
}

export const ViewDemoButton = ({ children, ...props }) => {
   return (
      <a
         href={props.link}
         className={`${styles.btn} ${styles.btn_primary}`}
         target='_blank'
         rel='noreferrer'
      >
         {children}
      </a>
   )
}



