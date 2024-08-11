"use client";
import Navbar from "@/components/navbar";
import ContentWrapper from "@/components/wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <h2 className="text-2xl my-10">Shop by category </h2>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allCategories?.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <Link
                href={`/categories/${encodeURIComponent(category.name)}`}
                className="flex w-full items-center justify-center space-x-6 p-6"
              >
                <h3 className="text-xl font-bold truncate text-gray-900">
                  {category.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </>
  );
}
