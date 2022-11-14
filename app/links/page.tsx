import Link from "next/link";
import React, { FC } from "react";

const AllLinks: FC = () => {
  return (
    <>
      <main className="min-h-[85vh] text-white p-3 font-sp">
        <h1 className="text-center text-sky-500 text-3xl">ALL LINKS</h1>
        <section className="flex items-center flex-col p-3 h-[100vh] md:h-[60vh] gap-[40px] ">
          {/* 1 */}
          <div
            className="border-2 w-[320px] min-h-[200px] max-h-[1000px] md:w-[1000px]
          flex justify-evenly items-center flex-col p-2 rounded md:flex-row md:min-h-[100px] md:max-h-[250px]"
          >
            <details>
              <summary>Kirankumar</summary>
              <div className="mt-2">
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/tree/main/Assessments/Team_Lead"
                    className="hover:underline text-sky-500"
                  >
                    - Assignments(1 to 4)
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/DATA_VISUALIZATION/Team_Leader/Data_visualization.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - Data Visulization
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_COGNOS_ANALYTICS/Team_Lead/IBM_COGNOS.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM cognos
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_CLOUD/Team_Lead/IBM_Cloud.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM Cloud
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Shriprasanna</summary>
              <div className="mt-2">
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/tree/main/Assessments/Team_Member_1"
                    className="hover:underline text-sky-500"
                  >
                    - Assignments(1 to 4)
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/DATA_VISUALIZATION/Team_Member_1/Data_visualization.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - Data Visulization
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_COGNOS_ANALYTICS/Team_Member_1/IBM_COGNOS_ANALYTICS_ACC.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM cognos
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_CLOUD/Team_Member_1/IBM_CLOUD_ACC.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM Cloud
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Praveen</summary>
              <div className="mt-2">
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/tree/main/Assessments/Team_Member_2"
                    className="hover:underline text-sky-500"
                  >
                    - Assignments(1 to 4)
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/DATA_VISUALIZATION/Team_Member_2/Data_visualization.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - Data Visulization
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_COGNOS_ANALYTICS/Team_Member_2/Praveen_N_510919104030%20(2).pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM cognos
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_CLOUD/Team_Member_2/IBM_Cloud_Account.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM Cloud
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Ram Sanjay</summary>
              <div className="mt-2">
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/tree/main/Assessments/Team_Member_3"
                    className="hover:underline text-sky-500"
                  >
                    - Assignments(1 to 4)
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/DATA_VISUALIZATION/Team_Member_3/Data_visualization.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - Data Visulization
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_COGNOS_ANALYTICS/Team_Member_3/IBM_Cognos_Analytics_Account.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM cognos
                  </Link>
                  <Link
                    href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/IBM_CLOUD/Team_Member_3/IBM_Cloud_Account.pdf"
                    className="hover:underline text-sky-500"
                  >
                    - IBM Cloud
                  </Link>
                </div>
              </div>
            </details>
          </div>

          {/* 4 */}
          <div className="border-2 w-[320px] p-2 rounded text-center">
            <details open>
              <summary>Project Design and Planning</summary>
              <div className="flex flex-col gap-1">
                <Link
                  href="/links/idea"
                  className="hover:underline text-sky-500"
                >
                  - Ideation Phase
                </Link>
                <Link href="/links/p1" className="hover:underline text-sky-500">
                  - Project Design phase-1
                </Link>
                <Link href="/links/p2" className="hover:underline text-sky-500">
                  - Project Design phase-2
                </Link>
                <Link
                  href="/links/plan"
                  className="hover:underline text-sky-500"
                >
                  - Project Planning
                </Link>
              </div>
            </details>
          </div>

          {/* 5*/}
          <div className="border-2 w-[320px] p-2 rounded text-center">
            <details open>
              <summary>Project_Development_Phase</summary>
              <div className="flex flex-col gap-1">
                <Link href="/links/s1" className="hover:underline text-sky-500">
                  - Sprint 1
                </Link>
                <Link href="/links/s2" className="hover:underline text-sky-500">
                  - Sprint 2
                </Link>
                <Link href="/links/s3" className="hover:underline text-sky-500">
                  - Sprint 3
                </Link>
                <Link href="/links/s4" className="hover:underline text-sky-500">
                  - Sprint 4
                </Link>
              </div>
            </details>
          </div>

          {/* 2 */}
          <div className="border-2 w-[320px] p-2 rounded text-center">
            <Link
              href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/blob/main/JIRA_SOFTWARE/JIRA_PROGRESS.pdf"
              className="hover:underline hover:text-sky-500"
            >
              Jira Software
            </Link>
          </div>

          {/* 3*/}
          <div className="border-2 w-[320px] p-2 rounded text-center">
            <Link
              href="https://github.com/IBM-EPBL/IBM-Project-17136-1659628900/tree/main/WORKING_WITH_DATASETS"
              className="hover:underline hover:text-sky-500"
            >
              Working with Datasets
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllLinks;
