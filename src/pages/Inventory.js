import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import AddProductForm from "../components/AddProductForm";
import InventoryApi from "../service/inventory-api";
import ProductList from "../components/ProductList";

const service = new InventoryApi();

export default function Inventory(props) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState([]);

  // console.log(showAddForm);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    service.getAllProducts().then((data) => {
      setProducts(data);
    });
  };
  // console.log(products);

  const addNewProduct = async (newProduct) => {
    await service.createNewProduct(newProduct);
    fetchProductList();
  };

  const updateProduct = async (product, e) => {
    await service.updateProduct(product);
    fetchProductList();
  };

  const deleteProduct = async (id, e) => {
    await service.deleteProductById(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <h1>Inventory</h1>
      {!showAddForm ? (
        <Button variant="primary" onClick={(e) => setShowAddForm(!showAddForm)}>
          Add Product
        </Button>
      ) : (
        <Button variant="danger" onClick={(e) => setShowAddForm(!showAddForm)}>
          X
        </Button>
      )}
      {showAddForm && (
        <AddProductForm products={products} addNewProduct={addNewProduct} />
      )}
      <ProductList
        products={products}
        onProductDelete={deleteProduct}
        onProductEdit={updateProduct}
      />
    </Container>
  );
}
