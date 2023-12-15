import React from 'react'
import { NavLink } from 'react-router-dom'
function Dropdown() {
  return (
    <div>
        
            <div className="home dropdownmanu" style={{position:"absolute",zIndex:"1111"}}>
            <div className='left-aside d-lg-block d-none'>
            <div className='mena-menu'>
              <ul>
                <li>
                  <NavLink  to="/desktop" >
                    <div>Desktop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/laptop'>
                    <div>Laptop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/manwtach'>
                    <div>Men’s Watch</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/oven'>
                    <div>Microwave Oven</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/motorbike'>
                    <div>Motor Bike</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/refrigerator'>
                    <div>Refrigerator</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/smartphone'>
                    <div>Smart Phone</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/smarttv'>
                    <div>Smart TC & Android TV</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/speaker'>
                    <div>Speaker</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/split'>
                    <div>Split AC</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
            </div>
           
    </div>
  )
}

export default Dropdown
