import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Components/Login/Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import Payment from './Components/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Components/Orders/Orders';

const promise = loadStripe('pk_test_51J9kBZSCM9ZmheZrT5RjdDpPkq3F0DuBYqCrPTasaTKeDjHJw44nyd5OHkcmNWAWzRxz0EpuMeZVkJ9neKs3YcTW00YjlVBf2o');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
