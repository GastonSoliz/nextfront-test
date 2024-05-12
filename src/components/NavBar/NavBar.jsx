"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { name: "Films", href: "/films" },
    { name: "Characters", href: "/characters" },
  ];
  const pathname = usePathname();

  return pathname == "/" ? null : (
    <nav className="bg-neutral-600 py-4 px-6 w-screen fixed">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <p className=" font-semibold text-xl rounded-md cursor-pointer hover:text-white">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
