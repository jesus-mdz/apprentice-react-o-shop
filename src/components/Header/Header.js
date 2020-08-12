import React, { useState } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/products">
              Products <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-cart">
              Shopping Cart
            </Link>
          </li>
          <li className={`nav-item dropdown ${show ? 'show' : null}`}>
            <Link
              className="nav-link dropdown-toggle"
              to="/#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={show}
              onClick={toggleShow}
            >
              Dropdown
            </Link>
            <div
              className={`dropdown-menu ${show ? 'show' : null}`}
              aria-labelledby="dropdown01"
            >
              <Link className="dropdown-item" to="/orders">
                My Orders
              </Link>
              <Link className="dropdown-item" to="/admin-orders">
                Manage Orders
              </Link>
              <Link className="dropdown-item" to="/admin-products">
                Manage Products
              </Link>
              <Link className="dropdown-item" to="/#">
                Log Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
