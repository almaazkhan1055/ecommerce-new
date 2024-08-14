"use client";
import ThanksModal from "@/app/components/thanksModal";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    sameAsShipping: false,
  });
  console.log(formData, "formdata");

  const router = useRouter();

  const modalHandler = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const cartItems = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      {isModalOpen && (
        <ThanksModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
          formData={formData}
        />
      )}

      <div className="bg-white">
        <div
          aria-hidden="true"
          className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        />
        <div
          aria-hidden="true"
          className="fixed right-0 top-0 hidden h-full w-1/2 bg-indigo-900 lg:block"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
          <h1 className="sr-only">Checkout</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-indigo-900 py-12 text-indigo-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
          >
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <ul
                role="list"
                className="divide-y divide-white divide-opacity-10 text-sm font-medium"
              >
                {cartItems.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-start space-x-4 py-6"
                  >
                    <Image
                      alt={product.title}
                      src={product.thumbnail}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                      height={80}
                      width={80}
                    />
                    <div className="flex-auto space-y-1 ">
                      <h3 className=" text-xl">{product.title}</h3>
                    </div>
                    <p className="flex-none text-xl font-medium ">
                      $ {product.price}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
                <div className="flex items-center justify-between text-xl">
                  <dt>Subtotal</dt>
                  <dd>${subtotal}</dd>
                </div>

                <div className="flex items-center justify-between text-xl">
                  <dt>Shipping</dt>
                  <dd>${shippingEstimate}</dd>
                </div>

                <div className="flex items-center justify-between text-xl">
                  <dt>Taxes</dt>
                  <dd>${taxEstimate}</dd>
                </div>

                <div className="flex font-bold text-xl items-center justify-between border-t border-white border-opacity-10 pt-6 ">
                  <dt>Total</dt>
                  <dd>${orderTotal.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Payment and shipping details
            </h2>

            <form>
              <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0 ">
                <div>
                  <Link href="/cart">
                    <ArrowLeftIcon className="h-10 mb-10" />
                  </Link>
                  <h3
                    id="contact-info-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Contact information
                  </h3>

                  <div className="mt-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        value={formData.email}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900">
                    Payment details
                  </h3>

                  <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                    <div className="col-span-3 sm:col-span-4">
                      <label
                        htmlFor="card-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card number
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.cardNumber}
                          id="card-number"
                          name="cardNumber"
                          type="text"
                          autoComplete="cc-number"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-3">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiration date (MM/YY)
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.expirationDate}
                          id="expiration-date"
                          name="expirationDate"
                          type="text"
                          autoComplete="cc-exp"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CVC
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.cvc}
                          id="cvc"
                          name="cvc"
                          type="text"
                          autoComplete="csc"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900">
                    Shipping address
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.address}
                          id="address"
                          name="address"
                          type="text"
                          autoComplete="street-address"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.city}
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.region}
                          id="region"
                          name="region"
                          type="text"
                          autoComplete="address-level1"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          value={formData.postalCode}
                          id="postal-code"
                          name="postalCode"
                          type="text"
                          autoComplete="postal-code"
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900">
                    Billing information
                  </h3>

                  <div className="mt-6 flex items-center">
                    <input
                      checked={formData.sameAsShipping}
                      id="same-as-shipping"
                      name="sameAsShipping"
                      type="checkbox"
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="ml-2">
                      <label
                        htmlFor="same-as-shipping"
                        className="text-sm font-medium text-gray-900"
                      >
                        Same as shipping information
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                  <Link
                    href="#"
                    className={`rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 ${
                      Object.values(formData).some((value) => value === "")
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        Object.values(formData).every((value) => value !== "")
                      ) {
                        modalHandler();
                      } else {
                        alert("Please fill out all required fields.");
                      }
                    }}
                  >
                    Pay now
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
