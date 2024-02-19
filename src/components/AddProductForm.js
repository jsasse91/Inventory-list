import { useState } from "react";
import Inventory from "../pages/Inventory";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AddProductForm(props) {
  const { addNewProduct, products } = props;
  const [product, setNewProduct] = useState("");
  const [price, setNewPrice] = useState("");
  const [count, setNewCount] = useState("");

  // console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Clicked");
    if (product && price && count) {
      addNewProduct({ product, price, count });
      setNewProduct("");
      setNewPrice("");
      setNewCount("");
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <Card className="mt-2">
      <Form onSubmit={handleSubmit} className="mx-4 my-2">
        <Form.Group>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <Form.Control
                  type="text"
                  placeholder="New Product Name"
                  onChange={(e) => setNewProduct(e.target.value)}
                  value={product}
                />
              </div>
              <div className="col-sm">
                <Form.Control
                  type="text"
                  placeholder="New Product Price"
                  onChange={(e) => setNewPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="col-sm">
                <Form.Control
                  type="text"
                  placeholder="New Product Count"
                  onChange={(e) => setNewCount(parseInt(e.target.value))}
                  value={count}
                />
              </div>
              <div className="col-sm">
                <Button type="submit" title="Add New Product">
                  Add New Product
                </Button>
              </div>
            </div>
          </div>
        </Form.Group>
      </Form>
    </Card>
  );
}
