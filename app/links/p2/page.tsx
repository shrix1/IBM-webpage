import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import cjmap from ".//cjmap.png";
import dflow from ".//dflow.png";
import fr from ".//fr.png";
import ta from ".//ta.png";

const PhaseTwo = () => {
  return (
    <main className="min-h-[100vh] p-2 text-white font-sp max-h-[300vh]">
      <div className="flex justify-between">
        <Link
          href="/links/p1"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Back
        </Link>
        <Link
          href="/links/plan"
          title="phase-2"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Next
        </Link>
      </div>
      <h1 className="text-2xl text-sky-500 text-center">
        Project Design Phase-2
      </h1>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 mt-7 ">
        {/*------ 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:flex-wrap md:w-[80%] md:gap-[30px]">
          {/* 2 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Customer_Journey_Map</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Customer_Journey_Map.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={cjmap}
              alt="Customer_Journey_Map image"
              priority
              width={500}
              height={500}
            />
          </div>

          {/* 1 */}
          <div className="">
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Data_Flow_Diagrams</h1>{" "}
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Data_Flow_Diagrams.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl " />
              </Link>
            </div>

            <Image
              src={dflow}
              alt="Data_Flow_Diagrams image"
              priority
              width={500}
            />
          </div>

          {/* 3 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Functional_Requirement</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Functional_Requirement.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={fr}
              alt="Functional_Requirement image"
              priority
              width={500}
            />
          </div>

          {/* 4 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Technology_Architecture</h1>

              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Technology_Architecture.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={ta}
              alt="Technology_Architecture image"
              priority
              width={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhaseTwo;
