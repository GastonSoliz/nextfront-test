import Image from "next/image";
import Link from "next/link";

export default function CardFilm({ film }) {
  return (
    <div className=" bg-slate-800 w-80 h-72 rounded-lg flex flex-col items-center hover:bg-slate-600">
      <Link href={`/films/${film.episode_id}`}>
        <p className="my-4 text-current font-semibold text-sm">
          Name: <span className="text-lg px-2 text-gray-300">{film.title}</span>
        </p>
        <Image
          src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
          alt="Generic Image"
          width={300}
          height={300}
        />
        <p className="my-4 text-current font-semibold text-sm">
          Episode:
          <span className="text-lg px-2 text-gray-300">{film.episode_id}</span>
        </p>
      </Link>
    </div>
  );
}
