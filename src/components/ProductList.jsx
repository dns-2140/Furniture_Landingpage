import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + ".." : text;
}

const ProductList = ({ products, pagination, currPage }) => (
  <div className="my-24">
    <h3 className="header-style text-center mb-8">All Products</h3>
    <p className="text-style mb-12">
      The products we provide only for you as our service are selected from the
      best products with number 1 quality in the world
    </p>

    <div className="flex flex-wrap gap-5 gap-y-20">
      {products.map((product) => (
        <div key={product.id} className="max-w-[160px] max-h-[170px]">
          <div className="image-container border border-gray-200 w-[160px] h-[160px] mb-2.5">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="subheader-style">{truncateText(product.title, 16)}</p>
          <p>
            <span className="font-normal text-[12px] leading-[165%] tracking-[0%]">
              ${product.price}
            </span>{" "}
            {product.price_after_discount ? (
              <span className="font-normal text-[10px] leading-[165%] tracking-[0%] line-through text-gray-400">
                ${product.price_after_discount}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      ))}
    </div>

    <div className="button-container flex mt-20 gap-5 justify-start items-center">
      <button
        disabled={currPage === 1}
        onClick={() => pagination("previous")}
        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center 
    bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] 
    hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300 ${
      currPage === 1
        ? "opacity-50 cursor-not-allowed shadow-none"
        : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
    }`}
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <div
        disabled={currPage === 3}
        onClick={() => pagination("next")}
        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center 
    bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] 
    hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300 ${
      currPage === 3
        ? "opacity-50 cursor-not-allowed shadow-none"
        : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
    }
        `}
      >
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

export default ProductList;
