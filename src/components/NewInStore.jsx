import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const NewInStore = () => {
  const [images, setImages] = useState([
    { id: 1, image_src: "/Chair.png", text: "Chair" },
    { id: 2, image_src: "/Bed.png", text: "Bed" },
    { id: 3, image_src: "/Cupboard.png", text: "Cupboard" },
    { id: 4, image_src: "/Chair.png", text: "Chair" },
  ]);

  const [category, setCategory] = useState([]);

  const API_BASE_URL =
    "https://lumoshive-api-furniture.vercel.app/api/category";

  async function fetchCategory() {
    const url = API_BASE_URL;
    const response = await axios(url);
    return response.data;
  }

  useEffect(() => {
    const getCategory = async () => {
      try {
        const categoryObj = await fetchCategory();
        console.log(categoryObj.category);
        setCategory(categoryObj.category);
      } catch (error) {
        console.error("Failed to fetch category obj:", error);
      }
    };

    getCategory();
  }, []);
  console.log(category);
  return (
    <div className="mb-24 md:px-[100px]">
      <div className="flex flex-col px-6 md:px-0 md:flex-row md:items-center">
        <div className="text-container flex md:flex-col md:justify-start md:items-start md:max-w-[240px] md:mr-[72px] gap-5 justify-between items-center mb-6">
          <h3 className="header-style">New In The Store</h3>
          <p className="text-style">
            Get the latest items immediately with promo prices
          </p>
          <div className="paragraph-style self-start underline md:flex gap-2 items-center hidden">
            <div>Check all</div>
            <ArrowRight />
          </div>
        </div>
        <div className="image-container flex no-wrap overflow-x-auto gap-4 scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {category.map((ct, i) => (
            <div
              className="relative max-w-[198px] max-h-[299px] md:max-w-[265px] md:max-h-[400px] flex-shrink-0"
              key={i}
            >
              <img
                src={ct.image}
                alt={ct.title}
                className="object-cover w-full h-full"
              />
              <p className="text-white absolute top-7/8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px]">
                {ct.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewInStore;
