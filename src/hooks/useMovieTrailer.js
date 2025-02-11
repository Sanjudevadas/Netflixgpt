import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => { // ✅ Accept movieId as a parameter
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (!movieId) return; // ✅ Prevent fetching if movieId is undefined

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`, // ✅ Use movieId
        API_OPTIONS
      );

      if (!response.ok) throw new Error("Failed to fetch movie videos");

      const json = await response.json();
      console.log("sanju", json);

      const filterdata = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      dispatch(addTrailerVideo(trailer)); // ✅ Store in Redux
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]); // ✅ Correct dependency array

  return getMovieVideos; // ✅ Return function in case you need to call it manually
};

export default useMovieTrailer;
