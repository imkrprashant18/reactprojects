import React from "react";
function App() {
  return (
    <>
      <div className="grid place-content-center h-screen">
        <h1 className="text-white text-sm m-6">Test</h1>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div>
            <img
              className="h-12 w-12"
              src="data:image/jpeg;base64,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"
              alt="logo"
            />
          </div>
          <div>
            <div className="text-2xl font-medium text-black">
              Tailwindcss
              <p className="text-slate-500 text-base">By Prashant mahato</p>
            </div>
          </div>
        </div>
        <button className="text-white bg-sky-500 text-center mt-2 text-base p-2 rounded-lg hover:bg-white dark:bg-red-600 hover:text-black ">
          Buy Now
        </button>

        <div className="text-center my-4">
          <p className="text-white md:text-green-500 sm:text-red-600 ">
            Lorem ipsum dolor sit
          </p>
        </div>
        <div className="mt-3 ">
          <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div>
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48 "
                  src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                  alt="hitesh sir"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  An Awesom Card
                  <a
                    href=""
                    className="block mt-1 text-lg font-medium hover:text-blue-700"
                  >
                    Tailwind Css is great css
                    <p className="mt-2 text-slate-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </p>
                    .
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
