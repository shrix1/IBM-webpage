import Image from "next/image";
import { FC } from "react";


const Home: FC = () => {
  return (
    <div className=" lg:flex lg:justify-around lg:h-[85vh] lg:w-[100vw] grid grid-cols-1 h-[800px] gap-12 ml-10">
      <div className="self-center w-[450px]">
        {/* <Image src={homeBg} alt="Home background " className="aspect-square" priority/> */}
      </div>
      <div className="w-[450px] flex-col border self-center p-12">
        <h2 className="text-white text-center mt-5 text-lg">Project Script</h2>

        <p className="text-white mt-12 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi animi repellat, fugit, veritatis nihil illum eos quas numquam similique odio voluptas! Quia sequi culpa quod cumque voluptatum minima perspiciatis voluptas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores, sunt corrupti dolorem quisquam iusto, eaque dignissimos at earum recusandae et quae? Enim debitis vitae voluptates alias quos veniam dolores.
        </p>  
      </div>
    </div>
  );
};

export default Home;
