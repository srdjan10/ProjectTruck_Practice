import React from "react";
import { PiStrategyBold } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";

const About = () => {
  return (
    <section class="flex items-center xl:h-96 dark:bg-gray-800 font-monte">
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap items-center ">
          <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
            <div class="lg:max-w-md">
              <span class="text-xl font-semibold text-tahiti uppercase ">
                O nama
              </span>
              <h2 class="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                Kompanija
              </h2>
              <p class="mb-2 text-gray-600 dark:text-gray-400 ">
                TANASKOVIC DOO uspešno posluje na tržištu špedicije i
                međunarodnog transporta od 2001. godine. Konstantnim praćenjem
                tržišta i ulaganjem u razvoj logistike i ljudske resurse, od
                dvoje osnivača i jednog vozila...
              </p>
            </div>
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div class="flex mb-4">
              <span class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-tahiti rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                <PiStrategyBold />
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
              </span>
              <div>
                <h2 class="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                  Strategija kompanije
                </h2>
                <p class="text-base leading-loose text-gray-500 dark:text-gray-400">
                  Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text
                  .Lorem ipsum dor amet isopinus ipaino
                </p>
              </div>
            </div>
            <div class="flex mb-4">
              <span class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-tahiti rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                <LiaConnectdevelop />
              </span>
              <div>
                <h2 class="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                  Razvoj kompanije
                </h2>
                <p class="text-base leading-loose text-gray-500 dark:text-gray-400">
                  Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text
                  .Lorem ipsum dor amet isopinus ipaino
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
