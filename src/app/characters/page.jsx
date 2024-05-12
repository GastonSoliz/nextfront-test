import CharactersList from "@/components/CharactersList/CharactersList";

export default async function CharactersPage() {
  const characters = [];
  for (let i = 1; i <= 9; i++) {
    const staticData = await fetch(`https://swapi.dev/api/people/?page=${i}`);
    const data = await staticData.json();
    for (let o = 0; o < data.results.length; o++) {
      characters.push(data.results[o]);
    }
  }

  const filterG = characters
    .filter((ch) => ch.gender !== "n/a" && ch.gender !== "unknown")
    .map((ch) => ch.gender);
  const filterE = characters
    .filter((ch) => ch.eye_color !== "n/a" && ch.eye_color !== "unknown")
    .flatMap((ch) => ch.eye_color.split(",").map((color) => color.trim()));

  const genreA = Array.from(new Set(filterG));

  const eyesA = Array.from(new Set(filterE));

  return (
    <div className="h-full bg-neutral-950 px-12 pt-16">
      <CharactersList
        characters={characters}
        genres={genreA}
        eyesColors={eyesA}
      />
    </div>
  );
}
