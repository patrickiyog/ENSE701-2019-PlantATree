import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import TreesList from "./components/trees-list.component";
import Cart from "./components/cart.component";
import ContactUs from "./components/contact-us.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={TreesList} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/contactUs" exact component={ContactUs} />
      </div>
    </Router>
  );
}

export default App;
