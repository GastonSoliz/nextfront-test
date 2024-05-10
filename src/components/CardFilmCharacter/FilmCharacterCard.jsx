import Image from "next/image";
import Link from "next/link";

export default async function FilmCharacter({ url }) {
  const staticData = await fetch(url);
  const infoCh = await staticData.json();

  const id = url.match(/\/(\d+)\/$/)[1];

  return (
    <Link href={`/characters/${id}`}>
      <p>{infoCh.name}</p>
      <Image
        src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg"
        alt="Generic Image"
        width={100}
        height={100}
      />
    </Link>
  );
}
