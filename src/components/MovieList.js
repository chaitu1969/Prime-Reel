import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-transparent px-6">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div
        className="flex overflow-hidden overflow-x-scroll scroll-smooth border-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex">
          {movies?.map((card) => (
            <MovieCard poster_path={card.poster_path} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
