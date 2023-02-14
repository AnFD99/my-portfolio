/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Experience.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Experience = () => {
   return (
      <section id='experience'>
         <h2>Опыт</h2>

         <div className={`container ${styles.experience_container}`}>
            <div className={styles.experience_side}>
               <h3>Frontend Разработка</h3>
               <div className={styles.experience_content}>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>HTML</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>CSS</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>Sass, Less</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>JavaScript</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>React</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>Redux</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.experience_side}>
               <h3>Backend Разработка</h3>
               <div className={styles.experience_content}>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>NodeJS</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                           <AiOutlineStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
                  <div className={styles.experience_details}>
                     <BsFillCheckCircleFill
                        className={styles.experience_icon}
                     />
                     <div>
                        <h4>MongoDB</h4>
                        <div className='text_light'>
                           <AiFillStar />
                           <AiFillStar />
                           <AiOutlineStar />
                           <AiOutlineStar />
                           <AiOutlineStar />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.skills}>
            Более подробно обо мне можно посмотреть в <a href='#' className={styles.cv}>резюме</a>
         </div>
      </section>
   )
}

export default Experience










