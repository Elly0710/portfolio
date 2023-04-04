import React, { useEffect, useState } from 'react'

export default function Switcher() {
  const setActiveStyle = (color) => {
    document.querySelectorAll('.alternate-style').forEach(element => {
      color === element.getAttribute('title') 
        ? element.removeAttribute('disabled') 
        : element.setAttribute('disabled',"true");
    });
  }
  
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(true)
  const handleBackground = () => {
    setIcon(!icon)
    document.body.classList.toggle('dark');
  }
  return (
    <div className={active ? 'style-switcher open' : 'style-switcher'}>
        <div className='style-switcher-toggler s-icon'
          onClick={() => setActive(!active)}
        >
            <i className='fas fa-cog fa-spin'></i>
        </div>
        <div className='day-night s-icon'
          onClick={() => handleBackground()}
        >
            <i className={icon ? 'fas fa-moon' : 'fas fa-sun'}></i>
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
