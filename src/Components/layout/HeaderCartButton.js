import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart_Context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
   const cartctx=useContext(CartContext);

   const numberOfCartItems = cartctx.items.reduce((curNumber,item) =>{
    return curNumber + item.amount;
   },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
