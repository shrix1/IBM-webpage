import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import d1 from ".//d1.png";
import d2 from ".//d2.png";
import d3 from ".//d3.png";
import d4 from ".//d4.png";
import d5 from ".//d5.png";

const SprintOne = () => {
  return (
    <>
      <main className="min-h-[85vh] text-white p-3 font-sp">
        <div className="flex justify-between">
          <Link
            href="/links/s2"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            Back
          </Link>
          <Link
            href="/links/s4"
            title="phase-2"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            sprint 4
          </Link>
        </div>

        <h1 className="text-2xl md:text-4xl text-sky-500 text-center mt-3">
          Sprint 3
        </h1>

        <div className="flex justify-center items-center hover:text-sky-500 underline">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_3/Sprint_3.pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 1"
            target="blank"
          >
            <VscGithubAlt className="mt-1" />
          </Link>
        </div>

        <div className="text-xl text-center mt-5 md:text-2xl">
          <h1>Things need to be done here</h1>
          <ul className="text-[17px] md:text-xl text-sky-500 list-inside list-disc">
            <li>Dashboard Creation</li>
          </ul>
        </div>

        <div className=" flex justify-center items-center">
          <section className="flex flex-col md:flex-row mt-5 md:w-[80%] md:gap-[30px] gap-7 flex-wrap justify-center items-center">
            {/* 1 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Overview</h1>
              </div>

              <Image
                src={d1}
                alt="data Collection and Loading image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 2 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Department Analysis</h1>
              </div>

              <Image
                src={d2}
                alt="cleaning null values image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 3*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Loaction Wise Analysis</h1>
              </div>

              <Image
                src={d3}
                alt="Data Preparation image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 4 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Severity of illness </h1>
              </div>

              <Image
                src={d4}
                alt="Data Preparation image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 5 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Admission Deposit Analysis</h1>
              </div>

              <Image
                src={d5}
                alt="Data Preparation image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center hover:text-sky-500 underline mt-5">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_3/Sprint_3.pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 1"
            target="blank"
          >
            <VscGithubAlt className="mt-1" /> Checking the Full Sprint here
          </Link>
        </div>
      </main>
    </>
  );
};

export default SprintOne;
