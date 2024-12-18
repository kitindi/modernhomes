import React from "react";
import image1 from "../assets/image12.jpg";

const About = () => {
  return (
    <div
      className="scroll-smooth  py-14 px-8 md:px-20 lg:px-32  flex flex-col items-center justify-center w-full overflow-hidden bg-[#f2f8ff] min-h-[700px]"
      id="about"
    >
      <h1 className="text-4xl font-bold text-center text-[#0f4189]">
        About <span className="text-">Our Brand</span>
      </h1>
      <p className="text-[#666a7b] text-md md:text-lg mt-2">Passonate about Properties, Dedicated to your house of Dream</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full md:min-h-[500px] mt-10 py-8">
        <div className="w-full md:w-1/2 ">
          <img className="w-full h-full md:w-[550px]" src={image1} />
        </div>
        <div className="flex flex-col items-center md:items-start mt-10 ">
          <div className="grid grid-cols-2 gap-8 md:gap-16 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-[#0f4189]">10+</p>
              <p className="text-md md:text-lg text-[#666a7b]">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-[#0f4189]">12+</p>
              <p className="text-md md:text-lg text-[#666a7b]">Project Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-[#0f4189]">20+</p>
              <p className="text-md md:text-lg text-[#666a7b]">Min. Sq. Ft. deliverd</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-[#0f4189]">25+</p>
              <p className="text-md md:text-lg text-[#666a7b]">Ongoing Projects</p>
            </div>
          </div>
          <p className="text-[#666a7b] my-10 max-w-lg">
            We take a unique approach to real estate. We believe in building properties with authenticity, allowing the true essence of shining homes.
          </p>
          <button className="bg-[#ff793f] text-white px-8 py-2 rounded-full">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
