"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import logo from "../../assets/Shoppers-stop.png";
import Image from "next/image";
import CustomizedSwitches from "../switch";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Orders", href: "/orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="mt-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative flex px-2 lg:px-0">
            <Link
              href="/"
              className="flex flex-shrink-0 items-center text-3xl cursor-pointer"
            >
              <Image src={logo} alt="logo" className="w-48" />
            </Link>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="block w-full rounded-md border-2  py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover: focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <CustomizedSwitches />
          </div>
        </div>
        <nav
          aria-label="Global"
          className="hidden lg:flex items-center lg:space-x-8 lg:py-2"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 z-10"
                  : "text-black hover:bg-gray-700 hover:",
                "block rounded-md px-3 py-2 text-xl font-bold z-10"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/cart">
            <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
          </Link>
        </nav>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 font-bold"
                  : "text-black hover:bg-gray-700",
                "block rounded-md px-3 py-2 text-xl font-bold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pb-3">
          <div className="flex items-center px-4">
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full p-1 text-gray-400 hover: focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Link href="/cart">
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
              </Link>
            </button>
          </div>
          <CustomizedSwitches />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
