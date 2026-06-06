import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 sm:py-16">
      {/* Text Section */}
      <div className="w-full text-center md:text-left md:w-1/2">
        <h3 className="text-[#252B42] hover:text-pink-500 hover:text-4xl transition-all font-bold text-[16px] mb-6">CONTACT US</h3>
        <h1 className="text-[#252B42] hover:text-pink-500 transition-colors font-bold text-[32px] sm:text-[48px] md:text-[58px] leading-tight mb-6">
          Get in touch <br className="hidden sm:block" />
          today!
        </h1>
        <p className="text-[#737373] hover:text-pink-500 hover:text-2xl transition-all text-[16px] sm:text-[18px] md:text-[20px] mt-5 max-w-sm mx-auto md:mx-0">
          We know how large objects will act, <br className="hidden sm:block" />
          but things on a small scale
        </p>

        {/* Phone and Fax Section */}
        <div className="text-[#252B42] hover:text-pink-500 transition-colors font-bold text-[20px] sm:text-[24px] mt-8">
          <h3><a href="tel:+451215215" className="hover:underline">Phone: +451 215 215</a></h3>
          <h3 className="mt-2 sm:mt-5">Fax: +451 215 215</h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-8">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-500 transition-colors text-[27px]"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-pink-500 transition-colors text-[27px]"
          >  
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-600 transition-colors text-[27px]"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-700 transition-colors text-[27px]"
          >
            <Image src="/companies.png" alt="fb" width={27} height={27} className="hidden" /> {/* Placeholder for logic, keeping it simple */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/contactus.png"
          alt="contact us"
          height={600}
          width={415}
          className="w-full max-w-[415px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ContactUs;
