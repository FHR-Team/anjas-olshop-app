import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import priceFromatter from '../../utils/priceFormatter';
import './Cart.css';

function CartItem(props) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({ type: 'carts/cartDelete', payload: props.item.id })
  }

  return (
    <tr>
      <th scope="row">{props.idx+1}</th>
      <td>
        <img src={props.item.image} alt={props.item.name} className="img-fluid shadow rounded-lg" width="240px"/>
      </td>
      <th>{props.item.name}</th>
      <td>{props.item.count}</td>
      <td>{priceFromatter(props.item.price)}</td>
      <th>{priceFromatter(props.item.count * props.item.price)}</th>
      <td>
        <button className="btn text-danger" onClick={onDelete}>
          <FontAwesomeIcon icon={['fas', 'trash']} />
        </button>
      </td>
    </tr>
  );
}

function CartContent(props) {
  const cartItems = useSelector(state => state.carts);

  let createCartElement = (c, n) => <CartItem item={c} idx={n} key={n}/>
  if (cartItems.length) {
    const subTotal = cartItems.map(c => c.price * c.count);
    const total = subTotal.reduce((a, b) => a + b);

    return (
      <div>
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
              {cartItems.map(createCartElement)}
              <tr>
                <td colSpan="4"></td>
                <th>Total Harga:</th>
                <th colSpan="2">{priceFromatter(total)}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 row justify-content-end pe-3">
          <form className="row align-items-center justify-content-md-end col-md-6">
            <label htmlFor="nama_pembeli" className="col-auto form-label mb-0 p-0 p-md-2">Atas Nama:</label>
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
  } else {
    return (
      <div>Tidak ada</div>
    );
  }
}

function Cart() {
  document.title = 'Cart | Anjas Olshop';

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
      <CartContent/>
    </div>
  );
}

export default Cart;
