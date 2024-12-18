import Navabar from "./Navabar";
import { headerImage } from "../assets/assets";

const Header = () => {
  return (
    <div
      className="scroll-smooth min-h-screen bg-cover bg-center  flex items-center w-full overflow-hidden container bg-blend-multiply bg-gray-400"
      style={{ backgroundImage: `url(${headerImage})` }}
      id="header"
    >
      {" "}
      <Navabar />
      <div className="container text-white mx-auto  px-6 md:px-20 lg:px-32 py-20">
        <h2 className="text-5xl w-full  md:text-6xl font-bold md:max-w-2xl">Turn your dream into a modern home that uplifts your living.</h2>
        <div className="space-x-3 md:space-x-6 mt-16">
          <a href="#projects" className="border-2 border-white px-10 py-3 rounded-full text-md">
            Projects
          </a>
          <a href="#contact" className="bg-[#ff793f] text-white text-md px-10 py-3 rounded-full">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
