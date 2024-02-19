import { useState } from "react";
import InventoryApi from "../service/inventory-api";
import Product from "./Product";

const service = new InventoryApi();

export default function ProductList(props) {
  // console.log(props);
  const { products, onProductDelete, onProductEdit } = props;

  return (
    <div>
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
