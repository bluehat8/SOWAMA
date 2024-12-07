"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { FaucetButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner.jpeg')",
          height: "300px",
          width: "90vw",
          margin: "auto"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-4xl font-bold text-center">
            UN MUNDO SIEMPRE VERDE
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex items-center flex-col flex-grow pt-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-5 w-full">
  

          {/* Billetera Conectada */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
            <FaucetButton />
            <RainbowKitCustomConnectButton />
          </div>

        </div>

        {/* Sección adicional */}
        <div className=" bg-base-300 flex flex-col mt-10 sm:flex-row justify-center items-center gap-8 px-5 w-full">
          <div className="flex justify-center items-center gap-12 mt-10 mb-10 flex-col sm:flex-row">
            
          <div className="relative w-80 sm:w-96 h-96 bg-cover bg-center rounded-xl shadow-lg">
            <img
              src="/images/img5Sowama.png"
              alt="Sostenibilidad"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          
          </div>

          {/* Billetera Conectada */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
            <FaucetButton />
            <RainbowKitCustomConnectButton />
          </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
