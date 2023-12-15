import React from 'react'
import './Signup.css'
function Signup({closereg}) {
  return (
    <div>
  
   <div className="signupfrom fixed-top position-fixed bgtransparent1 ">
   <div class="wrapper " data-aos="flip-left">
     <div className="cross"><button className='crossbtn' onClick={()=>closereg(false)}>X</button></div>
    <div class="title">
      Sign Up
    </div>
    <div class="form">
       <div class="inputfield">
          <label className='jjdjs'>First Name</label>
          <input type="text" class="input" />
       </div>  
        <div class="inputfield">
          <label  className='jjdjs'>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label  className='jjdjs'>Password</label>
          <input type="password" class="input" />
       </div>  
      <div class="inputfield">
          <label  className='jjdjs'>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
      
        <div class="inputfield">
          <label  className='jjdjs'>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label  className='jjdjs'>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
      
      <div class="inputfield">
          <label  className='jjdjs'>Postal Code</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield terms">
          
            <input type="checkbox"/>
            
         
          <p className='ms-3 mt-3'>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value=" Sign Up" class="btn signupbtn"/>
      </div>
    </div>
</div>	</div>
    </div>
  )
}

export default Signup
