
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51IriPxSGxXWBoJKhmjj0W1o56mDn2VGYShtJnmasm7ZpeBto6jUx1Y3IKTHV3zcFXcGE8y1VyY5ZCu5gFjk6Ah6c00ESOVC4A0');

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
//runs once
auth.onAuthStateChanged(authUser => {
  console.log("The user is " ,authUser);

  if(authUser)
  {
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  } else{
    dispatch({
      type: 'SET_USER',
      user: null
    })
  }
})
  }, [])

  return (
    <Router>
    <div className="App">
    
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
         <Route path="/checkout">
         <Header/>
          <Checkout />
        </Route>
        <Route path="/payment">
        <Header/>
        <Elements stripe = {promise}><Payment/></Elements>
        </Route>
        <Route path="/">
        <Header/>
            <Home/>
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
