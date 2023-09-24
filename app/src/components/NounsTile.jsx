import React, { useState } from 'react';
import Image from 'next/image';

function NounsTile() {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    // Handle button click event
    console.log('Button Clicked!', text);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 content-center">
      <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inner">
        <Image
          src="/nouns_ipfs/output_nouns_88.png"
          alt="Nouns Tile"
          width={200}
          height={200}
        />
      </div>
      <h1 className=" font-bold content-center">Nouns</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-44 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-purple-500 transition-all"
        placeholder="Enter text here..."
      />
      <button
        onClick={handleButtonClick}
        className="w-44 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Submit
      </button>
    </div>
  );
}

export default NounsTile;
