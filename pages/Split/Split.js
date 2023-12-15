import React from 'react'
import construction from '../../assets/const.png'
import { Link } from 'react-router-dom'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Split() {
    const [items, setItems] = useState([]);
    
    useEffect (() =>{

        axios.get("http://localhost:1337/api/desktops").then((res) => {
            console.log(res);
            setItems(res.data.data);
          });
    
     },[])

  return (
    <div>
    <Header />

    <div>
      <div
        class="container bg-trasparent my-4 p-3"
        style={{ position: "relative" }}
      >
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {items && items.map((value) => {
            return (
              <div class="col" key={value.id}>
                <Link to="/prouctdetail">
                  <div class="card h-100 shadow-sm">
                    {" "}
                    <img
                      src={"https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="clearfix mb-3">
                        {" "}
                        <span class="float-start badge rounded-pill bg-primary">
                        {value.attributes.title}
                        </span>{" "}
                        <span class="float-end price-hp">{value.attributes.price}</span>{" "}
                      </div>
                      <h5 class="card-title">
                      {value.attributes.description}
                      </h5>
                      <div class="text-center my-4">
                        {" "}
                        <a class="btn btn-warning">
                        {value.attributes.Button}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Split
