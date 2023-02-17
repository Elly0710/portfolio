import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Aside() {
  
  const arr = ['home', 'about', 'services', 'portfolio', 'contact']
  const handleShow = (element) => {
    arr.map(item => document.querySelector('#' + item).classList.remove('active'))

    const href = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + href).classList.add('active')
  }

  const hanleNav = () => {
    const nav = document.querySelector('.nav')
    const navList = nav.querySelectorAll('li')
    for (let i = 0; i < navList.length; i++) {
      const aTag = navList[i].querySelector('a')
      aTag.addEventListener('click', () => {
        for (let x = 0; x < navList.length; x++) {
          document.querySelector('#' + arr[x]).classList.remove('back-section')
        }

        for (let j = 0; j < navList.length; j++) {
          if (navList[j].querySelector('a').classList.contains('active')) {
            document.querySelector('#' + arr[j]).classList.add('back-section')
            console.log(document.querySelector('#' + arr[j]));
          }

          navList[j].querySelector('a').classList.remove('active')
          console.log(navList[j].querySelector('a').classList.contains('active'));
        }

        aTag.classList.add('active')
        handleShow(aTag)
      })
    }
  }

  const handleToggle = () => {
      const aside = document.querySelector('.aside')
      const toggle = document.querySelector('.nav-toggler')
      aside.classList.toggle('open')
      toggle.classList.toggle('open')

      for(let i = 0; i < arr.length; i++) {
        document.querySelector('#' + arr[i]).classList.toggle('open')
      }
  }

  return (
    <div className='aside'>
      <div className='logo'>
        <a href='#'><span>M</span>anlly</a>
      </div>
      <div className='nav-toggler' onClick={handleToggle}>
        <span></span>
      </div>
      <ul className='nav' onClick={hanleNav}>
        <li><a href='#home' className='active'><i className='fa fa-home'></i> Home</a></li>
        <li><a href='#about'><i className='fa fa-user'></i> About</a></li>
        <li><a href='#services'><i className='fa fa-list'></i> Services</a></li>
        <li><a href='#portfolio'><i className='fa fa-briefcase'></i> Portfolio</a></li>
        <li><a href='#contact'><i className='fa fa-comments'></i>Contact</a></li>
      </ul>
    </div>
  )
}
