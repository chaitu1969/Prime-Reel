import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-screen aspect-video "
        // src={
        //   "https://www.youtube.com/embed/" +
        //   trailerVideo?.key +
        //   `?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${trailerVideo?.key}`
        // }
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${trailerVideo?.key}&iv_load_policy=3&fs=0&disablekb=1&start=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
