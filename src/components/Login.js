import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data

    let errMessage = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value
    );

    if (errMessage) {
      setErrorMessage(errMessage);
    }

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentail) => {
          const user = userCredentail.user;
          updateProfile(user, { displayName: name.current.value });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
        });
    }
    // SignIn Logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredentails) => {
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: userCredentails.user.photoURL,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode, "-", errorMessage);
      });
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className=" h-screen absolute object-cover"
          src="https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png"
          alt="BackgroundImage"
        ></img>
        <form
          className="absolute md:w-3/12 p-10  my-36 mx-auto right-0 left-0 bg-[#060C16] bg-opacity-70 text-white  rounded-lg text-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-3xl py-1 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-100 text-black rounded-lg "
          ></input>

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            className="p-2 my-2 rounded-lg bg-yellow-300 text-black w-full"
            onClick={handleButtonClick}
          >
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
