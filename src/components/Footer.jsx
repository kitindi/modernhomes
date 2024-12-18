import React from "react";

const Footer = () => {
  return (
    <div className="scroll-smooth w-full overflow-hidden  md:pt-32 lg:px-32 px-5 py-32 min-h-[60vh] bg-[#0f4189]">
      <div className="container mx-auto max-w-8xl flex flex-col md:flex-row items-start justify-between gap-10 ">
        <div className="w-full px-5">
          <a href="#header" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff793f" viewBox="0 0 256 256">
              <path d="M240,184h-8V57.9l9.67-2.08a8,8,0,1,0-3.35-15.64l-224,48A8,8,0,0,0,16,104a8.16,8.16,0,0,0,1.69-.18L24,102.47V184H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,99,216,61.33V184H192V128a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40Zm136,53H80V136h96ZM80,168h96v16H80Z"></path>
            </svg>

            <p className="text-xl text-[#ffffff] font-semibold"> Modern Life</p>
          </a>
          <p className="text-md text-[#dfe6f1] mt-2">Transforming Dreams into Homes: Precision Engineering Meets Personalized Design</p>
        </div>
        <div className="w-full px-10">
          <h2 className="text-xl text-[#ffffff] font-semibold mb-5">Products</h2>
          <ul>
            <li className="text-md text-[#dfe6f1]">Plans by Floors</li>
            <li className="text-md text-[#dfe6f1]">Plans by Bedrooms</li>
            <li className="text-md text-[#dfe6f1]">Plans by Area (SQM)</li>
            <li className="text-md text-[#dfe6f1]">FAQ</li>
          </ul>
        </div>
        <div className="w-full px-10">
          <h2 className="text-xl text-[#ffffff] font-semibold mb-5">Company</h2>
          <ul>
            <li className="text-md text-[#dfe6f1]">
              <a href="$about">About</a>
            </li>
            <li className="text-md text-[#dfe6f1]">
              <a href="#contact">Contact</a>
            </li>
            <li className="text-md text-[#dfe6f1]">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li className="text-md text-[#dfe6f1]">Terms and Conditions</li>
            <li className="text-md text-[#dfe6f1]">Terms of Service</li>
            <li className="text-md text-[#dfe6f1]">Refund policy</li>
          </ul>
        </div>
        <div className="w-full px-10">
          <ul className="flex items-center gap-5">
            <li className="text-md text-[#87a0c4]">
              <a href="https://x.com/vectarlabs" target="_blank" rel="noreferrer">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#dfe6f1" fill="none">
                  <path
                    d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="text-md text-[#87a0c4]">
              <a href="https://www.instagram.com/vectarlab/" target="_blank" rel="noreferrer">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#dfe6f1" fill="none">
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
