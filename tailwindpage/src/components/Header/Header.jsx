import React from "react";

function Header() {
  return (
    <>
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://cdn.pixabay.com/photo/2024/02/05/09/31/man-8554081_1280.jpg"
          alt="desk"
        />
        <img
          className="w-full md:hidden "
          src="https://cdn.pixabay.com/photo/2020/01/20/05/51/bird-4779560_1280.jpg"
          alt="mobile"
        />
      </header>
    </>
  );
}

export default Header;
