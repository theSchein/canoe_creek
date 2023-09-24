import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';
import TextModal from './TextModal'; 

function NounsTile() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="flex flex-col items-center space-y-4 p-6 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 content-center">
      <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inner">
        <Image
          src="/hokusai_ipfs/cranes.png"
          alt="Katsushika Hokusai Tile"
          width={200}
          height={200}
        />
      </div>
      <Link href='https://goerli.basescan.org/tx/0x5be3ab42d976f2401c02fdcb070a5c379cf507a5b01f2bed5dde46ac959be1e7#eventlog' ><h1 className=" font-bold content-center text-lg">Katsushika Hokusai</h1></Link>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-44 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-purple-500 transition-all text-primary"
        placeholder="Enter Image Prompt..."
      />
      <button
        onClick={handleOpen}
        className="w-44 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Submit
        
      </button>
      <TextModal open={open} handleClose={handleClose} prompt={text} cid='QmUjF136Rd8Scqoo3oQb9SPVypF13iZnN58rfjqBEEhC1h' address='0x4722021bd9ca089f11E1D5ab7D67fb6414dCa894'/>
    </div>
  );
}

export default NounsTile;
