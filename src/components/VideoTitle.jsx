import PropTypes from 'prop-types';

const VideoTitle = ({ title, overview, trailerUrl }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-start px-10 sm:px-16 md:px-24 lg:px-36 text-white">
      {/* Gradient Overlay - Covers the entire screen */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold truncate">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 line-clamp-3">{overview}</p>
        
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black py-2 px-6 text-lg font-bold rounded-md flex items-center gap-2 hover:bg-gray-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-600 bg-opacity-70 text-white py-2 px-6 text-lg font-bold rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  trailerUrl: PropTypes.string, // trailerUrl can be null or undefined
};

export default VideoTitle;
