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
          src="/nouns_ipfs/output_nouns_88.png"
          alt="Nouns Tile"
          width={200}
          height={200}
          href="https://nouns.wtf/"

        />
      </div>
      <Link href='https://goerli.basescan.org/tx/0x5be3ab42d976f2401c02fdcb070a5c379cf507a5b01f2bed5dde46ac959be1e7#eventlog' ><h1 className=" font-bold content-center text-lg">Nouns</h1></Link>
      
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
      <TextModal open={open} handleClose={handleClose} prompt={text} cid='QmedE4GrswDqYfxYE4inc6J94RbeGrRuoBaMjCpwsmZbyc' address={'0x09167A969f807C83b7A5948020e4c8E885B42c0f'}/>
    </div>
  );
}

export default NounsTile;
