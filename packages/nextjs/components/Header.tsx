// "use client";

// import React, { useCallback, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
// import { useOutsideClick } from "~~/hooks/scaffold-eth";

// type HeaderMenuLink = {
//   label: string;
//   href: string;
//   icon?: React.ReactNode;
// };

// export const menuLinks: HeaderMenuLink[] = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Debug Contracts",
//     href: "/debug",
//     icon: <BugAntIcon className="h-4 w-4" />,
//   },
// ];

// export const HeaderMenuLinks = () => {
//   const pathname = usePathname();

//   return (
//     <>
//       {menuLinks.map(({ label, href, icon }) => {
//         const isActive = pathname === href;
//         return (
//           <li key={href}>
//             <Link
//               href={href}
//               passHref
//               className={`${
//                 isActive ? "bg-secondary shadow-md" : ""
//               } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
//             >
//               {icon}
//               <span>{label}</span>
//             </Link>
//           </li>
//         );
//       })}
//     </>
//   );
// };

// /**
//  * Site header with glassmorphism
//  */
// export const Header = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const burgerMenuRef = useRef<HTMLDivElement>(null);
//   useOutsideClick(
//     burgerMenuRef,
//     useCallback(() => setIsDrawerOpen(false), []),
//   );

//   return (
//     <div
//       className="sticky top-0 z-20 flex items-center justify-between px-4 lg:px-8 py-2 bg-opacity-60 backdrop-blur-md bg-white/50 shadow-md"
//       style={{
//         backdropFilter: "blur(10px)", // Asegura compatibilidad con navegadores
//         WebkitBackdropFilter: "blur(10px)", // Compatibilidad con Webkit
//       }}
//     >
//       <div className="navbar-start w-auto lg:w-1/2">
//         <div className="lg:hidden dropdown" ref={burgerMenuRef}>
//           <label
//             tabIndex={0}
//             className={`ml-1 btn btn-ghost ${
//               isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"
//             }`}
//             onClick={() => setIsDrawerOpen((prev) => !prev)}
//           >
//             <Bars3Icon className="h-6 w-6" />
//           </label>
//           {isDrawerOpen && (
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
//               onClick={() => setIsDrawerOpen(false)}
//             >
//               <HeaderMenuLinks />
//             </ul>
//           )}
//         </div>
//         <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6">
//           <div className="flex relative w-10 h-10">
//             <Image alt="Logo" className="cursor-pointer" fill src="/logo.svg" />
//           </div>
//           <div className="flex flex-col">
//             <span className="font-bold leading-tight">SoWaMa</span>
//             <span className="text-xs">Vida para todos</span>
//           </div>
//         </Link>
//         <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
//           <HeaderMenuLinks />
//         </ul>
//       </div>
//       <div className="navbar-end flex-grow mr-4">
//         {/* Puedes añadir aquí tus botones o componentes */}
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "abajo" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          <span className="ml-3 text-lg font-semibold text-white">SoWaMa</span>
        </div>
        <nav className="flex gap-4">
          <a href="#home" className="text-white hover:text-secondary">
            Home
          </a>
          <a href="#about" className="text-white hover:text-secondary">
            About
          </a>
          <a href="#services" className="text-white hover:text-secondary">
            Services
          </a>
        </nav>
      </div>
    </header>
  );
};

