import { fetchApiData, fetchOwnData } from "@/app/lib/fetchData";
import React, { useEffect, useState } from "react";
import ItemCard from "./card";

export default async function List() {
  const data = await fetchOwnData("product");
  console.log(data);

  return (
    <>
      <div>
        {data.map((item) => (
          <ItemCard title={item.title} price={item.price} />
        ))}
      </div>
    </>
  );
}
