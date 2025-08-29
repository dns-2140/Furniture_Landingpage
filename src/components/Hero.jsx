import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [header, setHeader] = useState({});
  const [data, setData] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const API_BASE_URL_HEADER =
    "https://lumoshive-api-furniture.vercel.app/api/header";

  const API_BASE_URL_DATA =
    "https://lumoshive-api-furniture.vercel.app/api/data";

  async function fetchHeader() {
    const url = API_BASE_URL_HEADER;
    const response = await axios(url);
    return response.data;
  }

  async function fetchData() {
    const url = API_BASE_URL_DATA;
    const response = await axios(url);
    return response.data;
  }

  useEffect(() => {
    const getHeader = async () => {
      try {
        const headerObj = await fetchHeader();
        console.log(headerObj);
        setHeader(headerObj);
      } catch (error) {
        console.error("Failed to fetch header obj:", error);
      }
    };

    getHeader();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataObj = await fetchData();
        setData(dataObj);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    getData();
  }, []);

  const { experience, country, sold, variant } = data;
  return (
    <section
      aria-labelledby="hero-heading"
      id="hero"
      className={`md:h-[1000px]  h-[750px]`}
      style={{
        backgroundImage: header.banner ? `url(${header.banner})` : "none",
      }}
    >
      <div className="container mx-auto px-6 py-12 md:px-24">
        <nav
          className="flex items-center justify-between text-white"
          aria-label="Main Navigation"
        >
          <a href="#hero">
            <img src="./FurniShop.svg" alt="FurniShop logo" />
          </a>

          {/* DESKTOP MENU */}
          <ul className="desktop-menu hidden md:flex md:gap-16 text-sm font-thin ">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#form">Contact</a>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={handleClick}
              id="menu-btn"
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="menu"
              aria-label="Toggle navigation menu"
              className={`${
                isMobileMenuOpen ? "open z-51" : ""
              } block hamburger md:hidden focus:outline-none `}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <div
            id="menu"
            className={`absolute top-0 bottom-0 left-0 ${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black z-50`}
          >
            <a href="#hero" className="hover:text-pink-500">
              Home
            </a>
            <a href="#hero" className="hover:text-pink-500">
              About
            </a>
            <a href="#features" className="hover:text-pink-500">
              Features
            </a>
            <a href="#form" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-text text-white flex flex-col items-center justify-center md:h-[720px] gap-8 font-saira p-8 md:max-w-[888px] mx-auto mt-32 md:mt-0">
          <h1 className="md:text-[64px] text-2xl mt-4 text-center tracking-tight leading-none">
            {header.title}
          </h1>
          <p className="font-thin mb-4">
            Buying the best furniture can not be easier. Pick the furniture and
            we will help design your room.
          </p>
          <button className="cta-button px-12 py-2 cursor-pointer">
            Shop now
          </button>
        </div>

        <div className="stats-banner grid grid-cols-2 md:grid-cols-4 bg-[#286f6c] text-white w-full rounded-lg py-10  md:py-4 gap-y-16 md:gap-y-0 md:mt-0 mt-40">
          <div className="banner-grid ">
            <span className="figure  font-semibold text-[24px] leading-[1.2] tracking-normal text-center capitalize">
              {experience}
            </span>

            <span>Year</span>
            <span>Experience</span>
          </div>

          <div className="banner-grid">
            <span className="figure font-semibold text-[24px] leading-[1.2] tracking-normal text-center capitalize">
              {country}
            </span>
            <span>Opened in </span>
            <span>the country</span>
          </div>

          <div className="banner-grid">
            <span className="figure font-semibold text-[24px] leading-[1.2] tracking-normal text-center capitalize">
              {sold}
            </span>
            <span>Furniture </span>
            <span>Sold</span>
          </div>

          <div className="banner-grid">
            <span className="figure  font-semibold text-[24px] leading-[1.2] tracking-normal text-center capitalize">
              {variant}
            </span>
            <span>Variant </span>
            <span>Furnitue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
