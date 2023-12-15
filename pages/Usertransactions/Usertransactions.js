import React from "react";
import Header from "../../components/layout/header";
import dlvery from "../../assets/cash-delivery.png";
import Footer from "../../components/layout/footer";

function Usertransactions() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5 mx-1">
          <div className="col-md-4 me-2 text-center usersec">
            <i
              class="fa fa-user-circle pt-5 manusericon"
              aria-hidden="true"
            ></i>
            <h5 className="mt-2 azad">
              Akhtar Azad{" "}
              <i
                class="fa fa-check-circle"
                aria-hidden="true"
                style={{ color: "green" }}
              ></i>{" "}
            </h5>
            <p className="azaad">03347848662</p>
            <button type="btn" className="btn checkaccount1 ">
              {" "}
              <i class="fa fa-repeat me-2 " aria-hidden="true"></i>Check Account
            </button>
            <div className="text-start fw-bold mt-5 mx-3 bronzesilver">
              <span>Bronze</span> <span className="float-end">Silver</span>
            </div>
            <div className="staightline mx-3 mt-2"></div>
            <div className="float-end me-3 fw-bold bronzesilver">0/1000000</div>
            <div className="ms-3 text-start mt-5 basc">
              <i class="fa fa-user me-3 " aria-hidden="true"></i>Basic
              Information
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-map-marker me-3 " aria-hidden="true"></i>Addresses
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-list-ul me-3 " aria-hidden="true"></i>Orders
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-list-ul me-3 " aria-hidden="true"></i>Unconfirmed
              Orders
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-star me-3 " aria-hidden="true"></i>Reviews
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-id-card me-3 " aria-hidden="true"></i>Refund
              Settlement
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-key me-3 " aria-hidden="true"></i>change Password
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-calendar me-3 " aria-hidden="true"></i>Appointment
            </div>
            <div className="ms-3 text-start mt-4 basc">
              <i class="fa fa-id-card mb-3 me-3 " aria-hidden="true"></i>
              Transactions
            </div>
          </div>

          <div className="col-md-6 infosec ps-3 fs-5 ">
            <div className="hkkds py-3 mx-3 ">
              <span className="fw-bold">Evaly Account</span>{" "}
              <span className="youraccount">Your account informations</span>
            </div>
            <p className="my-3 mx-3 fw-bold">
              {" "}
              RS.0.00 <i class="fa fa-repeat ms-2" aria-hidden="true"></i>
            </p>
            <p className=" mx-3 lh-0 currentbalance border-bottom pb-5">
              Current Balance
            </p>
            <div className="row justify-content-center text-center mt-4 mx-3">
              <div className="col-md-5 border py-5 mx-2 mt-3 borderround ">
                <i
                  class="fa fa-usd me-2 fs-5 dolloricon"
                  aria-hidden="true"
                ></i>
                <span className="fs-5">Account</span>
                <p className="fw-bold">$0.00</p>
              </div>
              <div className="col-md-5 border py-5 mx-2 mt-3  borderround">
                <i
                  class="fa fa-usd me-2 fs-5 dolloricon"
                  aria-hidden="true"
                ></i>
                <span className="fs-5">Holding  Balance</span>
                <p className="fw-bold">$0.00</p>
              </div>
              <div className="col-md-5 border mt-3 py-5 mx-2 borderround ">
                <i
                  class="fa fa-usd me-2 fs-5 dolloricon"
                  aria-hidden="true"
                ></i>
                <span className="fs-5">Gift Cards Balance</span>
                <p className="fw-bold">$0.00</p>
              </div>
              <div className="col-md-5 border py-5 mx-2 mt-3  borderround">
                <i
                  class="fa fa-usd me-2 fs-5 dolloricon"
                  aria-hidden="true"
                ></i>
                <span className="fs-5">CashBack Balance</span>
                <p className="fw-bold">$0.00</p>
              </div>
              <h5 className="mx-3 text-start my-4 fw-bold fs-4">Transaction History</h5>
            </div>
            <div className="row justify-content-center pb-5 text-center">
                <div className="col-md-12">
                <i class="fa fa-file mt-5 rondicon  fs-1" aria-hidden="true"></i>
                <h4 className="fw-bold fs-4 mt-3 letterspacing">Sorry!NO Data Found</h4>
                <h6 className="fs-5 clir  mt-3 letterspacing">Sorry,NO Transation Found</h6>
                </div>
            </div>
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default Usertransactions;
