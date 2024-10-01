import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  // Fetch data from the TMDB API and update the movies slice

  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
