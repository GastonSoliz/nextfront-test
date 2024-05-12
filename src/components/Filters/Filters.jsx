"use client";
import React from "react";

export default function Filters({
  genres,
  eyesColors,
  handlerGenre,
  handlerEyes,
  handlerClear,
}) {
  return (
    <div className="flex space-x-6 justify-center items-center py-6">
      <select
        onChange={handlerGenre}
        className="bg-gray-200 rounded-md p-2 cursor-pointer"
      >
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        onChange={handlerEyes}
        className="bg-gray-200 rounded-md p-2 cursor-pointer"
      >
        <option value="">Select Eyes Color</option>
        {eyesColors.map((color) => (
          <option value={color} key={color}>
            {color}
          </option>
        ))}
      </select>
      <button
        onClick={handlerClear}
        className="bg-gray-200 rounded-md p-2 cursor-pointer"
      >
        Clear
      </button>
    </div>
  );
}
