import React from 'react'

export default function About() {

  const arr = ['home', 'about', 'services', 'portfolio', 'contact']
  const hanleHireMe = () => {
    arr.map(item => document.querySelector('#' + item).classList.remove('active'))

    // const href = element.getAttribute('href').split('#')[1];
    document.querySelector('#contact').classList.add('active')
  }

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
    <section className='about section' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>About Me</h2>
            </div>
          </div>

          <div className='row'>
            <div className='about-content padd-15'>
              <div className='row'>
                <div className='about-text padd-15'>
                  <h3>I'm Đặng Cường and <span> Web Devoloper</span></h3>
                  <p>
                    2nd Year Student - University Of Technology - VietNam National University
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='personal-info padd-15'>
                  <div className='row'>
                    <div className='info-item padd-15'>
                      <p>Birthday: <span>29 June 2003</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Age: <span>20</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Website:<span>portfolio-lake-mu-69.vercel.app</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Email: <span>dvc29062003@gmail.com</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Degree: <span>None</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Phone: <span>0982193203</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>City: <span>Hà Nội</span></p>
                    </div>
                    <div className='info-item padd-15'>
                      <p>Facebook: <span>facebook/dvc296</span></p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='buttons padd-15'>
                      <a href="#" className='btn' onClick={handleDowload}>Dowload CV</a>
                      <a href='#contact' className='btn hire-me' onClick={hanleHireMe}>Hire Me</a>
                    </div>
                  </div>
                </div>
                <div className='skills padd-15'>
                  <div className='row'>
                    <div className='skill-item padd-15'>
                      <h5>CSS</h5>
                      <div className='progress'>
                        <div className='progress-in' style={{ width: '76%' }}></div>
                        <div className='skill-percent'>76%</div>
                      </div>
                    </div>
                    <div className='skill-item padd-15'>
                      <h5>JS</h5>
                      <div className='progress'>
                        <div className='progress-in' style={{ width: '86%' }}></div>
                        <div className='skill-percent'>86%</div>
                      </div>
                    </div>
                    <div className='skill-item padd-15'>
                      <h5>PHP</h5>
                      <div className='progress'>
                        <div className='progress-in' style={{ width: '66%' }}></div>
                        <div className='skill-percent'>6%</div>
                      </div>
                    </div>
                    <div className='skill-item padd-15'>
                      <h5>HTML</h5>
                      <div className='progress'>
                        <div className='progress-in' style={{ width: '76%' }}></div>
                        <div className='skill-percent'>76%</div>
                      </div>
                    </div>
                    <div className='skill-item padd-15'>
                      <h5>CSS</h5>
                      <div className='progress'>
                        <div className='progress-in' style={{ width: '76%' }}></div>
                        <div className='skill-percent'>76%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='row'>
                <div className='education padd-15'>
                  <h3 className='title'>Education</h3>
                  <div className='row'>
                    <div className='timeline-box padd-15'>
                      <div className='timeline shadow-dark'>

                         <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2023
                          </h3>
                          <h4 className='timeline-title'>University Of Techology</h4>
                          <p className='timeline-text'>2nd Year Student</p>
                         </div>

                         {/* <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2023
                          </h3>
                          <h4 className='timeline-title'>Đại Học Công Nghệ</h4>
                          <p className='timeline-text'>Sinh Viên Đại Học Công Nghệ</p>
                         </div>

                         <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2023
                          </h3>
                          <h4 className='timeline-title'>Đại Học Công Nghệ</h4>
                          <p className='timeline-text'>Sinh Viên Đại Học Công Nghệ</p>
                         </div> */}

                      </div>
                    </div>
                  </div>
                </div>
                <div className='experience padd-15'>
                  <h3 className='title'>Experience</h3>
                  <div className='row'>
                    <div className='timeline-box padd-15'>
                      <div className='timeline shadow-dark'>

                         <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2022
                          </h3>
                          <h4 className='timeline-title'>Web For Education</h4>
                          <p className='timeline-text'>Won The Second Prize Web For Education Organized By HaMic club</p>
                         </div>

                         <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2022
                          </h3>
                          <h4 className='timeline-title'>Blokchain</h4>
                          <p className='timeline-text'>Get a Blokchain Certificate Hosted By Solana</p>
                         </div>

                         {/* <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h3 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2021 - 2023
                          </h3>
                          <h4 className='timeline-title'>Đại Học Công Nghệ</h4>
                          <p className='timeline-text'>Sinh Viên Đại Học Công Nghệ</p>
                         </div> */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
