import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ props }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div class="flex justify-center space-x-10 p-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        class="absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10"
      >
        {isOpen ? <IoMdClose /> : <FaBars />}
      </div>
      <ul
        class={` space-x-4 md:flex md:items-start md:pb-0 pb-12 absolute md:static bg-inhert z-[1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          isOpen
            ? "top-auto first-line: w-9/12 rounded-3xl bg-white p-8 ml-auto mr-auto h-auto border-x-4 border-x-tahiti text-left"
            : "top-[-490px]"
        }`}
      >
        {props.map((link) => (
          <li className="flex flex-row flex-wrap font-monteI text-tahiti justify-center">
            <a
              href={link.link}
              class="transform motion-safe:hover:scale-110 hover:text-red-600"
            >
              <b>{link.name}</b>
            </a>
          </li>
        ))}
      </ul>
    </div>
    /*     <div>
      <ul class="flex flex-row flex-wrap space-x-6 font-monteI text-tahiti justify-center">
        {props.map((item) => (
          <a
            href={item.link}
            class="transform motion-safe:hover:scale-110 hover:text-red-600"
          >
            <li>
              <b>{item.name}</b>
            </li>
          </a>
        ))}
      </ul>
    </div> */
  );
};

export default NavBar;
