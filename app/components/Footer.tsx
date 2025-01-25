import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 ">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Footer Content */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center mt-20 ">
          <div className="border-2 rounded-xl w-[352px] relative  py-4 px-3 block lg:hidden  ">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-[70px] h-[70px] absolute -top-9 left-28"
              width={70}
              height={70}
            />
            <p className="text-[34px] text-white mt-6">
              <span className="text-[#0796EF]">DEEP</span> NET
              <span className="text-[34px] text-[#857878]"> SOFT</span>
            </p>

            <div className="flex justify-center gap-4  mt-1items-start text-center  text-[#808080]">
              <TbBrandFacebook />
              <FiTwitter />
              <LuYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className="border-2 rounded-xl w-[352px] py-4  ">
            <h3 className="text-[16px] font-semibold text-blue-500 mb-4">
              CONNECT WITH US
            </h3>

            <p className="flex justify-center items-center text-center gap-2 text-[#857777]">
              <FaPhone className="text-[#b0904f]" />

              <p className=" text-center">&nbsp; +91 9567843340</p>
            </p>
            <p className="flex justify-center items-center text-center mt-1 gap-2 text-[#857777]">
              <FaEnvelope className="text-[#b0904f]" />

              <p className=" text-center">&nbsp; info@deepnetsoft.com</p>
            </p>
          </div>

          <div className="border-2 rounded-xl w-[352px] relative  py-4 px-3 hidden lg:block ">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-[50px] h-[40px] sm:w-12 sm:h-12 lg:w-[70px] lg:h-[70px] absolute -top-9 left-36"
              width={70}
              height={70}
            />
            <p className="text-[34px] text-white mt-6">
              <span className="text-[#0796EF]">DEEP</span> NET
              <span className="text-[34px] text-[#857878]"> SOFT</span>
            </p>

            <div className="flex justify-center gap-4  mt-1items-start text-center  text-[#808080]">
              <TbBrandFacebook />
              <FiTwitter />
              <LuYoutube />
              <FaInstagram />
            </div>
          </div>

          <div className="border-2 rounded-xl w-[352px]  py-4  ">
            <h3 className="text-[16px] font-semibold text-blue-500 mb-4">
              FIND US
            </h3>

            <p className="flex justify-center items-start text-center  gap-2 text-[#857777]">
              <FaMapMarkerAlt className="text-[#b0904f] mt-1" />

              <p className=" text-center">
                &nbsp; First Floor, Geo Infopark,<br></br> Infopark EXPY,
                Kakkanad
              </p>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className=" bg-[#171717] w-full lg:mt-10 mt-3 lg:pt-2 lg:gap-48 py-2 flex lg:flex-row  flex-wrap  lg:justify-around justify-center  items-center text-[12px] text-[#857777]">
        <p className="hidden lg:block">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </p>
        <p className="block lg:hidden">
          © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
        </p>
        <div className="flex space-x-4 lg:mt-4">
          <a className="">Term & Condition</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
