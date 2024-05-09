import Image from "next/image";

export default function CardFilm({ film }) {
  return (
    <>
      <p>{film.title}</p>
      <Image
        src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
        alt="Generic Image"
        width={300}
        height={300}
      />
      <p>{film.episode_id}</p>
    </>
  );
}
