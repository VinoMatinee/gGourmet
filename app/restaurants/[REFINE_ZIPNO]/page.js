import React from "react";
import data from "@/app/utils/data";

export default function RestaurantsDetail({ restaurants, REFINE_ZIPNO }) {
  if (!restaurants) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {restaurants.RESTRT_NM}
          </h2>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const { REFINE_ZIPNO } = params;
  const restaurants = data.restaurants.find(
    (x) => x.REFINE_ZIPNO === REFINE_ZIPNO
  );

  return {
    props: { restaurants, REFINE_ZIPNO },
  };
}
