import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProductList.css';

const PRODUCTS = [
  {
    id: 1,
    name: "Produk 1",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  },
  {
    id: 2,
    name: "Produk 2",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  },
  {
    id: 3,
    name: "Produk 3",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  },
  {
    id: 4,
    name: "Produk 4",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  },
  {
    id: 5,
    name: "Produk 5",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  },
  {
    id: 6,
    name: "Produk 6",
    price: 123456,
    desc: "Lorem ipsum dolor sit amet",
    stock: 20,
    image: "https://via.placeholder.com/128x64"
  }
];

function Product(props) {
  return (
    <div className="col-md-4 my-2 my-md-0">
      <div className="card border-0 rounded-lg shadow">
        <img src={props.product.image} className="card-img-top" alt="product"/>
        <div className="card-body">
          <h5 className="card-title mb-0">{props.product.name}</h5>
          <p className="card-text text-muted mb-0 small">Rp. {props.product.price}</p>
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
        {PRODUCTS.slice(0,3).map(createProductsElement)}
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-4">
          {PRODUCTS.map(createProductsElement)}
        </div>
      </div>
    );
  }
}

export default ProductList;
