import React from 'react'

export default function Contact() {
  return (
    <section className='contact section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Contact Me</h2>
            </div>
          </div>

          <h3 className='contact-title padd-15'>Have You Any Question ?</h3>
          <h4 className='contact-sub-title padd-15'>I'm At Your Service</h4>
          <div className='row'>
            <div className='contact-info-item padd-15'>
              <div className='icon'><i className='fa fa-phone'></i></div>
              <h4>Call Us On</h4>
              <p>0982193203</p>
            </div>

            <div className='contact-info-item padd-15'>
              <div className='icon'><i className='fa fa-map-marker-alt'></i></div>
              <h4>Office</h4>
              <p>Hà Nội</p>
            </div>

            <div className='contact-info-item padd-15'>
              <div className='icon'><i className='fa fa-envelope'></i></div>
              <h4>Email</h4>
              <p>dvc29062003@gmail.com</p>
            </div>

            <div className='contact-info-item padd-15'>
              <div className='icon'><i className='fa fa-globe-europe'></i></div>
              <h4>Website</h4>
              <p>dangcuong.com</p>
            </div>
          </div>  
          <h3 className='contact-title padd-15'>SEND ME AN EMAIL</h3>
          <h4 className='contact-sub-title padd-15'>I'M VERY RESPOSIVE TO MESSAGES</h4>

          <div className='row'>
            <div className='contact-form padd-15'>
              <div className='row'>
                <div className='form-item col-6 padd-15'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Name' />
                  </div>
                </div>

                <div className='form-item col-6 padd-15'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Email' />
                  </div>
                </div>
                
              </div>

              <div className='row'>
                <div className='form-item col-12 padd-15'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Subject' />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='form-item col-12 padd-15'>
                  <div className='form-group'>
                    <textarea name='' className='form-control' id='' placeholder='Message '></textarea>
                  </div>
                </div>

              </div>

              <div className='row'> 
                <div className='form-item col-12 padd-15'>
                  <button type='submit' className='btn'>Send Message</button>
                </div> 
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}
