import CardFilm from "@/components/CardFilm/FilmCard";
import React from "react";

export default async function FilmsPage() {
  const staticData = await fetch("https://swapi.dev/api/films");
  const films = await staticData.json();

  return (
    <>
      <h1>Página de Películas</h1>

      {films.results.map((film) => (
        <CardFilm film={film} key={film.episode_id} />
      ))}
    </>
  );
}
