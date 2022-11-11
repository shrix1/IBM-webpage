import Link from "next/link";
import React, { FC } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
// import shri from "../public/shri.webp";
// import Image from "next/image";

const Team: FC = () => {
  return (
    <>
      <h1 className="text-white text-center text-3xl mb-4 mt-2 font-sp">
        Meet the <span className="text-sky-500">Team</span>
      </h1>

      <div className="flex justify-center items-center ">
        <main className="border border-white/50 w-[350px] h-[180px] rounded-md  ">
          <section className="border border-sky-500/30 h-[120px] bg-white/30 ">
            <h1 className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp">
              Shriprasanna
            </h1>
          </section>

          <div className="flex gap-[50px]">
            <div
              className="w-[130px] relative border border-green-400 h-[130px] rounded-full 
          -top-[100px] left-5 overflow-hidden"
            >
              <img src="" alt="images" width={100} height={100} />
            </div>

            <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2">
              <Link href="/">
                <CiTwitter className="text-4xl -mt-1" />
              </Link>
              <Link href="/">
                <VscGithubAlt />
              </Link>
              <Link href="/">
                <SlSocialLinkedin />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Team;
