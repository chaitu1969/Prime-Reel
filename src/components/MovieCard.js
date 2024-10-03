import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4 hover:scale-110 duration-500 transition transform">
      <img
        className="rounded-lg shadow-black"
        alt="PosterImage"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default MovieCard;
