import React from "react";
import { sliderData } from "./sliderData";
import Image from "next/image";
import Link from "next/link";

function Carousel() {
  return (
    <div className="my-20">
      <div className="font-semibold sm:text-4xl text-3xl leading-tight">
        Shop by Top categories
      </div>
      <div
        className="grid grid-flow-col gap-4 overflow-x-auto py-12 scrollbar-hidden"
        style={{
          gridTemplateColumns: "repeat(6, 335px)",
        }}
      >
        {sliderData.map((product, index) => (
          <Link
            href={product?.href}
            key={index}
            className="rounded-2xl bg-gray-100 group-hover:opacity-75 flex flex-col justify-between text-black mr-3 p-10  cursor-pointer hover:shadow-xl"
          >
            <div>
              <p className="font-bold text-3xl text-black mb-[20px]">
                {product.category}
              </p>
              <Image
                className="h-[300px] w-full object-cover"
                src={product.img}
                alt={product.category}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
