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
      {infoCharacter.eye_color === "n/a" ||
      infoCharacter.eye_color === "unknown" ? null : (
        <p>Eye color: {infoCharacter.eye_color}</p>
      )}
      {infoCharacter.birth_year === "n/a" ||
      infoCharacter.birth_year === "unknown" ? null : (
        <p>Birth year: {infoCharacter.birth_year}</p>
      )}
      {infoCharacter.hair_color === "n/a" ||
      infoCharacter.hair_color === "unknown" ? null : (
        <p>Hair color: {infoCharacter.hair_color}</p>
      )}
      {infoCharacter.height === "n/a" ||
      infoCharacter.height === "unknown" ? null : (
        <p>Height: {infoCharacter.height}</p>
      )}
      {infoCharacter.skin_color === "n/a" ||
      infoCharacter.skin_color === "unknown" ? null : (
        <p>Skin color: {infoCharacter.skin_color}</p>
      )}
      {infoCharacter.mass === "n/a" ||
      infoCharacter.mass === "unknown" ? null : (
        <p>Mass: {infoCharacter.mass}</p>
      )}
    </>
  );
}
