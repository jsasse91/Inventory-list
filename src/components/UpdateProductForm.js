//importing the files I need mostly from bootstrap and react to style the page and pull in useState

import Product from "./Product";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function UpdateProductForm(props) {
  //creating variable to hold the updated product name using useState to set it as an empty string initially
  const [productName, setUpdatedProduct] = useState("");
  //creating variable to hold the updated product price using useState to set it as an empty string initially
  const [productPrice, setUpdatedPrice] = useState("");
  //creating variable to hold the updated product count using useState to set it as an empty string initially
  const [productCount, setUpdatedCount] = useState("");
  //de-structuring those props
  const { product, onProductEdit } = props;
  //creating an arrow function to handle when the edit form is submitted
  const handleEditSubmit = (e, product) => {
    //prevents the page from reloading
    e.preventDefault();
    //creating a temp object to hold my updated object to pass to my PUT endpoint
    let updatedObject = {
      //setting the object using the spread operator, passing in either a product name, or if not set on the
      //form using what ever was already the product name, the same is done on the price and count as well
      ...product,
      product: productName || product.product,
      price: productPrice || product.price,
      count: productCount || product.count,
    };
    //initating the onProductEdit which was passed through props, passing into it the updatedObject
    onProductEdit(updatedObject);
    //this resets the product name, price and count in the edit form back to empty strings
    setUpdatedProduct("");
    setUpdatedPrice("");
    setUpdatedCount("");
  };

  return (
    <Form className="mx-4 my-2">
      <Form.Group>
        <Container>
          <Row>
            <Col sm>
              <Form.Control
                type="text"
                placeholder="Updated Name"
                // this sets the product name passed into the temp object to the value of the form
                onChange={(e) => setUpdatedProduct(e.target.value)}
                value={productName}
              />
            </Col>
            <Col sm>
              <Form.Control
                type="text"
                placeholder="Updated Price"
                // this sets the product price passed into the temp object to the value of the form
                onChange={(e) => setUpdatedPrice(e.target.value)}
                value={productPrice}
              />
            </Col>
            <Col sm>
              <Form.Control
                type="text"
                placeholder="Updated Count"
                // this sets the product count passed into the temp object to the value of the form
                onChange={(e) => setUpdatedCount(parseInt(e.target.value))}
                value={productCount}
              />
            </Col>
            <Col sm>
              {/* this button is used to submit the form, it will initiate the handleEdit Submit function passing in the click
              event as well as the product */}
              <Button
                type="submit"
                title="Update Product"
                onClick={(e) => handleEditSubmit(e, product)}
              >
                Update Product
              </Button>
            </Col>
          </Row>
        </Container>
      </Form.Group>
    </Form>
  );
}
