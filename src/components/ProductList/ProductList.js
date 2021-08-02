import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProductList.css';

function Product(props) {
  return (
    <div className="col-md-4 my-3">
      <div className="card border-0 rounded-lg shadow">
        <img src={props.product.image} className="card-img-tops" alt="product"/>
        <div className="card-body">
          <h5 className="card-title mb-0">{props.product.name}</h5>
          <p className="card-text text-muted mb-0 small">Rp. {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
          <p className="card-text">{props.product.desc}</p>
          <Link to={"/products/" + props.product.id} className="btn btn-success">
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} /> Pesan
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductList(props) {
  let createProductsElement = product => <Product product={product} key={product.name}/>;
  if (props.isHome) {
    return (
      <div className="row">
        {props.products.slice(0,3).map(createProductsElement)}
      </div>
    );
  } else {
    return (
      <div className="row">
        {props.products.map(createProductsElement)}
      </div>
    );
  }
}

export default ProductList;
