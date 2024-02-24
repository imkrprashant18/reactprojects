import React from "react";

function Card() {
  return (
    <>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.flaticon.com/128/741/741835.png"
            alt="notes"
          />
          <p className="text-3xl  font-bold text-white">600+</p>
          <p className="text-2xl font-bold text-gray-500">Diffrent Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.flaticon.com/128/1047/1047278.png"
            alt="notes"
          />
          <p className="text-3xl  font-bold text-white">1000+</p>
          <p className="text-2xl font-bold text-gray-500">
            Successful Transation
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.flaticon.com/128/3829/3829933.png"
            alt="notes"
          />
          <p className="text-3xl  font-bold text-white">7000+</p>
          <p className="text-2xl font-bold text-gray-500">Students Enrolled</p>
        </div>
      </div>
    </>
  );
}

export default Card;
