import React from "react";
import data from "../utils/data";

export default function GourmetItem({ restaurants }) {
  return (
    <li>
      <a
        href={`/restaurants/${restaurants.REFINE_ZIPNO}`}
        class="relative block group"
      >
        <img
          src="https://source.unsplash.com/collection/1346951/300x400"
          class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80 rounded-lg"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 class="text-xl font-semibold text-white">
            {restaurants.REPRSNT_FOOD_NM}
          </h3>

          <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            {restaurants.RESTRT_NM}
          </span>
        </div>
      </a>
    </li>
  );
}
