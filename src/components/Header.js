import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  // User is logged in redirect to brower page else to homePage/LoginPage
  // useNavigate can only implement in BrowserRouter only.
  // console.log(process.env.REACT_APP_AI_KEY);
  // console.log(process.env.REACT_APP_AI_KEY);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/errorPage");
      });
  };

  const handleGptSearch = () => {
    // Toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute z-10 flex w-full flex-col justify-between bg-gradient-to-b from-black px-8 py-2 md:flex-row">
      <img
        className="mx-auto w-44 pt-4 md:mx-0"
        src="/PrimeReel-Logo.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex flex-row items-center justify-between p-2">
          <button
            className="mx-3 my-2 rounded-md py-1 text-center font-bold text-slate-400 transition duration-700 ease-in-out hover:text-white"
            onClick={handleGptSearch}
          >
            {gptSearch ? "Home Page" : "Ai Search"}
          </button>
          <img
            className="mr-2 h-4 w-4 cursor-pointer"
            src={user?.photoURL || PHOTO_URL}
            alt="UserIcon"
          ></img>
          <button
            className="font-bold text-slate-400 transition duration-700 ease-in-out hover:text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
