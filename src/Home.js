import './App.css';
import logo from "./logo.png";
import title from "./title.png";
import {Link} from 'react-router-dom';
import Terms from './Terms';
import Videos from "./Videos";
//import aod from "./aod_pic.png";

function Home() {
  return (
    <div className="App">
      <div class="container">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <Link className="text-muted" to="/login">
                Log-In / Create an Account
              </Link>
            </div>
            <div class="col-4 text-center">
              <a class="blog-header-logo text-dark" href="#">
              {<img src={title} width="164" height="108" alt="logo"/>}
              </a>
            </div>

            <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="text-muted" href="#">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    search
                  </button>
                </div>
              </a>
            </div>
          </div>
        </header>

        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            <a class="p-2 text-muted" href="#">
              World
            </a>
            <a class="p-2 text-muted" href="#">
              U.S.
            </a>
            <a class="p-2 text-muted" href="#">
              Technology
            </a>
            <a class="p-2 text-muted" href="#">
              Design
            </a>
            <a class="p-2 text-muted" href="#">
              Culture
            </a>
            <a class="p-2 text-muted" href="#">
              Business
            </a>
            <a class="p-2 text-muted" href="#">
              Politics
            </a>
            <a class="p-2 text-muted" href="#">
              Opinion
            </a>
            <a class="p-2 text-muted" href="#">
              Science
            </a>
            <a class="p-2 text-muted" href="#">
              Health
            </a>
            <a class="p-2 text-muted" href="#">
              Style
            </a>
            <a class="p-2 text-muted" href="#">
              Travel
            </a>
          </nav>
        </div>

        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-1">
          <h1 class="display-4 font-italic">A 'mild' recession is now likely this year, Federal Reserve says</h1>
          <p class="lead my-3">The economy will take a hit as a result of recent banking turmoil, minutes from the central bank show.</p>
          <p class="lead mb-0"><a href="https://www.nbcnews.com/business/economy/mild-recession-now-likely-year-federal-reserve-says-rcna79405" class="text-white font-weight-bold">Continue reading...</a></p>

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
                <strong class="d-inline-block mb-2 text-success">Design</strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">
                    Post title
                  </a>
                </h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#">Continue reading</a>
              </div>
              {/* <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> */}
            </div>
          </div>
        </div>
      </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-6 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            Tutorial Video
          </h3>
        <div>
        <Videos />
        </div>
        </div>

        
            
          

          <aside class="col-md-4 blog-sidebar">
            <div class="p-3 mb-3 bg-light rounded">
              <h4 class="font-italic">About</h4>
              <p class="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>

            <div class="p-3">
              <h4 class="font-italic">Archives</h4>
              <ol class="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
                </li>
              </ol>
            </div>

            <div class="p-3">
              <h4 class="font-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

      <footer class="blog-footer">
        <p>
          Blog template built for{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
