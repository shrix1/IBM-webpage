import Link from "next/link";
import React, { FC } from "react";

const AllLinks: FC = () => {
  return (
    <>
      <h1 className="text-white">IN PROGRESS</h1>
      <main className="min-h-[85vh] text-white p-3 font-sp">
        <h1 className="text-center text-sky-500 text-3xl">ALL LINKS</h1>
        <section className="flex justify-between items-center flex-col md:flex-row p-3 h-[100vh]">
          {/* 1 */}
          <div className="border-2 w-[320px] h-[200px] flex justify-evenly items-center flex-col p-2 rounded">
            <h1 className="text-2xl">Assessments</h1>
            <div className="flex justify-between items-center flex-wrap w-[250px] gap-4">
              <details>
                <summary>Kirankumar</summary>
                <p>
                  <div className="flex gap-5">
                    <Link href="/">1</Link>
                    <Link href="/"> 2</Link>
                    <Link href="/"> 3</Link>
                    <Link href="/"> 4</Link>
                  </div>
                </p>
              </details>

              <details>
                <summary>Shriprasanna</summary>
                <p>
                  <div className="flex gap-5">
                    <Link href="/">1</Link>
                    <Link href="/"> 2</Link>
                    <Link href="/"> 3</Link>
                    <Link href="/"> 4</Link>
                  </div>
                </p>
              </details>

              <details>
                <summary>Praveen</summary>
                <p>
                  <div className="flex gap-5">
                    <Link href="/">1</Link>
                    <Link href="/"> 2</Link>
                    <Link href="/"> 3</Link>
                    <Link href="/"> 4</Link>
                  </div>
                </p>
              </details>

              <details>
                <summary>RamSanjay</summary>
                <p>
                  <div className="flex gap-5">
                    <Link href="/">1</Link>
                    <Link href="/"> 2</Link>
                    <Link href="/"> 3</Link>
                    <Link href="/"> 4</Link>
                  </div>
                </p>
              </details>
            </div>
          </div>

          {/* 2 */}
        </section>
      </main>
    </>
  );
};

export default AllLinks;
