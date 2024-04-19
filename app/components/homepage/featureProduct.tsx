"use client";
import { fetchApiData } from "@/app/lib/fetchData";
import { useState, useEffect } from "react";

interface ProductInterface {
  id: string;
  name: string;
  price: string;
  description: string;
  productImageURL: string;
}
export default function FeatureProduct() {
  const [products, setProduct] = useState<ProductInterface[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(response);
      const data: ProductInterface[] = await fetchApiData("product");
      // Shuffle the array of products
      const shuffledData = shuffleArray(data);
      // Take the first two items
      const randomProducts = shuffledData.slice(0, 2);
      setProduct(randomProducts);
    };
    fetchData();
  }, []);

  // Function to shuffle array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-teal-900 sm:text-3xl">
                  Electronics
                </h2>

                <p className="mt-4 text-gray-500">
                  Electrify Your World: Explore the Latest in Electronics
                  Innovation!
                </p>
              </header>

              <a
                href="/site/productCollection"
                className="mt-8 inline-block rounded-xl border  bg-primary px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <li>
                  <a href="#" className="group block">
                    <img
                      src={product.productImageURL}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm text-teal-700">
                      £{product.price}
                      </p>
                    </div>
                  </a>
                </li>
              ))}

              {/* <li>
                <a href="#" className="group block">
                  <img
                    src={products[1].productImageURL}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      {products[1].name}
                    </h3>

                    <p className="mt-1 text-sm text-teal-700">
                      ${products[1].price}
                    </p>
                  </div>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
