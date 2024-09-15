import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg"
          alt="logo"
        />
      </div>
      <form className=" w-3/12  absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl  py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full name"
          className="rounded-lg  p-4 my-4 w-full bg-gray-700"
        />)
        }
        <input
          type="text"
          placeholder="Enter your Email"
          className="rounded-lg  p-4 my-4 w-full bg-gray-700"
        />
        
        <input
          type="password"
          placeholder="password"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <button
          type="submit"
          className="p-4 my-6 rounded-lg bg-red-700 text-white hover:bg-red-800 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already a user? Sign In"
            : "New to Netflix? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
