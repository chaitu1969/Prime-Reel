import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      {/* <img
        className="h-full"
        src="https://www.justwatch.com/appassets/img/home/bg-tiles/bg-tiles.png"
        alt="background"
      ></img> */}
      <MainContainer />
      <SecondaryContainer />
      {/**
         * MainContainer
            - VideoBackground
            - VideoTitle
           SecondaryContainer
            - MovieList * N
            - cards * N
         */}
    </div>
  );
};

export default Browse;
