import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* topbar */}
      <section class="container p-1 mx-auto sm:px-1 lg:px-1 drop-shadow-2xl flex-wrap">
        <span class="text-3xl p-1">
          <div class="font-monte flex justify-center text-sm flex-wrap">
            <b class="text-tahiti text-3xl lg:ml-1  sm:mx-auto sm:my-auto">
              <Link to="/">TANASKOVIC DOO</Link>
            </b>
            <span class="lg:flex lg:space-x-2 -mt-2 sm:p-1 text-tahiti flex pt-6">
              <FaPhone class="h-6 w-6 p-1 flex flex-auto" /> 062 123 456
              <MdOutlineMail class="h-6 w-6 p-1 flex flex-auto" />{" "}
              tanaskovic@gmail.com
            </span>
          </div>
        </span>
      </section>
      <hr class="w-auto border-4 border-[#006480f5]" />
    </div>
  );
};
export default Header;
