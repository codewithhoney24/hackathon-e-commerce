import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="text-center py-10 px-4 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto">
      <h2 className="text-[#737373] font-bold text-[14px] sm:text-[16px] mt-5">WHAT WE DO</h2>
      <h1 className="text-[28px] sm:text-[40px] md:text-[58px] font-bold mt-3 text-[#252B42] leading-tight max-w-3xl mx-auto px-4 sm:px-2">
        Innovation tailored for you
      </h1>
      <p className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
        <span className="text-[#737373]">Team</span>
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 w-full">
        {/* First Image taking 2 columns */}
        <div className="md:col-span-2 w-full">
          <Image
            src="/team1.png"
            alt="team"
            height={530}
            width={700}
            className="w-full h-full object-cover rounded-md min-h-[300px]"
          />
        </div>

        {/* Remaining Images in 1 row */}
        <div className="md:col-span-1 w-full">
          <Image
            src="/team2.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-full object-cover rounded-md min-h-[250px] md:min-h-[auto]"
          />
        </div>
        <div className="md:col-span-1 w-full">
          <Image
            src="/team3.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-full object-cover rounded-md min-h-[250px] md:min-h-[auto]"
          />
        </div>
        <div className="md:col-span-1 w-full md:col-start-3">
          <Image
            src="/team4.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-full object-cover rounded-md min-h-[250px] md:min-h-[auto]"
          />
        </div>
        <div className="md:col-span-1 w-full">
          <Image
            src="/team5.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-full object-cover rounded-md min-h-[250px] md:min-h-[auto]"
          />
        </div>
      </div>
    </div>
  );
}
