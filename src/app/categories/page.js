"use client";
import Navbar from "@/app/components/navbar";
import ContentWrapper from "@/app/components/wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  console.log("allcategories", allCategories);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  return (
    <>
      <ContentWrapper>
        <h2 className="text-3xl font-bold my-10">Shop by category </h2>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allCategories?.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg text-gray-900 hover:text-purple-600"
            >
              <Link
                href={`/categories/${encodeURIComponent(category.slug)}`}
                className="flex w-full items-center justify-center space-x-6 p-6"
              >
                <h3 className="text-xl font-bold truncate ">{category.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </>
  );
}
