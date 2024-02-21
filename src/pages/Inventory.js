//importing the files I need from bootstrap, react and some components to make the page work

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import AddProductForm from "../components/AddProductForm";
import InventoryApi from "../service/inventory-api";
import ProductList from "../components/ProductList";

//creating a new service that will run the Inventory API
const service = new InventoryApi();

export default function Inventory(props) {
  //creating the showAddForm variable and setting to false
  const [showAddForm, setShowAddForm] = useState(false);
  //creating the products variable and setting to an empty array
  const [products, setProducts] = useState([]);

  //setting the use effect which rerenders the page by calling the fetchProductList, which essentially runs a get all from the Inventory API
  useEffect(() => {
    fetchProductList();
  }, []);
  //defining the previously mentioned fetchProductList function, this runs the GET from my service and sets the variable of products equal to the response
  const fetchProductList = async () => {
    service.getAllProducts().then((data) => {
      setProducts(data);
    });
  };
  //defining the POST call that takes in the newproduct object and passes it to my service, then it runs the fetchProductList function again
  const addNewProduct = async (newProduct) => {
    await service.createNewProduct(newProduct);
    fetchProductList();
  };
  //defining the PUT call that takes in a product object and passes it to my service, then it runs the fetchProdutList function again
  const updateProduct = async (product, e) => {
    await service.updateProduct(product);
    fetchProductList();
  };
  //defining the DELETE call that takes an id and passes that to my service, then it fliters the deleted item out of the results page
  const deleteProduct = async (id, e) => {
    await service.deleteProductById(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Container className="mt-5">
      <h1>Inventory</h1>
      {/* Uses a ternary operator, if the showAddForm is false, it shows a button to ad product, the clikcing of the button flips
      the value to true and replaces it with a red x button, the click of that flips the value back to false */}
      {!showAddForm ? (
        <Button variant="dark" onClick={(e) => setShowAddForm(!showAddForm)}>
          Add Product
        </Button>
      ) : (
        <Button variant="danger" onClick={(e) => setShowAddForm(!showAddForm)}>
          X
        </Button>
      )}
      {/* if the value of showAddForm is true, due to the click of the add button above, it shows the AddProduct form and passes the props into it */}
      {showAddForm && (
        <AddProductForm products={products} addNewProduct={addNewProduct} />
      )}
      {/* the product list is loaded in beneath the space where the form would be (always), props are passed into it */}
      <ProductList
        products={products}
        onProductDelete={deleteProduct}
        onProductEdit={updateProduct}
      />
    </Container>
  );
}
