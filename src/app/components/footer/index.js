import Link from "next/link";

const footerNavigation = {
  products: [
    { name: "Beauty", href: "/categories/beauty" },
    { name: "Smartphones", href: "/categories/smartphones" },
    { name: "Furnitures", href: "/categories/furniture" },
    { name: "Vehicles", href: "/categories/vehicle" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Shipping Policy", href: "#" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="pb-20 pt-16">
      <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Products</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.products.map((item) => (
                  <li key={item.name} className="text-xl">
                    <Link
                      href={item.href}
                      className="text-gray-500 font-semibold hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Customer Service
              </h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.customerService.map((item) => (
                  <li key={item.name} className="text-xl">
                    <Link
                      href={item.href}
                      className="text-gray-500 font-semibold hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Company</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.company.map((item) => (
                  <li key={item.name} className="text-xl">
                    <Link
                      href={item.href}
                      className="text-gray-500 font-semibold hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name} className="text-xl">
                    <Link
                      href={item.href}
                      className="text-gray-500 font-semibold hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
