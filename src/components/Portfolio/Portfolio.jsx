import React from 'react'
import styles from './Portfolio.module.css'
import { data } from '../../data/data'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
   return (
      <section id='portfolio'>
         <h5>Мои работы</h5>
         <h2>Портфолио</h2>

         <div className={`container ${styles.portfolio_container}`}>
            {data.map((item) => {
               return (
                  <PortfolioItem
                     key={item.id}
                     img={item.img}
                     title={item.title}
                     github={item.githubLink}
                     demo={item.demoLink}
                  />
               )
            })}
         </div>
      </section>
   )
}

export default Portfolio

