import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import r1 from ".//r1.png";
import r2 from ".//r2.png";
import r3 from ".//r3.png";

const SprintOne = () => {
  return (
    <>
      <main className="min-h-[85vh] text-white p-3 font-sp">
        <div className="flex justify-between">
          <Link
            href="/links/s3"
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

        <h1 className="text-2xl md:text-4xl text-sky-500 text-center mt-3">
          Sprint 4
        </h1>

        <div className="flex justify-center items-center hover:text-sky-500 underline">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_4/Sprint_4_Report.pdf"
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
            <li>Report Creation</li>
            <li>Story Creation</li>
          </ul>
        </div>

        <div className=" flex justify-center items-center">
          <section className="flex flex-col md:flex-row mt-5 md:w-[80%] md:gap-[30px] gap-7 flex-wrap justify-center items-center">
            {/* 1 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Report 1</h1>
              </div>

              <Image
                src={r1}
                alt="Report 1 image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 2 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Report 2</h1>
              </div>

              <Image
                src={r2}
                alt="Report 2 image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>

            {/* 3*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Report 3</h1>
              </div>

              <Image
                src={r3}
                alt="Report 3 image"
                priority
                width={500}
                className="md:w-[600px]"
              />
            </div>
          </section>
        </div>

        {/* story */}
        <div className="mt-8 flex justify-center items-center flex-col gap-6">
          <h1 className="text-2xl md:text-4xl text-sky-500  ">Story</h1>
          {/* video link */}
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/r9WP_yAaqH4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="md:w-[600px] md:h-[400px]"
          ></iframe>
        </div>

        <div className="flex justify-center items-center hover:text-sky-500 underline mt-5">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_4/Sprint_4_Report.pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 4"
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
