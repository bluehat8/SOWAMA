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
          <p className="text-black mb-6 text'4xl pl-20 -ml-24">
          Get inspired by this backyard garden and start your own sustainable gardening journey today! Small steps like composting and growing your 
          own produce can make a big difference.
        </p>
          
          <div>           
           
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;