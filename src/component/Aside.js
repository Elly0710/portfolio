import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Aside() {
  const [actives, setActives] = useState(0)
  const [back, setBack] = useState(1)
  const [close, setClose] = useState(true)
  // const handleToggle = () => {
  //     // const aside = document.querySelector('.aside')
  //     // const toggle = document.querySelector('.nav-toggler')
  //     // aside.classList.toggle('open')
  //     // toggle.classList.toggle('open')
  //     setClose(!close)
  // }
  const arr = ['home', 'about', 'services', 'portfolio', 'contact']
  const handleNextPage = (index) => {
    setBack(actives)
    setActives(index)
    setClose(!close)
  }
  const handleBackSection = (id) => {
    document.querySelectorAll("section").forEach(element => element.classList.remove('back-section'))
    document.querySelectorAll("section").forEach(element => element.classList.remove('active'))
    document.querySelector('#' + id)?.classList.add('back-section')
    document.querySelector('#' + arr[actives])?.classList.add('active')
  }
  return (
    <div className={close ? 'aside open' : 'aside'}>
      <div className='logo'>
        <a href='#'><span>M</span>anlly</a>
      </div>
      <div className={close ? 'nav-toggler open' : 'nav-toggler'} onClick={() => setClose(!close)}>
        <span></span>
      </div>
      <ul className='nav'>
        <li onClick={()=> handleNextPage(0)}><a href='#home' 
          className= {actives === 0 ? 'active' : back === 0 ? handleBackSection('home') : ''}
          ><i className='fa fa-home'></i> Home</a></li>
        <li onClick={()=> handleNextPage(1)}><a href='#about' 
          className= {actives === 1 ? 'active' : back === 1 ? handleBackSection('about') : ''}
        ><i className='fa fa-user'></i> About</a></li>
        <li onClick={()=> handleNextPage(2)}><a href='#services'
          className= {actives === 2 ? 'active' : back === 2 ? handleBackSection('services') : ''}
        ><i className='fa fa-list'></i> Services</a></li>
        <li onClick={()=> handleNextPage(3)}><a href='#portfolio'
          className= {actives === 3 ? 'active' : back === 3 ? handleBackSection('portfolio') : ''}
        ><i className='fa fa-briefcase'></i> Portfolio</a></li>
        <li onClick={()=> handleNextPage(4)}><a href='#contact'
          className= {actives === 4 ? 'active' : back === 4 ? handleBackSection('contact') : ''}
        ><i className='fa fa-comments'></i>Contact</a></li>
      </ul>
    </div>
  )
}
