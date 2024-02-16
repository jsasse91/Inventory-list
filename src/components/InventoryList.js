import { useEffect, useState } from "react";
import InventoryApi from "../service/inventory-api";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Button from "react-bootstrap/Button";

const service = new InventoryApi();

export default function InventoryList() {
  const [products, setProducts] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setAddForm] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    service.get().then((data) => {
      setProducts(data);

      // console.log(products);
    });
  }

  const items = products.map((product) => {
    return (
      <Card key={product.id} id={product.id} className="mb-4">
        <Card.Body>
          <Card.Header>{product.product}</Card.Header>
          <ListGroup variant="flush">
            <ListGroupItem>
              Price: ${product.price?.toLocaleString()}
            </ListGroupItem>
            <ListGroupItem>
              Inventory Count: {product.count?.toLocaleString()}
            </ListGroupItem>
            <ListGroupItem>
              <Button variant="primary me-1">Edit Product</Button>
              <Button variant="danger ms-1">Delete Product</Button>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  });

  return <div>{items}</div>;
}
