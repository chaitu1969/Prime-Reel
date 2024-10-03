import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <img
        src="/bg-tiles.png"
        alt="bg-img"
        className="-z-10 h-fit absolute"
      ></img>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
