import React from 'react';
import { Link } from 'react-router-dom';
import title from "./title.png";

function Navbar() {
  return (
    <div class="container">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <Link className="text-muted" to="/login">
                Log-In / Create an Account
              </Link>
            </div>
            <div class="col-4 text-center">
            <Link class="p-2 text-muted" to="/">
              {<img src={title} width="164" height="108" alt="logo"/>}
              </Link>
            </div>


















            <div class="col-4 d-flex justify-content-end align-items-center">
            <Link class="p-2 text-muted" to="#">
              
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
              </Link>
            </div>
          </div>
        </header>

        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            <Link class="p-2 text-muted" to="/">
              Home
            </Link>
            <Link class="p-2 text-muted" to="/study">
              Study
            </Link>
            <Link class="p-2 text-muted" to="/news">
              World News
            </Link>
            <Link class="p-2 text-muted" to="/quiz">
              Quiz
            </Link>
            <Link class="p-2 text-muted" to="/profile">
              User Profile & Goals
            </Link>
          </nav>
        </div>


      </div>
  )
}

export default Navbar;