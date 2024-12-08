import React from 'react';
const AboutUs = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-[#69b369] to-[#1b3f1b] bg-cover bg-center py-16"
      style={{
        height: "400px",
        width: "100vw",
        margin: "auto",
        borderRadius: "24px",
        boxShadow: "1px 13px 19px rgba(133, 130, 130, 0.836)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        <div>
            <img
              src="/images/banner.jpeg"
              alt="Composting Process"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>           
            {/* <p className="text-gray-300">
              We believe that composting is a simple yet powerful way to make a positive impact on the environment. By diverting organic materials from landfills, we are able to create a closed-loop system that benefits both our community and the planet.
            </p> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;