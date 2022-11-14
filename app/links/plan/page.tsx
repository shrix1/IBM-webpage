import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import sdelp from ".//sdelp.png";
import ma from ".//ma.png";

const PlanningPhase = () => {
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
          href="/links"
          title="phase-2"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          AllLinks
        </Link>
      </div>
      <h1 className="text-2xl text-sky-500 text-center">Planning Phase</h1>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 mt-7 ">
        {/*------ 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:flex-wrap md:w-[80%] md:gap-[30px]">
          {/* 2 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Milestones & Activity_list</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Customer_Journey_Map.pdhttps://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_planning/Milestones%26Activity_list.pdf"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={ma}
              alt="Milestones & Activity_list image"
              priority
              width={500}
              height={500}
            />
          </div>

          {/* 1 */}
          <div className="">
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Sprint_ Delivery_ Plan</h1>{" "}
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_2/Data_Flow_Diagrams.pdf"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl " />
              </Link>
            </div>

            <Image
              src={sdelp}
              alt="Sprint_ Delivery_ Plan. image"
              priority
              width={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlanningPhase;
