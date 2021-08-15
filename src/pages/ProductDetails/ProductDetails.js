import { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotFound from '../NotFound/NotFound';
import './ProductDetails.css';

const FindProduct = (products, productId) => {
  for (let i in products) {
    const e = products[i];
    if (parseInt(e.id) === parseInt(productId)) {
      return e;
    }
  }
  return null;
}

function ProductDetails() {
  const selectProducts = (state) => state.products.map((product) => product);
  const products = useSelector(selectProducts, shallowEqual);

  const [input, setInput] = useState('');
  let { productId } = useParams();
  let history = useHistory();
  let product = FindProduct(products, productId);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (input<=0||input>product.stock) {
      if (input < 0) {
        alert('Jumlah tidak boleh negatif!');
      } else if(input > product.stock) {
        alert('Jumlah tidak boleh melebihi stok barang!');
      } else {
        alert('Silahkan masukkan jumlah pesanan');
      }
    } else {
      history.push(`/cart?add=${product.id}&cnt=${input}`);
    }
  }

  if (product) {
    return (
      <div className="ProductDetails">
        <h1 className="mt-4 mb-1">Pesan Produk</h1>
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div>
              <img src={product.image} alt={product.name} className="img-fluid shadow rounded-lg"/>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">{product.name}</h2>
            <p className="mb-0">Rp. {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>{product.desc}</p>
            <hr/>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="jumlah" className="form-label">Jumlah Pesan</label>
                <input type="number" className="form-control" id="jumlah" placeholder="0" min="1" max={product.stock} value={input} onInput={e => setInput(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-success">
                <FontAwesomeIcon icon={['fas', 'shopping-cart']} /> Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (<NotFound/>);
  }
}

export default ProductDetails;
