import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar as BNav, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/icon.svg';

function Navbar() {
  const cartCount = useSelector(state => state.carts).length;

  return (
    <BNav bg="white" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="" width="30" height="24" />
          Anjas Olshop
        </NavLink>
        <BNav.Toggle aria-controls="basic-navbar-nav" />
        <BNav.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/products" className="nav-link">Products</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="/cart" className="nav-link">
              Cart&nbsp;
              <FontAwesomeIcon icon={['fas', 'shopping-bag']} />&nbsp;
              <span className="badge bg-green">{cartCount}</span>
            </NavLink>
          </Nav>
        </BNav.Collapse>
      </Container>
    </BNav>
  );
}

export default Navbar;
