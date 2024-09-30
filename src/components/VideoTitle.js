import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute bg-gradient-to-r from-black aspect-video opacity-80 ">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-sm w-1/3 text-white py-5">{overview}</p>
      <div>
        <button className="bg-gray-100  m-1 rounded-md px-4 py-1 w-30 text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-400  m-1 rounded-md px-4 py-1 w-30 text-white bg-opacity-50">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
