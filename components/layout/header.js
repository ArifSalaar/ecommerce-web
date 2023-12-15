import phone from "../../assets/phone.svg";
import mail from "../../assets/mail-line 1.svg";
import sphone from "../../assets/smartphone.svg";
import logo from "../../assets/logo.svg";
import AS from "../../assets/logo.png";
import cart from "../../assets/cart.svg";

import bell from "../../assets/bell.svg";
import chat from "../../assets/chat.svg";
import user from "../../assets/user.svg";
import user1 from "../../assets/user1.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/menu-line.svg";
import google from "../../assets/google.svg";
import menuCross from "../../assets/menu-1.svg";
import woman from "../../assets/woman.jpg";
import { Link } from "react-router-dom";
import Loginform from "../../pages/loginform/Loginform";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";
function Header() {
  const[OpenModel, SetOpenModel] = useState(false)
  const [ShowMenu, SetShowMenu] = useState(false);
  const [ShowMobileMenu, SetShowMobilewMenu] = useState(false);
  let mblmenu;
 
  let evalymblmenu;
  if (ShowMobileMenu) {
    evalymblmenu = (
      <div className="container-fluid">
       
        <div className="row d-lg-none menubg">
          <div className="col-12 mb-2 ms-3  userimage">
          <i class="fa fa-user-circle me-2 profileusericon" aria-hidden="true"></i>
            <div className="d-inline">
              <h6 className="username d-inline ">Akhtar Azad</h6>
              <p className="ms-4 usernumber">03347848662</p>
            </div>
            <div className="acount">
              {" "}
              <a className="ms-4 myaccount" style={{cursor:"pointer"}}>My Account</a>
              <span className="float-end me-3 rotate">
                RS.0.00<i class="fa fa-repeat ms-1 " aria-hidden="true"></i>
              </span>
            </div>
            <div>
              <a className="ms-4 myaccount" style={{cursor:"pointer"}}>Manage Your Evaly Profile</a>
            </div>
            <div className="fw-bold mt-3">
              <span>Bronze</span> <span className="float-end me-3">Silver</span>
            </div>
            <div className="me-3 mt-2 mb-5 solidline"></div>

            <div className="col-12">
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-envelope-open me-2 " aria-hidden="true  "></i>{" "}
                  Orders
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-gift me-2 " aria-hidden="true  "></i>{" "}
                  Giftcards
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-mobile me-2 " aria-hidden="true  "></i>{" "}
                  Moobile Top Up
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-gift me-2 " aria-hidden="true  "></i>{" "}
                  Compaigns
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-heart me-2 " aria-hidden="true  "></i>{" "}
                  Followed Shops
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-shopping-basket me-2 " aria-hidden="true  "></i>{" "}
                  Shops
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-cart-arrow-down me-2 " aria-hidden="true  "></i>{" "}
                  Evaly Express Shops
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-file-text me-2 " aria-hidden="true  "></i>{" "}
                  News Feed
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-id-card me-2 " aria-hidden="true  "></i>{" "}
                  Vouchers
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-podcast me-2 " aria-hidden="true  "></i>{" "}
                  Career
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-money me-2 " aria-hidden="true  "></i>{" "}
                  bKash payment
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="me-3 mb-3 mt-2">
                <span className="fontbol">
                  <i class="fa fa-user-circle me-2 " aria-hidden="true  "></i>{" "}
                  Logout
                </span>
                <span>
                  <i
                    class="fa fa-chevron-right float-end"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Top Nav  */}
      <div className="bg-top-bar">
        <div className="d-lg-block d-none">
          <div className="container">
            <div className="top-bar">
              <div className="top-left">
                <a href="javascript:void(0)">
                  <span className="icon me-2">
                    <img src={phone} alt="" />
                  </span>{" "}
                  <span className="text me-5">+923347848662</span>
                </a>
                <a href="javascript:void(0)">
                  <span className="icon me-2">
                    <img src={mail} alt="" />
                  </span>{" "}
                  <span className="text">akhtarazaad@yahoo.com </span>
                </a>
              </div>
              <div className="top-right">
                <a href="javascript:void(0)">
                  <span className="icon">
                    <img src={sphone} alt="" />
                  </span>{" "}
                  <span className="text">Save big on our app!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Nav  */}
      <div className="bg-white">
        <div className="container ">
          <div className="mid-bar">
            <div className="logo d-lg-block d-none text-center">
              <a>
                <Link to="/">
                  {" "}
                  <img
                    src={AS}
                    alt=""
                    className="img-fluid"
                    style={{ width: "150px", height: "auto" }}
                  />
                </Link>
              </a>
            </div>
            <div className="toggle-icon d-lg-none d-block me-3">
              <a href="javascript:void(0)">
                <img
                  src={menuCross}
                  alt=""
                  onClick={() => SetShowMobilewMenu(!ShowMobileMenu)}
                />
              </a>
            </div>

            <div className="mid-container">
              <div className="search-bar">
                <div className="input-with-icon md-s">
                  <input type="text" placeholder="Search for..." />
                  <a href="javascript:void(0)" className="s-icon">
                    <img src={search} alt="" />
                  </a>
                </div>
              </div>

              <div className="menu-icons d-lg-block d-none">
                <a href="javascript:void(0)" className="">
                  <img src={cart} alt="" />
                  <span className="counter">2</span>
                </a>
                <Link to="/profile" className="">
                  <img src={bell} alt="" />
                  <span className="dot"></span>
                </Link>
                <Link to="/usertransactions" className="">
                  <img src={chat} alt="" />
                </Link>
                <a  className="me-0 cusrsor" onClick={()=>{SetOpenModel(true)}}>
                  <img src={user} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {evalymblmenu}
      </div>

      {/* .Bottom Nav  */}
      <div className="bg-blue d-lg-block d-none">

        <div className="container">
          <div className="row">
            <div className="col-md-12">
          <div className="bottom-nav">
            <div className="togglr-menu"   onClick={() => SetShowMenu(!ShowMenu)}>
              <div className="toggler "  >
                <img src={menu} alt="" />
              </div>

              <div className="text-uppercase">CATEGORIES</div>
              <div>
                <i
                  className="fas fa-chevron-down text-white"
                
                ></i>
               
              </div>
            </div>
          
                
               
            
            <div className="right-menu">
              <div className="left-aside">
                <Link to="/products" >
                  {" "}
                  <a>All Shops</a>
                </Link>
                <a href="javascript:void(0)">Gift Card</a>
                <a href="javascript:void(0)">Compaigns</a>
                <Link to = '/product'>Top-up</Link>
                <Link to="/paymentsquare">Express</Link>
                <Link to="/Orderlist">ET10</Link>
              </div>
              <div className="right-aside">
                <Link to="/checkout">News Feed</Link>
                <Link to="/stepsmenu">Merchant Zone</Link>
                <a href="javascript:void(0)" className="pe-0">
                  Help
                </a>
              </div>
            </div>
          </div></div></div>
        </div>

      </div>
      {/* <span className="counter">2</span> */}

      <div className="md-nav d-lg-none d-block">
        <div className="menu-icons">
          <div className="text-center">
            <a href="javascript:void(0)" className="">
              <img src={cart} alt="" />
            </a>
            <div className="bottom-text">Cart</div>
          </div>
          <div className="text-center">
            <a to="/usertransactions" className="">
              <img src={chat} alt="" />
            </a>
            <div className="bottom-text">Message</div>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              className="t-20 h-auto w-auto mx-2 blck-icon"
            >
              <img src={google} alt="" />
            </a>
          </div>
          <div className="text-center">
            <a href="javascript:void(0)" className="">
              <img src={bell} alt="" />
            </a>
            <div className="bottom-text">Notification</div>
          </div>
          <div className="text-center">
            <a href="javascript:void(0)" className="me-0">
              <img src={user1} alt="" />
            </a>
            <div className="bottom-text">Account</div>
          </div>
        </div>
      </div>
      {OpenModel && <Loginform CloseModel={SetOpenModel}  />}
     <div className="container">
       <div className="row">
         <div className="col-4">
         {ShowMenu && <Dropdown closedrop={SetShowMenu}/>}
         </div>
       </div>
     </div>
    </div>
  );
}

export default Header;
