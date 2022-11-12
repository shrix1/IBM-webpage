import Image from "next/image";
import { FC } from "react";
import home from "../public/home.png";

const Home: FC = () => {
  return (
    <div className="flex justify-around flex-col items-center p-3">
      <Image src={home} alt="anal-image" className="md:w-[390px] p-3 " />
      <div className="text-white font-pop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis
        at nam minus ipsum beatae quas veniam alias itaque et quidem odio, animi
        consectetur ab nisi voluptatum debitis inventore pariatur?
      </div>
      {/* <h1 className="text-white">HomePage</h1> */}
    </div>
  );
};

export default Home;
