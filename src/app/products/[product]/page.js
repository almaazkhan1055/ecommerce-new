"use client";

import Navbar from "@/components/navbar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductQuickview from "../productQuickview";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const params = useParams();
  const productId = decodeURIComponent(params.product || "");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, []);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                <img
                  alt={selectedProduct?.id}
                  src={selectedProduct?.thumbnail}
                  className="object-cover object-right"
                />
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {selectedProduct?.title}
                  </h1>
                </div>

                <div>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          selectedProduct?.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{selectedProduct?.rating}/5</p>
                </div>
              </div>

              <p className="mt-6 text-gray-500">
                {selectedProduct?.description}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-xl font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Pay $ {selectedProduct?.price}
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-xl font-bold  text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={handleModal}
                >
                  Preview
                </button>
                {modalOpen && (
                  <ProductQuickview
                    selectedProduct={selectedProduct}
                    open={modalOpen}
                    setOpen={handleModal}
                  />
                )}
              </div>
              <p className="mt-6  font-bold text-xl">
                {selectedProduct?.availabilityStatus} Only-
                <span className="text-red-500">
                  {selectedProduct?.stock} Left
                </span>
              </p>

              <p className="mt-6 text-gray-500">
                {selectedProduct?.returnPolicy}
              </p>
            </div>

            <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
              <TabGroup>
                <div className="border-b border-gray-200">
                  <TabList className="-mb-px flex space-x-8">
                    <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-lg font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
                      Customer Reviews
                    </Tab>
                  </TabList>
                </div>
                <TabPanels>
                  <TabPanel className="-mb-10">
                    <h3 className="sr-only">Customer Reviews</h3>

                    {selectedProduct?.reviews.map((review, reviewIdx) => (
                      <div
                        key={reviewIdx}
                        className="flex space-x-4 text-sm text-gray-500"
                      >
                        <div className="flex-none py-10">
                          <img
                            alt=""
                            src="https://media.istockphoto.com/id/2150664654/photo/photo-of-attractive-pretty-business-lady-in-formalwear-isolated-white-background-stock-photo.jpg?s=1024x1024&w=is&k=20&c=3b-Af1Rks_cv2hJuPzqD6_R2yxQnB8xFjwQD-OcoVe4="
                            className="h-10 w-10 rounded-full bg-gray-100 object-cover "
                          />
                        </div>
                        <div className="py-10">
                          <h3 className="font-medium text-gray-900">
                            {review.reviewerName}
                          </h3>
                          <p>
                            <time dateTime={review.datetime}>
                              {review.date}
                            </time>
                          </p>

                          <div className="mt-4 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  review.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-300",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>
                          <p className="mt-6 text-gray-500">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
