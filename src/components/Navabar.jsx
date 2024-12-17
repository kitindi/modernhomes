import { useState, useEffect } from "react";
const Navabar = () => {
  const [showMobilemenu, setShowMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobilemenu);
  };

  // disabling website from scrolling when mobile menu is open

  useEffect(() => {
    if (showMobilemenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobilemenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        <a href="" className="flex items-center gap-2 ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff793f" viewBox="0 0 256 256">
            <path d="M240,184h-8V57.9l9.67-2.08a8,8,0,1,0-3.35-15.64l-224,48A8,8,0,0,0,16,104a8.16,8.16,0,0,0,1.69-.18L24,102.47V184H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,99,216,61.33V184H192V128a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40Zm136,53H80V136h96ZM80,168h96v16H80Z"></path>
          </svg>

          <p className="text-xl text-[#ffffff] font-semibold"> Modern Life</p>
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center px-4 py-2 gap-5 ">
            <li>
              <a href="#header" className="text-[#ffffff] text-lg font-medium hover:text-gray-300 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[#ffffff] text-lg font-medium hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[#ffffff] text-lg font-medium hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#testmonials" className="text-[#ffffff] text-lg font-medium hover:text-gray-300">
                Testimonial
              </a>
            </li>
            <li></li>
          </ul>
        </nav>
        <button className="hidden md:block bg-[#ff793f] text-white font-semibold px-12 py-2 rounded-full">Sign up</button>
        <button className="md:hidden" onClick={() => handleMobileMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#fff" fill="none">
            <path d="M20 12L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 5L4 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 19L4 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      {/* mobile menu */}

      <div
        className={`md:hidden bg-[#f2f8ff] text-white  right-0 top-0 bottom-0 overflow-hidden transition-all  ${showMobilemenu ? "fixed w-full" : "w-0 h-0"}`}
      >
        <span className="flex justify-end p-6 cursor-pointer" onClick={() => handleMobileMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff793f" fill="none">
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium ">
          <a href="#home" className="inline-block py-2 text-[#0f4189]" onClick={() => handleMobileMenu()}>
            Home
          </a>
          <a href="#about" className="inline-block py-2 text-[#0f4189]" onClick={() => handleMobileMenu()}>
            About
          </a>
          <a href="#projects" className="inline-block py-2 text-[#0f4189]" onClick={() => handleMobileMenu()}>
            Projects
          </a>
          <a href="#testmonial" className="inline-block py-2 text-[#0f4189]" onClick={() => handleMobileMenu()}>
            Testimonial
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navabar;
