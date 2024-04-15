"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
}
export default function ItemCard(product: ProductInterface) {
  const { id, title, price, description } = product;

  return (
    <>
      <a href={`site/product/${id}`} className="group block">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="h-[350px] w-full object-cover sm:h-[450px] rounded-2xl"
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className=" font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {title}
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-500">
              {description}
            </p>
          </div>

          <p className="text-gray-900 font-semibold">£{price} </p>
        </div>
      </a>
    </>
  );
}
