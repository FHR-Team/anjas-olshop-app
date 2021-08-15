import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

function Cart() {
  return (
    <div className="Cart">
      <h1 className="mt-4 mb-1">Keranjang <strong>Saya</strong></h1>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
      </nav>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Foto</th>
              <th scope="col">Produk</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img src="https://via.placeholder.com/1280x640?text=foto+produk" alt="produk" className="img-fluid shadow rounded-lg" width="240px"/>
              </td>
              <th>Nama Produk</th>
              <td>5</td>
              <td>Rp. 10.000</td>
              <th>Rp. 50.000</th>
              <td>
                <a href="/" className="text-danger">
                  <FontAwesomeIcon icon={['fas', 'trash']} />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan="4"></td>
              <th>Total Harga:</th>
              <th colSpan="2">Rp. 50.000</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 row justify-content-end pe-3">
        <form className="row align-items-center justify-content-md-end col-md-6">
          <label for="nama_pembeli" className="col-auto form-label mb-0 p-0 p-md-2">Atas Nama:</label>
          <div className="col-auto px-0 px-md-2 mb-3 mb-md-0">
            <input type="text" className="form-control" id="nama_pembeli" placeholder="Bolang"/>
          </div>
          <button type="submit" className="col-auto btn btn-success">
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} /> Pesan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
