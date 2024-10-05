import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-24 h-screen absolute bg-gradient-to-r from-black aspect-video opacity-90 ">
      <h1 className="text-sm  md:text-4xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block text-sm w-1/3 text-white py-5">
        {overview}
      </p>
      <div>
        <button className="bg-gray-100 px-2 m-1 rounded-md md:px-4 md:py-1 w-30 text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-400 px-2 m-1 rounded-md md:px-4 md:py-1 w-30 text-white bg-opacity-50">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
