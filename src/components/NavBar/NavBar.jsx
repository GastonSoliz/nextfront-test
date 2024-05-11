"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { name: "Films", href: "/films" },
    { name: "Characters", href: "/characters" },
  ];
  const pathname = usePathname();

  return (
    <nav>
      {pathname === "/" ? null : (
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
