"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { PiSwap } from "react-icons/pi";
import Link from "next/link";
import {fetchApiData} from "@/app/lib/fetchData";
import ItemCard from "@/app/components/card";
interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
}
export default function Page() {
  const [products, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(response);
      const data: ProductInterface[] = await fetchApiData("product");
      const latestData = data.slice(0, 4);
      // console.log(data);
      setProduct(latestData);
    };
    fetchData();
  }, []);

  const image =
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="">Products</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/product/1">Product Details</Link>
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid sm:grid-cols-2 items-center gap-4 py-6">
        <div>
          <Image
            src={image}
            className=" rounded-2xl"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold text-4xl">
              GG MARMONT LEATHER MINI CHAIN BAG
            </h1>
            <p className=" font-medium">£200 GBP</p>
            <p className=" font-medium">
              Posted by:{" "}
              <Link href={``} className="underline">
                Pramish Thapa
              </Link>
            </p>
          </div>

          <div className="flex gap-2 justify-center">
          {/* emailto:suryamankedem@gmail.com */}
            <Button color="primary" size="lg" className="w-full text-white">
              Buy Now
            </Button>

            <Button color="primary" variant="bordered" size="lg">
              Give
            </Button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div>
          <p>
            PRODUCT DETAILS Style ‎497985 CAO0G 1000 The GG Marmont mini chain
            bag has a structured shape in textured leather. The flap closure
            features a petite version of the Double G hardware. Black metal-free
            tanned leather Gold-toned hardware Double G Interior zipper and open
            pockets Six card slots Mirror Removable chain shoulder strap with
            60cm drop Snap button closure Weight: 0.40kg approximately W20cm x
            H12.5cm x D4cm Made in Italy The model is 179cm tall Fits up to
            iPhone Pro Max/Plus, Airpods, and lipstick Nylon lining
          </p>
        </div>
      </div>
      <div>
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
          {products.map((item) => (
            <ItemCard
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
