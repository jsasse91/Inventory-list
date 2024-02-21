//importing the files I need from bootstrap, useState from react
import ProductList from "./ProductList";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import UpdateProductForm from "./UpdateProductForm";

export default function Product(props) {
  //de-structuring the props I need
  const { product, onProductDelete, onProductEdit } = props;
  //creating the showEditForm variable, using useState to set at false will use to show/hide my edit product form
  const [showEditForm, setShowEditForm] = useState(false);

  //this will take the product passed in from mapping and build the cards for the product data
  return (
    <Card
      key={product.id}
      data-id={product.id}
      style={{ width: "50rem" }}
      className="my-4"
    >
      <Card.Header>{product.product}</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {/* Using toLocaleString to attempt to render the numbers in a reader friendly version */}
          <ListGroupItem>{`Price: $${product.price?.toLocaleString()}`}</ListGroupItem>
          <ListGroupItem>{`Count: ${product.count?.toLocaleString()}`}</ListGroupItem>
          <ListGroupItem>
            {/* since the default state on this page is to hide the edit form, the page shows two buttons, the Edit button is set to say 
            edit on default, clicking the edit button flips the showEditForm variable and changes the button set to be the edit form */}
            {!showEditForm && (
              <div>
                <Button
                  variant="primary me-1"
                  data-id={product.id}
                  onClick={(e) => setShowEditForm(!showEditForm)}
                >
                  Edit
                </Button>
                {/* This button handles the deletion, it sends the id associated to the product from the api and passes that through a delete endpoint */}
                <Button
                  variant="danger ms-1"
                  data-id={product.id}
                  onClick={(e) => onProductDelete(product.id)}
                >
                  Delete
                </Button>
              </div>
            )}
            {/* If the editform value is toggled true the form is shown here and a red x button is displayed */}
            {showEditForm && (
              <div>
                <Card>
                  <Card.Header>
                    {/* the clicking of this buttons flips the showEditForm again, essentially hiding the form */}
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
                    {/* Passing in the props that will be used on the Update Form page */}
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
