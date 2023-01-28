import { Fragment } from "react";
import {Navbar, Container,Alert} from 'react-bootstrap';

import HeaderCartButton from "./HeaderCartButton";
const Header = (props) =>{

    
    return(
        <Fragment>
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#Store">Store</Navbar.Brand>
        <Navbar.Brand href="#About">About</Navbar.Brand>
       
       <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </Container>
    </Navbar>
   
    <Alert.Heading  className='Heading'><h1>The Generics</h1></Alert.Heading>
    </Fragment> 
    );
}
export default Header;