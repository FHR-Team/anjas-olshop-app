import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hero from '../../components/Hero/Hero';
import ProductList from '../../components/ProductList/ProductList';

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <div className="d-flex justify-content-between mt-5 mb-3">
        <div className="h2">Best <strong>Products</strong></div>
        <div className="d-block">
          <Link to="/products" className="btn btn-success">
            <FontAwesomeIcon icon={['far', 'eye']} /> Lihat Semua
          </Link>
        </div>
      </div>
      <ProductList isHome={true} />
    </div>
  );
}

export default Home;
