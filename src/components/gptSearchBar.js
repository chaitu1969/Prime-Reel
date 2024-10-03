import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 rounded-lg  grid grid-cols-12">
        <input
          type="text"
          className="p-2 ml-4 border-s-black col-span-9 rounded-lg text-center"
          placeholder="Search here .."
        ></input>
        <button className="p-2 mx-4 bg-red-700  text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
