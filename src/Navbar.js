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
              Home
            </a>
            <Link class="p-2 text-muted" to="/Study">
              Study
            </Link>
            <a class="p-2 text-muted" href="#">
              World News
            </a>
            <a class="p-2 text-muted" href="#">
              Quiz
            </a>
            <a class="p-2 text-muted" href="#">
              User Profile & Goals
            </a>
          </nav>
        </div>


      </div>
  )
}

export default Navbar;