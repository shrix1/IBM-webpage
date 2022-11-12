import kiran from ".//kiran.jpeg";
import ram from ".//ram.jpg";
import prav from ".//praveen.jpg";
import shris from ".//shri.jpg";

interface details {
  name: String;
  photo: any;
  twitter: String;
  github: String;
  linkedin: String;
}

const TeamDetails: details[] = [
  {
    name: "Shriprasanna",
    photo: shris,
    twitter: "https://twitter.com/shriprasanna007",
    github: "https://github.com/shrix1",
    linkedin: "https://www.linkedin.com/in/shriprasanna-b-62aab1208/",
  },
  {
    name: "Kiran Kumar",
    photo: kiran,
    twitter: "https://twitter.com/its_k_orb?t=WzN7x-uiIOQfCgv4jsgFsA&s=09",
    github: "https://github.com/kiran0022",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-k-61ba89203",
  },
  {
    name: "Praveen",
    photo: prav,
    twitter: "/",
    github: "/",
    linkedin: "https://www.linkedin.com/in/praveen-n-2b4004223",
  },
  {
    name: "Ram Sanjay",
    photo: ram,
    twitter: "https://twitter.com/ram_sanjay_8?t=_Pnt_oTBgkr42UR8hw6bgA&s=09",
    github: "https://github.com/RamSanjay08",
    linkedin: "https://www.linkedin.com/in/ram-sanjay-076769227",
  },
];

export { TeamDetails };
