import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAiMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  let AiQuery = `Act as a Movies recommendation system and suggest some movies for the query ${searchText.current?.value}. Give me 5 movies, comma separated like the example result given ahead. Provide only movie names like: Magadheera, Anji, Bahubali, Salaar, Billa.`;

  const AiSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleAISearch = async () => {
    const gptData = await fetch("https://api.aimlapi.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: AiQuery,
          },
        ],
        max_tokens: 512,
        stream: false,
      }),
    }).then((res) => res.json());

    // console.log(gptData);

    let gptData2 = gptData.choices?.[0]?.message?.content.split(",");
    // console.log(gptData2);

    const gptMovies = gptData2;

    const promiseArray = gptData2.map((item) => AiSearch(item));

    const data = await Promise.all(promiseArray);

    // console.log(data);

    dispatch(addAiMovieResults({ gptMovies: gptMovies, Aimovies: data }));
  };

  return (
    <div className="pt-[35%] md:pt-[7%] flex justify-center">
      <form
        className=" w-full md:w-1/2 rounded-lg  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-2 ml-4 border-s-black col-span-9 rounded-lg text-center"
          placeholder="Search here .."
          ref={searchText}
        ></input>
        <button
          className="p-2 mx-4 bg-red-700  text-white rounded-lg col-span-3"
          onClick={handleAISearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

// OpenApi
/**
 
    console.log(searchText.current.value);
    Make an api call to openAi
    const gptData = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
      service_tier: "default",
      max_tokens: 1000,
    });

    console.log(gptData.choices);
    
 */
