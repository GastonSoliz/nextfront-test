import Image from "next/image";
import Link from "next/link";

export default function CardFilm({ film }) {
  return (
    <Link href={`/films/${film.episode_id}`}>
      <p>{film.title}</p>
      <Image
        src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
        alt="Generic Image"
        width={300}
        height={300}
      />
      <p>{film.episode_id}</p>
    </Link>
  );
}
