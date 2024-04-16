"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { PiNotePencil, PiTrash } from "react-icons/pi";
interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  productImageURL: string;
}
export default function ItemCard(product: ProductInterface) {
  const { id, title, price, description,productImageURL } = product;

  return (
    <>
      <a href={`/site/product/${id}`} className="group block">
        <img
          src={productImageURL}
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

          <p className="text-teal-900 font-semibold">£{price} </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <Link
            href={``}
            color="primary"
            className="underline flex items-center hover:text-teal-600"
          >
            <PiNotePencil className=" pr-2 w-6 h-6" />
            Modify
          </Link>
          <Link
            href={``}
            color="danger"
            className="underline flex items-center hover:text-red-600"
          >
            <PiTrash className=" pr-2 w-6 h-6" />
            Remove
          </Link>
        </div>
      </a>
    </>
  );
}
