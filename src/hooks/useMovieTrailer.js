import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (!movieId) {
      console.warn("Movie ID is missing");
      return;
    }

    try {
      console.log("Fetching trailer for movie ID:", movieId);

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      if (!response.ok) throw new Error("Failed to fetch movie videos");

      const json = await response.json();
      console.log("API Response:", json);

      if (!json.results || json.results.length === 0) {
        console.warn("No trailer videos found");
        return;
      }

      const trailer = json.results.find((video) => video.type === "Trailer") || json.results[0];

      if (!trailer) {
        console.warn("No trailer found in response");
        return;
      }

      console.log("Selected Trailer:", trailer);
      dispatch(addTrailerVideo(trailer)); // ✅ Store in Redux
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return getMovieVideos;
};

export default useMovieTrailer;
