import React from 'react'
import { Link } from 'react-router-dom'
import watch from "../../assets/watch.png";
import { Carousel } from 'react-responsive-carousel'
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import travel from '../../assets/travel.png'
import Zoom from 'react-img-zoom';
function Crt() {
  return (
    <div>
        <Header />
       <div className="container">
        <div className="row justify-content-center mb-5" >
          
          <div className="col-md-4 my-3 carouselbg">
            <div>
              <Carousel>
                <div className="image">
                <Zoom
  img={watch}
  zoomScale={3}
  width={400}
  height={400}
/>
               
               
                 
                </div>
                <div className="image">
                
                </div>
                <div className="image">
              
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-md-4 my-3 pt-5 carouseltextbg">
            <h4 className="d-inline">Whiskas Tuna & White Fish </h4>
            <span className="float-end shareicon">
              <i class="fa fa-share-alt" aria-hidden="true"></i>
            </span>
            <h4>Cat Food-85 Gm - </h4>
            <h4>GCFCNFIXX0135</h4>
            <p>SKU 0X708F7</p>
            <h5 className="d-inline brand ">Brand:</h5>
            <p className="d-inline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h5 className="mt-2 fw-bold">RS/120.00</h5>
            <p>starting price</p>
            <span className="fw-bold">Quantity</span>

            <select
              class="form-select form-select-lg mb-3 mt-1 selectopt"
              aria-label=".form-select-lg example"
            >
              <option selected>Only1</option>
              <option value="1">Only2</option>
              <option value="2">Only3</option>
              <option value="3">Only4</option>
            </select>

           <Link to='/checkout'>
           <button type="btn" className="shop d-block">
              <i class="fa fa-shopping-cart me-2" aria-hidden="true"></i> Check
              Available Shop
            </button>
           </Link>
            <div className="mt-4 ckks">
                <p className="calling ">Lorem ipsum dolor sit amet.</p>
                <p className="callingicon"><i class="fa fa-phone me-2 " aria-hidden="true"></i>+923347848662</p>
            </div>
          </div>
          <div className="col-md-2 my-3 pt-5">
              <p className="warrenty">Warrenty</p>
              <p className="authentic"><i class="fa fa-check me-2 checkcol" aria-hidden="true"></i>100% Authentic</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Crt
