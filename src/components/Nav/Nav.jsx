/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styles from './Nav.module.css'
import {
   BiHome,
   BiUser,
   BiBook,
   BiBookmarkAlt,
   BiMessage,
} from 'react-icons/bi'

const Nav = () => {
   const [activeLink, setActiveLink] = useState('#')

   return (
      <nav>
         <a
            href='#'
            onClick={() => setActiveLink('#')}
            className={activeLink === '#' ? styles.active : ''}
         >
            <BiHome />
         </a>
         <a
            href='#about'
            onClick={() => setActiveLink('#about')}
            className={activeLink === '#about' ? styles.active : ''}
         >
            <BiUser />
         </a>
         <a
            href='#experience'
            onClick={() => setActiveLink('#experience')}
            className={activeLink === '#experience' ? styles.active : ''}
         >
            <BiBook />
         </a>
         <a
            href='#portfolio'
            onClick={() => setActiveLink('#portfolio')}
            className={activeLink === '#portfolio' ? styles.active : ''}
         >
            <BiBookmarkAlt />
         </a>
         <a
            href='#contacts'
            onClick={() => setActiveLink('#contacts')}
            className={activeLink === '#contact' ? styles.active : ''}
         >
            <BiMessage />
         </a>
      </nav>
   )
}

export default Nav

