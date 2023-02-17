import React from 'react'

export default function Home() {
  const handleDowload = () => {
    fetch('cv_dang_van_cuong.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'cv_dang_van_cuong.pdf';
          alink.click();
      })
  })
  }

  return (
    <section className='home section active' id='home'>
        <div className='container'>
          <div className='row'>
            <div className='home-info padd-15'>
              <h3 className='hello'>Hello, my name is <span className='name'>Đặng Cường</span></h3>
              <h3 className='my-profession'>I'm a <span className='typing'>web Devoloper</span></h3>
              <p>I'm a web Devoloper with extensive a few experience . My experience is to create
                and website design, and many more...
              </p>
              <a href='#contact' className='btn' onClick={handleDowload}>Dowload CV</a>
            </div>
            <div className='home-img padd-15'>
              <img src='images/hero.jpg' alt=''/>
            </div>
          </div>
        </div>
      </section>
  )
}
