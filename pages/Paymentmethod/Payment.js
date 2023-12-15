import React from 'react'
import Footer from '../../components/layout/footer'
import Header from '../../components/layout/header'
import StripeCheckout from 'react-stripe-checkout';

function Payment() {


    const onToken =(token)=>{
        console.log(token);
    }

  return (
    <div>
        <Header />
    <div className="container pt-5 pb-5">
        <div className="row justify-content-center mt-5 mb-5">

            <div className="col-3">
            <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51L5U1CAjlFjcNms2T0KS7c41nI3rUQeTgVm2acfnbx7QCyPuMbtn5uGyFQUlpfgOtaoXLJ3VvcEqX0FmstvmtvAc00lw8J1WuU"
         billingAddress
      />

            </div>
        </div>
    </div>

        <Footer />
      
    </div>
  )
}

export default Payment
