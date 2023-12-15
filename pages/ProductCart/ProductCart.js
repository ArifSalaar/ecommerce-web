import React from "react";
import watch from "../../assets/watch.png";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../assets/css/app.css";

import tool from "../../assets/tools.png";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
function ProductCart() {
  return (
    <>
      <Header />
      <div className="container mt-3 bgcolor">
        <div className="row mx-1 justify-content-center">
          <div className="col-md-11">
            <div>
              <Carousel infiniteLoop autoPlay>
                <div className="image">
                  <img src={watch} alt="" className="img-fluid"/>
                </div>
                <div className="image">
                  <img src={watch} alt="" className="img-fluid"/>
                </div>
                <div className="image">
                  <img src={watch} alt=""  className="img-fluid"/>
                </div>
                <div className="image">
                  <img src={watch} alt="" className="img-fluid"/>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-md-11  OLEVS">
            <h3>
              OLEVS OLV 2871 Leather Analog Watch for Men - Chocolate - KS-3
            </h3>
            <h5 className="py-2">SKU: 39JG84L04IF</h5>
            <h5 className="pb-2" style={{ letterSpacing: "1px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h5>
            <h3 className="pt-3">1690.00</h3>
            <h5 className="py-2">Starting Price</h5>
            <h5 className="pb-2" style={{ color: "black" }}>
              Quality
            </h5>

            <select class="form-select " aria-label="Default select example">
              <option className="pb-2" selected style={{ fontWeight: "bold" }}>
                Only 1
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <button className="mt-5 py-1" type="btn">
              <i class="fa fa-cart-plus px-2" aria-hidden="true"></i>Check
              Availabel
            </button>
            <button className="mt-5 mb-3 py-3 text-start callbtn" type="btn">
              <i class="fa fa-phone px-2" aria-hidden="true"></i>009203320597475
            </button>
          </div>
          <h5 className="py-4 ps-5  shadbg" style={{ color: "black" }}>
            Warenty <br />
            <span>
              <i
                class="fa fa-check-circle pe-1"
                style={{ color: "#103540" }}
                aria-hidden="true"
              ></i>
              100% Authentic
            </span>
          </h5>
        </div>
      </div>
      <div className="container mt-5 bgcolor1">
        <div className="row ">
          <div className="col-md-12 Product">
            <h3 className="py-1">
              Product details of OLEVS OLV 25875 Leather Analog Watch for Men -{" "}
              <br />
              Chocolate - KS - 3
            </h3>
            <div className="row"></div>
            <div className="col-md-12 px-5 py-5 textbg">
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </h5>
            </div>
            <div className="col-md-12 px-5 py-2   textbg textbg2 ">
              <h5>Product type</h5>
              <h5>watch</h5>
              <br />
              <h5>Strap Matrial</h5>
              <h5>Leather</h5>
              <br />
              <h5>Movement</h5>
              <h5>Quartz</h5>
              <br />
              <h5>Dial Diameter</h5>
              <h5>Dial Diameter</h5>
              <br />
              <h5>Dial Thikness</h5>
              <h5>Dial Thikness</h5>
              <br />
              <h5>Bracelet Width</h5>
              <h5>Bracelet Width</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="evaly-express mb-5 pb-lg-5">
            <div className="heading1">
              <h3>Related Products</h3>
              <div className="d-flex align-items-center flex-1 justify-content-end">
                <div className="search-bar1 me-3">
                  <div className="input-with-icon md-s"></div>
                </div>
              </div>
            </div>
            <div className="card-grid1">
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
              <Link to = "/cart"><div className="travel-card">
                <div className="travel-img">
                  <img className="w-100" src={watch} alt="" />
                </div>
                <div className="travel-content">
                  <h5 class="block-ellipsis">
                    SKMEI 84849 Alley Chronograph Watch for Men - Silver
                  </h5>
                  <div className="counting">
                    <p className="m-0">1250</p>
                    <h6>1250</h6>
                  </div>
                </div>
              </div></Link>
            
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductCart;
