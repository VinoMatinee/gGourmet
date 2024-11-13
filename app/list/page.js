import React from "react";
import GourmetItem from "../components/GourmetItem";
import data from "../utils/data";

export default function page() {
  return (
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        {data.restaurants.map((restaurants) => (
          <GourmetItem
            restaurants={restaurants}
            key={restaurants.REFINE_ZIPNO}
          ></GourmetItem>
        ))}
      </ul>
    </div>
  );
}
