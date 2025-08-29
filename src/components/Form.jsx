import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "https://lumoshive-api-furniture.vercel.app/api/subscribe";

const Form = () => {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail((prev) => (prev = e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    try {
      const res = await axios.post(API_BASE_URL, { email });
      toast.success(`${res.data.message}🎉`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Subscription failed ❌");
      console.error(err.response?.data || err.message);
    }
  }

  return (
    <section
      className="form h-[250px] md:h-[490px] w-full mt-24 flex flex-col justify-center items-center md:items-start md:pl-[760px]"
      id="form"
    >
      <div className="flex flex-col items-center md:items-start md:max-w-[500px] md:w-full">
        <h3 className="header-style text-white mb-5 max-w-[300px] md:max-w-[349px] text-center md:text-left">
          Get more discount Off your order
        </h3>
        <p className="text-style text-white mb-8">Join our mailing list</p>
        <form onSubmit={handleSubmit} className="flex gap-6">
          <label htmlFor="email" className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="bg-white md:max-w-[384px] md:w-full placeholder:font-saira placeholder:font-normal placeholder:text-xs placeholder:leading-none placeholder:tracking-normal py-4 px-5"
              value={email}
              aria-label="Enter your email to join the mailing list"
              onChange={handleChange}
            />
          </label>
          <button className="px-6 py-4 bg-primary-text text-white">
            Shop Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
