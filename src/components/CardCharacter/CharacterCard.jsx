import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ ch }) {
  const id = ch.url.match(/\/(\d+)\/$/)[1];

  return (
    <div className="bg-slate-800 w-60 h-72 rounded-lg flex flex-col items-center hover:bg-slate-600 ">
      <Link href={`/characters/${id}`}>
        <p className="my-4 text-current font-semibold text-sm">
          Name: <span className="text-lg px-2 text-gray-300">{ch.name}</span>
        </p>
        <Image
          src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg"
          alt="Character Image"
          width={200}
          height={200}
        />
        {ch.eye_color === "n/a" || ch.eye_color === "unknown" ? null : (
          <p className="my-4 text-current font-semibold text-sm">
            Eye Color:
            <span className="text-lg px-2 text-gray-300">{ch.eye_color}</span>
          </p>
        )}
        {ch.gender === "n/a" || ch.eye_color === "unknown" ? null : (
          <p className="my-4 text-current font-semibold text-sm">
            Gender:
            <span className="text-lg px-2 text-gray-300">{ch.gender}</span>
          </p>
        )}
      </Link>
    </div>
  );
}
