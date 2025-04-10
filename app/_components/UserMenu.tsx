"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu: React.FC = function () {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md">
          <AiOutlineMenu onClick={() => setIsMenuOpen((prev) => !prev)} />
          <div className="hidden sm:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <ul className="flex flex-col cursor-pointer">
            <MenuItem label="Login" />
            <MenuItem label="Sign up" />
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
