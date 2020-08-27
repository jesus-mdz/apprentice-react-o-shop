import React from 'react';
import './Main.scss';
import Products from '../../pages/Products/Products';
import NewProduct from '../../pages/NewProduct/NewProduct';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Orders from '../../pages/Orders/Orders';
import OrderSuccess from '../../pages/OrderSuccess/OrderSuccess';
import CheckOut from '../../pages/CheckOut/CheckOut';
import AdminProducts from '../../pages/AdminProducts/AdminProducts';
import AdminOrders from '../../pages/AdminOrders/AdminOrders';
import { Route, Switch, Redirect } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/orders-success" component={OrderSuccess} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/admin-products" component={AdminProducts} />
        <Route exact path="/admin-products/new" component={NewProduct} />
        <Route exact path="/admin-orders" component={AdminOrders} />
        <Route exact path="/" component={Products} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default Main;
