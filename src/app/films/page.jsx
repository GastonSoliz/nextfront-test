import CardFilm from "@/components/CardFilm";
import Link from "next/link";
import React from "react";

// export async function getStaticProps() {
//   const data = await fetch("https://swapi.dev/api/films");
//   const films = await data.json();

//   console.log(films);

//   return {
//     props: {},
//   };
// }

export default async function FilmsPage() {
  const staticData = await fetch("https://swapi.dev/api/films");
  const films = await staticData.json();

  //console.log(films.results);

  return (
    <>
      <Link href="/characters">
        <p>FILMS</p>
      </Link>
      <h1>Página de Películas</h1>

      {films.results.map((film) => (
        <CardFilm film={film} />
      ))}
    </>
  );
}
