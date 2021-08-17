import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import priceFormatter from '../../utils/priceFormatter';
import './ProductList.css';

function ProductItem(props) {
  return (
    <div className="col-md-4 my-3">
      <div className="card border-0 rounded-lg shadow">
        <img src={props.product.image} className="card-img-tops" alt="product"/>
        <div className="card-body">
          <h5 className="card-title mb-0">{props.product.name}</h5>
          <p className="card-text text-muted mb-0 small">{priceFormatter(props.product.price)}</p>
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
  const products = useSelector(state => state.products);

  let createProductsElement = p => <ProductItem product={p} key={p.id}/>;
  if (props.isHome) {
    return (
      <div className="row">
        {products.slice(0,3).map(createProductsElement)}
      </div>
    );
  } else {
    return (
      <div className="row">
        {products.map(createProductsElement)}
      </div>
    );
  }
}

export default ProductList;
