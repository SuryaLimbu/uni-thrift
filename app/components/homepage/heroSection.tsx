"use client";
import { Button, Link } from "@nextui-org/react";
import hero from "../../assets/hero/heroOne.png";
export default function HeroSection() {

  return (
    <>
      <section className=" grid grid-cols-2 items-center px-3 my-10">
        <div>
          <img src={(hero as HTMLImageElement).src} alt="Hero" className="" />
        </div>

        <div className="">
          <div className="mx-auto max-w-xl text-center z-40">
     
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Upgrade Your Uni Life
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Sell Your Second-Hand Stuff to Your Classmates!{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Turn your old textbooks and gadgets into cash while helping fellow
              students save!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as={Link} color="primary" href="#">
                Sell Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
