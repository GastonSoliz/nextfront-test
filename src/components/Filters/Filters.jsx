"use client";
import React from "react";

export default function Filters({
  genres,
  eyesColors,
  handlerGenre,
  handlerEyes,
}) {
  return (
    <>
      <select onChange={handlerGenre}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select onChange={handlerEyes}>
        <option value="">Select Eyes Color</option>
        {eyesColors.map((color) => (
          <option value={color} key={color}>
            {color}
          </option>
        ))}
      </select>
      <button>Clear</button>
    </>
  );
}
