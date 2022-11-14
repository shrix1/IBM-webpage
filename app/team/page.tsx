import Link from "next/link";
import React, { FC } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";
import { TeamDetails } from "./TeamDetails";

const Team: FC = () => {
  return (
    <main className="md:h-[85vh] h-[90vh]">
      <h1 className="text-white text-center text-3xl mb-4 mt-2 font-sp md:text-4xl md:mt-3">
        Meet the <span className="text-sky-500">Team</span>
      </h1>

      <section className="flex justify-center items-center mt-10 ">
        <main className="flex flex-wrap  justify-evenly items-center w-[1000px] md:h-[60vh] ">
          {TeamDetails.map((i, idx) => {
            return (
              <div className="flex justify-around items-center group" key={idx}>
                <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md mt-[10px]">
                  <section className=" h-[120px] bg-white/40 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
                    <h1
                      className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp"
                      title="name"
                    >
                      {i.name}
                    </h1>
                  </section>

                  <div className="flex gap-[50px]">
                    <div
                      className="w-[135px] relative border border-white/40 h-[135px] rounded-full 
                      -top-[100px] left-5 overflow-hidden"
                    >
                      <Image
                        src={i.photo}
                        alt="images"
                        className="aspect-square transition-all duration-300"
                        priority
                      />
                    </div>

                    <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
                      <Link
                        // href={i.twitter}
                        href="https://twitter.com/shriprasanna007"
                        target="blank"
                        title="Twitter"
                      >
                        <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
                      </Link>
                      <Link
                        // href={i.github}
                        href="https://github.com/shrix1"
                        target="blank"
                        title="github"
                      >
                        <VscGithubAlt className=" hover:text-sky-500" />
                      </Link>
                      <Link
                        // href={i.linkedin}
                        href="https://www.linkedin.com/in/shriprasanna-b-62aab1208/"
                        target="blank"
                        title="github"
                      >
                        <SlSocialLinkedin className=" hover:text-sky-500" />
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            );
          })}
          ;
        </main>
      </section>
    </main>
  );
};

export default Team;
