import Link from "next/link";
import React, { FC } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";
import shri from ".//shri.jpg";
import kiran from ".//kiran.jpeg";
import praveen from ".//praveen.jpg";
import ram from ".//ram.jpg";

const Team: FC = () => {
  return (
    <main className="md:h-[90vh] h-[110vh]">
      <h1 className="text-white text-center text-3xl mb-4 mt-2 font-sp md:text-4xl md:mt-3">
        Meet the <span className="text-sky-500">Team</span>
      </h1>

      <section className="flex justify-center items-center mt-10 ">
        <main className="flex flex-wrap justify-evenly items-center w-[1000px] md:h-[60vh] ">
          <div className="flex justify-around items-center group flex-wrap gap-5">
            {/* 1 */}
            <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md mt-[10px]">
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
                    src={shri}
                    alt="images"
                    className="aspect-square transition-all duration-300"
                    priority
                  />
                </div>

                <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
                  <Link
                    href="https://twitter.com/shriprasanna007"
                    target="blank"
                    title="Twitter"
                  >
                    <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://github.com/shrix1"
                    target="blank"
                    title="github"
                  >
                    <VscGithubAlt className=" hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shriprasanna-b-62aab1208/"
                    target="blank"
                    title="github"
                  >
                    <SlSocialLinkedin className=" hover:text-sky-500" />
                  </Link>
                </div>
              </div>
            </main>

            {/* 2 */}
            <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md mt-[10px]">
              <section className=" h-[120px] bg-white/40 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <h1
                  className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp"
                  title="name"
                >
                  KiranKumar
                </h1>
              </section>

              <div className="flex gap-[50px]">
                <div
                  className="w-[135px] relative border border-white/40 h-[135px] rounded-full 
                      -top-[100px] left-5 overflow-hidden"
                >
                  <Image
                    src={kiran}
                    alt="images"
                    className="aspect-square transition-all duration-300"
                    priority
                  />
                </div>

                <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
                  <Link
                    href="https://twitter.com/its_k_orb?t=WzN7x-uiIOQfCgv4jsgFsA&s=09"
                    target="blank"
                    title="Twitter"
                  >
                    <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://github.com/kiran0022"
                    target="blank"
                    title="github"
                  >
                    <VscGithubAlt className=" hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kiran-kumar-k-61ba89203"
                    target="blank"
                    title="github"
                  >
                    <SlSocialLinkedin className=" hover:text-sky-500" />
                  </Link>
                </div>
              </div>
            </main>

            {/* 3  */}
            <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md mt-[10px]">
              <section className=" h-[120px] bg-white/40 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <h1
                  className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp"
                  title="name"
                >
                  Praveen
                </h1>
              </section>

              <div className="flex gap-[50px]">
                <div
                  className="w-[135px] relative border border-white/40 h-[135px] rounded-full 
                      -top-[100px] left-5 overflow-hidden"
                >
                  <Image
                    src={praveen}
                    alt="images"
                    className="aspect-square transition-all duration-300"
                    priority
                  />
                </div>

                <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
                  <Link
                    href="https://twitter.com/"
                    target="blank"
                    title="Twitter"
                  >
                    <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://github.com/praveendecode"
                    target="blank"
                    title="github"
                  >
                    <VscGithubAlt className=" hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/praveen-n-2b4004223"
                    target="blank"
                    title="github"
                  >
                    <SlSocialLinkedin className=" hover:text-sky-500" />
                  </Link>
                </div>
              </div>
            </main>

            {/* 4 */}
            <main className="border-2 border-white/50 w-[350px] h-[180px] rounded-md mt-[10px]">
              <section className=" h-[120px] bg-white/40 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <h1
                  className="text-white float-right mt-[79px] mr-6 text-2xl font-medium font-sp"
                  title="name"
                >
                  RamSanjay
                </h1>
              </section>

              <div className="flex gap-[50px]">
                <div
                  className="w-[135px] relative border border-white/40 h-[135px] rounded-full 
                      -top-[100px] left-5 overflow-hidden"
                >
                  <Image
                    src={ram}
                    alt="images"
                    className="aspect-square transition-all duration-300"
                    priority
                  />
                </div>

                <div className="text-white mt-4 flex text-[28px] gap-[20px] mr-2 transition-all duration-500">
                  <Link
                    href="https://twitter.com/ram_sanjay_8?t=_Pnt_oTBgkr42UR8hw6bgA&s=09"
                    target="blank"
                    title="Twitter"
                  >
                    <CiTwitter className="text-4xl -mt-1 hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://github.com/RamSanjay08"
                    target="blank"
                    title="github"
                  >
                    <VscGithubAlt className=" hover:text-sky-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ram-sanjay-076769227"
                    target="blank"
                    title="github"
                  >
                    <SlSocialLinkedin className=" hover:text-sky-500" />
                  </Link>
                </div>
              </div>
            </main>
          </div>
          ;
        </main>
      </section>
    </main>
  );
};

export default Team;
