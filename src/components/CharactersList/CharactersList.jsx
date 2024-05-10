"use client";

import CharacterCard from "../CardCharacter/CharacterCard";
import Filters from "../Filters/Filters";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

export default function CharactersList({ characters, genres, eyesColors }) {
  const [chFiltered, setChFiltered] = useState(characters);

  const [currentPage, setCurrentPage] = useState(1);
  const chPerPage = 2;
  const totalPages = Math.ceil(chFiltered.length / chPerPage);
  const startIndex = (currentPage - 1) * chPerPage;
  const endIndex = startIndex + chPerPage;
  const chFilteredPag = chFiltered.slice(startIndex, endIndex);

  function handlerGenre(e) {
    const genre = e.target.value;
    if (genre === "") setChFiltered(characters);
    else setChFiltered(characters.filter((ch) => genre == ch.gender));
    setCurrentPage(1);
  }

  function handlerEyes(e) {
    const color = e.target.value;
    if (color === "") setChFiltered(characters);
    else setChFiltered(characters.filter((ch) => color == ch.eye_color));
    setCurrentPage(1);
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  }

  function nextPage() {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  }

  function selectPage(number) {
    setCurrentPage(number);
  }

  return (
    <>
      <Filters
        genres={genres}
        eyesColors={eyesColors}
        handlerGenre={handlerGenre}
        handlerEyes={handlerEyes}
      />
      {chFilteredPag.map((ch) => (
        <CharacterCard ch={ch} key={ch.name} />
      ))}
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        selectPage={selectPage}
        totalPages={totalPages}
      />
    </>
  );
}