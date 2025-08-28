import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import axios from "axios";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  const API_BASE_URL =
    "https://lumoshive-api-furniture.vercel.app/api/testimonials";

  async function fetchTestimonials() {
    const url = `${API_BASE_URL}?page=1&limit=10`;
    const response = await axios(url);
    return response.data;
  }

  function handlePagination(direction) {
    console.log(direction);
    switch (direction) {
      case "previous":
        setCurrIndex((prev) => prev - 1);
        break;
      case "next":
        setCurrIndex((prev) => prev + 1);
        break;
    }
  }

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const testimonialObj = await fetchTestimonials();
        setTestimonials(testimonialObj.testimonials);
      } catch (error) {
        console.error("Failed to fetch category obj:", error);
      }
    };

    getTestimonials();
  }, []);

  console.log(testimonials);
  return (
    <div className="px-6 mb-12 md:px-[100px] md:py-16 mt-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="text-container-testimonials flex flex-col gap-8 md:w-[635px]">
          <h3 className="header-style">What People Are Saying About Us</h3>
          <div className="testimonials-user flex gap-5 items-center">
            <div className="user-image">
              <img
                className="w-10 h-10 rounded-full"
                src={
                  testimonials.length > 0
                    ? testimonials[currIndex].image
                    : undefined
                }
                alt=""
              />
            </div>
            <div className="user-name flex flex-col gap-2">
              <p className="font-semibold text-[14px] leading-[100%] tracking-[0]">
                {testimonials.length > 0 && testimonials[currIndex].name}
              </p>
              <p className="font-normal text-[10px] leading-[100%] tracking-[0] text-gray-400">
                {testimonials.length > 0 && testimonials[currIndex].title}
              </p>
            </div>
          </div>
          <p>{testimonials.length > 0 && testimonials[currIndex].message}</p>
          <div className="button-container md:flex mt-6 gap-5 justify-start hidden">
            <button
              disabled={currIndex === 0}
              onClick={() => handlePagination("previous")}
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] ${
                currIndex === 0
                  ? "opacity-50 cursor-not-allowed shadow-none"
                  : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              }`}
            >
              <ArrowLeft />
            </button>
            <button
              disabled={currIndex === testimonials.length - 1}
              onClick={() => handlePagination("next")}
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] bg-brand text-white ${
                currIndex === testimonials.length - 1
                  ? "opacity-50 cursor-not-allowed shadow-none"
                  : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              }`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="image-container-best max-w-[340px] max-h-[205px] md:max-w-[562px] md:max-h-[340px] w-full h-full">
          <img
            src="/Testimonial-furniture.png"
            alt=""
            className="object-contain w-full h-full"
          />
          <div className="button-container flex mt-6 gap-5 justify-center md:hidden">
            <button
              disabled={currIndex === 0}
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)]  ${
                currIndex === 0
                  ? "opacity-50 cursor-not-allowed shadow-none"
                  : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              }`}
              onClick={() => handlePagination("previous")}
            >
              <ArrowLeft />
            </button>
            <button
              disabled={currIndex === testimonials.length - 1}
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] bg-brand text-white ${
                currIndex === testimonials.length - 1
                  ? "opacity-50 cursor-not-allowed shadow-none"
                  : "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              }`}
              onClick={() => handlePagination("next")}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
