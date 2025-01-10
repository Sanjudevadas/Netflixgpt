import Header from "./Header";
import netflixbg from "../assets/netflixbg.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
   const email = useRef(null);
   const password = useRef(null);

   const handleButtonClick = () => {
    const emailValue = email.current?.value; // Access the value of the email input
    const passwordValue = password.current?.value; // Access the value of the password input
  
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
  
    // Validate form data
   const message = checkValidData(emailValue, passwordValue);
   setErrorMessage(message)
   
   console.log(message);
  };
  

 /* const handleButtonClick = ()=>{
    //validate form data
    checkValidData(email,password,)
  }*/
  
  const toggleSignInFrom = ()=>{
  
    setIsSignInForm(!isSignInForm);

  }



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
        onSubmit={(e)=> e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-8 bg-black/75 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input 
         ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        {!isSignInForm &&  (
               <input

               type="text"
               placeholder="Full Name"
               className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
               /> 
        )
        
   }
     
          <input 
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <p className="text-red-700 font-bold py-1 pb-3 text-xs" >{errorMessage}</p>

        <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-300" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 text-center mt-4 cursor-pointer" onClick={toggleSignInFrom}>
        {isSignInForm ? "New to Netflix?Sign up now" : "Already registered?Sign In Now"}
         
          
          
        </p>
      </form>
    </div>
  );
};

export default Login;
