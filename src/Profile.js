import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Chart from './Chart';

function Profile(props) {
  return (
    <div>
      <Navbar />
      <main role="main" class="container">
        <h1>{props.email}'s Knowledge Level</h1>

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
                  <h3>How do you want to pay off your debts?</h3>
                  <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                  <br></br>
                  <h3>How do plan to invest for long-term?</h3>
                  <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </main>
    </div>
  )
}

export default Profile
