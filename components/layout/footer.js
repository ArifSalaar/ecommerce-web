import appStore from '../../assets/app-store.svg'
import playStore from '../../assets/play-store.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import youTube from '../../assets/youtube.svg'
import twitter from '../../assets/twitter.svg'
import wp from '../../assets/wp.svg'

function Footer () {
  return (
    <>
      <footer>
        <div class='container'>
          <div class='row py-5 '>
            <div class='col-md-3 col-6'>
              <div class='footer-text'>
                <h4>Download</h4>
                <a href='javascript:void(0)' className='play-btn'>
                  <img src={appStore} alt='' />
                </a>
                <a href='javascript:void(0)' className='play-btn'>
                  <img class='mt-3' src={playStore} alt='' />
                </a>
              </div>
            </div>
            <div class='col-md-3 col-6'>
              <div class='footer-text'>
                <h4>Menu</h4>
                <ul>
                  <li>
                    <a href='javascript:void(0)'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Cookie Policy</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Purchasing Policy</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-md-3 col-12'>
              <div class='footer-text'>
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href='javascript:void(0)'> Fazal Plaza Faiz Road Old Muslim Town Lahore </a>
                  </li>
                 
                  <li>
                    <a href='javascript:void(0)'>Email:  akhtarazaad@yahoo.com </a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Contact no: +923347848662   </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-md-3 col-12'>
              <div class='footer-text'>
                <h4>Social</h4>
                <div class='social-links'>
                  <a href='javascript:void(0)'>
                    <img src={fb} alt='' />
                  </a>
                  <a href='javascript:void(0)'>
                    <img src={insta} alt='' />
                  </a>
                  <a href='javascript:void(0)'>
                    <img src={youTube} alt='' />
                  </a>
                  <a href='javascript:void(0)'>
                    <img src={twitter} alt='' />
                  </a>
                  <a href='javascript:void(0)'>
                    <img src={wp} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='footer-bottom'>
          Amazing Store © 2022. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
