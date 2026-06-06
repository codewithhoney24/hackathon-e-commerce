import React from "react";
import { FiPhone, FiMapPin, FiMail, FiArrowDown } from "react-icons/fi";
import Link from "next/link";

const Office = () => {
  const cards = [
    {
      icon: (
        <FiPhone className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />
      ),
      title1: "georgia.young@example.com",
      title2: "georgia.young@ple.com",
      description: "Get Support",
      button: "Submit Request",
      link: "#contact-form"
    },
    {
      icon: (
        <FiMapPin className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />
      ),
      title1: "123 Main Street, LA",
      title2: "California, USA",
      description: "Find Us",
      button: "View on Map",
      link: "https://www.google.com/maps"
    },
    {
      icon: <FiMail className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />,
      title1: "info@example.com",
      title2: "support@example.com",
      description: "Email Us",
      button: "Send Email",
      link: "mailto:info@example.com"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-16">
        <h3 className="text-[#252B42] hover:text-[#23A6F0] hover:text-3xl font-bold text-[14px] mb-4 transition-all">
          VISIT OUR OFFICE
        </h3>
        <h2 className="text-[#252B42] hover:text-[#23A6F0] font-bold text-[32px] sm:text-[40px] leading-tight transition-colors">
          We help small businesses <br className="hidden sm:block" />
          with big ideas
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "bg-[#252B42] text-white hover:text-[#23A6F0] py-16 sm:py-20" // Styling for center card
                : "bg-white text-[#252B42] py-12 sm:py-16"
            } shadow-md rounded-lg px-6 w-full mx-auto text-center flex flex-col justify-center items-center`}
          >
            <div className="flex justify-center items-center mb-4">
              {card.icon}
            </div>
            <p className="hover:text-[#2DC071] transition-colors font-bold text-[14px] mb-1">{card.title1}</p>
            <p className="hover:text-[#2DC071] transition-colors font-bold text-[16px] mb-4">{card.title2}</p>
            <p className="hover:text-[#2DC071] hover:text-xl transition-all font-bold text-[18px] mb-6">{card.description}</p>
            <Link
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : "_self"}
              className={`${
                index === 1
                  ? "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                  : "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
              } font-bold py-3 px-6 rounded-full transition-colors`}
            >
              {card.button}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-16 sm:mt-24 py-10 text-center">
        {/* Arrow Icon */}
        <div className="flex justify-center items-center">
          <FiArrowDown className="text-[#23A6F0] hover:text-[#2DC071] transition-colors text-[48px] transform -rotate-45" />
        </div>

        {/* Heading and Subheading */}
        <h3 className="text-[#252B42] hover:text-2xl hover:text-[#23A6F0] transition-all font-bold text-[16px] mt-4">
          WE CAN&apos;T WAIT TO MEET YOU
        </h3>
        <h2 className="text-[#252B42] hover:text-[#23A6F0] transition-colors font-bold text-[40px] sm:text-[58px] mt-3">
          Let&apos;s Talk
        </h2>

        {/* Button */}
        <Link href="/signup" className="bg-[#23A6F0] hover:text-lg transition-all text-[#FFFFFF] font-bold px-8 py-4 rounded-md mt-6 hover:bg-blue-500 inline-block">
          Try it free now
        </Link>
      </div>
    </div>
  );
};

export default Office;
