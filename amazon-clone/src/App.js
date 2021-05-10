import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Orders from './Orders'
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Footer from "./Footer";
import HeaderTwo from "./Header2";
import BackToTop from "./BackToTop";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51IgwwgSChHG8M6kZxTstDLoSuXB7c9WUgD2hGS654kj6GvVtSIT6JAsbGfk1COCexxhATZyvHWpIh06pzDD3slUg00jcxRtSCR"
);

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
    //BEM
    <Router>
      <div className="app">
        <Switch>

          {/* orders page */}

          <Route path="/orders">
            <Header />
            <HeaderTwo />
            <Orders />
            <BackToTop />
            <Footer />
          </Route>

          {/* login page */}

          <Route path="/login">
            <Login />
          </Route>

          {/* checkout page */}

          <Route path="/checkout">
            {/* HEADER */}
            <Header />
            <HeaderTwo />
            <Checkout />
            <BackToTop />
            <Footer />
          </Route>

          {/* payment page */}

          <Route path="/payment">
            <Header />
            <HeaderTwo />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          {/* home page */}

          <Route path="/">
            {/* HEADER */}
            <Header />
            <HeaderTwo />
            {/* HOME */}
            <Home />
            <BackToTop />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
