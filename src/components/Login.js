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
      name.current?.value,
    );

    if (errMessage) {
      setErrorMessage(errMessage);
    }

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
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
      password.current.value,
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
          className="absolute h-screen w-full"
          src="https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png"
          alt="BackgroundImage"
        ></img>
        <form
          className="absolute left-0 right-0 mx-auto my-36 rounded-lg bg-[#060C16] bg-opacity-70 p-10 text-center text-white md:w-3/12"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="py-1 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2 w-full rounded-lg bg-gray-100 p-2 text-black"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-2 w-full rounded-lg bg-gray-100 p-2 text-black"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 w-full rounded-lg bg-gray-100 p-2 text-black"
          ></input>

          <p className="py-2 text-lg font-bold text-red-500">{errorMessage}</p>

          <button
            className="my-2 w-full rounded-lg bg-yellow-300 p-2 text-black"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer pt-5" onClick={toggleSignInForm}>
            {isSignInForm ? "New to PrimeReel? Sign Up Now" : "Back to Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
