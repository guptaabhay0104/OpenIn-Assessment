import React from "react";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-[49px] w-full max-w-screen-lg px-4">
      <div className="w-auto">
        <h1 className="text-black dark:text-white font-bold text-[24px] sm:text-[24px]">
          Upload CSV
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={bellimg}
          alt="bell"
          className="w-[18px] h-[23px] dark:filter dark:invert"
        />
        <img
          src={userimg}
          alt="user"
          className="w-[30px] h-[30px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
