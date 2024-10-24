import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-48 transform pr-4 transition duration-500 hover:scale-110">
      <img
        className="rounded-lg shadow-black"
        alt="PosterImage"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default MovieCard;
