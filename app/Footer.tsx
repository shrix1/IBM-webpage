import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
   <footer className="bg-sky-500/80 p-4 font-pop flex justify-around items-center">
      <Link href="/" className="text-xl">
        Analytics for Hospitals <br className="md:hidden " />
        Health-Care Data
      </Link>

      <h1 className="flex flex-col">
        TEAM ID : <strong>PNT2022TMID39750</strong>
      </h1>
    </footer>
  );
};

export default Footer;
