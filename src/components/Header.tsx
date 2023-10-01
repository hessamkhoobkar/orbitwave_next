"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const mainNavData = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Deals",
      href: "/deals",
    },
    {
      title: "Invoices",
      href: "/invoices",
    },
    {
      title: "Contacts",
      href: "/contacts",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="header px-4 pt-3 border-b">
      <div className="flex justify-between items-center w-full mb-4">
        <Image
          src="/orbitwave.png"
          alt="Orbitwave Logo"
          width={124}
          height={32}
          priority
        />
        <div className="flex justify-between items-center gap-2 text-quartz-4">
          <span className="cursor-not-allowed text-sm">Changelog</span>
          <span className="cursor-not-allowed text-sm">Help</span>
          <span className="cursor-not-allowed text-sm">Docs</span>
          <div>#</div>
          <div>#</div>
        </div>
      </div>
      <div className="flex justify-start items-center w-full">
        {mainNavData.map((item) => (
          <Link
            key={item.title}
            className={`text-center px-4 py-3 w-28 border-b-2 text-sm ${
              pathname === item.href
                ? "border-lavender-1 text-lavender-1"
                : "border-transparent"
            }`}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
