import React from "react";

function Products() {
  return (
    <>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto  flex flex-wrap flex-col items-center ">
          <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
            Our Products
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        {/* cards  */}
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/14658/14658301.png"
              alt="labs"
            />
            <p className="text-3xl font-bold text-white">MX Labs</p>
            <p className="text-xl font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12  p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10698/10698599.png"
              alt="labs"
            />
            <p className="text-3xl font-bold text-white">Job Portal</p>
            <p className="text-xl font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12  p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9093/9093061.png"
              alt="labs"
            />
            <p className="text-3xl font-bold text-white">App Development</p>
            <p className="text-xl font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12   p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6565/6565544.png"
              alt="labs"
            />
            <p className="text-3xl font-bold text-white">Web Development</p>
            <p className="text-xl font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12   p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5408/5408783.png"
              alt="labs"
            />
            <p className="text-3xl font-bold text-white">Data Science</p>
            <p className="text-xl font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
