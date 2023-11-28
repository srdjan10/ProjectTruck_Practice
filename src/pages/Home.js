import React from "react";
import pic1 from "../picture/truck1.png";

const Home = () => {
  return (
    <div class="font-monte">
      <div class="md:flex items-center">
        <div class="md:shrink-0">
          <img
            class="object-cover ml-6 h-64 w-auto md:object-center"
            src={pic1}
            alt="Tanaskovic DOO"
          />
        </div>
        <div class="p-2 h-64">
          <p class="mt-2 text-slate-500 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
