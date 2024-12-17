import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className=" mt-8 flex justify-between items-center w-[80%] text-sm bg-black p-2 rounded-full text-white">
      <button className="py-4 px-8 text-white bg-primary rounded-full font-bold">
        Home
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        About
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Service
      </button>
      {/* Middle Logo */}
      <div className="flex justify-center items-center gap-1 mx-16 cursor-crosshair select-none">
        <div className="w-8 h-8 flex justify-center items-center bg-primary rounded-full text-white font-bold tracking-tighter text-base">
          AR
        </div>
        <p className="font-bold text-lg">DEVLET</p>
      </div>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Resume
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Project
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Contact
      </button>
    </div>
  );
};

export default NavBar;
