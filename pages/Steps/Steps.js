import React from "react";
import Header from "../../components/layout/header";
import "antd/dist/antd.css";
import { Steps } from "antd";
import Footer from "../../components/layout/footer";

const { Step } = Steps;
function Stepsmenu() {
  return (
    <div>
      <Header />
      <div className="container invoicepage ">
        <div className="row justify-content-center mt-5 mb-5 mx-1">
          <div className="col-md-10 inovicepage1">
            <span>INVOICE NO</span>
            <span className="ms-2 invoiceno">#EVL767505175</span>
            <span className="float-end">2022-05-18</span>
            <Steps size="small" current={1} className="mt-4">
              <Step title="Pending" />
              <Step title="Confirmed" />
              <Step title="Processing" />
              <Step title="Picked" />
              <Step title="Shiped" />
              <Step title="Delivered" />
            </Steps>
            <div className="mt-4">
              <span className=" fw-bold ordertimeline">ORDER TIMELINE</span>
            </div>
            <Steps progressDot current={1} className="mt-4">
              <Step
                title="Picked"
                description="Your order has been picked - farzana.arny"
              />
              <Step
                title="Processing"
                description="Payment Complete.Order selected for processing -Evlay"
              />
              <Step
                title="Pending"
                description="Payment recieved by Evaly pay for customer"
              />
              <Step
                title="Pending"
                description="Thank you for placing your order on Evaly."
              />
              <Step
                title="Pending"
                description="Purchasing Policy and Terms & Conditions are Accepted"
              />
            </Steps>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Stepsmenu;
