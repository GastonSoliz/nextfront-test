import CharactersList from "@/components/CharactersList/CharactersList";

async function getData(page) {
  try {
    const staticData = await fetch(
      `https://swapi.dev/api/people/?page=${page}`
    );
    return await staticData.json();
  } catch (error) {
    throw new Error(`Error fetching characters: ${error.message}`);
  }
}

export default async function CharactersPage() {
  const characters = [];
  for (let i = 1; i <= 9; i++) {
    const data = await getData(i);
    for (let o = 0; o < data.results.length; o++) {
      characters.push(data.results[o]);
    }
  }

  const filterG = characters
    .filter(
      (ch) =>
        ch.gender !== "n/a" && ch.gender !== "unknown" && ch.gender !== "none"
    )
    .map((ch) => ch.gender);
  const filterE = characters
    .filter((ch) => ch.eye_color !== "n/a" && ch.eye_color !== "unknown")
    .flatMap((ch) => ch.eye_color.split(",").map((color) => color.trim()));

  const genreA = Array.from(new Set(filterG));

  const eyesA = Array.from(new Set(filterE));

  return (
    <div className="h-full pt-16">
      <CharactersList
        characters={characters}
        genres={genreA}
        eyesColors={eyesA}
      />
    </div>
  );
}
