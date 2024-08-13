"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((products) => setAllProducts(products.products));
  }, []);

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {allProducts?.map((product) => (
          <Link
            href={`/products/${encodeURIComponent(product.id)}`}
            key={product.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center cursor-pointer shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-1 flex-col p-8 bg-gray-100 rounded-md">
              <img
                alt={product.title}
                src={product.thumbnail}
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              />

              <h3 className="mt-6 font-medium text-gray-900 text-2xl">
                {product.title}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dd className="text-lg text-gray-500">{product.category}</dd>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {product.price}$
                  </span>
                </dd>
              </dl>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
}
