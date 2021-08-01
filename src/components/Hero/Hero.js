import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import imgHero from '../../assets/hero.svg';

function Hero() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 d-block d-md-none">
          <img src={imgHero} alt="image hero" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="mt-5 mt-md-0">
            <h1 className="mb-0 fw-bolder">Lorem ipsum</h1>
            <h2 className="mb-0">Lorem ipsum dolor sit amet</h2>
            <p>Fugiat duis aute in aliqua nisi aliquip laborum deserunt excepteur reprehenderit. Minim et esse laborum incididunt mollit laboris ipsum commodo consectetur labore duis enim quis commodo.</p>
            <Link to="/products" className="btn btn-success">
              <FontAwesomeIcon icon={['fas', 'chevron-right']} /> Pesan
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={imgHero} alt="image hero" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
