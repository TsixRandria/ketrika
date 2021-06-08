import React, { Component } from 'react';
import './App.scss';
import HomePage from './pages/Homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state={
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>  
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/sign-in" component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
