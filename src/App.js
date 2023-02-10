import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
   return (
      <div className='container'>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Portfolio />
         <Contact />
         <Footer />
      </div>
   )
}

export default App

