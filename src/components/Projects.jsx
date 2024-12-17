import { useEffect, useState } from "react";
import { projectsData } from "../assets/assets";

const Projects = () => {
  const [currentindex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  // add function hat controls the number of cards to show in the slider

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(1);
      } else {
        setCardToShow(1);
      }
    };
    updateCardsToShow();

    // call the updateCardsToShow when there is a screen size change

    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex(currentindex === projectsData.length - 1 ? 0 : currentindex + 1);

    // setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    // setCurrentIndex(currentindex === projectsData.length - 1 ? 0 : currentindex + 1);

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container w-full max-auto py-4 pt-20 px-6 md:px-20 lg:px-32 overflow-hidden bg-[#ffffff]" id="projects">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-[#0f4189]">
        Projects <span className="font-bold ">Completed</span>
      </h1>
      <p className="text-center text-md md:text-lg  text-[#666a7b] mb-8 max-w-lg mx-auto mt-2">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button aria-label="Previous" className="mr-4" onClick={() => prevProject()} disabled={currentindex === 0}>
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
        <button aria-label="Next Project" onClick={() => nextProject()} disabled={currentindex === projectsData.length - 1}>
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
      {/* Project slider container style={{ transform: `translateX(-${currentindex * (100 / cardToShow)}%)` }} */}
      <div className="overflow-hidden relative w-full">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentindex * 100}%)` }}>
          {projectsData.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 py-5">
              <div className="md:grid md:grid-cols-2 md:gap-40">
                <div className="w-full grid grid-cols-2 items-start md:items-center gap-3 md:gap-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`${
                        index == 0 ? "col-start-1 col-span-2" : index === 1 ? "col-start-1 col-end-2" : index === 2 ? "col-start-2 col-end-3" : ""
                      }  w-full md:px-0`}
                    >
                      <img src={image} alt={index} />
                    </div>
                  ))}
                </div>
                <div className="h-full w-full flex flex-col   py-5 md:py-20 md:pr-20">
                  <h2 className="text-3xl font-semibold text-[#0f4189]">{project.title}</h2>
                  <p className="py-2 my-2 text-xl text-slate-500 font-bold ">From Tsh. {project.budget}</p>
                  <p className="text-[#666a7b]">{project.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12">
                    <div className="px-4 py-2 border-r-2 border-[#e0e0e0]">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path
                            d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667C20 19.9128 20 20.5359 19.7321 21C19.5565 21.304 19.304 21.5565 19 21.732C18.5359 22 17.9128 22 16.6667 22H7.33333C6.08718 22 5.4641 22 5 21.732C4.69596 21.5565 4.44349 21.304 4.26795 21C4 20.5359 4 19.9128 4 18.6667V10Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 18H9C8.05719 18 7.58579 18 7.29289 18.2929C7 18.5858 7 19.0572 7 20V22"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 14H13C12.0572 14 11.5858 14 11.2929 14.2929C11 14.5858 11 15.0572 11 16V18"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 10H17C16.0572 10 15.5858 10 15.2929 10.2929C15 10.5858 15 11.0572 15 12V14"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.floors}Floors</p>
                    </div>
                    <div className="px-5 py-2 md:border-r-2 md:border-[#e0e0e0]">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path d="M22 17.5H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.bedroom} Bedrooms</p>
                    </div>
                    <div className="px-5 py-2 border-r-2 border-[#e0e0e0] md:border-none">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path d="M6 20L5 21M18 20L19 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path
                            d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path
                            d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path d="M8 6L10.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.bathrooms} Bathrooms</p>
                    </div>
                    <div className="px-5 py-2 md:border-r-2 md:border-[#e0e0e0]">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path d="M17.5 10.5L19.5 12.5M14 14L16 16M10.5 17.5L12.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path
                            d="M10.5355 4.67767C11.9002 3.31296 12.5826 2.6306 13.3438 2.3153C14.3587 1.8949 15.4991 1.8949 16.5141 2.3153C17.2753 2.6306 17.9576 3.31296 19.3223 4.67767C20.687 6.04238 21.3694 6.72474 21.6847 7.48594C22.1051 8.50088 22.1051 9.64126 21.6847 10.6562C21.3694 11.4174 20.687 12.0998 19.3223 13.4645L13.4645 19.3223C12.0998 20.687 11.4174 21.3694 10.6562 21.6847C9.64126 22.1051 8.50088 22.1051 7.48594 21.6847C6.72474 21.3694 6.04238 20.687 4.67767 19.3223C3.31296 17.9576 2.6306 17.2753 2.3153 16.5141C1.8949 15.4991 1.8949 14.3587 2.3153 13.3438C2.6306 12.5826 3.31296 11.9002 4.67767 10.5355L10.5355 4.67767Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.height} Hight</p>
                    </div>
                    <div className="px-5 py-2 border-r-2 border-[#e0e0e0]">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path
                            d="M5 9.97873C5 11.095 6.79086 12 9 12V9.97873C9 8.98454 9 8.48745 8.60252 8.18419C8.20504 7.88092 7.811 7.99435 7.02292 8.22121C5.81469 8.56902 5 9.2258 5 9.97873Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 8.5C16 10.433 12.866 12 9 12C5.13401 12 2 10.433 2 8.5C2 6.567 5.13401 5 9 5C12.866 5 16 6.567 16 8.5Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M2 9V15.6667C2 17.5076 5.13401 19 9 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H9"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M18 19V17M14 19V17M10 19V17M6 18.5V16.5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.wide} Wide</p>
                    </div>
                    <div className="px-5 py-2 ">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ff793f" fill="none">
                          <path d="M20 6V18M18 4H6M18 20H6M4 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                        </svg>
                      </p>
                      <p className="text-[#666a7b]">{project.space_area} Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
