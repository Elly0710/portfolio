import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import Service from './Service'

export default function Main() {
  return (
    <div className='main-content'>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  )
}
