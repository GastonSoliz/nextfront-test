import CharactersList from "@/components/CharactersList/CharactersList";
import React from "react";

export default async function CharactersPage() {
  const staticData = await fetch(`https://swapi.dev/api/people/?page=1`);
  const data = await staticData.json();
  const characters = data.results;

  const filterG = characters
    .filter((ch) => ch.gender !== "n/a" && ch.gender !== "unknown")
    .map((ch) => ch.gender);
  const filterE = characters
    .filter((ch) => ch.eye_color !== "n/a" && ch.eye_color !== "unknown")
    .map((ch) => ch.eye_color);

  const genreA = Array.from(new Set(filterG));

  const eyesA = Array.from(new Set(filterE));

  return (
    <>
      <h1>PAGINA PERSONAJES</h1>
      <CharactersList
        characters={characters}
        genres={genreA}
        eyesColors={eyesA}
      />
    </>
  );
}
