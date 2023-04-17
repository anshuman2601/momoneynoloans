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
          <div class="col mt-4">
          <div class="card-body d-flex flex-column align-items-start">
              </div>
              <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">
                  Term of the Day
                </strong>
                <h3 class="mb-0">
                  <Link class="text-dark" to="/terms">
                    Exchange Traded Fund (ETF)
                  </Link>
                </h3>
                <div class="mb-1 text-muted">April 20</div>
                <p class="card-text mb-auto">
                An exchange-traded fund (ETF) is a basket of securities that trades on an exchange just like a stock does.
                </p>
                <Link to="/terms">Continue reading</Link>
              </div>
              </div>



              <div class="col">
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
              {/* <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> */}
            </div>
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