import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-72 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.TrendingMovies} />
        </div>

        {/**
         - MovieList - Popular
              - MovieCard * N

         - MovieList - Now Playing
         - MovieList - Trending
         - MovieList - Error
       */}
      </div>
    )
  );
};

export default SecondaryContainer;
