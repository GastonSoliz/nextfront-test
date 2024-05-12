import Link from "next/link";

export default function Home() {
  const links = [
    { name: "Films", href: "/films" },
    { name: "Characters", href: "/characters" },
  ];

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-neutral-950">
      <p className="font-semibold text-white py-4 text-lg">
        Descubre informacion sobre las peliculas y los personajes de
        <span className="text-current text-xl"> STAR WARS</span>
      </p>
      <p className="font-semibold text-white pb-6 text-lg">
        Comienza tu camino eligiendo que quieres descubrir:{" "}
      </p>
      <ul className="flex space-x-4">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href}>
                <p className=" font-semibold rounded-md px-3 py-2 bg-neutral-600 cursor-pointer hover:bg-neutral-200">
                  {link.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
