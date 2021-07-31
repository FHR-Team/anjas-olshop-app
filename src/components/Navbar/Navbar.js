import { Link, useLocation } from 'react-router-dom';

import logo from '../../logo.svg';

function Navbar() {
  const loc = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" width="30" height="24" />
          Anjas Olshop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={"nav-link" + (loc == "/" ? " active" : "")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className={"nav-link" + (loc == "/products" ? " active" : "")}>
                Products
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/cart" className={"nav-link" + (loc == "/cart" ? " active" : "")}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
