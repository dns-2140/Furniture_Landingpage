import React from "react";

const Features = () => {
  return (
    <div className="mt-[210px] px-6 mx-auto md:px-[100px] mb-[107px] md:mb-[140px]">
      <div className="flex flex-col gap-[50px] md:flex-row-reverse justify-center items-center">
        <div>
          <h3 className="header-style mb-4 md:w-[508px]">
            We Create your home more aestetic
          </h3>
          <p className="text-style mb-4 md:font-[20px] md:mb-8">
            Furnitre power is a software as services for multiperpose business
            management system.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <img src="/checklist.png" alt="" />

              <div className="feature-text mt-[-4px]">
                <h4 className="subheader-style">Valuation Services</h4>
                <p className="paragraph-style md:w-[508px]">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <img src="/checklist.png" alt="" className="" />

              <div className="feature-text mt-[-4px]">
                <h4 className="subheader-style">
                  Development of Furniture Models
                </h4>
                <p className="paragraph-style md:w-[508px]">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[340px] max-h-[270px] mx-auto md:hidden">
          <img src="/features.png" alt="" className="object-cover" />
        </div>
        <div className="max-w-[554px] max-h-[443px] mx-auto hidden md:block">
          <img src="/Features-desktop.png" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Features;
