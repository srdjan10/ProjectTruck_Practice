import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";

const Footer = ({ props }) => {
  const mydate = new Date().getFullYear();
  return (
    <section class="flex flex-col h-screen justify-end font-monte">
      <div class="w-full bg-gray-100 border-t dark:border-gray-900 py-2 dark:bg-gray-900 ">
        <div class="max-w-6xl mx-auto">
          <div class="justify-center flex-1 max-w-6xl px-4 py-2 mx-auto lg:py-0">
            <div class="flex flex-wrap py-4 -mx-3">
              <div class="w-full px-4 mb-7 md:w-1/2 lg:w-4/12 lg:mb-0">
                <h2 class="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400 ">
                  Linkovi
                </h2>
                <div class="w-16 mb-2 border-b-2 border-blue-300 dark:border-gray-600"></div>
                <ul>
                  {props?.map((item) => (
                    <a
                      href={item.link}
                      class="transform motion-safe:hover:scale-110 hover:text-red-600"
                    >
                      <li class="mb-2">
                        <b class="inline-block text-base font-normal dark:text-gray-400">
                          {item.name}
                        </b>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div class="w-full px-4 mb-7 lg:mb-0 md:w-1/4 lg:w-2/12"></div>
              <div class="w-full px-4 mb-2 lg:mb-0 md:w-1/4 lg:w-4/12">
                <h2 class="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                  Kontakt informacije
                </h2>
                <div class="w-16 mb-4 border-b-2 border-blue-300 dark:border-gray-600"></div>
                <p class="flex items-center mb-2">
                  <SiGooglemaps />
                  <span class="text-gray-800 dark:text-gray-400">
                    Čačak, Srbija
                  </span>
                </p>
                <p class="flex items-center mb-2">
                  <FaStreetView />
                  <span class="text-gray-800 dark:text-gray-400">
                    ul:Darka Darkovica br:3, Cacak
                  </span>
                </p>
                <p class="flex items-center mb-4 ">
                  <MdOutlineMail />
                  <span class="text-gray-800 dark:text-gray-400">
                    tanaskovic@gmail.com
                  </span>
                </p>
                <p class="flex items-center mb-4">
                  <FaPhone />
                  <span class="text-gray-800 dark:text-gray-400">
                    064-123-123
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between px-4 mb-4">
            <div class="flex flex-wrap">
              <div class="w-full py-1 lg:w-auto lg:py-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-6 bg-tahiti font-monte ">
        <div class="flex flex-wrap items-center justify-between max-w-6xl gap-4 mx-auto">
          <div class="text-white">
            {" "}
            © Copyright {mydate} . All Rights Reserved
          </div>
          <div class="flex items-center gap-3"></div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
