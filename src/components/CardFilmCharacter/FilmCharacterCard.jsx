import Image from "next/image";
import Link from "next/link";

export default async function FilmCharacter({ url }) {
  const staticData = await fetch(url);
  const infoCh = await staticData.json();

  const id = url.match(/\/(\d+)\/$/)[1];

  return (
    <div className="flex flex-col bg-slate-600  w-11/12 h-40 px-2 items-center rounded-md hover:bg-gray-200 ">
      <Link href={`/characters/${id}`}>
        <p className="my-2 text-current font-semibold text-sm">
          Name:
          <span className="text-base px-2 text-gray-400">{infoCh.name}</span>
        </p>
        <div>
          <Image
            src="/Generic_Character.jpg"
            alt="Generic Character Image"
            width={200}
            height={200}
          />
        </div>
      </Link>
    </div>
  );
}
