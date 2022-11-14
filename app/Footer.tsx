import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500/80 p-4 font-pop flex justify-around items-center">
      <Link href="/" className="text-2xl">
        IBM
      </Link>

      <h1>
        TEAM ID : <strong>PNT2022TMID39750</strong>
      </h1>
    </footer>
  );
};

export default Footer;
