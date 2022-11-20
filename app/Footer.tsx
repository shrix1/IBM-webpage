import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500/80 p-4 font-pop flex justify-around items-center">
      <div className="text-[15px] ">
        Page Views
        <img
          src="https://counter5.optistats.ovh/private/freecounterstat.php?c=h4yfhr55seaysl7fhyan67pydn6u85jq"
          title="free web counter"
          alt="free web counter"
        />
      </div>

      <h1 className="flex flex-col">
        TEAM ID : <strong>PNT2022TMID39750</strong>
      </h1>
    </footer>
  );
};

export default Footer;
