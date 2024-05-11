import FilmCharacter from "@/components/CardFilmCharacter/FilmCharacterCard";
import Image from "next/image";

export default async function Film({ params }) {
  const staticData = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const infoFilm = await staticData.json();

  return (
    <>
      <h1>{infoFilm.title}</h1>
      <Image
        src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
        alt="Generic Image"
        width={300}
        height={300}
      />
      <p>{infoFilm.episode_id}</p>
      <p>{infoFilm.director}.</p>
      {infoFilm.characters.map((ch) => (
        <FilmCharacter url={ch} key={ch.name} />
      ))}
    </>
  );
}
