import React from "react";
import truck1 from "../picture/trucks/Novi-MAN.jpg";
import truck2 from "../picture/trucks/Teherauto-Iveco-.jpg";
import truck3 from "../picture/trucks/Volvo.jpg";
import truck4 from "../picture/trucks/kamion-scania-.jpg";
import truck5 from "../picture/trucks/man.png";
import truck6 from "../picture/trucks/volvo-truck.jpg";

const ManyTrucks = () => {
  return (
    <div>
      <h2 class="font-monteI text-center text-tahiti pt-5">
        VOZNI PARK - TANASKOVIC DOO
      </h2>
      <p class="font-monteI text-center text-tahiti">
        neki od nasih kamiona...
      </p>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck3}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck4}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="Tanaskovic DOO"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={truck6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManyTrucks;
