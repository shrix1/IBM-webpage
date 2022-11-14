import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import sa from ".//sa.png";
import probsm from ".//probsm.png";
import probsf from ".//probsf.png";

const phaseOne = () => {
  return (
    <main className="min-h-[100vh] p-2 text-white font-sp max-h-[300vh]">
      <div className="flex justify-between">
        <Link
          href="/links/idea"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Back
        </Link>
        <Link
          href="/links/p2"
          title="phase-2"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Next
        </Link>
      </div>
      <h1 className="text-2xl text-sky-500 text-center">
        Project Design Phase-1
      </h1>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 mt-7 ">
        {/*------ 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:flex-wrap md:w-[80%] md:gap-[30px]">
          {/* 2 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Proposed_Solution</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_1/Proposed_Solution/Proposed_Solution.pdf"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={probsm}
              alt="Proposed_Solution image"
              priority
              width={500}
              height={500}
            />
          </div>

          {/* 1 */}
          <div className="">
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Solution_Architecture</h1>{" "}
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Ideation_Phase/Brainstroming_and_idea_template/Brainstrom_and_idea_template.pdf"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl " />
              </Link>
            </div>

            <Image
              src={sa}
              alt="Solution_Architecture image"
              priority
              width={500}
            />
          </div>

          {/* 3 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Proposed_Solution_fit</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Project_Design_Phase_1/Proposed_Solution_fit/Problem_Solution_Fit.pdf"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={probsf}
              alt="Proposed_Solution_fit image"
              priority
              width={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default phaseOne;
