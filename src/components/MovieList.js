import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  bg-transparent">
      <h1 className="text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth overflow-hidden border-none ">
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
