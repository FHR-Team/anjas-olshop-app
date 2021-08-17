import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import fetchProducts from '../api/client';
import Navbar from '../components/Navbar/Navbar';

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';

import './App.css';

function App() {
  const dispatch = useDispatch();
  fetchProducts().then((item) => {
    dispatch({type: 'products/productClear', payload: item});
    item.forEach(e => {
      dispatch({type: 'products/productAdd', payload: e});
    });
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/products">
              <Products/>
            </Route>
            <Route path="/products/:productId">
              <ProductDetails/>
            </Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
          <p className="mt-5 mb-3 small text-center text-muted">
            &copy; 2021 by <a href="https://harisfi.github.io/about/" target="_blank" rel="noreferrer" className="link-success text-decoration-none">Haris</a> from <a href="https://github.com/FHR-Team" target="_blank" rel="noreferrer" className="link-success text-decoration-none">FHR-Team</a> all rights reserved.
          </p>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
