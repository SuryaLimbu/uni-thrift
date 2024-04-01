"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "../card";

interface ProductInterface {
  title: string;
  price: number;
}

export default function CardLayout() {
  const [products, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API}products`);
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, []);

    const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: 5.50,
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: 3.00,
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: 10.00,
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: 5.30,
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: 15.70,
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: 8.00,
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: 7.50,
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: 12.20,
    },
  ];

  // console.log("list of products", products);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item) => (
          <ItemCard title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}
