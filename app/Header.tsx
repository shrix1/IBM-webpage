import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="p-2">
      <header
        className="flex justify-around text-white font-pop p-3 bg-white/20
      rounded"
      >
        <div>
          <h1 className="text-[26px] hover:text-black text-sky-400 font-bold">
            IBM
          </h1>
        </div>

        <div className="mt-2 group">
          <h1 className="text-2xl mb-2 lg:hidden">
            <AiOutlineMenu />
          </h1>

          <ul
            className="border border-white/50 bg-white/20 p-2 rounded absolute 
        flex-col group-hover:flex hidden transition-all lg:hidden
        duration-500 ease-out delay-100 w-[120px] text-sxl "
          >
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Team
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Works
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                All Links
              </li>
            </Link>
          </ul>
        </div>

        {/* iam braindead af (bad idea) */}
        <div className=" group hidden lg:inline">
          <ul className="flex gap-10 text-[18px]">
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Team
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Works
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                All Links
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
