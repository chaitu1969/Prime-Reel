import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const GptMovieSuggestion = () => {
  const { AiMovies, AiMovieNames } = useSelector((store) => store.gpt);

  if (!AiMovieNames) return null;

  return (
    <div className="m-4 bg-transparent bg-opacity-100 p-4">
      {AiMovieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={AiMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
