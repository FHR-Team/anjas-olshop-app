import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './Products.css';

function Products(props) {
  return (
    <div className="Products">
      <h1 className="mt-4 mb-1">Daftar <strong>Produk</strong></h1>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <ProductList/>
    </div>
  );
}

export default Products;
