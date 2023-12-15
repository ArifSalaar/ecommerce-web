import React from "react";
import Header from "../../components/layout/header";
import dlvery from "../../assets/cash-delivery.png";
import Footer from "../../components/layout/footer";
function Profile() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5 mx-1 ">
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

          <div className="col-md-6 infosec p-3">
            <div className="row">
              <div className="col-12">
                <div className="py-3 basicinfo">
                  {" "}
                  <h5 className="d-inline  dlline">Basic information:</h5>
                  <span>
                    Enter your basic iformation for ensuring security and
                    recovery of your account
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i
                  class="fa fa-envelope-open mt-3 me-2 msgicon"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="col-11 ms-3 p-3 botborder   px-0 ">
                <span className="d-inline-block perinfo ">
                  PERSONAL INFORMATIONS
                </span>
                <button className="float-end editbtn" type="btn">
                  Edit
                </button>
              </div>
              <div className="secont "></div>
              <div className="row justify-content-center align-content-center  pt-3">
                <div className="col-5 mt-4  boldfont">
                  <h5>Every Number:</h5>
                </div>
                <div className="col-5 mt-4  boldfont">
                  <h5 className=" float-end ">03347848662</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>First Name:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="d-inline float-end">Akhtar</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Last Name:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">Azad</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Contact Number:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">03347848662</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Gender:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">Male</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Date of Birth:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">15 Aug 1998</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Member Sence:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">26 Dec 2020</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Orginization:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">N/A</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Occupations:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">N/A</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i
                  class="fa fa-address-book mt-3 me-2 manicon"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="col-11 ms-3 p-3 botborder  d-block px-0">
                <span className="d-inline-block perinfo ">
                  PARENT'S INFORMATIONS
                </span>
                <button className="float-end editbtn" type="btn">
                  Edit
                </button>
              </div>
              <div className="secont "></div>
              <div className="row justify-content-center align-content-center mt-3">
                <div className="col-5 mt-4 boldfont">
                  <h5>Father's Info:</h5>
                </div>
                <div className="col-5 mt-4  boldfont">
                  <h5 className=" float-end ">N/A</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Father's Phone No:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="d-inline float-end">N/A</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Mother's Info:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">N/A</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Mother's Phone No:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="float-end">N/A</h5>
                </div>
              </div>
            </div>
            <div className="row   mt-3">
              <div className="col-1">
                <i
                  class="fa fa-envelope mt-3 me-2 manicon"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="col-11 p-3 botborder  d-block px-0 ms-3">
                <span className="d-block perinfo ">EMAIL ADDRESS</span>
                <p className="d-inline emailaddress">
                  The Email Address Which all the Evally <br />
                  Notification will be sent
                </p>
                <button className="float-end editbtn" type="btn">
                  Edit
                </button>
              </div>
              <div className="secont"></div>
              <div className="row justify-content-center align-content-center mt-3">
                <div className="col-5 mt-4 boldfont">
                  <h5>Primary Email:</h5>
                </div>
                <div className="col-5 mt-4  boldfont">
                  <h5 className=" float-end ">N/A</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5>Other:</h5>
                </div>
                <div className="col-5 mt-3 boldfont">
                  <h5 className="d-inline float-end">N/A</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
