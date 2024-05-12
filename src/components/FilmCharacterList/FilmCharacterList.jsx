import FilmCharacter from "../CardFilmCharacter/FilmCharacterCard";

export default function FilmCharacterList({ urls }) {
  return (
    <div className="grid grid-cols-5 w-full px-12 py-4 gap-4">
      {urls.map((urlCh, index) => (
        <FilmCharacter url={urlCh} key={index} />
      ))}
    </div>
  );
}
