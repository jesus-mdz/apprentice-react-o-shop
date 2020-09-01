import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dropdownArray from './const/dropdownPathsArray';

function Header() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  function closeDropdown() {
    setShow(false);
  }

  const fullName = useSelector(
    ({ login }) => `${login.user.firstName} ${login.user.lastName}`
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-cart">
              Shopping Cart <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={`nav-item dropdown ${show ? 'show' : ''}`}>
            <Link
              className="nav-link dropdown-toggle"
              id="dropdown01"
              to="#"
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
              {dropdownArray.map((object, index) => (
                <Link
                  key={index}
                  onClick={closeDropdown}
                  className="dropdown-item"
                  to={object.path}
                >
                  {object.title}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
