import './App.css';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import title from "./title.png";
import Search from './Search';

function Navbar() {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [name, setName] = useState(localStorage.getItem('name'));

  const handleLogout = () => {
    localStorage.clear();
    setEmail(null); // clear email state after logout
    setName(null); // clear name state after logout
  };

  return (
    <div class="container-fluid">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-2 pt-1 d-flex justify-content-start">
              <Link className="text-muted" to="/login">
                Log-In / Create an Account
              </Link>
            </div>
            <div class="col-4 text-center">
            <Link class="p-2 text-muted" to="/">
              {<img src={title} class="img-fluid w-150 h-16" width="125" height="50" alt="logo" />}
              </Link>
            </div>
            <div class="col-4 justify-content-end align-items-center d-none d-lg-block">
              {/* <Search /> */}
            </div>
          </div>
        </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/">
            Home
          </Link>
          <Link className="p-2 text-muted" to="/study">
            Study
          </Link>
          <Link className="p-2 text-muted" to="/news">
            World News
          </Link>
          <Link className="p-2 text-muted" to="/quiz">
            Quiz
          </Link>
          <Link className="p-2 text-muted" to="/profile">
            User Profile & Goals
          </Link>
        </nav>
      </div>
      <hr />
    </div>
    
  );
}

export default Navbar;
