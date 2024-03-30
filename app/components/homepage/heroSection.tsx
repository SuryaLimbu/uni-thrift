import { Button, Link } from "@nextui-org/react";
import hero from "../../assets/hero/heroOne.png";
export default function HeroSection() {
  return (
    <>
      <section className=" grid grid-cols-2 items-center px-3">
        <div>
          <img
            src={(hero as HTMLImageElement).src}
            alt="Hero"
            className=""
          />
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center z-40">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Student Bargain Bonanza:
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Buy, Sell, and Swap Second-Hand Goodies Today!{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Clean up your clutter, make some money, and find great deals on
              campus essentials!
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
