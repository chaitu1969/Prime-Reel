import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Fetch a trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = await json.results?.filter(
      (item) => item.type === "Trailer"
    );

    const trailer = filterData ? filterData[0] : json.results[0];

    if (trailer) {
      dispatch(addTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
