import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import e1 from ".//e1.png";
import e2 from ".//e2.png";
import e3 from ".//e3.png";
import e4 from ".//e4.png";
import e5 from ".//e5.png";
import e6 from ".//e6.png";
import e7 from ".//e7.png";
import e8 from ".//e8.png";

const SprintTwo = () => {
  return (
    <>
      <main className="min-h-[85vh] text-white p-3 font-sp">
        <div className="flex justify-between">
          <Link
            href="/links/s1"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            Back
          </Link>
          <Link
            href="/links/s3"
            title="phase-2"
            className="text-[20px] bg-sky-200 rounded-md text-black hover:text-white hover:bg-sky-500 w-[90px] text-center h-[30px]"
          >
            sprint 3
          </Link>
        </div>
        <h1 className="text-2xl md:text-4xl text-sky-500 text-center mt-3">
          Sprint 2
        </h1>
        <div className="flex justify-center items-center hover:text-sky-500 underline">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_2/Sprint_2%20(IBM%20cognos%20analytics).pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 1"
            target="blank"
          >
            <VscGithubAlt className="mt-1" />
          </Link>
        </div>
        <div className="text-xl text-center mt-5 md:text-2xl">
          <h1>Thing need to be done here</h1>
          <ul className="text-[17px] md:text-xl text-sky-500 list-inside list-disc">
            <li>Data Exploration</li>
          </ul>
        </div>

        <div className=" flex justify-center items-center">
          <section className="flex flex-col md:flex-row mt-5 md:w-[100%] md:gap-[30px] gap-7 flex-wrap justify-center items-center">
            {/* 1 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>City code hospital by Department</h1>
              </div>

              <Image
                src={e1}
                alt="City code hospital by Department image"
                priority
                width={500}
              />
            </div>

            {/* 2 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Ward type for ward facility code</h1>
              </div>

              <Image
                src={e2}
                alt="Ward type for ward facility code image"
                priority
                width={500}
              />
            </div>

            {/* 3*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Type of Admission by Department</h1>
              </div>

              <Image
                src={e3}
                alt="Data Preparation image"
                priority
                width={500}
              />
            </div>

            {/* 4 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Ward facility code for city code Patient hierarchy</h1>
              </div>

              <Image
                src={e4}
                alt="Ward facility code for city code Patient hierarchy image"
                priority
                width={500}
              />
            </div>

            {/* 5 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Case id by Patient id</h1>
              </div>

              <Image
                src={e5}
                alt="Ward facility code for city code Patient hierarchy image"
                priority
                width={500}
              />
            </div>

            {/* 6 */}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Department compared to Hospital region code</h1>
              </div>

              <Image
                src={e6}
                alt="Department compared to Hospital region code image"
                priority
                width={500}
              />
            </div>

            {/* 8*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Ward type sized by Department</h1>
              </div>

              <Image
                src={e8}
                alt="Ward type sized by Department image"
                priority
                width={500}
              />
            </div>

            {/* 7*/}
            <div>
              <div className="flex  justify-between bg-slate-600 p-2 rounded">
                <h1>Vistors with patients by type of admission</h1>
              </div>

              <Image
                src={e7}
                alt="Vistors with patients by type of admission image"
                priority
                width={500}
              />
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center hover:text-sky-500 underline mt-5">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_2/Sprint_2%20(IBM%20cognos%20analytics).pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 1"
            target="blank"
          >
            <VscGithubAlt className="mt-1" /> For more Expolration check here
          </Link>
        </div>
        <div className="flex justify-center items-center hover:text-sky-500 underline mt-5">
          <Link
            href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/Project_Development_Phase/Sprint_2/Sprint_2(Python_jupiter).pdf"
            className="text-xl flex gap-1 "
            title="visit full sprint 1"
            target="blank"
          >
            <VscGithubAlt className="mt-1" /> Checking the Full Sprint Python
            Code
          </Link>
        </div>
      </main>
    </>
  );
};

export default SprintTwo;
