import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <img
        src="/bg-tiles.png"
        alt="bg-img"
        className="-z-10 h fixed object-cover h-screen"
      ></img>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
