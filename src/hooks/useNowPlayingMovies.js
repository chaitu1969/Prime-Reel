import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

export const useNowPlayingMovies = () => {
  // Fetch data from the TMDB API and update the movies slice

  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const getNowPlayingMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const json = await response.json();

      if (!json.results || json.results.length === 0) {
        throw new Error("No movies found.");
      }

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
