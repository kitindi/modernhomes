import React from "react";
import { projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div className="container w-full max-auto py-4 pt-20 px-6 md:px-20 lg:px-32 overflow-hidden bg-[#ffffff]" id="projects">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-[#0f4189]">
        Projects <span className="font-bold ">Completed</span>
      </h1>
      <p className="text-center text-md md:text-lg  text-[#666a7b] mb-8 max-w-lg mx-auto mt-2">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button aria-label="Previous" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff793f" fill="none">
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button aria-label="Next Project">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff793f" fill="none">
            <path
              d="M16 12L8 12M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
      {/* Project slider container */}
      <div>
        <div>
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col md:grid md:grid-cols-2 md:gap-20 items-center justify-center">
              <div className="grid grid-cols-2  gap-2 md:gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      index == 0 ? "col-start-1 col-span-2" : index === 1 ? "col-start-1 col-end-2" : index === 2 ? "col-start-2 col-end-3" : ""
                    } h-64 md:h-[400px] w-full`}
                  >
                    {console.log(index)}
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                <h2>Project Details</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
