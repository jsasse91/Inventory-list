import ProductList from "./ProductList";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import UpdateProductForm from "./UpdateProductForm";

export default function Product(props) {
  // console.log("from product.js", props);
  const { product, onProductDelete, onProductEdit } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  // console.log(product);

  return (
    <Card key={product.id} data-id={product.id} className="my-4">
      <Card.Header>{product.product}</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroupItem>{`Price: $${product.price?.toLocaleString()}`}</ListGroupItem>
          <ListGroupItem>{`Count: ${product.count?.toLocaleString()}`}</ListGroupItem>
          <ListGroupItem>
            {!showEditForm && (
              <div>
                <Button
                  variant="primary me-1"
                  data-id={product.id}
                  onClick={(e) => setShowEditForm(!showEditForm)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger ms-1"
                  data-id={product.id}
                  onClick={(e) => onProductDelete(product.id)}
                >
                  Delete
                </Button>
              </div>
            )}
            {showEditForm && (
              <div>
                <Card>
                  <Card.Header>
                    <Button
                      variant="danger me-2"
                      data-id={product.id}
                      onClick={(e) => setShowEditForm(!showEditForm)}
                    >
                      X
                    </Button>
                    Update Product
                  </Card.Header>
                  <Card.Body>
                    <UpdateProductForm
                      onProductEdit={onProductEdit}
                      product={product}
                      showEditForm={setShowEditForm}
                    />
                  </Card.Body>
                </Card>
              </div>
            )}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
