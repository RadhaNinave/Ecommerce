import { useContext } from 'react';
import CartContext from '../Store/Cart_Context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartCtx=useContext(CartContext);
  const deleteItem = () =>{
    const deleteItem={
      id:parseInt(props.prod.id),
      quantity : parseInt(props.prod.quantity),
      price : parseInt(props.prod.price)
    }
    cartCtx.removeItem(deleteItem);
  }
 
  return(
    <div className={classes.cartitem-main}>
    <div className={classes.cartitem-img}>
        <img className={classes.cartitem-img} src={props.prod.imageUrl} />
        <span>{props.prod.title}</span>
    </div>
    <div className={classes.cartitem-price}>{props.prod.price}</div>
    <div className={classes.cartitem-button}>
        <span className={classes.cartitem-quantity}>{props.prod.quantity}</span>
        <button onClick={deleteItem} >Delete</button>
    </div>
</div>

  );
 
};

export default CartItem;
