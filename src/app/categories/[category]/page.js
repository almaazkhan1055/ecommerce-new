"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContentWrapper from "@/app/components/wrapper";
import { StarIcon } from "@heroicons/react/20/solid";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryPage = () => {
  const params = useParams();
  const category = decodeURIComponent(params.category || "");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [category]);

  if (!category) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <div className="bg-white cursor-pointer ">
          <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 ">
            <h2 className="text-2xl my-10">Products in {category} category </h2>
            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                  href={`/products/${encodeURIComponent(product.id)}`}
                  key={product.id}
                  className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
                >
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                      alt={product.id}
                      src={product.thumbnail}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pb-4 pt-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.brand}
                    </p>
                    <div className="mt-3 flex flex-col items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              product.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.reviewCount}
                      </p>
                    </div>
                    <p className="mt-4 text-xl font-medium text-gray-900">
                      {product.price} $
                    </p>
                    <p className="text-lg font-semibold mt-4 text-gray-900">
                      {product.availabilityStatus}{" "}
                      <span>Left: {product.stock}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default CategoryPage;
