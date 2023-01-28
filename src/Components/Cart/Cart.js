import { useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import { Button } from "react-bootstrap";

const Cart = (props) =>{
  const dummy_cart = [
    {
      id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  const cartItems=(<ul className={classes['cart-items']}>
      {dummy_cart.map((item) => (
        <li>  <img style={{width:'10%'}}src={item.imageUrl} />  {item.title} {item.price} <Button variant="warning" >Remove</Button></li> 
      ))}
    </ul>)
  
  return(
    <Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      <button className={classes.button}>Order</button>
    </div>
  </Modal>
  
  );

}
export default Cart;