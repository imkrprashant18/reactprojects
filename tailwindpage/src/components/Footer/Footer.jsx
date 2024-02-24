import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <img
            className="w-32 h-32"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
            alt=""
          />
          <p className="my-4">Email us: mitinfo@gmail.com</p>
          <img
            className="w-32 h-32"
            src="https://cdn-icons-png.flaticon.com/128/12622/12622863.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Mi X</h2>
          <div className="w-32 h-1 border-yellow-400 border-2 rounded-2xl my-2 "></div>
          <div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-yellow-400 border-2 rounded-2xl my-2 "></div>
          <div>
            <p>Mit X Labs</p>
            <p>Job Portal</p>
            <p>App Development</p>
            <p>Web Development</p>
            <p>Data Science</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-yellow-400 border-2 rounded-2xl my-2 "></div>
          <div>
            <p>Youtube</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
