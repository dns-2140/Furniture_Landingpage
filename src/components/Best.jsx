import React from "react";

const Best = () => {
  return (
    <section className="px-6 mb-12 md:px-[100px]">
      <div className="flex flex-col md:flex-row md:items-center md:space-between">
        <div className="text-container-best flex flex-col gap-4 mb-12 md:max-w-[570px]">
          <h3 className="header-style">
            The Best Furniture Manufacturer of your choice
          </h3>
          <p className="paragraph-style">
            Furnitre power is a software as services for multiperpose business
            management system, expecially for them who are running two or more
            business exploree the future Furnitre power is a software as
            services.
          </p>
        </div>
        <div className="image-container-best max-w-[340px] max-h-[244px] mx-auto md:max-w-[554px] md:max-h-[399px]">
          <img
            src="/Best.png"
            alt="Modern living room furniture from Furniture Power"
            className="object-contain w-full h-full"
            loading="lazy"
            title="Modern living room furniture from Furniture Power"
          />
        </div>
      </div>
    </section>
  );
};

export default Best;
