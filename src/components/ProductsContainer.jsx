import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const API_BASE_URL = "https://lumoshive-api-furniture.vercel.app/api/products";

async function fetchProducts(page) {
  const url = `${API_BASE_URL}?page=${page}&limit=8`;
  const response = await axios(url);
  return response.data;
}

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  function pagination(direction) {
    console.log(direction);
    switch (direction) {
      case "previous":
        setCurrPage((prev) => prev - 1);
        break;
      case "next":
        setCurrPage((prev) => prev + 1);
        break;
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { products } = await fetchProducts(currPage);
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, [currPage]);

  return (
    <div className="px-6 md:px-[100px]">
      <ProductList
        products={products}
        pagination={pagination}
        currPage={currPage}
      />
    </div>
  );
};

export default ProductsContainer;
