import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ ch }) {
  const id = ch.url.match(/\/(\d+)\/$/)[1];

  return (
    <Link href={`/characters/${id}`}>
      <p>{ch.name}</p>
      <Image
        src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg"
        alt="Generic Image"
        width={100}
        height={100}
      />
      {ch.eye_color === "n/a" || ch.eye_color === "unknown" ? null : (
        <p>{ch.eye_color}</p>
      )}
      {ch.gender === "n/a" || ch.eye_color === "unknown" ? null : (
        <p>{ch.gender}</p>
      )}
    </Link>
  );
}
