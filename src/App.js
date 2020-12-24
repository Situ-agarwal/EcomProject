import React from 'react';
import './App.css';
import Homepage from './pages/homePage.component';
import {Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component';
import SignInSignUpPage from'./pages/sign-in-sign-up/sign-in-sign-up.component';
const  App=()=> (
  <div>
    <Header/>
  <Route exact path='/' component={Homepage} />
  <Route exact path='/shop' component={ShopPage}></Route>
  <Route exact path='/signin' component={SignInSignUpPage}></Route>
  </div>
  
)

export default App;
