import React, { useState } from 'react'
import Header from '../../components/layout/header'
import cash from '../../assets/cash-delivery.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/layout/footer'

function Checkout() {


  const[addcart,setaddcart] = useState('')


  function addbtn() {
    return(
      addcart+1
    )
    
  }

  return (
    <>
     <Header />
     
<div className="container">
     <div className="row justify-content-center mt-5 mb-5 mx-1">
         <div className="col-md-5    ">
         <h4 className='fw-bold' style={{backgroundColor:"#F7F8FA"}}>Your Order</h4>
         <div className='hek py-3 px-2'>
         <div className='imgsec'><img src={cash} alt="" className='img-fluid' style={{width:"50px",height:"50px"}} /> <span style={{fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
         <div className='imgsec1 mt-3 ps-2'><img src={cash} alt="" className='img-fluid' style={{width:"50px",height:"50px"}} /> <span style={{fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
        <div className='mt-4 mb-4 ps-2'> <span className='addremove'>-</span><span className='empty'></span> <span className='addremove hsh' >+</span><span className='float-end red'>Remove</span></div>
         </div>
         </div>
         
         <div className="col-md-5  mb-5 ">
             <h4 className='fw-bold' style={{backgroundColor:"#F7F8FA"}}>Order Summary</h4>
             <div className='hek px-2 py-2'>
             <div className='hak'> 
             <a>Lorem ipsum dolor sit amet.</a><span className='float-end'>$57578.00</span></div>
             <div className='hgk'>
             <a href="">Subtotal</a><span className='float-end'>$57578.00</span></div>
             <div className='hck'>
             <a href="">Total</a><span className='float-end'>$57578.00</span></div>
             <div className='hvk mb-3'>
           <Link to = '/payment'>
           

           <button type='btn' className='btn bg-black text-white px-5'>Conferm Order</button>
           
           </Link></div>
         </div></div>
     </div></div>
    
     <Footer />
    </>
  )
}

export default Checkout
