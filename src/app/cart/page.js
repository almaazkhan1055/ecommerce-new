"use client";

import Navbar from "@/app/components/navbar";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems.map((product, productIdx) => (
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <Image
                        alt={product.productIdx}
                        src={product.thumbnail}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        width={96}
                        height={96}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link
                                href={`/products/${encodeURIComponent(
                                  product.id
                                )}`}
                                className="font-bold text-xl text-gray-700 hover:text-gray-800"
                              >
                                {product.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500 text-md font-semibold">
                              {product.category}
                            </p>
                            {product.dimensions ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500 text-md font-semibold">
                                {product.dimensions.width}cm *
                                {product.dimensions.height}cm
                              </p>
                            ) : null}
                          </div>
                          <p className="mt-1 text-xl font-bold text-gray-900">
                            {product.price} $
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <label
                            htmlFor={`quantity-${productIdx}`}
                            className="sr-only"
                          >
                            Quantity, {product.title}
                          </label>
                          <select
                            id={`quantity-${productIdx}`}
                            name={`quantity-${productIdx}`}
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>

                          <div className="absolute right-0 top-0">
                            <button
                              type="button"
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <XMarkIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        {product.stock ? (
                          <CheckIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                          />
                        ) : (
                          <ClockIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                          />
                        )}

                        <span>
                          {product.inStock
                            ? "In stock"
                            : `${product.shippingInformation}`}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-2xl font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-lg text-gray-600">Subtotal</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-lg text-gray-600">
                    <span>Shipping estimate</span>
                    <Link
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </Link>
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {cartItems.length === 0
                      ? "$ 0"
                      : `$ ${shippingEstimate.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-lg text-gray-600">
                    <span>Tax estimate</span>
                    <Link
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </Link>
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {cartItems.length === 0
                      ? "$ 0"
                      : `$ ${taxEstimate.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-xl font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-xl font-bold text-gray-900">
                    {cartItems.length === 0
                      ? "$ 0"
                      : `$ ${orderTotal.toFixed(2)}`}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  href={cartItems.length === 0 ? "#" : "/checkout"}
                  className={`w-full block text-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white  shadow-sm ${
                    cartItems.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-50 cursor-pointer "
                  }`}
                >
                  Checkout
                </Link>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
