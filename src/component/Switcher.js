import React, { useEffect, useState } from 'react'

// const setActiveStyle = (color) => {
//   document.querySelector('.alternate-style').forEach(element => {
//     color === element.getAttribute('title') 
//       ? element.removeAttribute('disabled') 
//       : element.setAttribute('disabled',true); 
//   });
// }

export default function Switcher() {

  

  const setActiveStyle = (color) => {
    document.querySelectorAll('.alternate-style').forEach(element => {
      color === element.getAttribute('title') 
        ? element.removeAttribute('disabled') 
        : element.setAttribute('disabled',"true"); 
    });
  }

  console.log(document.querySelectorAll('.alternate-style'));

  const handleToggle = () => {
    document.querySelector('.style-switcher').addEventListener('click', () =>
      document.querySelector('.style-switcher').classList.toggle('open'))
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => {
      if(document.body.classList.contains('dark')) {
        document.querySelector('.day-night').querySelector('i').classList.add('fa-sun');
      }else {
        document.querySelector('.day-night').querySelector('i').classList.add('fa-moon');
  
      }
    })
  }, [])

  const handleBackground = () => {
    document.querySelector('.day-night').addEventListener('click', () => {
      document.querySelector('.day-night').querySelector('i').classList.add('fa-sun');
      document.querySelector('.day-night').querySelector('i').classList.add('fa-moon');
      document.body.classList.toggle('dark');
    });
  }
  return (
    <div className='style-switcher'>
        <div className='style-switcher-toggler s-icon'
          onClick={() => handleToggle()}
        >
            <i className='fas fa-cog fa-spin'></i>
        </div>
        <div className='day-night s-icon'
          onClick={() => handleBackground()}
        >
            <i className='fas fa-moon'></i>
        </div>
        <h4>Theme Colors</h4>
        <div className='colors'>
            <span className='color-1' onClick={() => setActiveStyle('color-1')}></span>
            <span className='color-2' onClick={() => setActiveStyle('color-2')}></span>
            <span className='color-3' onClick={() => setActiveStyle('color-3')}></span>
            <span className='color-4' onClick={() => setActiveStyle('color-4')}></span>
            <span className='color-5' onClick={() => setActiveStyle('color-5')}></span>
        </div>
    </div>
  )
}
