import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video h-screen bg-gradient-to-r from-black px-6 pt-[15%] opacity-90 md:px-24">
      <h1 className="text-sm font-bold text-white md:text-4xl">{title}</h1>
      <p className="hidden w-1/3 py-5 text-sm text-white md:inline-block">
        {overview}
      </p>
      <div>
        <button className="w-30 m-1 rounded-md bg-gray-100 px-2 text-black hover:bg-opacity-80 md:px-4 md:py-1">
          Play
        </button>
        <button className="w-30 m-1 rounded-md bg-gray-400 bg-opacity-50 px-2 text-white md:px-4 md:py-1">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
