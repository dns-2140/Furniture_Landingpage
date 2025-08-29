import "./output.css";
import Features from "./components/Features";
import NewInStore from "./components/NewInStore";
import Best from "./components/Best";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ProductsContainer from "./components/ProductsContainer";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="md:max-w-[1440px] max-w-[576px] w-full mx-auto">
        {/* HERO */}
        <Hero />
        <Features />
        <NewInStore />
        <Best />
        <ProductsContainer />
        <Testimonial />
        <Form />
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
