import Header from "./Header";
import netflixbg from "../assets/netflixbg.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  // Refs for input fields
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const nameValue = name.current?.value; // Get name value
    const emailValue = email.current?.value; // Get email value
    const passwordValue = password.current?.value; // Get password value

    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);

    // Validate form data
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message == null) {
      if (!isSignInForm) {
        // Sign-up logic
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
          const user = userCredential.user;

          // Update user profile with name
          await updateProfile(user, {
            displayName: nameValue,
          });

          console.log("User Created:", user);
          navigate("/browse");
        } catch (error) {
          setErrorMessage(error.code + " - " + error.message);
        }
      } else {
        // Sign-in logic
        try {
          const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
          console.log("User Signed In:", userCredential.user);
          navigate("/browse");
        } catch (error) {
          setErrorMessage(error.code + " - " + error.message);
        }
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img src={netflixbg} alt="background" className="w-full h-full object-cover brightness-50" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-8 bg-black/75 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {errorMessage && <p className="text-red-700 font-bold py-1 pb-3 text-xs">{errorMessage}</p>}

        <button
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-300"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-center mt-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
