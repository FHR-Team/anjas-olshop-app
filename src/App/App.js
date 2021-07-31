import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
