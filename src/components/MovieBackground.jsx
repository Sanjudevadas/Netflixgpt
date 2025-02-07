import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieVideos = async () => {
    if (!movieId) return; // Prevent fetching if movieId is undefined

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      if (!response.ok) throw new Error("Failed to fetch movie videos");

      const json = await response.json();
      console.log("sanju", json);

      const filterdata = json.results.filter(
        (video) => video.type === "Trailer"
      );

      if (filterdata.length > 0) {
        setTrailerId(filterdata[0].key);
      } else if (json.results.length > 0) {
        setTrailerId(json.results[0].key);
      } else {
        console.warn("No trailer found for this movie");
      }

    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]); // ✅ Fetch again if movieId changes

  return (
    <div className="absolute top-0 left-0 w-full h-[80vh] -z-10">
      {trailerId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p className="text-white text-center mt-10">No trailer available</p>
      )}
    </div>
  );
};

export default MovieBackground;
