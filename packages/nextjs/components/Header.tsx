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

