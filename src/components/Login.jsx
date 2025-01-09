import Header from "./Header";
import netflixbg from "../assets/netflixbg.jpg";

const Login = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          src={netflixbg}
          alt="background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <form
        action=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-8 bg-black/75 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-300">
          Sign In
        </button>
        <p className="text-gray-400 text-center mt-4">
          New to Netflix?{" "}
          <a href="/signup" className="text-white hover:underline">
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
