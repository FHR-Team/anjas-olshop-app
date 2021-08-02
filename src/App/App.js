import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';

import './App.css';

function App() {
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
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home products={PRODUCTS}/>
            </Route>
            <Route exact path="/products">
              <Products products={PRODUCTS}/>
            </Route>
            <Route path="/products/:productId">
              <ProductDetails products={PRODUCTS} />
            </Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
          <p className="mt-5 mb-3 small text-center text-muted">
            &copy; 2021 by <a href="https://github.com/FHR-Team" target="_blank" rel="noreferrer" className="link-success text-decoration-none">FHR-Team</a> all rights reserved.
          </p>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
