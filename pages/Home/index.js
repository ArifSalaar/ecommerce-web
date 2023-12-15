import banner from '../../assets/banner.png'
import product from '../../assets/express.png'
import product1 from '../../assets/express1.png'
import product2 from '../../assets/express2.png'
import travel from '../../assets/travel.png'
import location from '../../assets/location.svg'

import search from '../../assets/search.svg'
import toyota from '../../assets/teer.png'
import cashDelivery from '../../assets/cash-delivery.png'
import cashDelivery1 from '../../assets/cash-delivery1.png'
import andriod from '../../assets/andriod.png'
import phone from '../../assets/phone.png'
import hero from '../../assets/shoe-rank.png'
import tool from '../../assets/tools.png'
import arrow from '../../assets/next.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Home () {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/homesliders").then((res) => {
      console.log(res);
      setItems(res.data.data);
    });
  }, []);


  const sliderSettings = {
    
    // removes default buttons
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    className: 'top-carasual',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  }

  const sliderSettings1 = {
    // removes default buttons
    dots: false,
    infinite: true,
    speed: 500,
    className: 'mid-carasual',
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  var cols = []
  for (var i = 0; i < 18; i++) {
    cols.push(
      <div className='brand-card'>
        <div className='brand-img'>
          <img className='w-100' src={toyota} alt='' />
        </div>
        <div className='brand-content'>TEER</div>
      </div>
    )
  }
  var cols1 = []
  for (var i = 0; i < 18; i++) {
    cols1.push(
      <div className='brand-card'>
        <div className='brand-img'>
          <img className='w-100' src={hero} alt='' />
        </div>
        <div className='brand-content'>The Shoe Rack</div>
      </div>
    )
  }

  return (
    <div>
      <div className='container'>
        <div className='home'>
          <div className='left-aside d-lg-block d-none'>
            <div className='mena-menu'>
              <ul>
                <li>
                  <Link  to="/desktop">
                    <div>Desktop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/laptop'>
                    <div>Laptop</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/manwtach'>
                    <div>Men’s Watch</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/oven'>
                    <div>Microwave Oven</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/motorbike'>
                    <div>Motor Bike</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/refrigerator'>
                    <div>Refrigerator</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/smartphone'>
                    <div>Smart Phone</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/smarttv'>
                    <div>Smart TC & Android TV</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/speaker'>
                    <div>Speaker</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/split'>
                    <div>Split AC</div>
                    <div>
                      <i className='fas fa-chevron-right'></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='right-aside'>
            <Slider {...sliderSettings}>
              <div className='top-banner'>
                <div className='top-card-height'>
                  <img src={banner} className='w-100' alt='' />
                </div>
              </div>
              <div className='top-banner'>
                <div className='top-card-height'>
                  <img src={banner} className='w-100' alt='' />
                </div>
              </div>
              <div className='top-banner'>
                <div className='top-card-height'>
                  <img src={banner} className='w-100' alt='' />
                </div>
              </div>
            </Slider>

            <div className='bottom-banner'>
              <h3>Ongoing Campaigns</h3>
            {

items && items.map((val)=>{

return(

  <Slider {...sliderSettings1}>
                <div className='left-banner'>
                  <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
                <div className='right-banner'>
                <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
                <div className='left-banner'>
                <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
                <div className='right-banner'>
                <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
                <div className='left-banner'>
                <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
                <div className='right-banner'>
                <h4>{val.attributes.title}</h4>
                  <p>{val.attributes.description}</p>
                </div>
              </Slider>


)

})

            }
            </div>
          </div>
        </div>

        <div className='evaly-express'>
          <div className='heading'>
            <h3>Evaly Express</h3>
            <div>
              <a href='javascript:void(0)'>see all</a>{' '}
            </div>
          </div>

          <Slider {...settings}>
            <div className='evaly-img'>
              <Link to = '/crt'>
              <img src={product} alt='' />
              </Link>
            </div>
            <div className='evaly-img'>
              <img src={product1} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product2} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product1} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product2} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product} alt='' />
            </div>
            <div className='evaly-img'>
              <img src={product1} alt='' />
            </div>
          </Slider>
        </div>

        <div className='evaly-express'>
          <div className='heading'>
            <h3>Shops - Cash On Delivery</h3>
            <div>
              <a href='javascript:void(0)'>see all</a>{' '}
            </div>
          </div>

          <Slider {...settings}>
            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>

            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery1} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>
            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>

            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery1} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>
            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>

            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery1} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>
            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>

            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery1} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>
            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>

            <div className='shop-card'>
              <div className='shop-img'>
                <img className='w-100' src={cashDelivery1} alt='' />
              </div>
              <div className='shop-card-content'>
                Anmandy kids for Cash on Delivery Service
              </div>
            </div>
          </Slider>
        </div>

        <div className='evaly-express'>
          <div className='heading1'>
            <h3>Shop By Brands</h3>
            <div className='d-flex align-items-center flex-1 justify-content-end'>
              <div className='search-bar1'>
                <div className='input-with-icon md-s'>
                  <input
                    type='text'
                    className='bg-white'
                    placeholder='Search...'
                  />
                  <a href='javascript(0)' className='s-icon'>
                    <img src={search} height={16} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card-grid'>{cols}</div>

          <div className='d-flex justify-content-center d-lg-none my-4'>
            <button className='btn view-btn'>
              View all{' '}
              <div className='btn-icon'>
                <img className='w-100' src={arrow} alt='' />
              </div>{' '}
            </button>
          </div>
        </div>

        <div className='evaly-express'>
          <div className='heading1'>
            <h3>Shop By Stores</h3>
            <div className='d-flex align-items-center flex-1 justify-content-end'>
              <div className='search-bar1 me-3'>
                <div className='input-with-icon md-s'>
                  <input type='text' placeholder='Search...' />
                  <a href='javascript(0)' className='s-icon'>
                    <img src={search} height={16} alt='' />
                  </a>
                </div>
              </div>
              <a href='javascript:void(0)' className='btn view-btn bg-black'>
                <img src={location} alt='' />
              </a>
            </div>
          </div>

          <div className='card-grid'>{cols1}</div>
          <div className='d-flex justify-content-center d-lg-none my-4'>
            <button className='btn view-btn'>
              View all{' '}
              <div className='btn-icon'>
                <img className='w-100' src={arrow} alt='' />
              </div>{' '}
            </button>
          </div>
        </div>
        <div className='evaly-express'>
          <div className='heading1'>
            <h3>Travel & Toures</h3>
            <div className='d-flex align-items-center flex-1 justify-content-end'>
              <div className='search-bar1 me-3'>
                <div className='input-with-icon md-s'>
                  <input type='text' placeholder='Search...' />
                  <a href='javascript(0)' className='s-icon'>
                    <img src={search} height={16} alt='' />
                  </a>
                </div>
              </div>
              <a href='javascript:void(0)' className='btn view-btn'>
                View All{' '}
              </a>
            </div>
          </div>
          <div className='card-grid1'>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={travel} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='evaly-express'>
          <div className='heading1'>
            <h3>Security & Safe</h3>
            <div className='d-flex align-items-center flex-1 justify-content-end'>
              <div className='search-bar1 me-3'>
                <div className='input-with-icon md-s'>
                  <input type='text' placeholder='Search...' />
                  <a href='javascript(0)' className='s-icon'>
                    <img src={search} height={16} alt='' />
                  </a>
                </div>
              </div>
              <a href='javascript:void(0)' className='btn view-btn'>
                View All
              </a>
            </div>
          </div>
          <div className='card-grid1'>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={phone} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={andriod} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='evaly-express mb-5 pb-lg-5'>
          <div className='heading1'>
            <h3>Tools, DIY & Outdoor</h3>
            <div className='d-flex align-items-center flex-1 justify-content-end'>
              <div className='search-bar1 me-3'>
                <div className='input-with-icon md-s'>
                  <input type='text' placeholder='Search...' />
                  <a href='javascript(0)' className='s-icon'>
                    <img src={search} height={16} alt='' />
                  </a>
                </div>
              </div>
              <a href='javascript:void(0)' className='btn view-btn'>
                View All
              </a>
            </div>
          </div>
          <div className='card-grid1'>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
            <div className='travel-card'>
              <div className='travel-img'>
                <img className='w-100' src={tool} alt='' />
              </div>
              <div className='travel-content'>
                <h5 class='block-ellipsis'>
                  Sundarban Premium Group Tour Package - 50 Persions
                </h5>
                <div className='counting'>
                  <p className='m-0'>$670000</p>
                  <h6>$390000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
