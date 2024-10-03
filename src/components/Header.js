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
  const dispatch = useDispatch();

  // User is logged in redirect to brower page else to homePage/LoginPage
  // useNavigate can only implement in BrowserRouter only.

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
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 pt-4" src="/PrimeReel-Logo.png" alt="logo"></img>
      {user && (
        <div className="flex items-center p-2 flex-row justify-between">
          <button
            className=" rounded-md py-1 text-center mx-3 my-2 text-slate-400 font-bold hover:text-white transis7on duration-700 ease-in-out "
            onClick={handleGptSearch}
          >
            AI Search
          </button>
          <img
            className=" w-4 h-4 mr-2 cursor-pointer"
            src={user?.photoURL || PHOTO_URL}
            alt="UserIcon"
          ></img>
          <button
            className="font-bold  text-slate-400  hover:text-white transis7on duration-700 ease-in-out"
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
