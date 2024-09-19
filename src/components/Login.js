import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen absolute"
          src="https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png"
          alt="BackgroundImage"
        ></img>
        <form className="absolute w-3/12 p-10  my-36 mx-auto right-0 left-0 bg-[#060C16] bg-opacity-70 text-white  rounded-lg text-center">
          <h2 className="text-3xl py-1 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
            ></input>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
          ></input>

          <button className="p-2 my-2 rounded-lg bg-yellow-300 text-black w-full ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="pt-5 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to PrimeReel? Sign Up Now" : "Back to Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
