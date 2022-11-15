import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import dc from ".//dc.png";
import clean from ".//clean.png";
import dp from ".//dp.png";

const SprintOne = () => {
  return (
    <>
      <main className="min-h-[95vh] text-white p-3 font-sp">
        <div className="flex justify-between">
          <Link
            href="/links"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            Back
          </Link>
          <Link
            href="/links/s2"
            title="phase-2"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            sprint 2
          </Link>
        </div>

        <h1 className="text-2xl md:text-4xl text-sky-500 text-center mt-3">
          Sprint 1
        </h1>

        <div className="flex justify-center items-center hover:text-sky-500 underline">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_1/Sprint_1.pdf"
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
            <li>Data Collection</li>
            <li>Data Loading</li>
            <li>Cleaning Data</li>
            <li>Data Preparation</li>
          </ul>
        </div>

        <div className=" flex justify-center items-center">
          <section className="flex flex-col md:flex-row mt-5 md:w-[80%] md:gap-[30px] gap-7 ">
            {/* 1 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Data Collecting and Loading</h1>
              </div>

              <Image
                src={dc}
                alt="data Collection and Loading image"
                priority
                width={500}
              />
            </div>

            {/* 2 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Cleaning Null values</h1>
              </div>

              <Image
                src={clean}
                alt="cleaning null values image"
                priority
                width={500}
              />
            </div>

            {/* 3*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Data Preparation</h1>
              </div>

              <Image
                src={dp}
                alt="Data Preparation image"
                priority
                width={500}
              />
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center hover:text-sky-500 underline mt-5">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_1/Sprint_1.pdf"
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
