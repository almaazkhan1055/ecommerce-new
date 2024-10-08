import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            alt="hero"
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            layout="responsive"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight  lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-4 text-xl ">
            The new arrivals have&#44; well&#44; newly arrived. Check out the
            latest options from our summer small-batch release while
            they&apos;re still in stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop Now!
          </a>
        </div>
      </div>
    </div>
  );
}
