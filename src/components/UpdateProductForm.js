import Product from "./Product";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function UpdateProductForm(props) {
  // console.log(props);
  const [productName, setUpdatedProduct] = useState("");
  const [productPrice, setUpdatedPrice] = useState("");
  const [productCount, setUpdatedCount] = useState("");

  const { product, onProductEdit } = props;
  // console.log(product);
  // console.log(onProductEdit);

  const handleEditSubmit = (e, product) => {
    // console.log("edit has been submitted", e);
    // console.log("test");
    e.preventDefault();
    console.log("Edit Clicked");
    let updatedObject = {
      ...product,
      product: productName,
      price: productPrice,
      count: productCount,
    };
  };

  return (
    <Form className="mx-4 my-2">
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Form.Control
                type="text"
                placeholder="Updated Name"
                onChange={(e) => setUpdatedProduct(e.target.value)}
                value={productName}
              />
            </div>
            <div className="col-sm">
              <Form.Control
                type="text"
                placeholder="Updated Price"
                onChange={(e) => setUpdatedPrice(e.target.value)}
                value={productPrice}
              />
            </div>
            <div className="col-sm">
              <Form.Control
                type="text"
                placeholder="Updated Count"
                onChange={(e) => setUpdatedCount(parseInt(e.target.value))}
                value={productCount}
              />
            </div>
            <div className="col-sm">
              <Button
                type="submit"
                title="Update Product"
                onClick={(e) => onProductEdit(e, product)}
              >
                Update Product
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
