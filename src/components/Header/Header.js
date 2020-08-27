import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  const fullName = useSelector(
    ({ login }) => `${login.user.firstName} ${login.user.lastName}`
  );

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
          <li className={`nav-item dropdown ${show ? 'show' : ''}`}>
            <Link
              className="nav-link dropdown-toggle"
              id="dropdown01"
              to="/#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={show}
              onClick={toggleShow}
            >
              {fullName ? <span className="full-name">{fullName}</span> : null}
            </Link>
            <div
              className={`dropdown-menu ${show ? 'show' : ''}`}
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
