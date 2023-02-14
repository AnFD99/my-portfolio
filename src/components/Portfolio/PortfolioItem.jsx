import React from 'react'
import styles from './Portfolio.module.css'
import { ViewDemoButton, ViewGithubButton } from '../Buttons/Buttons'

const PortfolioItem = ({ img, title, github, demo }) => {
   return (
      <div className={styles.portfolio_item}>
         <div className={styles.portfolio_img}>
            <img src={img} alt='' />
         </div>
         <h3>{title}</h3>
         <div className={styles.portfolio_btn}>
            <ViewGithubButton link={github}>GitHub</ViewGithubButton>
            <ViewDemoButton link={demo}>Смотреть демо</ViewDemoButton>
         </div>
      </div>
   )
}

export default PortfolioItem




