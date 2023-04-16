import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Quiz(){
  return(
    <div>
    <Navbar />

    <main role="main" class="container">
      <h1> Knowledge Test</h1>



      <div className="col-md-6 mx-auto mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="h3 mb-0">Question 1</h1>
                            </div>
                            <div className="card-body">
                                
                            <h4 class="fw-bold text-center mt-3"></h4>
          <form class=" bg-white px-4" action="">
             <p class="fw-bold">1. Being on a budget means:</p>
            <div class="form-check mb-2">
             <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
             <label class="form-check-label" for="radioExample1">
             a. You pay bills every month at the due date
             </label>
            </div>
            <div class="form-check mb-2">
             <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
               <label class="form-check-label" for="radioExample2">
               b. You made a plan of your expenses to be less than or equal to your income
               </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
               <label class="form-check-label" for="radioExample3">
                 c. You are earning enough money to be able to live well
               </label>
           </div>
           <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
               <label class="form-check-label" for="radioExample3">
                  d. Your bills are generally paid by every due date
               </label>
           </div>



  </form>


                                
                            </div>
                            <div className="card-footer">
                            <div class="text-end">
    <button type="button" class="btn btn-primary">Next</button>
  </div>
                            </div>
                        </div>
                    </div>

      </main>
      </div>
  );
}

export default Quiz;
