import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Chart from './Chart';
function Profile() {
  return (
    <div>
        <Navbar />
        <main role="main" class="container">
        <h1>User's Knowledge Level</h1>


        <div class="container">
        <div class="row text-white rounded">
          
        <div class="col-md-5 blog-sidebar mt-4"><Chart />
          </div>



              <div class="col">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-success "><h1>Your Financial Goal</h1></strong>
                <h3>What do you see yourself in 5 years?</h3>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                <br></br>
                <h3>What is your financial goal?</h3>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                <br></br>

                <h3>How do you want yo pay off your debts?</h3>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                <br></br>
                <h3>How do plan to invest for long-term?</h3>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
              </div>
              {/* <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> */}
            </div>
          </div>







          </div> 
        </div>




        {/* <div class="col-md-4 blog-sidebar mt-4">
          <Chart />
          </div>

          <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-success ">Concept of the Day</strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">
                    Moral Hazard
                  </a>
                </h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="card-text mb-auto">
                Moral hazard is a situation in which one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost.
                </p>
                <a href="#">Continue reading</a>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap">
            </div>
          </div> */}







        </main>
        

    </div>
  )
}

export default Profile