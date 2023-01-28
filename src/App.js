import { Fragment, useState } from 'react';

import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';

import Home from './Components/layout/Home';
import Items from './Components/ShopItem/Items';
import CartProvider from './Components/Store/Cart_Provider';

const App =() => {
 const[cartIsShown,setCartIsShown]=useState(false)
  
 const ShowCartHandler = ()=>{
  setCartIsShown(true);
 }
 const hideCartHandler = () =>{
  setCartIsShown(false)
 }
 
 return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
   
    <Header onShowCart = {ShowCartHandler}/>
    <Home />
    <Items />
    <Footer/>
    </CartProvider>
  );
}

export default App;
