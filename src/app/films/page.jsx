import CardFilm from "@/components/CardFilm/FilmCard";
import React from "react";

export default async function FilmsPage() {
  const staticData = await fetch("https://swapi.dev/api/films");
  const films = await staticData.json();

  return (
    <div className="grid grid-cols-3 bg-neutral-950 h-screen pt-20 justify-items-center">
      {films.results.map((film) => (
        <CardFilm film={film} key={film.episode_id} />
      ))}
    </div>
  );
}
