import './App.css';
import logo from "./logo.png";
import title from "./title.png";
import {Link} from 'react-router-dom';
import Terms from './Terms';
import Videos from "./Videos";
import Study from "./Study";
import Navbar from './Navbar';
import article from "./articlehome.png";
//import aod from "./aod_pic.png";

function Home() {
  return (
    <div className="App">
    <Navbar />


      


    
    <main role="main" class="container">


       

       <div class="container">
        <div class="row text-white rounded bg-dark">
          <div class="col">
            <h1 class="display-4 font-italic">A 'mild' recession is now likely this year, Federal Reserve says</h1>
           <p class="lead my-3">The economy will take a hit as a result of recent banking turmoil, minutes from the central bank show.</p>
           <p class="lead mb-0"><a href="https://www.nbcnews.com/business/economy/mild-recession-now-likely-year-federal-reserve-says-rcna79405" class="text-white font-weight-bold">Continue reading...</a></p>
          </div>
          <div class="col">
            {<img src={article} class="img-thumbnail" width="500" height="300" alt="artcle"/>}
          </div> 
        </div>
      </div>

        <div class="row mb-2">
          <div class="col-md-6">
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
              {/* <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> */}
            </div>
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
              {/* <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> */}
            </div>
          </div>
        </div>






      <div class="row">
        <div class="col-md-6 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            Tutorial Video
          </h3>
        <div>
        <Videos />
        </div>
        </div>

          

        <aside class="col-md-6 blog-sidebar">
            <h3 class="pb-3 mb-4 font-italic border-bottom">
            User's Knowledge Level
          </h3>
          

          </aside>
        </div>
      </main>

      <footer class="blog-footer">
        <p></p><p>© 2023 FinEd.com </p><p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
