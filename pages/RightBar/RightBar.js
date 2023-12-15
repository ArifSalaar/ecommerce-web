import React from 'react'
import { Link } from 'react-router-dom'
function RightBar() {
  return (
    <div>
        <div className='left-aside d-lg-block d-none'>
            <div className='mena-menu'>
              <ul>
                <Link to="/categories"><li>
                  <a>
                    <div>Desktop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li></Link>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Laptop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Men’s Watch</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Microwave Oven</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Motor Bike</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Refrigerator</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Smart Phone</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Smart TC & Android TV</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Speaker</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)'>
                    <div>Split AC</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default RightBar
