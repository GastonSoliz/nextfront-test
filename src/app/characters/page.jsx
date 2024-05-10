import CharacterCard from "@/components/CardCharacter/CharacterCard";
import Link from "next/link";
import React from "react";

export default async function CharactersPage() {
  const staticData = await fetch("https://swapi.dev/api/people");
  const characters = await staticData.json();

  //console.log(characters.results);

  return (
    <>
      <Link href="/films">
        <p>FILMS</p>
      </Link>
      <h1>PAGINA PERSONAJES</h1>
      {characters.results.map((ch) => (
        <CharacterCard ch={ch} />
      ))}
    </>
  );
}
