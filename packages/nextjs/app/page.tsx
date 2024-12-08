"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { FaucetButton } from "~~/components/scaffold-eth";
import CarouselText from "./inicio/CarouselText"; 
import AboutUs from "~~/components/about-us";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          height: "500px",
          width: "vw",
          margin: "auto",
          borderRadius: "24px",
          boxShadow: "1px 13px 19px rgba(133, 130, 130, 0.836)"             
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-3xl">          
          <h1 className="text-white text-4xl font-bold text-center">UN MUNDO SIEMPRE VERDE</h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex items-center flex-col flex-grow pt-12 pb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 px-5 w-full">
          {/* Billetera Conectada */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>

            <section className="bg-gradient-to-r from-green-200 via-transparent to-green-200 w-[90wv] h-68 pt-8
             flex justify-between gap-12 mt-12">
              <div className="bg-sky-100 w-60 h-56 pt-8 pb-8 flex flex-wrap justify-center shadow-xl">
                {" "}
                <FaucetButton />
                <RainbowKitCustomConnectButton />
              </div>             
              <div className="bg-sky-100 w-60 h-56 pt-8 pb-8 flex flex-wrap justify-center  shadow-xl">
                {" "}
                <FaucetButton />
                <RainbowKitCustomConnectButton />
              </div>
            </section>
            <CarouselText />           
          </div>
        </div>

         {/* WhoWeAre */}  
<div
  className="relative bg-cover bg-center mt-1"
  style={{
    backgroundImage: "url('/images/fondoAereo.jpg')",
    height: "500px",
    width: "100vw",
    margin: "auto",
    borderRadius: "24px",
    boxShadow: "1px 13px 19px rgba(133, 130, 130, 0.836)"             
  }}
>
  {/* Añadimos una capa de degradé superpuesta */}
  <div 
  className="absolute inset-0" 
  style={{
    background: `linear-gradient(to right, rgb(29, 64, 1), rgb(70, 115, 57))`,
    opacity: 0.7,
    borderRadius: "24px"
  }}
></div>

  <div className="relative z-10 flex justify-center items-center gap-12 mt-12 mb-10 flex-col sm:flex-row">   

<div className="w-1/2 pl-5">
    <h2 className="text-3xl font-bold mb-4 text-white">About Sowama</h2>
          <p className="text-white-300 mb-6">
          At our composting process, we are committed to sustainability and organic solid reducing waste.
           Our mission is to transform organic materials into nutrient-rich soil that can be used to enrich gardens and support local agriculture.
          We believe that composting is a simple yet powerful way to make a positive impact on the environment. By diverting organic materials 
          from landfills, and with our token SOWA, we are able to create a closed-loop system that benefits both our community and the planet. 
            </p>
    </div>

    <div className="relative w-1/2 sm:w-96 h-96 bg-cover bg-center rounded-xl">
      <img
        src="/images/img4SowamaTransparent.png"       
        className="rounded-xl w-70 h-70 object-cover opacity-90"
      />
    </div>
  </div>
</div>

 {/* Compost */}
 <div className="relative">
        <img
          src="/images/banner.jpeg')"
          alt= "image compoastaje"
          className= "w-vw margin-auto shadow-1px 13px 19px rgba(133, 130, 130, 0.836) rounded-md"      
      />      
  </div>
      <AboutUs />
      </div>
    </div>
  );
};

export default Home;