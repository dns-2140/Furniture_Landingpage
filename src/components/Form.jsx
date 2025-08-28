import React from "react";

const Form = () => {
  return (
    <div className="form h-[250px] md:h-[490px] w-full mt-24 flex flex-col justify-center items-center md:items-start md:pl-[760px]">
      <div className="flex flex-col items-center md:items-start md:max-w-[500px] md:w-full">
        <h3 className="header-style text-white mb-5 max-w-[300px] md:max-w-[349px] text-center md:text-left">
          Get more discount Off your order
        </h3>
        <p className="text-style text-white mb-8">Join our mailing list</p>
        <form action="" className="flex gap-6">
          <label htmlFor="email " className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="bg-white md:max-w-[384px] md:w-full placeholder:font-saira placeholder:font-normal placeholder:text-xs placeholder:leading-none placeholder:tracking-normal py-4 px-5"
            />
          </label>
          <button className="px-6 py-4 bg-primary-text text-white">
            Shop Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
