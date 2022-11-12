import Link from "next/link";
import React, { FC } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import mee from ".//shri.webp";
import Image from "next/image";

const Team: FC = () => {
  return (
    <main className="min-h-[85vh]">
      <h1 className="text-white text-center text-3xl mb-4 mt-2 font-sp">
        Meet the <span className="text-sky-500">Team</span>
      </h1>

      <div className="flex justify-center items-center group">
        <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md ">
          <section className=" h-[120px] bg-white/40 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <h1
              className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp"
              title="name"
            >
              Shriprasanna
            </h1>
          </section>

          <div className="flex gap-[50px]">
            <div
              className="w-[135px] relative border border-white/40 h-[135px] rounded-full 
          -top-[100px] left-5 overflow-hidden"
            >
              <Image
                src={mee}
                alt="images"
                className="aspect-square grayscale-[90%] group-hover:grayscale-0 transition-all duration-300"
                priority
              />
            </div>

            <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
              <Link href="/" target="blank" title="Twitter">
                <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
              </Link>
              <Link href="/" target="blank" title="github">
                <VscGithubAlt className=" hover:text-sky-500" />
              </Link>
              <Link href="/" target="blank" title="github">
                <SlSocialLinkedin className=" hover:text-sky-500" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Team;
