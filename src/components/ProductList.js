//importing the files I need, namely my api service and the props from the Product page
import InventoryApi from "../service/inventory-api";
import Product from "./Product";
//creating a variable to initate the InventoryApi service
const service = new InventoryApi();

export default function ProductList(props) {
  //de-structuring the props
  const { products, onProductDelete, onProductEdit } = props;

  return (
    <div>
      {/* using the map function to iterate through the array of products and create a product card passing the props through */}
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          onProductDelete={onProductDelete}
          onProductEdit={onProductEdit}
        />
      ))}
    </div>
  );
}
