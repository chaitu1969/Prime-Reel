import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <img
        src="/bg-tiles.png"
        alt="bg-img"
        className="h fixed -z-10 h-screen object-cover"
      ></img>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
