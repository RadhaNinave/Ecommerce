import "./Home.css";
import imgfile from '../../assets/tshirt.jpg';
import imgfile2 from '../../assets/coffee.jpg';
import { Fragment } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Home = () => {
 
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
  


  return (
    <Fragment>
    
    
  
      <section id="music" className="container">
        <h2>Music</h2>
     

      <Container>
        <Row >
        
          
            <Col className="Card">
            <Card className="Card">
              <Card.Title>Colors</Card.Title>
              
              <Card.Body>
             
              <Card.Img variant="top" className="img_style" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
              
              <Card.Text>100</Card.Text>
              <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="Card">
              <Card.Title></Card.Title>
              <Card.Body>
              <Card.Img variant="top" className="img_style" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"/>
              <Card.Text>$ 199</Card.Text>
              <Button variant="primary">Add to Cart</Button>
              </Card.Body>
              
            </Card>

            
            </Col>
           
      
          
        
      
        </Row>
      </Container>
      <br></br>
      <Container className="container">
        <Row>
          <Col className="Card">
          <Card className="Card">
            <Card.Title>Yellow and black colors</Card.Title>
            <Card.Body>
           
            <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
            
            <Card.Text>$ 50</Card.Text><Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="Card">
            <Card.Title>Blue</Card.Title>
            <Card.Body>
            <Card.Img variant="top" className="Container CardImg" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
            <Card.Text>$ 70</Card.Text>
            <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
          
        </Row>
      </Container>
      </section>
      <br/>
      <br />
      <section id="music" className="container">
        <h2>Merch</h2>
     
      <Container>
        <Row>
          <Col className="col">
          <Card className="Card">
            <Card.Title> Colors</Card.Title>
            <Card.Body>
           
            <Card.Img variant="top" src={imgfile} />
            
            <Card.Text>$ 100</Card.Text>
            <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="img">
            <Card.Title>Coffee</Card.Title>
            <Card.Body>
            <Card.Img variant="top" className="image-container" src={imgfile2}/>
            <Card.Text>$ 199</Card.Text>
            <Button variant="primary">Add to Cart</Button>
            </Card.Body>
            
          </Card>
          </Col>
          
        </Row>
      </Container>
      <br></br>
      <Button className="button">See the cart</Button>
      </section>
     
    
    </Fragment>
  );
};
export default Home;
