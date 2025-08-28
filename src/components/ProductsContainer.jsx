import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const API_BASE_URL = "https://lumoshive-api-furniture.vercel.app/api/products";

const API_BASE_URL_ALL_PRODUCTS = `${API_BASE_URL}?page=1&limit=20`;

async function fetchProducts() {
  const response = await axios(API_BASE_URL);
  //   const response = await axios(API_BASE_URL_ALL_PRODUCTS);
  return response.data;
}

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { products } = await fetchProducts();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="px-6 md:px-[100px]">
      <ProductList products={products} />
    </div>
  );
};

export default ProductsContainer;
