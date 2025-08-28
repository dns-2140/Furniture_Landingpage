import "./output.css";
import Features from "./components/Features";
import NewInStore from "./components/NewInStore";
import Best from "./components/Best";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ProductsContainer from "./components/ProductsContainer";
import Hero from "./components/Hero";

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
      </div>
    </>
  );
}

export default App;
