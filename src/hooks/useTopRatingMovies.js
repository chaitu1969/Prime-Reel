import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTopRatingMovies = () => {
  // Fetch data from the TMDB API and update the movies slice

  const dispatch = useDispatch();

  const TopRatingMovies = useSelector((store) => store.movies.TrendingMovies);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const getTopRatingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !TopRatingMovies && getTopRatingMovies();
  }, []);
};
