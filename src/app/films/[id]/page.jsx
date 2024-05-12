import FilmCharacterList from "@/components/FilmCharacterList/FilmCharacterList";
import Image from "next/image";

export default async function Film({ params }) {
  const staticData = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const infoFilm = await staticData.json();

  return (
    <div className="h-full bg-neutral-950 flex justify-center py-20">
      <div className="bg-slate-800 w-9/12 py-4 flex flex-col rounded-md items-center">
        <p className=" my-6 text-current font-semibold text-lg">
          Title:
          <span className="text-xl px-2 text-gray-300">{infoFilm.title}</span>
        </p>
        <div className="h-full flex items-center">
          <Image
            src="/Generic_Film.webp"
            alt="Generic Film Image"
            width={300}
            height={300}
          />
        </div>
        <p className="my-6 text-current font-semibold text-lg">
          Episode:
          <span className="text-xl px-2 text-gray-300">
            {infoFilm.episode_id}
          </span>
        </p>
        <p className="my-6 text-current font-semibold text-lg">
          Director:
          <span className="text-xl px-2 text-gray-300">
            {infoFilm.director}
          </span>
        </p>
        <p className="mt-6 mb-2 text-current font-semibold text-lg">
          Characters:
        </p>
        <FilmCharacterList urls={infoFilm.characters} />
      </div>
    </div>
  );
}
