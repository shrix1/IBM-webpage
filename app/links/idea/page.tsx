import Link from "next/link";
import React from "react";
import Image from "next/image";
import brain from ".//brain.png";
import emp from ".//emp.png";
import lit from ".//lit.png";
import prob from ".//prob.png";
import { VscGithubAlt } from "react-icons/vsc";

const ProjectImage = () => {
  return (
    <main className="min-h-[100vh] p-2 text-white font-sp max-h-[300vh]">
      <div className="flex justify-between">
        <Link
          href="/links"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Back
        </Link>
        <Link
          href="/links/p1"
          title="phase-1"
          className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
        >
          Next
        </Link>
      </div>
      <h1 className="text-2xl text-sky-500 text-center">Ideation Phase</h1>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 mt-7 ">
        {/*------ 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:flex-wrap md:w-[80%] md:gap-[30px]">
          {/* 2 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Empathy_map</h1>{" "}
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Ideation_Phase/Empathy_map/EMPATHY.pdf"
                target="blank"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={emp}
              alt="Empathy_map image"
              priority
              width={500}
              height={500}
            />
          </div>

          {/* 3 */}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Literature_survey</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Ideation_Phase/Literature_survey/Literature_%20Survey.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={lit}
              alt="Literature_survey image"
              priority
              width={500}
            />
          </div>

          {/* 1 */}
          <div className="">
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Brainstrom_and_idea_template</h1>{" "}
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Ideation_Phase/Brainstroming_and_idea_template/Brainstrom_and_idea_template.pdf"
                title="see full pdf in github"
                target="blank"
              >
                <VscGithubAlt className="text-2xl " />
              </Link>
            </div>

            <Image
              src={brain}
              alt="Brainstrom_and_idea_template image"
              priority
              width={500}
            />
          </div>

          {/* 4*/}
          <div>
            <div className="flex  justify-between bg-slate-600 p-2 rounded">
              <h1>Problem_Statement</h1>
              <Link
                href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Design_and_Planning/Ideation_Phase/Problem_Statement/Problem_Statement.pdf"
                target="blank"
                title="see full pdf in github"
              >
                <VscGithubAlt className="text-2xl" />
              </Link>
            </div>

            <Image
              src={prob}
              alt="Problem_Statement image"
              priority
              width={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectImage;
