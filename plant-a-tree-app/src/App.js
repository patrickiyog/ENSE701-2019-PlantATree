import React from 'react';

import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import TreesList from "./components/trees-list.component";
import RegisterUser from "./components/register-user.component";
import Login from "./components/log-in.component";
import WishList from "./components/wish-list.component";
import Cart from "./components/cart.component";
import ContactUs from "./components/contact-us.component";
import QueryPage from "./components/querypage.component";



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={TreesList} />
        <Route path="/wishList" exact component={WishList} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/register-user" exact component={RegisterUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/contactUs" exact component={ContactUs} />
        
      </div>
      
    </Router>
  );
}

export default App;
