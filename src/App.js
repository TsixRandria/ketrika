import React from 'react';
import './App.scss';
import HomePage from './pages/Homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>  
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/sign-in" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
