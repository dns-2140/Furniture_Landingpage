import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="px-6 mb-12 md:px-[100px] md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="text-container-testimonials flex flex-col gap-8 md:w-[635px]">
          <h3 className="header-style">What People Are Saying About Us</h3>
          <div className="testimonials-user flex gap-5 items-center">
            <div className="user-image">
              <img src="/User-testi.png" alt="" />
            </div>
            <div className="user-name flex flex-col gap-2">
              <p className="font-semibold text-[14px] leading-[100%] tracking-[0]">
                Josh Smith
              </p>
              <p className="font-normal text-[10px] leading-[100%] tracking-[0] text-gray-400">
                Manager of The New York Times
              </p>
            </div>
          </div>
          <p>
            “They are have a perfect touch for make something so professional
            ,interest and useful for a lot of people .”
          </p>
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
              <ArrowLeft />
            </div>
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-[0px_4px_10px_0px_rgba(15,27,51,0.05)] bg-brand text-white">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
