//importing the files I need
import { useState } from "react";
import Inventory from "../pages/Inventory";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//creating the function I will use to pull the Add Product form to the Inventory page, passing in the props
export default function AddProductForm(props) {
  //de-structuring the props
  const { addNewProduct, products } = props;
  //creating a variable to hold product, using use state to set the default value and creating the function that will update it
  const [product, setNewProduct] = useState("");
  //creating a variable to hold price, using use state to set the default value and creating the function that will update it
  const [price, setNewPrice] = useState("");
  //creating a variable to hold count, using use state to set the default value and creating the function that will update it
  const [count, setNewCount] = useState("");
  //creating the function (arrow function) that will run when the form is submitted
  const handleSubmit = (e) => {
    //this prevents the page from reloading
    e.preventDefault();
    //if all 3 values are passed in from the form
    if (product && price && count) {
      //pass it through to the POST method
      addNewProduct({ product, price, count });
      //reset the product name on the form to an empty string
      setNewProduct("");
      //reset the product price on the form to an empty string
      setNewPrice("");
      //reset the product count on the form to an empty string
      setNewCount("");
    } else {
      //if the above is not true, throw an alert
      alert("Invalid Input");
    }
  };
  //returning the build for the form, setting the submit method, styling using react bootstrap
  return (
    <Card className="mt-2" style={{ width: "50rem" }}>
      <Form onSubmit={handleSubmit} className="mx-4 my-2">
        <Form.Group>
          <Container>
            <Row>
              <Col sm>
                <Form.Control
                  type="text"
                  placeholder="New Product Name"
                  //this updates the product name that is passed to the POST method
                  onChange={(e) => setNewProduct(e.target.value)}
                  value={product}
                />
              </Col>
              <Col sm>
                <Form.Control
                  type="text"
                  placeholder="New Product Price"
                  //this updates the product price that is passed to the POST method
                  onChange={(e) => setNewPrice(e.target.value)}
                  value={price}
                />
              </Col>
              <Col sm>
                <Form.Control
                  type="text"
                  placeholder="New Product Count"
                  //this updates the product count that is passed to the POST method
                  onChange={(e) => setNewCount(parseInt(e.target.value))}
                  value={count}
                />
              </Col>
              <Col sm>
                {/* this is the button that submits the form */}
                <Button type="submit" title="Add New Product">
                  Add New Product
                </Button>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
    </Card>
  );
}
