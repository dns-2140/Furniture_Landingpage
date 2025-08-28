import React from "react";
import { icons } from "lucide-react";

const { Facebook, Twitter, Github, Instagram } = icons;

const Footer = () => {
  return (
    <div className="footer px-6 py-10 bg-primary-text text-white md:px-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <h3 className="mb-10 font-raleway font-bold text-2xl leading-none tracking-[0.08px]">
          FurniShop
        </h3>

        <div class="social-icons flex space-x-4 md:justify-center md:items-center">
          <a
            href="#"
            className="bg-[#474751] p-4 rounded-full hover:bg-gray-600 transition"
          >
            <Facebook size={16} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-[#474751] p-4 rounded-full hover:bg-gray-600 transition"
          >
            <Twitter size={16} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-[#474751] p-4 rounded-full hover:bg-gray-600 transition"
          >
            <Github size={16} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-[#474751] p-4 rounded-full hover:bg-gray-600 transition"
          >
            <Instagram size={16} className="text-white" />
          </a>
        </div>
      </div>

      <div class="border-t border-gray-700 my-6 hidden md:block mb-12"></div>

      <div className="flex md:justify-center items-center">
        {/*Our Products and Top Feature*/}
        <div className="flex gap-20">
          <div className="flex flex-col w-1/2">
            <h3 class="font-raleway text-white font-semibold mb-6">
              Our Products
            </h3>
            <ul class="space-y-4 font-inter font-normal text-sm leading-5 tracking-normal flex flex-col">
              <li>
                <a href="#" className="hover:text-white">
                  The Support Suite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  The Sales Suite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guide
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-1/2">
            <h3 class="font-raleway text-white font-semibold mb-6">
              Top Features
            </h3>
            <ul class="space-y-4 flex flex-col font-inter font-normal text-sm leading-5 tracking-normal">
              <li>
                <a href="#" className="hover:text-white">
                  Ticketing System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Desk Software
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
