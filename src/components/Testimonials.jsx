import React from "react";
import { customers } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#f2f8ff] py-20 min-h-[100vh]" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl text-[#0f4189] text-center font-bold">Don't just take our own words for it.</h2>
        <h2 className="text-2xl sm:text-4xl text-[#0f4189] text-center font-bold">Trust our customers</h2>
        <div className="grid grid-cols-1 md:grid md:grid-cols-12 md:grid-rows-4 md:gap-4 mt-10 px-8 py-8 md:px-0">
          <div className="md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-2  border  p-5 h-fit rounded my-2 md:my-0">
            <div className="flex items-center space-x-4">
              <img src={customers[0]} alt="" className="h-10 w-10 rounded-full" />{" "}
              <div>
                <p className="text-sm text-[#0f4189] font-medium">Mark and Emily Sanders</p>
                <p className="text-sm text-[#666a7b] font-medium">Dallas, TX</p>
                <p className="flex space-x-2 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#666a7b] mt-2">
                Professional and timely service. The entire project was completed ahead of schedule, and the quality of work was superb.
              </p>
            </div>
          </div>
          <div className="md:col-start-5 md:col-span-4 md:row-start-1 md:row-span-2 border   p-5 h-fit rounded my-2 md:my-0">
            {" "}
            <div className="flex items-center space-x-4">
              <img src={customers[1]} alt="" className="h-10 w-10 rounded-full" />{" "}
              <div>
                <p className="text-sm text-[#0f4189] font-medium">Rachel & John Miller</p>
                <p className="text-sm text-[#666a7b] font-medium">San Antonio, TX</p>
                <p className="flex space-x-2 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#666a7b] mt-2">
                The craftsmanship is beautiful, and the design is exactly what we envisioned. The only minor hiccup was a slight delay, but overall a great
                experience.
              </p>
            </div>
          </div>
          <div className="md:col-start-9 md:col-span-4 md:row-start-2 md:row-span-2 border   p-5 h-fit rounded my-2 md:my-0">
            {" "}
            <div className="flex items-center space-x-4">
              <img src={customers[2]} alt="" className="h-10 w-10 rounded-full" />{" "}
              <div>
                <p className="text-sm text-[#0f4189] font-medium">Clara Bennett</p>
                <p className="text-sm text-[#666a7b] font-medium">Midland, TX</p>
                <p className="flex space-x-2 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#666a7b] mt-2">
                Truly an outstanding experience. The project was on budget, on time, and the final product exceeded our expectations. Highly recommend!
              </p>
            </div>
          </div>
          <div className="md:col-start-5 md:col-span-4 md:row-start-3 md:row-span-2 border   p-5 h-fit rounded my-2 md:my-0">
            {" "}
            <div className="flex items-center space-x-4">
              <img src={customers[3]} alt="" className="h-10 w-10 rounded-full" />{" "}
              <div>
                <p className="text-sm text-[#0f4189] font-medium">Charlie & Mia Foster</p>
                <p className="text-sm text-[#666a7b] font-medium">Lubbock, TX</p>
                <p className="flex space-x-2 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ff793f" viewBox="0 0 256 256">
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                    </svg>
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#666a7b] mt-2">
                We are so pleased with the end result. The construction team was professional and courteous, and our new home is just what we wanted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
