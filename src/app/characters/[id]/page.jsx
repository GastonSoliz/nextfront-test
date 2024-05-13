import Image from "next/image";

async function getData(id) {
  try {
    const staticData = await fetch(`https://swapi.dev/api/people/${id}`);

    return await staticData.json();
  } catch (error) {
    throw new Error(`Error fetching character:${error.message}`);
  }
}

export default async function Character({ params }) {
  const infoCharacter = await getData(params.id);

  return (
    <div className="h-screen bg-neutral-950 flex justify-center items-center">
      <div className="bg-slate-800 w-7/12 h-4/6 flex justify-center align-items rounded-md">
        <div className="h-full w-5/12  flex items-center">
          <Image
            src="/Generic_Character.jpg"
            alt="Generic Character Image"
            width={600}
            height={600}
          />
        </div>
        <div className="w-4/12 flex justify-center items-center flex-col">
          <p className="my-4 text-current font-semibold text-lg">
            Name:
            <span className="text-xl px-2 text-gray-300">
              {infoCharacter.name}
            </span>
          </p>
          {infoCharacter.eye_color === "n/a" ||
          infoCharacter.eye_color === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Eye color:
              <span className="text-3x1 px-2 text-gray-300">
                {infoCharacter.eye_color}
              </span>
            </p>
          )}
          {infoCharacter.birth_year === "n/a" ||
          infoCharacter.birth_year === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Birth year:
              <span className="text-lg px-2 text-gray-300">
                {infoCharacter.birth_year}
              </span>
            </p>
          )}
          {infoCharacter.hair_color === "n/a" ||
          infoCharacter.hair_color === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Hair color:
              <span className="text-lg px-2 text-gray-300">
                {infoCharacter.hair_color}
              </span>
            </p>
          )}
          {infoCharacter.height === "n/a" ||
          infoCharacter.height === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Height:
              <span className="text-lg px-2 text-gray-300">
                {infoCharacter.height}
              </span>
            </p>
          )}
          {infoCharacter.skin_color === "n/a" ||
          infoCharacter.skin_color === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Skin color:
              <span className="text-lg px-2 text-gray-300">
                {infoCharacter.skin_color}
              </span>
            </p>
          )}
          {infoCharacter.mass === "n/a" ||
          infoCharacter.mass === "unknown" ? null : (
            <p className="my-4 text-current font-semibold text-lg">
              Mass:
              <span className="text-lg px-2 text-gray-300">
                {infoCharacter.mass}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
