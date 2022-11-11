import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header: FC = () => {
  return (
    <nav className="p-2">
      <header
        className="flex justify-around text-white font-pop p-3 bg-white/20
      rounded"
      >
        <Link href="/" title="Home">
          <h1 className="text-[26px] hover:text-black text-sky-400 underline">
            IBM
          </h1>
        </Link>

        <div className="mt-1 group">
          <h1 className="text-2xl mb-2 lg:hidden border border-white/20 p-1 rounded">
            <AiOutlineMenu />
          </h1>

          <ul
            className="border border-white/50 bg-white/20 p-2 rounded absolute 
        flex-col group-hover:flex hidden transition-all lg:hidden
        duration-500 ease-out delay-100 w-[120px] text-sxl"
          >
            <Link href="/team" title="Team">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Team
              </li>
            </Link>
            <Link href="/links" title="AllLinks">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                All Links
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Works
              </li>
            </Link>
          </ul>
        </div>

        {/* iam braindead af */}
        <div className=" group hidden lg:inline">
          <ul className="flex gap-10 text-[18px]">
            <Link href="/team" title="Team">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Team
              </li>
            </Link>
            <Link href="/links" title="AllLinks">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                All Links
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black hover:bg-white/75 rounded p-1">
                Works
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </nav>
  );
};

export default Header;
