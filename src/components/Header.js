import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/errorPage");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
        alt="logo"
      ></img>
      {user && (
        <div className="flex align-middle">
          <img
            className="absolute w-4 h-4 m-2 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/14722/14722107.png"
            alt="icon"
          ></img>
          <button
            className="text-white pl-10 font-bold"
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
