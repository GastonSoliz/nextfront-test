import Image from "next/image";
import Link from "next/link";

export default async function Character({ params }) {
  const staticData = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const infoCharacter = await staticData.json();

  return (
    <>
      <Link href={`/characters`}>Characters</Link>
      <h1>{infoCharacter.name}</h1>
      <Image
        src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg"
        alt="Generic Image"
        width={100}
        height={100}
      />
      <p>{infoCharacter.eye_color}</p>
      <p>{infoCharacter.birth_year}</p>
      <p>{infoCharacter.hair_color}</p>
      <p>{infoCharacter.height}</p>
      <p>{infoCharacter.skin_color}</p>
      <p>{infoCharacter.mass}</p>
    </>
  );
}
