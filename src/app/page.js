import Link from "next/link";

export default function Home() {
  const links = [
    { name: "Films", href: "/films" },
    { name: "Characters", href: "/characters" },
  ];

  return (
    <main>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </main>
  );
}
