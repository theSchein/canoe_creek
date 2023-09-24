import React from 'react';
import { Paper } from '@mui/material';
import Image from 'next/image'

function ImageTile({img}) {
  return (
    <Paper elevation={3} style={{ width:'auto', height: 'auto' }}>
      <Image
        src= {img}
        width={200}
        height={200}
      />    </Paper>
  );
}
"/nouns_ipfs/output_nouns_88.png"
export default ImageTile;
