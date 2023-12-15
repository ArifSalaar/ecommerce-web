import React from "react";
import Header from "../../components/layout/header";
import { Carousel } from "react-responsive-carousel";
import watch from "../../assets/watch.png";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Footer from "../../components/layout/footer";
import axios from "axios";
import { useState, useEffect } from "react";
const props = {
  width: 400,
  height: 250,
  zoomWidth: 550,
  img: "https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png",
  img: "https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png",
};

function DesktopProuct() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/carts").then((res) => {
      console.log(res);
      setItems(res.data.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 my-3 carouselbg">
            <div>
              <ReactImageZoom {...props} />
            </div>
          </div>
          {items &&
            items.map((val) => {
              return (
                <div className="col-md-4 my-3 pt-5 carouseltextbg" key={val.id}>
                  <h4 className="d-inline">{val.attributes.wishkas}</h4>
                  <span className="float-end shareicon">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </span>
                  <h4>{val.attributes.cat_food}</h4>
                  <h4>{val.attributes.Qrcode}</h4>
                  <p>{val.attributes.sku_number}</p>
                  <h5 className="d-inline brand ">Brand:</h5>
                  <p className="d-inline">
                  {val.attributes.brand}
                  </p>
                  <h5 className="mt-2 fw-bold">{val.attributes.starting_price}</h5>
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

                  <Link to="/checkout">
                    <button type="btn" className="shop d-block">
                      <i
                        class="fa fa-shopping-cart me-2"
                        aria-hidden="true"
                      ></i>{" "}
                     {val.attributes.check_button}
                    </button>
                  </Link>
                  <div className="mt-4 ckks">
                    <p className="calling ">Lorem ipsum dolor sit amet.</p>
                    <p className="callingicon">
                      <i class="fa fa-phone me-2 " aria-hidden="true"></i>
                      {val.attributes.Contact}
                    </p>
                  </div>
                </div>
              );
            })}
          <div className="col-md-2 my-3 pt-5">
            <p className="warrenty">Warrenty</p>
            <p className="authentic">
              <i class="fa fa-check me-2 checkcol" aria-hidden="true"></i>100%
              Authentic
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DesktopProuct;
