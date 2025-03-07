import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="w-full max-w-xl flex bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <input 
          type="text" 
          className="flex-1 p-4 text-white bg-transparent outline-none placeholder-gray-400" 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
