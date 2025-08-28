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
                src={testimonials.length > 0 && testimonials[currIndex].image}
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
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)]">
              <ArrowLeft />
            </div>
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] bg-brand text-white">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="image-container-best max-w-[340px] max-h-[205px] md:max-w-[562px] md:max-h-[340px] w-full h-full">
          <img
            src="/Testimonial-furniture.png"
            alt=""
            className="object-contain w-full h-full"
          />
          <div className="button-container flex mt-6 gap-5 justify-center md:hidden">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)]">
              <ArrowLeft onClick={() => handlePagination("previous")} />
            </div>
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] bg-brand text-white">
              <ArrowRight onClick={() => handlePagination("next")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
