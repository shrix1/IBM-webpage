import Image from "next/image";
import { FC } from "react";
import home from "../public/home.png";
import arth from "../public/arth.png";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";

const Home: FC = () => {
  return (
    <>
      <main className="flex justify-around flex-col items-center p-3 md:flex-row md:h-[80vh] md:mt-[-100px]">
        <div className="">
          <Image
            src={home}
            alt="anal-image"
            className="md:w-[700px] p-3"
            priority
          />
        </div>

        <div className="text-white font-pop">
          <h1 className="text-sky-500 text-xl text-center uppercase bg-white/20 p-2 rounded mb-2 font-bold tracking-[2px]">
            Analytics for Hospitals Health-Care Data
          </h1>

          <div className="mt-5 flex justify-center items-center flex-col text-[18px]">
            <h2>
              <span className=" text-white/70"> TECHNOLOGY</span> = Data
              Analytics
            </h2>
            <h2>
              <span className="text-white/70">TEAM ID</span> = PNT2022TMID39750
            </h2>
            <span className="text-[16px] underline text-sky-400 flex">
              <VscGithubAlt className="mr-2 mt-1" />
              <Link href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900">
                Repository Link
              </Link>
            </span>
          </div>
        </div>
      </main>
      {/* ------------------------------- */}
      <section className="p-3 text-white font-pop">
        <details className="mt-5">
          <summary
            className="text-sky-500 text-xl bg-white/20 p-2 rounded mb-2 border-b-[4px]
          border-white/30 font-semibold tracking-[1px]"
          >
            Project description
          </summary>

          <ul className=" list-inside list-disc flex flex-col gap-2 ">
            <li>
              Recent Covid-19 Pandemic has raised alarms over one of the most
              overlooked areas to focus: Healthcare Management.
            </li>
            <li>
              While healthcare management has various use cases for using data
              science, patient length of stay is one critical parameter to
              observe and predict if one wants to improve the efficiency of the
              healthcare management in a hospital.
            </li>
            <li>
              This parameter helps hospitals to identify patients of high
              LOS-risk (patients who will stay longer) at the time of admission.
            </li>
            <li>
              Once identified, patients with high LOS risk can have their
              treatment plan optimized to minimize LOS and lower the chance of
              staff/visitor infection.
            </li>
            <li>
              Also, prior knowledge of LOS can aid in logistics such as room and
              bed allocation planning. Suppose you have been hired as Data
              Scientist of Health Man – a not for profit organization dedicated
              to manage the functioning of Hospitals in a professional and
              optimal manner.
            </li>
          </ul>
        </details>

        <details className="mt-5 text-white font-pop">
          <summary
            className="text-sky-500 text-xl  bg-white/20 p-2 rounded mb-2 border-b-[4px]
          border-white/30 font-semibold tracking-[2px]"
          >
            Goal
          </summary>
          <p>
            The goal is to accurately predict the Length of Stay for each
            patient on case by case basis so that the Hospitals can use this
            information for optimal resource allocation and better functioning.
            The length of stay is divided into 11 different classes ranging from
            0-10 days to more than 100 days.
          </p>
        </details>

        <div className="mt-5 text-white font-pop">
          <h1
            className="text-sky-500 text-xl bg-white/20 p-2 rounded mb-2 border-b-[4px]
           border-white/30 font-semibold tracking-[1px]"
          >
            Technical Architecture
          </h1>
          <div>
            <Image
              src={arth}
              alt="arth image"
              priority
              className=" p-3 w-[500px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
