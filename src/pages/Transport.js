import React from "react";
import pictureBalkan from "../picture/Western_Balkans.png";

const Transport = () => {
  return (
    <div>
      <div class="font-monte">
        <h4 class="text-justify p-2">
          Dugi niz godina se bavimo uspešno pružanjem usluga međunarodnog
          transporta roba na relacijama između Srbije i svih evropskih zemalja .
          Utovare za međunarodni drumski transport realizujemo: Šleperima sa
          ceradama (komplet: tegljač i poluprikolica), Šleperima hladnjačama
          (jednotemepraturnim i dvotemperaturnim), Solo kamionima (nadogradnja:
          cerade, furgoni i hladnjače), Kombi vozilima (nadogradnja: cerade,
          furgoni i hladnjače), Pikap vozilima (furgoni i hladnjače).
        </h4>
        <span>
          {" "}
          <div class="md:shrink-0 ml-auto mr-auto">
            <img
              class="object-cover ml-auto mr-auto h-96 w-auto md:object-center rounded-lg shadow-md p-3 border-x-4 border-x-tahiti"
              src={pictureBalkan}
              alt="Tanaskovic DOO"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Transport;
