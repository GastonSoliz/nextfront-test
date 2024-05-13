import CardFilm from "@/components/CardFilm/FilmCard";
import React from "react";

async function getData() {
  try {
    const staticData = await fetch("https://swapi.dev/api/films");
    return await staticData.json();
  } catch (error) {
    throw new Error(`Error fetching films: ${error.message}`);
  }
}

export default async function FilmsPage() {
  const films = await getData();

  return (
    <div className="grid grid-cols-3 bg-neutral-950 h-screen pt-20 justify-items-center">
      {films.results.map((film) => (
        <CardFilm film={film} key={film.episode_id} />
      ))}
    </div>
  );
}
