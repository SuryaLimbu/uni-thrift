"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "../card";
// import fetchApiData from "@/app/lib/fetchData";
import { fetchApiData } from "@/app/lib/fetchData";

interface ProductInterface {
  title: string;
  price: number;
}

export default function CardLayout() {
  const [products, setProduct] = useState<ProductInterface[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      // console.log(response);
      const data = fetchApiData("product");
      console.log(data);
      setProduct(await data);
    };
    fetchData();
  }, []);

  // console.log("list of products", products);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {products.map((item) => (
          <ItemCard title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}
